// p2p-server.js - 区块链P2P网络服务器
const WebSocket = require('ws');
const config = require('./config');
const { Transaction } = require('./blockchain');

class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.sockets = [];
  }

  // 初始化P2P服务器
  listen() {
    const server = new WebSocket.Server({ port: config.P2P_PORT });
    server.on('connection', socket => this.connectSocket(socket));
    
    this.connectToPeers();
    
    console.log(`监听P2P连接，端口: ${config.P2P_PORT}`);
  }

  // 连接到初始节点
  connectToPeers() {
    config.PEERS.forEach(peer => {
      const socket = new WebSocket(peer);
      socket.on('open', () => this.connectSocket(socket));
    });
  }

  // 处理新连接
  connectSocket(socket) {
    this.sockets.push(socket);
    console.log('Socket connected');
    
    this.messageHandler(socket);
    this.sendChain(socket);
  }

  // 消息处理
  messageHandler(socket) {
    socket.on('message', message => {
      try {
        const data = JSON.parse(message);
        
        switch(data.type) {
          case 'CHAIN':
            console.log('收到新的区块链数据');
            this.blockchain.replaceChain(data.chain);
            break;
          case 'TRANSACTION':
            console.log('收到新的交易');
            // 重建交易对象以确保它有所有正确的方法
            const transaction = this.createTransactionFromData(data.transaction);
            this.blockchain.addTransaction(transaction);
            break;
          default:
            console.log('收到未知类型的消息');
        }
      } catch (error) {
        console.error('处理消息时出错:', error.message);
      }
    });
  }

  // 从接收到的数据创建交易对象
  createTransactionFromData(transactionData) {
    const transaction = new Transaction(
      transactionData.fromAddress,
      transactionData.toAddress,
      transactionData.amount
    );
    
    // 复制其他属性
    transaction.timestamp = transactionData.timestamp;
    transaction.signature = transactionData.signature;
    
    return transaction;
  }

  // 发送区块链数据
  sendChain(socket) {
    socket.send(JSON.stringify({ 
      type: 'CHAIN', 
      chain: this.blockchain.chain 
    }));
  }

  // 广播区块链更新
  syncChains() {
    this.sockets.forEach(socket => {
      this.sendChain(socket);
    });
  }

  // 广播交易
  broadcastTransaction(transaction) {
    this.sockets.forEach(socket => {
      socket.send(JSON.stringify({
        type: 'TRANSACTION',
        transaction
      }));
    });
  }
}

module.exports = P2pServer;