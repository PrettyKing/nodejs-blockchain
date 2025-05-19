// worker.js - Cloudflare Worker版区块链服务 (带KV存储)
const { Blockchain, Transaction, Block } = require('./blockchain');
const { loadBlockchain, saveBlockchain, loadWallet, saveWallet } = require('./storage');

// 内存缓存
let blockchainCache = null;
let walletCache = null;

// 初始化区块链和钱包
async function initBlockchain(env) {
  // 如果已有缓存，直接返回
  if (blockchainCache && walletCache) {
    return { blockchain: blockchainCache, wallet: walletCache };
  }

  try {
    // 尝试从KV加载区块链数据
    const loadedBlockchainData = await loadBlockchain(env);
    
    if (loadedBlockchainData) {
      // 如果有存储的数据，恢复区块链状态
      const blockchain = new Blockchain();
      blockchain.chain = loadedBlockchainData.chain;
      blockchain.pendingTransactions = loadedBlockchainData.pendingTransactions;
      blockchain.difficulty = loadedBlockchainData.difficulty;
      blockchain.miningReward = loadedBlockchainData.miningReward;
      
      blockchainCache = blockchain;
      console.log('区块链数据已从KV存储加载');
    } else {
      // 否则创建新的区块链
      blockchainCache = new Blockchain();
      console.log('新的区块链已创建');
      
      // 将初始状态保存到KV
      await saveBlockchain({
        chain: blockchainCache.chain,
        pendingTransactions: blockchainCache.pendingTransactions,
        difficulty: blockchainCache.difficulty,
        miningReward: blockchainCache.miningReward
      }, env);
    }
    
    // 尝试从KV加载钱包数据
    const loadedWallet = await loadWallet(env);
    
    if (loadedWallet) {
      walletCache = loadedWallet;
      console.log('钱包数据已从KV存储加载');
    } else {
      // 为演示目的创建一个静态钱包
      walletCache = {
        publicKey: "04c7facf88f8746f46c7b1f6bf596d2b1345a2295cabe69a489d064c93a0a622a031d21aec2f141c3e751ca224465b47705ef0e350e50da580b431dbf93b8b002e",
        privateKey: "34bc0fb863f166ac3d1b3e9e5215a3607b6c3efb5a0afc65ba16fa5e3aa95293"
      };
      console.log('新的钱包已创建');
      
      // 将钱包保存到KV
      await saveWallet(walletCache, env);
    }
    
    console.log(`默认钱包地址: ${walletCache.publicKey}`);
    return { blockchain: blockchainCache, wallet: walletCache };
  } catch (error) {
    console.error('初始化区块链失败:', error);
    // 出错时使用内存中的实现
    blockchainCache = new Blockchain();
    walletCache = {
      publicKey: "04c7facf88f8746f46c7b1f6bf596d2b1345a2295cabe69a489d064c93a0a622a031d21aec2f141c3e751ca224465b47705ef0e350e50da580b431dbf93b8b002e",
      privateKey: "34bc0fb863f166ac3d1b3e9e5215a3607b6c3efb5a0afc65ba16fa5e3aa95293"
    };
    return { blockchain: blockchainCache, wallet: walletCache };
  }
}

// 处理CORS预检请求
function handleOptions(request) {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    status: 204,
  });
}

// 添加CORS头
function addCorsHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

// 处理API请求
async function handleRequest(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  const method = request.method;

  // 处理CORS预检请求
  if (method === 'OPTIONS') {
    return handleOptions(request);
  }

  // 确保区块链已初始化
  const { blockchain, wallet } = await initBlockchain(env);
  
  // 路由处理
  try {
    // 获取区块链状态
    if (path === '/blockchain' && method === 'GET') {
      return new Response(JSON.stringify({
        chain: blockchain.chain,
        pendingTransactions: blockchain.pendingTransactions,
        length: blockchain.chain.length
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 创建交易
    if (path === '/transaction' && method === 'POST') {
      const body = await request.json();
      const { fromAddress, toAddress, amount, privateKey } = body;
      
      try {
        // 使用私钥创建密钥对
        const EC = require('elliptic').ec;
        const ec = new EC('secp256k1');
        const keyPair = ec.keyFromPrivate(privateKey);
        
        // 创建并签名交易
        const tx = new Transaction(fromAddress, toAddress, amount);
        tx.signTransaction(keyPair);
        
        // 添加到待处理交易
        blockchain.addTransaction(tx);
        
        // 保存更新后的区块链状态到KV
        await saveBlockchain({
          chain: blockchain.chain,
          pendingTransactions: blockchain.pendingTransactions,
          difficulty: blockchain.difficulty,
          miningReward: blockchain.miningReward
        }, env);
        
        return new Response(JSON.stringify({ 
          message: 'Transaction added successfully',
          transaction: tx
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    // 挖矿
    if (path === '/mine' && method === 'POST') {
      const body = await request.json();
      const { minerAddress } = body;
      
      if (!minerAddress) {
        return new Response(JSON.stringify({ error: 'Missing miner address' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // 挖掘待处理交易
      blockchain.minePendingTransactions(minerAddress);
      
      // 保存更新后的区块链状态到KV
      await saveBlockchain({
        chain: blockchain.chain,
        pendingTransactions: blockchain.pendingTransactions,
        difficulty: blockchain.difficulty,
        miningReward: blockchain.miningReward
      }, env);
      
      return new Response(JSON.stringify({
        message: 'Block mined successfully',
        lastBlock: blockchain.getLatestBlock()
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 获取钱包余额
    if (path.startsWith('/balance/') && method === 'GET') {
      const address = path.split('/balance/')[1];
      const balance = blockchain.getBalanceOfAddress(address);
      
      return new Response(JSON.stringify({ 
        address: address,
        balance: balance
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 创建钱包 (注意：这个Worker版本使用静态钱包)
    if (path === '/wallet/new' && method === 'GET') {
      return new Response(JSON.stringify({
        privateKey: wallet.privateKey,
        publicKey: wallet.publicKey
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 重置区块链（仅用于测试）
    if (path === '/reset' && method === 'POST') {
      // 创建新的区块链
      blockchainCache = new Blockchain();
      
      // 保存更新后的区块链状态到KV
      await saveBlockchain({
        chain: blockchainCache.chain,
        pendingTransactions: blockchainCache.pendingTransactions,
        difficulty: blockchainCache.difficulty,
        miningReward: blockchainCache.miningReward
      }, env);
      
      return new Response(JSON.stringify({
        message: 'Blockchain has been reset',
        blockchain: blockchainCache
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 路径不匹配任何API端点
    return new Response(JSON.stringify({ error: 'Endpoint not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Worker入口点
addEventListener('fetch', event => {
  const response = handleRequest(event.request, event.env)
    .then(resp => addCorsHeaders(resp))
    .catch(err => {
      console.error('Worker error:', err);
      return new Response(JSON.stringify({ error: 'Worker execution error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    });
  
  event.respondWith(response);
});

// 导出以供测试
module.exports = { handleRequest, initBlockchain };