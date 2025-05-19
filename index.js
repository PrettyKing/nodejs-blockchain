// index.js - 区块链应用入口文件
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Blockchain } = require('./blockchain');
const P2pServer = require('./p2p-server');
const Wallet = require('./wallet');
const config = require('./config');

// 创建Express应用
const app = express();
app.use(bodyParser.json());
app.use(cors());

// 初始化区块链
const blockchain = new Blockchain();

// 初始化P2P服务器
const p2pServer = new P2pServer(blockchain);

// 创建默认钱包
const wallet = new Wallet();
console.log(`默认钱包地址: ${wallet.getAddress()}`);

// API路由
// 获取区块链
app.get('/blockchain', (req, res) => {
  res.json({
    chain: blockchain.chain,
    pendingTransactions: blockchain.pendingTransactions,
    length: blockchain.chain.length
  });
});

// 创建交易
app.post('/transaction', (req, res) => {
  const { fromAddress, toAddress, amount, privateKey } = req.body;
  
  try {
    // 使用私钥创建密钥对
    const EC = require('elliptic').ec;
    const ec = new EC('secp256k1');
    const keyPair = ec.keyFromPrivate(privateKey);
    
    // 创建并签名交易
    const { Transaction } = require('./blockchain');
    const tx = new Transaction(fromAddress, toAddress, amount);
    tx.signTransaction(keyPair);
    
    // 添加到待处理交易
    blockchain.addTransaction(tx);
    
    // 广播交易
    p2pServer.broadcastTransaction(tx);
    
    res.json({ 
      message: 'Transaction added successfully',
      transaction: tx
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 挖矿
app.post('/mine', (req, res) => {
  const { minerAddress } = req.body;
  
  if (!minerAddress) {
    return res.status(400).json({ error: 'Missing miner address' });
  }
  
  // 挖掘待处理交易
  blockchain.minePendingTransactions(minerAddress);
  
  // 同步区块链
  p2pServer.syncChains();
  
  res.json({
    message: 'Block mined successfully',
    lastBlock: blockchain.getLatestBlock()
  });
});

// 获取钱包余额
app.get('/balance/:address', (req, res) => {
  const balance = blockchain.getBalanceOfAddress(req.params.address);
  res.json({ 
    address: req.params.address,
    balance: balance
  });
});

// 创建钱包
app.get('/wallet/new', (req, res) => {
  const newWallet = new Wallet();
  res.json({
    privateKey: newWallet.privateKey,
    publicKey: newWallet.publicKey
  });
});

// 启动HTTP服务器
app.listen(config.HTTP_PORT, () => {
  console.log(`HTTP服务器已启动，端口: ${config.HTTP_PORT}`);
});

// 启动P2P服务器
p2pServer.listen();
