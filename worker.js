// worker.js - Cloudflare Worker入口文件
import { Wallet } from './wallet-workers.js';
import { BlockchainObject } from './blockchain-object.js';

// 注册Durable Object类
export { BlockchainObject };

// 创建一个唯一ID，用于访问单例区块链对象
const BLOCKCHAIN_ID = "blockchain-singleton";

export default {
  async fetch(request, env, ctx) {
    // 获取区块链对象的实例
    // 我们使用固定ID确保所有请求都访问同一个实例
    const id = env.BLOCKCHAIN.idFromName(BLOCKCHAIN_ID);
    const obj = env.BLOCKCHAIN.get(id);
    
    // 处理钱包创建API (这个不需要用到Durable Object)
    const url = new URL(request.url);
    if (url.pathname === '/wallet/new' && request.method === 'GET') {
      try {
        // 创建新钱包
        const wallet = await Wallet.createRandom();
        
        return new Response(JSON.stringify({
          privateKey: wallet.privateKey,
          publicKey: wallet.publicKey
        }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }
    
    // 处理CORS预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    
    // 所有其他API请求转发给区块链Durable Object处理
    return obj.fetch(request);
  }
};

// 钱包工具函数 - 为未来可能的直接命令行调用
export async function createWallet() {
  const wallet = await Wallet.createRandom();
  return {
    privateKey: wallet.privateKey,
    publicKey: wallet.publicKey
  };
}