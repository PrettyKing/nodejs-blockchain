// storage.js - 为Cloudflare Worker提供持久化存储
// 此模块使用Cloudflare KV存储区块链状态

const BLOCKCHAIN_KEY = 'BLOCKCHAIN_DATA';
const WALLET_KEY = 'DEFAULT_WALLET';

// 保存区块链数据到KV存储
async function saveBlockchain(blockchainData, env) {
  try {
    if (!env.BLOCKCHAIN_STORAGE) {
      console.warn('KV存储未配置，无法保存区块链数据');
      return false;
    }
    
    const serializedData = JSON.stringify(blockchainData);
    await env.BLOCKCHAIN_STORAGE.put(BLOCKCHAIN_KEY, serializedData);
    return true;
  } catch (error) {
    console.error('保存区块链数据失败:', error);
    return false;
  }
}

// 从KV存储加载区块链数据
async function loadBlockchain(env) {
  try {
    if (!env.BLOCKCHAIN_STORAGE) {
      console.warn('KV存储未配置，无法加载区块链数据');
      return null;
    }
    
    const serializedData = await env.BLOCKCHAIN_STORAGE.get(BLOCKCHAIN_KEY);
    if (!serializedData) {
      return null; // 没有存储的数据
    }
    
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('加载区块链数据失败:', error);
    return null;
  }
}

// 保存钱包数据到KV存储
async function saveWallet(wallet, env) {
  try {
    if (!env.BLOCKCHAIN_STORAGE) {
      console.warn('KV存储未配置，无法保存钱包数据');
      return false;
    }
    
    const serializedData = JSON.stringify(wallet);
    await env.BLOCKCHAIN_STORAGE.put(WALLET_KEY, serializedData);
    return true;
  } catch (error) {
    console.error('保存钱包数据失败:', error);
    return false;
  }
}

// 从KV存储加载钱包数据
async function loadWallet(env) {
  try {
    if (!env.BLOCKCHAIN_STORAGE) {
      console.warn('KV存储未配置，无法加载钱包数据');
      return null;
    }
    
    const serializedData = await env.BLOCKCHAIN_STORAGE.get(WALLET_KEY);
    if (!serializedData) {
      return null; // 没有存储的数据
    }
    
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('加载钱包数据失败:', error);
    return null;
  }
}

module.exports = {
  saveBlockchain,
  loadBlockchain,
  saveWallet,
  loadWallet
};