// cloudflare-worker.js
// 区块链在Cloudflare Workers上的实现

// 使用Web Crypto API代替Node.js的crypto模块
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// 区块类
class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = '';
  }

  async calculateHash() {
    return await sha256(
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.transactions) +
      this.nonce
    );
  }

  // 工作量证明 (PoW)
  async mineBlock(difficulty) {
    const target = Array(difficulty + 1).join('0');
    
    while (true) {
      this.hash = await this.calculateHash();
      if (this.hash.substring(0, difficulty) === target) {
        break;
      }
      this.nonce++;
    }
    
    return this.hash;
  }
}

// 简化的交易类（没有签名验证，因为Cloudflare Workers环境限制）
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
  }
}

// 区块链类
class Blockchain {
  constructor() {
    this.chain = [];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 100;
    
    // 初始化创世区块
    this.createGenesisBlock();
  }

  async createGenesisBlock() {
    const genesisBlock = new Block(Date.now(), [], '0');
    genesisBlock.hash = await genesisBlock.calculateHash();
    this.chain.push(genesisBlock);
    return genesisBlock;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  async minePendingTransactions(miningRewardAddress) {
    // 创建奖励交易
    const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
    this.pendingTransactions.push(rewardTx);
    
    // 创建新区块并进行挖矿
    const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    await block.mineBlock(this.difficulty);
    
    // 添加区块到链上
    this.chain.push(block);
    
    // 重置待处理交易
    this.pendingTransactions = [];
    
    return block;
  }

  addTransaction(transaction) {
    // 基本验证
    if (!transaction.fromAddress && transaction.fromAddress !== null) {
      throw new Error('Transaction must include fromAddress');
    }
    
    if (!transaction.toAddress) {
      throw new Error('Transaction must include toAddress');
    }
    
    this.pendingTransactions.push(transaction);
    return true;
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    return balance;
  }

  async isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // 验证当前区块哈希
      const validHash = await currentBlock.calculateHash();
      if (currentBlock.hash !== validHash) {
        return false;
      }

      // 验证区块链接
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

// 创建KV存储键
const BLOCKCHAIN_KEY = 'blockchain_data';

// 从KV存储加载区块链数据
async function loadBlockchain(env) {
  try {
    const data = await env.BLOCKCHAIN_KV.get(BLOCKCHAIN_KEY, { type: 'json' });
    if (!data) {
      return new Blockchain();
    }
    
    const blockchain = new Blockchain();
    blockchain.chain = data.chain;
    blockchain.pendingTransactions = data.pendingTransactions;
    blockchain.difficulty = data.difficulty;
    blockchain.miningReward = data.miningReward;
    
    return blockchain;
  } catch (error) {
    console.error('Failed to load blockchain:', error);
    return new Blockchain();
  }
}

// 保存区块链数据到KV存储
async function saveBlockchain(blockchain, env) {
  try {
    const data = {
      chain: blockchain.chain,
      pendingTransactions: blockchain.pendingTransactions,
      difficulty: blockchain.difficulty,
      miningReward: blockchain.miningReward
    };
    
    await env.BLOCKCHAIN_KV.put(BLOCKCHAIN_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Failed to save blockchain:', error);
    return false;
  }
}

// 处理API请求
async function handleRequest(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // 设置CORS头
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // 处理CORS预检请求
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers
    });
  }
  
  // 加载区块链数据
  const blockchain = await loadBlockchain(env);
  
  // 路由处理
  if (path === '/blockchain' && request.method === 'GET') {
    // 获取区块链
    return new Response(JSON.stringify({
      chain: blockchain.chain,
      pendingTransactions: blockchain.pendingTransactions,
      length: blockchain.chain.length
    }), { headers });
    
  } else if (path === '/transaction' && request.method === 'POST') {
    // 创建交易
    try {
      const data = await request.json();
      const { fromAddress, toAddress, amount } = data;
      
      const tx = new Transaction(fromAddress, toAddress, amount);
      blockchain.addTransaction(tx);
      
      // 保存更新后的区块链
      await saveBlockchain(blockchain, env);
      
      return new Response(JSON.stringify({
        message: 'Transaction added successfully',
        transaction: tx
      }), { headers });
    } catch (error) {
      return new Response(JSON.stringify({
        error: error.message || 'Failed to create transaction'
      }), { 
        status: 400,
        headers 
      });
    }
    
  } else if (path === '/mine' && request.method === 'POST') {
    // 挖矿
    try {
      const data = await request.json();
      const { minerAddress } = data;
      
      if (!minerAddress) {
        return new Response(JSON.stringify({
          error: 'Missing miner address'
        }), { 
          status: 400,
          headers 
        });
      }
      
      const minedBlock = await blockchain.minePendingTransactions(minerAddress);
      
      // 保存更新后的区块链
      await saveBlockchain(blockchain, env);
      
      return new Response(JSON.stringify({
        message: 'Block mined successfully',
        lastBlock: minedBlock
      }), { headers });
    } catch (error) {
      return new Response(JSON.stringify({
        error: error.message || 'Failed to mine block'
      }), { 
        status: 400,
        headers 
      });
    }
    
  } else if (path.startsWith('/balance/') && request.method === 'GET') {
    // 获取余额
    const address = path.split('/balance/')[1];
    
    const balance = blockchain.getBalanceOfAddress(address);
    
    return new Response(JSON.stringify({
      address,
      balance
    }), { headers });
    
  } else if (path === '/wallet/new' && request.method === 'GET') {
    // 创建新钱包 (简化实现，没有真正的密钥生成)
    const publicKey = `wallet_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const privateKey = `private_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    
    return new Response(JSON.stringify({
      publicKey,
      privateKey
    }), { headers });
    
  } else {
    // 404 Not Found
    return new Response(JSON.stringify({
      error: 'Not found'
    }), {
      status: 404,
      headers
    });
  }
}

// Worker入口点
export default {
  async fetch(request, env, ctx) {
    return await handleRequest(request, env);
  }
};
