// p2p-server.js - HTTP-only服务器
// 在Cloudflare Workers环境中，我们不使用WebSocket进行P2P通信
// 相反，我们使用HTTP API和KV存储来维护区块链状态

// 这是一个最小化版本，仅用于保持API兼容性

class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    console.warn('P2P服务器功能在Cloudflare Workers环境中不可用');
    console.warn('区块链状态通过KV存储同步，不使用WebSocket');
  }

  // 这些方法都是空操作，只是为了保持接口兼容性
  listen() {
    console.log('P2P服务器(WebSocket)功能已禁用，使用HTTP API代替');
  }

  connectToPeers() {
    // 空操作
  }

  connectSocket() {
    // 空操作
  }

  messageHandler() {
    // 空操作
  }

  createTransactionFromData(transactionData) {
    // 返回原始数据，不进行处理
    return transactionData;
  }

  sendChain() {
    // 空操作
  }

  syncChains() {
    console.log('同步区块链 (空操作)');
    // 在Cloudflare Worker中，区块链通过KV存储自动同步
  }

  broadcastTransaction(transaction) {
    console.log('广播交易 (空操作)');
    // 在Cloudflare Worker中，交易通过KV存储自动同步
  }
}

// 使用ES模块导出
export default P2pServer;