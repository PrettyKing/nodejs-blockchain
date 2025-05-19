// worker.js - Cloudflare Worker入口文件
import * as CryptoES from 'crypto-es';
import { ec as EC } from 'elliptic';

// 初始化椭圆曲线
const ec = new EC('secp256k1');

// 内存存储，用于在没有KV的情况下运行
const memoryStorage = {
  blockchain: null,
  pendingTransactions: []
};

// 区块类
class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions || []; // 确保transactions始终是数组
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = ''; // 初始化为空字符串
    // 计算区块哈希
    this.hash = this.calculateHash();
  }

  calculateHash() {
    try {
      // 确保所有参数都有有效值
      const safeTimestamp = this.timestamp || Date.now();
      const safeTransactions = this.transactions || [];
      const safePreviousHash = this.previousHash || '';
      const safeNonce = this.nonce || 0;
      
      // 将交易转换为字符串，处理可能的序列化错误
      let transactionsString;
      try {
        transactionsString = JSON.stringify(safeTransactions);
      } catch (error) {
        console.error('Failed to stringify transactions:', error);
        transactionsString = '[]'; // 默认为空数组字符串
      }
      
      // 创建要哈希的数据字符串
      const data = safePreviousHash + safeTimestamp + transactionsString + safeNonce;
      
      // 使用SHA-256计算哈希
      return CryptoES.SHA256(data).toString(CryptoES.enc.Hex);
    } catch (error) {
      console.error('Error calculating hash:', error);
      return 'error-calculating-hash-' + Date.now(); // 返回一个唯一错误哈希而不是抛出异常
    }
  }

  // 工作量证明 (PoW)
  mineBlock(difficulty) {
    try {
      const target = Array(difficulty + 1).join('0');
      
      while (this.hash.substring(0, difficulty) !== target) {
        this.nonce++;
        this.hash = this.calculateHash();
      }
      
      console.log(`Block mined: ${this.hash}`);
    } catch (error) {
      console.error('Error mining block:', error);
      throw new Error(`Mining failed: ${error.message}`);
    }
  }
}

// 交易类
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
    this.signature = ''; // 初始化为空字符串
  }

  calculateHash() {
    try {
      const data = this.fromAddress + this.toAddress + this.amount + this.timestamp;
      return CryptoES.SHA256(data).toString(CryptoES.enc.Hex);
    } catch (error) {
      console.error('Error calculating transaction hash:', error);
      return 'error-calculating-tx-hash-' + Date.now();
    }
  }

  signTransaction(signingKey) {
    try {
      if (!signingKey) {
        throw new Error('No signing key provided');
      }
      
      if (signingKey.getPublic('hex') !== this.fromAddress) {
        throw new Error('You cannot sign transactions for other wallets!');
      }

      const hashTx = this.calculateHash();
      const sig = signingKey.sign(hashTx);
      this.signature = sig.toDER('hex');
    } catch (error) {
      console.error('Error signing transaction:', error);
      throw new Error(`Signing failed: ${error.message}`);
    }
  }

  isValid() {
    try {
      if (this.fromAddress === null) return true; // 挖矿奖励交易

      if (!this.signature || this.signature.length === 0) {
        throw new Error('No signature in this transaction');
      }

      const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
      return publicKey.verify(this.calculateHash(), this.signature);
    } catch (error) {
      console.error('Error validating transaction:', error);
      return false; // 验证失败
    }
  }
}

// 区块链类
class Blockchain {
  constructor() {
    // 确保创建有效的创世区块
    this.chain = [];
    try {
      const genesisBlock = this.createGenesisBlock();
      this.chain = [genesisBlock];
    } catch (error) {
      console.error('Error creating genesis block:', error);
      // 创建一个简单的替代创世区块
      this.chain = [{
        timestamp: Date.now(),
        transactions: [],
        previousHash: '0',
        hash: 'genesis-' + Date.now(),
        nonce: 0
      }];
    }
    
    this.difficulty = 2; // 挖矿难度
    this.pendingTransactions = [];
    this.miningReward = 100; // 挖矿奖励
  }

  // 创建创世区块
  createGenesisBlock() {
    try {
      return new Block(Date.now(), [], '0');
    } catch (error) {
      console.error('Error in createGenesisBlock:', error);
      throw error;
    }
  }

