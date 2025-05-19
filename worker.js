// worker.js - Cloudflare Worker入口文件
const crypto = require('crypto-browserify');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// 区块类
class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    const data = this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce;
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  // 工作量证明 (PoW)
  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join('0');
    
    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    
    console.log(`Block mined: ${this.hash}`);
  }
}

// 交易类
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
  }

  calculateHash() {
    const data = this.fromAddress + this.toAddress + this.amount + this.timestamp;
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  signTransaction(signingKey) {
    if (signingKey.getPublic('hex') !== this.fromAddress) {
      throw new Error('You cannot sign transactions for other wallets!');
    }

    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, 'base64');
    this.signature = sig.toDER('hex');
  }

  isValid() {
    if (this.fromAddress === null) return true; // 挖矿奖励交易

    if (!this.signature || this.signature.length === 0) {
      throw new Error('No signature in this transaction');
    }

    const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

// 区块链类
class Blockchain {
  constructor() {
    this.chain = [];
    this.difficulty = 2; // 挖矿难度
    this.pendingTransactions = [];
    this.miningReward = 100; // 挖矿奖励
  }

  // 初始化创世区块
  async initialize(env) {
    // 检查KV存储中是否已有区块链数据
    const storedChain = await env.BLOCKCHAIN_STORAGE.get('blockchain', { type: 'json' });
    const storedPendingTx = await env.BLOCKCHAIN_STORAGE.get('pendingTransactions', { type: 'json' });
    
    if (storedChain && storedChain.length > 0) {
      this.chain = storedChain;
      console.log('Loaded existing blockchain with', this.chain.length, 'blocks');
    } else {
      // 创建创世区块
      const genesisBlock = new Block(Date.now(), [], '0');
      this.chain = [genesisBlock];
      await this.saveChain(env);
      console.log('Initialized new blockchain with genesis block');
    }
    
    if (storedPendingTx) {
      this.pendingTransactions = storedPendingTx;
      console.log('Loaded', this.pendingTransactions.length, 'pending transactions');
    }
  }

  // 保存区块链到KV存储
  async saveChain(env) {
    await env.BLOCKCHAIN_STORAGE.put('blockchain', JSON.stringify(this.chain));
    console.log('Blockchain saved to KV storage');
  }

  // 保存待处理交易到KV存储
  async savePendingTransactions(env) {
    await env.BLOCKCHAIN_STORAGE.put('pendingTransactions', JSON.stringify(this.pendingTransactions));
    console.log('Pending transactions saved to KV storage');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  async minePendingTransactions(minerAddress, env) {
    // 创建奖励交易
    const rewardTx = new Transaction(null, minerAddress, this.miningReward);
    this.pendingTransactions.push(rewardTx);
    
    // 创建新区块并进行挖矿
    const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty);
    
    console.log('Block successfully mined!');
    this.chain.push(block);
    
    // 重置待处理交易
    this.pendingTransactions = [];
    
    // 保存更新的区块链和待处理交易
    await this.saveChain(env);
    await this.savePendingTransactions(env);
    
    return block;
  }

  async addTransaction(transaction, env) {
    // 验证交易
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error('Transaction must include from and to address');
    }

    // 特殊处理：如果是重新构建接收到的交易对象，可能没有isValid方法
    if (typeof transaction.isValid === 'function' && !transaction.isValid()) {
      throw new Error('Cannot add invalid transaction to chain');
    }
    
    this.pendingTransactions.push(transaction);
    
    // 保存更新的待处理交易
    await this.savePendingTransactions(env);
    
    return transaction;
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

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // 验证区块哈希
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      // 验证区块链接
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }

      // 验证区块内交易
      for (const tx of currentBlock.transactions) {
        if (tx.fromAddress !== null && typeof tx.isValid === 'function' && !tx.isValid()) {
          return false;
        }
      }
    }

    return true;
  }
}

// 钱包类
class Wallet {
  constructor(privateKey = null) {
    this.keyPair = privateKey ? ec.keyFromPrivate(privateKey) : ec.genKeyPair();
    this.privateKey = this.keyPair.getPrivate('hex');
    this.publicKey = this.keyPair.getPublic('hex');
  }

  // 获取钱包地址
  getAddress() {
    return this.publicKey;
  }
}

// 为每个请求创建并初始化一个区块链实例
async function getBlockchain(env) {
  const blockchain = new Blockchain();
  await blockchain.initialize(env);
  return blockchain;
}

// 创建响应函数
function createResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

// 处理请求的主函数
async function handleRequest(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  const method = request.method;

  // 处理预检请求
  if (method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      }
    });
  }

  // 获取区块链实例
  const blockchain = await getBlockchain(env);

  try {
    // 路由处理
    if (path === '/blockchain' && method === 'GET') {
      // 获取区块链
      return createResponse({
        chain: blockchain.chain,
        pendingTransactions: blockchain.pendingTransactions,
        length: blockchain.chain.length
      });
    }
    else if (path === '/transaction' && method === 'POST') {
      // 创建交易
      const data = await request.json();
      const { fromAddress, toAddress, amount, privateKey } = data;
      
      // 使用私钥创建密钥对
      const keyPair = ec.keyFromPrivate(privateKey);
      
      // 创建并签名交易
      const tx = new Transaction(fromAddress, toAddress, parseFloat(amount));
      tx.signTransaction(keyPair);
      
      // 添加到待处理交易
      await blockchain.addTransaction(tx, env);
      
      return createResponse({ 
        message: 'Transaction added successfully',
        transaction: tx
      });
    }
    else if (path === '/mine' && method === 'POST') {
      // 挖矿
      const data = await request.json();
      const { minerAddress } = data;
      
      if (!minerAddress) {
        return createResponse({ error: 'Missing miner address' }, 400);
      }
      
      // 挖掘待处理交易
      const lastBlock = await blockchain.minePendingTransactions(minerAddress, env);
      
      return createResponse({
        message: 'Block mined successfully',
        lastBlock
      });
    }
    else if (path.startsWith('/balance/') && method === 'GET') {
      // 获取钱包余额
      const address = path.split('/balance/')[1];
      const balance = blockchain.getBalanceOfAddress(address);
      
      return createResponse({ 
        address,
        balance
      });
    }
    else if (path === '/wallet/new' && method === 'GET') {
      // 创建钱包
      const newWallet = new Wallet();
      
      return createResponse({
        privateKey: newWallet.privateKey,
        publicKey: newWallet.publicKey
      });
    }
    else {
      return createResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return createResponse({ error: error.message }, 500);
  }
}

// Worker入口点
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event.env));
});
