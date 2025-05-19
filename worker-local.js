// worker-local.js - 本地开发版本，使用Node.js HTTP服务器
// 这个文件用于在本地开发和测试Cloudflare Worker版本的区块链
// 它提供了与worker.js相同的API，但使用Node.js HTTP服务器运行

import * as CryptoES from 'crypto-es';
import { ec as EC } from 'elliptic';
import http from 'http';
import url from 'url';

// 从worker.js导入区块链逻辑
import { Block, Transaction, Blockchain, Wallet } from './worker.js';

// 创建区块链实例
const blockchain = new Blockchain();

// 设置HTTP服务器端口
const PORT = process.env.PORT || 8787;

// 解析请求体
const parseBody = async (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
};

// 创建HTTP服务器
const server = http.createServer(async (req, res) => {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // 处理OPTIONS请求
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }
  
  // 解析URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;
  
  console.log(`收到${method}请求: ${path}`);
  
  try {
    // 路由处理
    if (path === '/blockchain' && method === 'GET') {
      // 获取区块链
      const data = {
        chain: blockchain.chain,
        pendingTransactions: blockchain.pendingTransactions,
        length: blockchain.chain.length
      };
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
    else if (path === '/transaction' && method === 'POST') {
      // 创建交易
      const data = await parseBody(req);
      const { fromAddress, toAddress, amount, privateKey } = data;
      
      // 使用私钥创建密钥对
      const ec = new EC('secp256k1');
      const keyPair = ec.keyFromPrivate(privateKey);
      
      // 创建并签名交易
      const tx = new Transaction(fromAddress, toAddress, parseFloat(amount));
      tx.signTransaction(keyPair);
      
      // 添加到待处理交易
      await blockchain.addTransaction(tx, null);
      
      // 返回响应
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        message: 'Transaction added successfully',
        transaction: tx
      }));
    }
    else if (path === '/mine' && method === 'POST') {
      // 挖矿
      const data = await parseBody(req);
      const { minerAddress } = data;
      
      if (!minerAddress) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Missing miner address' }));
        return;
      }
      
      // 挖掘待处理交易
      const lastBlock = await blockchain.minePendingTransactions(minerAddress, null);
      
      // 返回响应
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        message: 'Block mined successfully',
        lastBlock
      }));
    }
    else if (path.startsWith('/balance/') && method === 'GET') {
      // 获取钱包余额
      const address = path.split('/balance/')[1];
      const balance = blockchain.getBalanceOfAddress(address);
      
      // 返回响应
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        address,
        balance
      }));
    }
    else if (path === '/wallet/new' && method === 'GET') {
      // 创建钱包
      const newWallet = new Wallet();
      
      // 返回响应
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        privateKey: newWallet.privateKey,
        publicKey: newWallet.publicKey
      }));
    }
    else if (path === '/debug' && method === 'GET') {
      // 调试端点
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        blockchainInitialized: true,
        blockCount: blockchain.chain.length,
        pendingTransactionCount: blockchain.pendingTransactions.length,
        mode: 'local-http-server'
      }));
    }
    else {
      // 未找到路由
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Not found', path }));
    }
  } catch (error) {
    // 错误处理
    console.error('处理请求时出错:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: error.message,
      stack: error.stack
    }));
  }
});

// 启动服务器
server.listen(PORT, () => {
  console.log(`本地HTTP服务器运行在端口 ${PORT}`);
  console.log('现在可以访问以下API:');
  console.log(`- http://localhost:${PORT}/blockchain`);
  console.log(`- http://localhost:${PORT}/wallet/new`);
  console.log(`- http://localhost:${PORT}/balance/:address`);
  console.log(`- POST http://localhost:${PORT}/transaction`);
  console.log(`- POST http://localhost:${PORT}/mine`);
});