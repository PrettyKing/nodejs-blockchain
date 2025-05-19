# Cloudflare Worker 区块链部署 - 快速入门指南

此版本的区块链已经过完全重构，可以在没有KV命名空间的情况下开发和测试，非常适合快速开始。对于生产环境，你仍然可以使用KV来持久化数据。

## 即刻运行

我们已经简化了启动过程，使你可以立即开始，无需任何额外配置：

1. **安装依赖**:
   ```bash
   npm install
   ```

2. **启动开发服务器**:
   ```bash
   npm run dev
   ```

3. **访问API**:
   - 区块链数据: http://localhost:8787/blockchain
   - 创建钱包: http://localhost:8787/wallet/new
   - 检查状态: http://localhost:8787/debug

## 故障排除

如果你遇到了`Cannot read properties of undefined (reading 'BLOCKCHAIN_STORAGE')`错误，我们已经修复了这个问题：

1. **内存存储模式**: 代码现在可以在没有KV的情况下运行，所有数据存储在内存中
2. **错误处理增强**: 添加了null检查和适当的错误处理
3. **新的调试端点**: 访问`/debug`来检查系统状态

## 创建和配置KV命名空间 (可选)

如果你想使用持久化存储，请按照以下步骤操作：

1. **创建KV命名空间**:
   ```bash
   wrangler kv:namespace create "BLOCKCHAIN_STORAGE"
   ```

2. **更新`wrangler.toml`文件**:
   - 取消注释`kv_namespaces`部分
   - 用你创建的ID替换`your-kv-id-will-go-here`

3. **设置环境变量**:
   - 将`USE_IN_MEMORY_STORE`设置为`"false"`，启用KV存储

## API参考

### 获取区块链
```
GET /blockchain
```

### 创建钱包
```
GET /wallet/new
```

### 查询余额
```
GET /balance/:address
```

### 创建交易
```
POST /transaction
{
  "fromAddress": "发送方钱包地址",
  "toAddress": "接收方钱包地址",
  "amount": 10,
  "privateKey": "发送方私钥"
}
```

### 挖矿
```
POST /mine
{
  "minerAddress": "矿工钱包地址"
}
```

### 调试信息
```
GET /debug
```

## 与前端连接

只需将前端API URL指向你的Worker URL:

```typescript
const API_BASE_URL = 'http://localhost:8787'; // 开发环境
// 或
const API_BASE_URL = 'https://blockchain-worker.your-workers.dev'; // 生产环境
```