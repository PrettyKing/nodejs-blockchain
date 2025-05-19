// worker.js - Cloudflare Worker入口文件
import { Wallet } from './wallet-workers.js';
import { BlockchainObject } from './blockchain-object.js';

// 注册Durable Object类
export { BlockchainObject };

// 创建一个唯一ID，用于访问单例区块链对象
const BLOCKCHAIN_ID = "blockchain-singleton";

export default {
  async fetch(request, env, ctx) {
    // 添加CORS处理
    if (request.method === 'OPTIONS') {
      return handleCors(request);
    }
    
    // 获取区块链对象的实例
    // 我们使用固定ID确保所有请求都访问同一个实例
    const id = env.BLOCKCHAIN.idFromName(BLOCKCHAIN_ID);
    const obj = env.BLOCKCHAIN.get(id);
    
    // 解析URL和路径
    const url = new URL(request.url);
    const path = url.pathname;
    
    // 处理钱包创建API (这个不需要用到Durable Object)
    if (path === '/wallet/new' && request.method === 'GET') {
      try {
        // 创建新钱包
        const wallet = await Wallet.createRandom();
        
        return corsResponse(JSON.stringify({
          privateKey: wallet.privateKey,
          publicKey: wallet.publicKey
        }));
      } catch (error) {
        return corsResponse(
          JSON.stringify({ error: error.message }), 
          { status: 500 }
        );
      }
    }
    
    // 所有其他API请求转发给区块链Durable Object处理
    return obj.fetch(request);
  }
};

// 处理CORS预检请求
function handleCors(request) {
  // 获取请求的Origin
  const origin = request.headers.get('Origin') || '*';
  
  // 检查是否包含请求方法和请求头
  const accessControlRequestMethod = request.headers.get('Access-Control-Request-Method');
  const accessControlRequestHeaders = request.headers.get('Access-Control-Request-Headers');
  
  // 构建响应头
  const headers = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': accessControlRequestHeaders || 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400', // 24小时
  };
  
  return new Response(null, { 
    status: 204, // No Content
    headers 
  });
}

// 创建带CORS头的响应
function corsResponse(body, options = {}) {
  const { status = 200, headers = {} } = options;
  const origin = headers['Origin'] || '*';
  
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      ...headers
    }
  });
}

// 钱包工具函数 - 为未来可能的直接命令行调用
export async function createWallet() {
  const wallet = await Wallet.createRandom();
  return {
    privateKey: wallet.privateKey,
    publicKey: wallet.publicKey
  };
}