  // 初始化区块链数据
  async initialize(env) {
    console.log('Initializing blockchain...');
    
    try {
      // 检查是否使用内存存储
      const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || 
                             (env && env.USE_IN_MEMORY_STORE === 'true');
      
      console.log(`Using memory store: ${useMemoryStore}`);
      
      if (useMemoryStore) {
        // 使用内存存储
        if (memoryStorage.blockchain) {
          this.chain = memoryStorage.blockchain;
          this.pendingTransactions = memoryStorage.pendingTransactions || [];
          console.log(`Loaded blockchain from memory with ${this.chain.length} blocks`);
        } else {
          // 首次初始化
          memoryStorage.blockchain = this.chain;
          memoryStorage.pendingTransactions = [];
          console.log('Initialized new blockchain in memory');
        }
        return;
      }
      
      // 使用KV存储
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
        console.log('Initialized new blockchain with genesis block and saved to KV');
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
    try {
      if (!this.chain || this.chain.length === 0) {
        console.warn('Chain is empty, creating genesis block');
        const genesisBlock = this.createGenesisBlock();
        this.chain = [genesisBlock];
      }
      return this.chain[this.chain.length - 1];
    } catch (error) {
      console.error('Error in getLatestBlock:', error);
      // 返回一个简单对象而不是抛出异常
      return {
        timestamp: Date.now(),
        transactions: [],
        previousHash: '0',
        hash: 'error-block-' + Date.now(),
        nonce: 0
      };
    }
  }

  // 保存区块链到存储
  async saveChain(env) {
    try {
      // 检查是否使用内存存储
      const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || 
                             (env && env.USE_IN_MEMORY_STORE === 'true');
      
      if (useMemoryStore) {
        // 保存到内存
        memoryStorage.blockchain = this.chain;
        console.log('Blockchain saved to memory storage');
        return;
      }
      
      // 保存到KV
      if (!env || !env.BLOCKCHAIN_STORAGE) {
        console.warn('KV storage not available. Cannot save blockchain.');
        return;
      }
      
      await env.BLOCKCHAIN_STORAGE.put('blockchain', JSON.stringify(this.chain));
      console.log('Blockchain saved to KV storage');
    } catch (error) {
      console.error('Error saving blockchain to storage:', error.message);
    }
  }

  // 保存待处理交易到存储
  async savePendingTransactions(env) {
    try {
      // 检查是否使用内存存储
      const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || 
                             (env && env.USE_IN_MEMORY_STORE === 'true');
      
      if (useMemoryStore) {
        // 保存到内存
        memoryStorage.pendingTransactions = this.pendingTransactions;
        console.log('Pending transactions saved to memory storage');
        return;
      }
      
      // 保存到KV
      if (!env || !env.BLOCKCHAIN_STORAGE) {
        console.warn('KV storage not available. Cannot save pending transactions.');
        return;
      }
      
      await env.BLOCKCHAIN_STORAGE.put('pendingTransactions', JSON.stringify(this.pendingTransactions));
      console.log('Pending transactions saved to KV storage');
    } catch (error) {
      console.error('Error saving pending transactions to storage:', error.message);
    }
  }

  async minePendingTransactions(minerAddress, env) {
    try {
      // 创建奖励交易
      const rewardTx = new Transaction(null, minerAddress, this.miningReward);
      this.pendingTransactions.push(rewardTx);
      
      // 获取最新区块的哈希
      const previousHash = this.getLatestBlock().hash;
      
      // 创建新区块并进行挖矿
      const block = new Block(Date.now(), this.pendingTransactions, previousHash);
      block.mineBlock(this.difficulty);
      
      console.log('Block successfully mined!');
      this.chain.push(block);
      
      // 重置待处理交易
      this.pendingTransactions = [];
      
      // 保存更新的区块链和待处理交易
      await this.saveChain(env);
      await this.savePendingTransactions(env);
      
      return block;
    } catch (error) {
      console.error('Error mining transactions:', error);
      throw new Error(`Mining failed: ${error.message}`);
    }
  }

  async addTransaction(transaction, env) {
    try {
      // 验证交易
      if (!transaction.fromAddress || !transaction.toAddress) {
        throw new Error('Transaction must include from and to address');
      }

      // 特殊处理：如果是重新构建接收到的交易对象，可能没有isValid方法
      if (typeof transaction.isValid === 'function') {
        const isValid = transaction.isValid();
        if (!isValid) {
          throw new Error('Transaction validation failed');
        }
      }
      
      this.pendingTransactions.push(transaction);
      
      // 保存更新的待处理交易
      await this.savePendingTransactions(env);
      
      return transaction;
    } catch (error) {
      console.error('Error adding transaction:', error);
      throw new Error(`Failed to add transaction: ${error.message}`);
    }
  }

  getBalanceOfAddress(address) {
    try {
      let balance = 0;

      for (const block of this.chain) {
        if (!block.transactions) continue; // 跳过没有交易的区块
        
        for (const trans of block.transactions) {
          if (trans.fromAddress === address) {
            balance -= parseFloat(trans.amount);
          }

          if (trans.toAddress === address) {
            balance += parseFloat(trans.amount);
          }
        }
      }

      return balance;
    } catch (error) {
      console.error('Error calculating balance:', error);
      return 0; // 默认余额为0
    }
  }

  isChainValid() {
    try {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];

        // 验证区块哈希
        if (currentBlock.hash !== new Block(
          currentBlock.timestamp,
          currentBlock.transactions,
          currentBlock.previousHash
        ).calculateHash()) {
          return false;
        }

        // 验证区块链接
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error('Error validating chain:', error);
      return false; // 验证失败
    }
  }
}

