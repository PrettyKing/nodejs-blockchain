// wallet-workers.js - 区块链钱包实现 (Cloudflare Workers兼容版本)

// 在Cloudflare Workers中生成随机密钥
async function generateKeyPair() {
  // 使用Web Crypto API生成随机字节
  const privateBytes = new Uint8Array(32); // 256位私钥
  crypto.getRandomValues(privateBytes);
  
  // 将随机字节转换为十六进制字符串作为私钥
  const privateKey = Array.from(privateBytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  
  // 使用私钥的哈希作为公钥（简化版本）
  // 在实际应用中，应该使用椭圆曲线加密来正确派生公钥
  const publicKeyBytes = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(privateKey)
  );
  
  const publicKey = Array.from(new Uint8Array(publicKeyBytes))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  
  return { privateKey, publicKey };
}

class Wallet {
  constructor(keyPair = null) {
    if (keyPair) {
      this.privateKey = keyPair.privateKey;
      this.publicKey = keyPair.publicKey;
    } else {
      this.privateKey = null;
      this.publicKey = null;
      // 实际初始化会在async初始化方法中完成
    }
  }
  
  // 异步初始化钱包
  static async create(privateKey = null) {
    const wallet = new Wallet();
    
    if (privateKey) {
      // 从给定的私钥派生公钥（简化版本）
      const publicKeyBytes = await crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(privateKey)
      );
      
      wallet.privateKey = privateKey;
      wallet.publicKey = Array.from(new Uint8Array(publicKeyBytes))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    } else {
      // 生成新的密钥对
      const keyPair = await generateKeyPair();
      wallet.privateKey = keyPair.privateKey;
      wallet.publicKey = keyPair.publicKey;
    }
    
    return wallet;
  }

  // 获取钱包地址（即公钥）
  getAddress() {
    return this.publicKey;
  }

  // 简化的签名函数
  async sign(data) {
    // 在实际应用中，这里应该使用私钥进行真正的数字签名
    // 简化版本中，我们只是返回一个派生的字符串
    const dataHash = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(data + this.privateKey)
    );
    
    return Array.from(new Uint8Array(dataHash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
  
  // 序列化钱包数据
  serialize() {
    return JSON.stringify({
      privateKey: this.privateKey,
      publicKey: this.publicKey
    });
  }
  
  // 从序列化数据还原钱包
  static async deserialize(data) {
    try {
      const parsed = JSON.parse(data);
      return await Wallet.create(parsed.privateKey);
    } catch (e) {
      console.error("钱包反序列化失败:", e);
      return await Wallet.create();
    }
  }
  
  // 创建随机钱包的静态方法
  static async createRandom() {
    return await Wallet.create();
  }
}

export { Wallet, generateKeyPair };