// server.js - 区块链API服务器
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1'); // 与比特币使用的相同的椭圆曲线

const { Blockchain, Transaction } = require('./blockchain');

// 初始化Express应用
const app = express();
app.use(bodyParser.json());
app.use(cors());

// 创建区块链实例
const myChain = new Blockchain();

// 生成一些密钥对用于测试
const myKey = ec.genKeyPair();
const myWalletAddress = myKey.getPublic('hex');

// 网络节点列表
const nodes = new Set();

// 路由: 获取整个区块链
app.get('/blockchain', (req, res) => {
  res.json({
    chain: myChain.chain,
    pendingTransactions: myChain.pendingTransactions,
    length: myChain.chain.length
  });
});

// 路由: 创建交易
app.post('/transaction', (req, res) => {
  const { fromAddress, toAddress, amount, privateKey } = req.body;
  
  try {
    // 使用私钥创建密钥对
    const keyPair = ec.keyFromPrivate(privateKey);
    
    // 创建并签名交易
    const tx = new Transaction(fromAddress, toAddress, amount);
    tx.signTransaction(keyPair);
    
    // 添加到待处理交易
    myChain.addTransaction(tx);
    
    res.json({ 
      message: 'Transaction added successfully',
      transaction: tx
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 路由: 挖矿
app.post('/mine', (req, res) => {
  const { minerAddress } = req.body;
  
  if (!minerAddress) {
    return res.status(400).json({ error: 'Missing miner address' });
  }
  
  // 添加一些交易以供测试
  if (myChain.pendingTransactions.length === 0) {
    // 如果没有待处理交易，添加一个测试交易
    const testTx = new Transaction(myWalletAddress, minerAddress, 10);
    testTx.signTransaction(myKey);
    myChain.addTransaction(testTx);
  }
  
  // 挖掘待处理交易
  myChain.minePendingTransactions(minerAddress);
  
  res.json({
    message: 'Block mined successfully',
    lastBlock: myChain.getLatestBlock()
  });
});

// 路由: 获取钱包余额
app.get('/balance/:address', (req, res) => {
  const balance = myChain.getBalanceOfAddress(req.params.address);
  res.json({ 
    address: req.params.address,
    balance: balance
  });
});

// 路由: 注册新节点
app.post('/nodes/register', (req, res) => {
  const newNodes = req.body.nodes;
  
  if (!newNodes || !Array.isArray(newNodes)) {
    return res.status(400).json({
      error: 'Please provide an array of valid nodes'
    });
  }
  
  newNodes.forEach(node => {
    nodes.add(node);
  });
  
  res.json({
    message: 'New nodes added',
    totalNodes: Array.from(nodes)
  });
});

// 路由: 验证区块链
app.get('/validate', (req, res) => {
  const isValid = myChain.isChainValid();
  res.json({
    valid: isValid
  });
});

// 创建钱包
app.get('/wallet/new', (req, res) => {
  const key = ec.genKeyPair();
  res.json({
    privateKey: key.getPrivate('hex'),
    publicKey: key.getPublic('hex')
  });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`区块链服务已启动，监听端口: ${PORT}`);
});

module.exports = app;