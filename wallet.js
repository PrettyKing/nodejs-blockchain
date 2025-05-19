// wallet.js - 区块链钱包实现
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

class Wallet {
  constructor(privateKey = null) {
    this.keyPair = privateKey ? ec.keyFromPrivate(privateKey) : ec.genKeyPair();
    this.privateKey = this.keyPair.getPrivate('hex');
    this.publicKey = this.keyPair.getPublic('hex');
  }

  // 获取钱包地址（公钥的哈希）
  getAddress() {
    return this.publicKey;
  }

  // 创建交易签名
  sign(dataHash) {
    // 签名数据
    const signature = this.keyPair.sign(dataHash);
    return signature.toDER('hex');
  }

  // 验证签名
  static verifySignature(publicKey, dataHash, signature) {
    return ec.keyFromPublic(publicKey, 'hex').verify(dataHash, signature);
  }

  // 保存钱包到文件
  saveToFile(filename) {
    const walletData = {
      privateKey: this.privateKey,
      publicKey: this.publicKey
    };

    const walletDir = path.join(process.cwd(), 'wallets');
    
    // 确保钱包目录存在
    if (!fs.existsSync(walletDir)) {
      fs.mkdirSync(walletDir, { recursive: true });
    }
    
    const filePath = path.join(walletDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(walletData, null, 2));
    
    return filePath;
  }

  // 从文件加载钱包
  static loadFromFile(filename) {
    const filePath = path.join(process.cwd(), 'wallets', filename);
    
    if (!fs.existsSync(filePath)) {
      throw new Error(`Wallet file not found: ${filename}`);
    }
    
    const walletData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return new Wallet(walletData.privateKey);
  }
  
  // 创建新钱包
  static createRandom() {
    return new Wallet();
  }
}

// 简单的命令行钱包工具
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'new') {
    const walletName = args[1] || `wallet-${Date.now()}.json`;
    const wallet = Wallet.createRandom();
    const filePath = wallet.saveToFile(walletName);
    console.log(`新钱包已创建并保存到: ${filePath}`);
    console.log(`公钥: ${wallet.publicKey}`);
    console.log(`私钥: ${wallet.privateKey}`);
  }
  else if (command === 'list') {
    const walletDir = path.join(process.cwd(), 'wallets');
    if (fs.existsSync(walletDir)) {
      const wallets = fs.readdirSync(walletDir);
      console.log('可用钱包:');
      wallets.forEach(wallet => {
        console.log(`- ${wallet}`);
      });
    } else {
      console.log('尚未创建钱包');
    }
  }
  else if (command === 'info' && args[1]) {
    try {
      const wallet = Wallet.loadFromFile(args[1]);
      console.log(`钱包信息: ${args[1]}`);
      console.log(`公钥: ${wallet.publicKey}`);
      console.log(`私钥: ${wallet.privateKey}`);
    } catch (error) {
      console.error(`错误: ${error.message}`);
    }
  }
  else {
    console.log('用法:');
    console.log('  node wallet.js new [钱包名称]   - 创建新钱包');
    console.log('  node wallet.js list             - 列出所有钱包');
    console.log('  node wallet.js info <钱包名称>  - 显示钱包信息');
  }
}

module.exports = Wallet;