// 钱包类
class Wallet {
  constructor(privateKey = null) {
    try {
      this.keyPair = privateKey ? ec.keyFromPrivate(privateKey) : ec.genKeyPair();
      this.privateKey = this.keyPair.getPrivate('hex');
      this.publicKey = this.keyPair.getPublic('hex');
    } catch (error) {
      console.error('Error creating wallet:', error);
      // 创建一个空钱包对象，避免抛出异常
      this.privateKey = 'error-private-key';
      this.publicKey = 'error-public-key';
    }
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
  try {
    if (!blockchainInstance) {
      console.log('Creating new blockchain instance');
      blockchainInstance = new Blockchain();
      await blockchainInstance.initialize(env);
    }
    return blockchainInstance;
  } catch (error) {
    console.error('Error getting blockchain instance:', error);
    // 如果初始化失败，返回一个新的实例而不是抛出异常
    return new Blockchain();
  }
}

// 创建响应函数
function createResponse(data, status = 200) {
  try {
    return new Response(JSON.stringify(data, null, 2), {
      status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  } catch (error) {
    console.error('Error creating response:', error);
    // 创建一个错误响应
    return new Response(JSON.stringify({
      error: 'Failed to create response',
      message: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// 处理请求的主函数
async function handleRequest(request, env) {
  console.log('Handling request...');
  
  try {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    console.log(`Handling ${method} request to ${path}`);

    // 检查环境变量
    const useMemoryStore = !env || !env.BLOCKCHAIN_STORAGE || 
                           (env && env.USE_IN_MEMORY_STORE === 'true');
    console.log(`Storage mode: ${useMemoryStore ? 'In-Memory' : 'KV'}`);

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
      try {
        return createResponse({
          timestamp: new Date().toISOString(),
          storage: useMemoryStore ? "In-Memory" : "KV",
          envAvailable: !!env,
          kvAvailable: !!(env && env.BLOCKCHAIN_STORAGE),
          env_vars: env ? {
            USE_IN_MEMORY_STORE: env.USE_IN_MEMORY_STORE
          } : "No env available",
          blockchainInitialized: !!blockchainInstance,
          blockCount: blockchain.chain.length,
          genesisBlock: blockchain.chain[0],
          pendingTransactionCount: blockchain.pendingTransactions.length,
          availablePaths: [
            '/blockchain', 
            '/transaction', 
            '/mine', 
            '/balance/:address', 
            '/wallet/new',
            '/debug'
          ]
        });
      } catch (error) {
        return createResponse({
          error: 'Error generating debug info',
          message: error.message,
          stack: error.stack
        }, 500);
      }
    }
    else {
      return createResponse({ 
        error: 'Not found', 
        path: path,
        availablePaths: [
          '/blockchain', 
          '/transaction', 
          '/mine', 
          '/balance/:address', 
          '/wallet/new',
          '/debug'
        ]
      }, 404);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return createResponse({ 
      error: 'Internal server error',
      message: error.message,
      stack: error.stack
    }, 500);
  }
}

// Worker入口点 - 使用ES模块格式
export default {
  async fetch(request, env, ctx) {
    try {
      return await handleRequest(request, env);
    } catch (error) {
      console.error('Unhandled error in fetch:', error);
      return new Response(JSON.stringify({
        error: 'Unhandled server error',
        message: error.message,
        stack: error.stack
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  }
};