// worker.js - Cloudflare Worker入口文件
import * as CryptoES from 'crypto-es';
import { ec as EC } from 'elliptic';

// 初始化椭圆曲线
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
    return CryptoES.SHA256(data).toString(CryptoES.enc.Hex);
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
    return CryptoES.SHA256(data).toString(CryptoES.enc.Hex);
  }

  signTransaction(signingKey) {
    if (signingKey.getPublic('hex') !== this.fromAddress) {
      throw new Error('You cannot sign transactions for other wallets!');
    }

    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx);
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
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2; // 挖矿难度
    this.pendingTransactions = [];
    this.miningReward = 100; // 挖矿奖励
  }

  // 创建创世区块
  createGenesisBlock() {
    return new Block(Date.now(), [], '0');
  }

  // 初始化区块链数据
  async initialize(env) {
    try {
      // 检查是否可以使用KV存储
      if (!env || !env.BLOCKCHAIN_STORAGE) {
        console.warn('KV storage not available. Using in-memory blockchain only.');
        return;
      }

      // 尝试从KV读取区块链数据
      const storedChain = await env.BLOCKCHAIN_STORAGE.get('blockchain', { type: 'json' });
      if (storedChain && Array.isArray(storedChain) && storedChain.length > 0) {
        this.chain = storedChain;
        console.log(`Loaded blockchain with ${this.chain.length} blocks from KV`);
      } else {
        // 如果没有存储的区块链，使用创世区块并保存
        await this.saveChain(env);
        console.log('Initialized new blockchain with genesis block');
      }

      // 尝试从KV读取待处理交易
      const storedTx = await env.BLOCKCHAIN_STORAGE.get('pendingTransactions', { type: 'json' });
      if (storedTx && Array.isArray(storedTx)) {
        this.pendingTransactions = storedTx;
        console.log(`Loaded ${this.pendingTransactions.length} pending transactions from KV`);
      }
    } catch (error) {
      console.error('Error initializing from KV:', error.message);
      // 已经在构造函数中初始化了创世区块，所以这里不需要额外处理
    }
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // 保存区块链到KV存储
  async saveChain(env) {
    if (!env || !env.BLOCKCHAIN_STORAGE) {
      console.warn('KV storage not available. Cannot save blockchain.');
      return;
    }
    
    try {
      await env.BLOCKCHAIN_STORAGE.put('blockchain', JSON.stringify(this.chain));
      console.log('Blockchain saved to KV storage');
    } catch (error) {
      console.error('Error saving blockchain to KV:', error.message);
    }
  }

  // 保存待处理交易到KV存储
  async savePendingTransactions(env) {
    if (!env || !env.BLOCKCHAIN_STORAGE) {
      console.warn('KV storage not available. Cannot save pending transactions.');
      return;
    }
    
    try {
      await env.BLOCKCHAIN_STORAGE.put('pendingTransactions', JSON.stringify(this.pendingTransactions));
      console.log('Pending transactions saved to KV storage');
    } catch (error) {
      console.error('Error saving pending transactions to KV:', error.message);
    }
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

// 全局区块链实例
let blockchainInstance = null;

// 获取或初始化区块链实例
async function getBlockchain(env) {
  if (!blockchainInstance) {
    console.log('Creating new blockchain instance');
    blockchainInstance = new Blockchain();
    await blockchainInstance.initialize(env);
  }
  return blockchainInstance;
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

  console.log(`Handling ${method} request to ${path}`);

  // 检查环境变量
  if (!env) {
    console.warn('Environment object is undefined');
  } else if (!env.BLOCKCHAIN_STORAGE) {
    console.warn('BLOCKCHAIN_STORAGE binding is undefined');
  }

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

  try {
    // 获取区块链实例
    const blockchain = await getBlockchain(env);

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
    else if (path === '/debug' && method === 'GET') {
      // 调试端点，用于诊断KV和其他问题
      return createResponse({
        envAvailable: !!env,
        kvAvailable: !!(env && env.BLOCKCHAIN_STORAGE),
        blockchainInitialized: !!blockchainInstance,
        blockCount: blockchain.chain.length,
        pendingTransactionCount: blockchain.pendingTransactions.length
      });
    }
    else {
      return createResponse({ error: 'Not found', path: path }, 404);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return createResponse({ 
      error: error.message, 
      stack: error.stack,
      route: path,
      method: method
    }, 500);
  }
}

// Worker入口点
export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, env);
  }
};