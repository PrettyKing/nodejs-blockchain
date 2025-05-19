# Node.js区块链项目

一个使用Node.js实现的简单区块链和加密货币系统，包含完整的区块链核心、API服务器和钱包功能。

## 功能特点

- 基于工作量证明(PoW)的共识机制
- 交易创建和验证
- 区块挖掘
- 加密钱包管理
- RESTful API接口
- P2P网络通信

## 技术栈

- **Node.js** - 运行环境
- **Express** - Web服务器框架
- **Elliptic** - 椭圆曲线加密
- **WebSocket** - P2P通信

## 项目结构

```
blockchain-nodejs/
├── blockchain.js      # 区块链核心实现
├── config.js          # 配置文件
├── index.js           # 主入口文件
├── p2p-server.js      # P2P网络服务器
├── server.js          # API服务器
├── wallet.js          # 钱包实现
└── package.json       # 项目依赖
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动单节点

```bash
npm start
```

### 启动多个节点

```bash
# 启动第一个节点
npm start

# 在新终端启动第二个节点
npm run node2

# 在另一个终端启动第三个节点
npm run node3
```

## API接口

### 查看区块链

```
GET /blockchain
```

### 创建交易

```
POST /transaction
Content-Type: application/json

{
  "fromAddress": "公钥1",
  "toAddress": "公钥2",
  "amount": 50,
  "privateKey": "私钥1"
}
```

### 挖矿

```
POST /mine
Content-Type: application/json

{
  "minerAddress": "矿工公钥"
}
```

### 查询余额

```
GET /balance/:address
```

### 创建钱包

```
GET /wallet/new
```

## 钱包命令行工具

### 创建新钱包

```bash
node wallet.js new [钱包名称]
```

### 列出所有钱包

```bash
node wallet.js list
```

### 查看钱包信息

```bash
node wallet.js info <钱包名称>
```

## 开发

```bash
# 使用nodemon启动开发模式
npm run dev
```

## 测试

```bash
npm test
```

## 延伸阅读

- [区块链原理](https://en.wikipedia.org/wiki/Blockchain)
- [比特币白皮书](https://bitcoin.org/bitcoin.pdf)
- [椭圆曲线加密](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)

## 许可证

本项目采用MIT许可证，详情见[LICENSE](LICENSE)文件。