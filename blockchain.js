// blockchain.js - 区块链核心实现
const crypto = require('crypto');

class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return crypto.createHash('sha256')
      .update(this.previousHash + 
              this.timestamp + 
              JSON.stringify(this.transactions) + 
              this.nonce)
      .digest('hex');
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

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
  }

  calculateHash() {
    return crypto.createHash('sha256')
      .update(this.fromAddress + this.toAddress + this.amount + this.timestamp)
      .digest('hex');
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

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2; // 挖矿难度
    this.pendingTransactions = [];
    this.miningReward = 100; // 挖矿奖励
  }

  createGenesisBlock() {
    return new Block(Date.now(), [], '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress) {
    // 创建奖励交易
    const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
    this.pendingTransactions.push(rewardTx);
    
    // 创建新区块并进行挖矿
    const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty);
    
    console.log('Block successfully mined!');
    this.chain.push(block);
    
    // 重置待处理交易
    this.pendingTransactions = [];
  }

  addTransaction(transaction) {
    // 验证交易
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error('Transaction must include from and to address');
    }

    if (!transaction.isValid()) {
      throw new Error('Cannot add invalid transaction to chain');
    }
    
    this.pendingTransactions.push(transaction);
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
        if (!tx.isValid()) {
          return false;
        }
      }
    }

    return true;
  }
}

module.exports = { Blockchain, Transaction, Block };