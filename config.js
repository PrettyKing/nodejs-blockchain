// config.js - 区块链配置文件
module.exports = {
  // 挖矿难度 (决定哈希值前导零的数量)
  DIFFICULTY: 4,
  
  // 挖矿奖励 (单位: 代币)
  MINING_REWARD: 50,
  
  // 区块生成时间 (单位: 毫秒)
  BLOCK_GENERATION_INTERVAL: 10000,
  
  // 难度调整间隔 (以区块数量计)
  DIFFICULTY_ADJUSTMENT_INTERVAL: 10,
  
  // HTTP服务器端口
  HTTP_PORT: process.env.HTTP_PORT || 3001,
  
  // P2P服务器端口
  P2P_PORT: process.env.P2P_PORT || 6001,
  
  // 初始节点列表
  PEERS: process.env.PEERS ? process.env.PEERS.split(',') : []
};