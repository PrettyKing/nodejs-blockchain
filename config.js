// config.js - 区块链配置文件 (Cloudflare Worker版本)

// 使用ES模块导出
export default {
  // 挖矿难度 (决定哈希值前导零的数量)
  // 对于Cloudflare Worker，我们设置较低的难度以避免超时
  DIFFICULTY: 2,
  
  // 挖矿奖励 (单位: 代币)
  MINING_REWARD: 50,
  
  // 区块生成时间 (单位: 毫秒)
  BLOCK_GENERATION_INTERVAL: 10000,
  
  // 难度调整间隔 (以区块数量计)
  DIFFICULTY_ADJUSTMENT_INTERVAL: 10,
  
  // API版本
  API_VERSION: 'v1',
  
  // 使用KV存储
  // 可以通过环境变量配置是否使用KV
  USE_KV_STORAGE: false, // 默认不使用KV
  
  // 调试模式
  DEBUG: true
};