// blockchain.js - 区块链核心实现 (Cloudflare Workers兼容版本)
// 注意：在Workers环境中，我们使用Web Crypto API而不是Node.js的crypto模块

// 工具函数：计算SHA-256哈希值
async function sha256(message) {
  // 将消息编码为UTF-8
  const msgUint8 = new TextEncoder().encode(message);
  // 计算哈希值
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  // 将ArrayBuffer转换为十六进制字符串
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = ''; // 初始化为空，会通过calculateHash设置
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
    
    this.hash = await this.calculateHash();
    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = await this.calculateHash();
      
      // 在Worker环境中避免过长的执行时间
      if (this.nonce % 100 === 0) {
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }
    
    console.log(`Block mined: ${this.hash}`);
    return this.hash;
  }
}

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
    this.signature = null;
  }

  async calculateHash() {
    return await sha256(
      this.fromAddress + 
      this.toAddress + 
      this.amount + 
      this.timestamp
    );
  }

  // 注意：在Cloudflare Workers中，我们使用Web Crypto API进行加密操作
  // 这里我们简化签名逻辑，因为elliptic库不直接支持
  async signTransaction(privateKeyHex) {
    // 在实际部署时，您需要实现完整的签名逻辑
    // 这里我们只是存储一个简化的"签名"
    const txHash = await this.calculateHash();
    this.signature = txHash + '_signed_with_' + privateKeyHex.substring(0, 10);
    return this.signature;
  }

  // 简化的验证逻辑
  async isValid() {
    // 挖矿奖励交易没有签名
    if (this.fromAddress === null) return true;

    if (!this.signature) {
      throw new Error('No signature in this transaction');
    }
    
    // 简化的验证 - 实际应用中需要实现完整的加密验证
    return this.signature.includes('_signed_with_');
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
    this.difficulty = 2; // 挖矿难度
    this.pendingTransactions = [];
    this.miningReward = 100; // 挖矿奖励
    
    // 如果链为空，创建创世区块
    if (this.chain.length === 0) {
      this.createGenesisBlock();
    }
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
    const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock()?.hash || '0');
    await block.mineBlock(this.difficulty);
    
    console.log('Block successfully mined!');
    this.chain.push(block);
    
    // 重置待处理交易
    this.pendingTransactions = [];
    
    return block;
  }

  async addTransaction(transaction) {
    // 验证交易
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error('Transaction must include from and to address');
    }

    // 验证交易签名
    if (transaction.fromAddress !== null) {
      const isValid = await transaction.isValid();
      if (!isValid) {
        throw new Error('Cannot add invalid transaction to chain');
      }
    }
    
    this.pendingTransactions.push(transaction);
    return transaction;
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
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
  }

  // 验证区块链的有效性
  async isChainValid() {
    // 检查链长度
    if (this.chain.length === 0) return false;
    
    // 验证各个区块
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // 验证区块哈希
      const calculatedHash = await currentBlock.calculateHash();
      if (currentBlock.hash !== calculatedHash) {
        return false;
      }

      // 验证区块链接
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }

  // 替换区块链 (用于同步)
  replaceChain(newChain) {
    // 新链必须比当前链长
    if (!Array.isArray(newChain) || newChain.length <= this.chain.length) {
      console.log('接收到的区块链不比当前长，拒绝替换');
      return false;
    }
    
    // 在实际应用中，需要验证新链
    // 这里简化实现，直接替换
    console.log('替换当前区块链为新接收的区块链');
    this.chain = newChain;
    this.pendingTransactions = []; // 重置待处理交易
    return true;
  }
  
  // 序列化区块链 - 用于存储
  serialize() {
    return JSON.stringify({
      chain: this.chain,
      pendingTransactions: this.pendingTransactions,
      difficulty: this.difficulty,
      miningReward: this.miningReward
    });
  }
  
  // 从序列化数据还原区块链
  static deserialize(data) {
    if (!data) return new Blockchain();
    
    try {
      const parsed = JSON.parse(data);
      const blockchain = new Blockchain();
      blockchain.chain = parsed.chain;
      blockchain.pendingTransactions = parsed.pendingTransactions;
      blockchain.difficulty = parsed.difficulty;
      blockchain.miningReward = parsed.miningReward;
      return blockchain;
    } catch (e) {
      console.error("区块链反序列化失败:", e);
      return new Blockchain();
    }
  }
}

export { Blockchain, Transaction, Block };