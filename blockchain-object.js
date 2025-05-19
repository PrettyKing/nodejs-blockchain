// blockchain-object.js - 区块链Durable Object实现
import { Blockchain, Transaction } from './blockchain-workers.js';

// 区块链Durable Object类 - 用于持久化存储区块链状态
export class BlockchainObject {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.blockchain = null;
    this.initializePromise = this.initialize();
  }

  // 初始化区块链
  async initialize() {
    // 从存储中加载区块链数据
    const storedData = await this.state.storage.get('blockchain');
    if (storedData) {
      this.blockchain = Blockchain.deserialize(storedData);
      console.log('从持久化存储加载区块链, 区块数:', this.blockchain.chain.length);
    } else {
      // 如果没有存储的数据，创建新的区块链
      this.blockchain = new Blockchain();
      console.log('创建新的区块链');
      
      // 确保创世区块已创建
      await this.blockchain.createGenesisBlock();
      
      // 保存到存储
      await this.saveBlockchain();
    }
  }

  // 保存区块链状态到持久化存储
  async saveBlockchain() {
    await this.state.storage.put('blockchain', this.blockchain.serialize());
  }

  // 处理请求
  async fetch(request) {
    // 等待初始化完成
    await this.initializePromise;
    
    // 解析请求
    const url = new URL(request.url);
    const path = url.pathname;
    
    // CORS头
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };
    
    // 处理预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }
    
    try {
      // 路由请求
      if (path === '/blockchain' && request.method === 'GET') {
        // 获取整个区块链
        return new Response(JSON.stringify({
          chain: this.blockchain.chain,
          pendingTransactions: this.blockchain.pendingTransactions,
          length: this.blockchain.chain.length
        }), { headers });
      }
      else if (path === '/transaction' && request.method === 'POST') {
        // 创建新交易
        const data = await request.json();
        const { fromAddress, toAddress, amount, privateKey } = data;
        
        // 创建交易
        const tx = new Transaction(fromAddress, toAddress, amount);
        
        // 签名交易 (简化处理)
        if (privateKey) {
          await tx.signTransaction(privateKey);
        }
        
        // 添加到待处理交易
        await this.blockchain.addTransaction(tx);
        
        // 保存区块链状态
        await this.saveBlockchain();
        
        return new Response(JSON.stringify({ 
          message: 'Transaction added successfully',
          transaction: tx
        }), { headers });
      }
      else if (path === '/mine' && request.method === 'POST') {
        // 挖矿
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
        
        // 挖掘待处理交易
        const newBlock = await this.blockchain.minePendingTransactions(minerAddress);
        
        // 保存区块链状态
        await this.saveBlockchain();
        
        return new Response(JSON.stringify({
          message: 'Block mined successfully',
          lastBlock: newBlock
        }), { headers });
      }
      else if (path.startsWith('/balance/') && request.method === 'GET') {
        // 获取钱包余额
        const address = path.split('/balance/')[1];
        const balance = this.blockchain.getBalanceOfAddress(address);
        
        return new Response(JSON.stringify({ 
          address,
          balance
        }), { headers });
      }
      else {
        return new Response(JSON.stringify({ 
          error: 'Not Found' 
        }), { 
          status: 404, 
          headers 
        });
      }
    } catch (error) {
      console.error('处理请求时出错:', error);
      
      return new Response(JSON.stringify({ 
        error: error.message 
      }), { 
        status: 500, 
        headers 
      });
    }
  }
}