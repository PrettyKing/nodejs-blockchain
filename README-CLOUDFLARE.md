# Cloudflare Worker 区块链部署

这个项目是一个使用 Cloudflare Workers 部署的完整区块链实现。它利用 Cloudflare 的 KV 存储来持久化区块链数据，并提供了一组 RESTful API 来与区块链交互。

## 更新: 解决 Buffer 依赖问题

最初的版本遇到了与 Node.js 特定模块（如 `buffer`）相关的依赖问题。我们已经通过以下更改解决了这些问题：

1. 替换 `crypto-browserify` 为 `crypto-es`，这是一个专为浏览器环境设计的加密库
2. 使用 ES 模块导入而不是 CommonJS `require` 语法
3. 添加了 `nodejs_compat` 兼容性标志以增强 Worker 的 Node.js 兼容性
4. 在 `package.json` 中添加了浏览器兼容性设置，排除了不兼容的 Node.js 模块

## 功能特点

- 基于工作量证明(PoW)的共识机制
- 完整的交易处理和验证
- 使用椭圆曲线加密的钱包实现
- 区块挖掘功能
- 持久化存储使用 Cloudflare KV
- 全球分布式部署

## 部署步骤

### 准备工作

1. **Cloudflare 账户设置**:
   - 注册一个 [Cloudflare 账户](https://dash.cloudflare.com/sign-up)
   - 确保你的账户有 Workers 权限

2. **安装 Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

3. **登录 Wrangler**:
   ```bash
   wrangler login
   ```

### 创建 KV 命名空间

1. **创建用于存储区块链数据的 KV 命名空间**:
   ```bash
   wrangler kv:namespace create "BLOCKCHAIN_STORAGE"
   ```

2. **创建用于预览环境的 KV 命名空间**:
   ```bash
   wrangler kv:namespace create "BLOCKCHAIN_STORAGE" --preview
   ```

3. **记下 KV 命名空间 ID 和预览 ID**，然后更新 `wrangler.toml` 文件，替换 `your-kv-id-will-go-here` 和 `your-preview-kv-id-will-go-here` 为实际值:
   ```toml
   kv_namespaces = [
     { binding = "BLOCKCHAIN_STORAGE", id = "实际KV ID", preview_id = "实际预览KV ID" }
   ]
   ```

### 本地开发和测试

1. **安装项目依赖**:
   ```bash
   npm install
   ```

2. **启动开发服务器**:
   ```bash
   npm run dev
   ```

   这将在本地启动一个开发服务器，通常在 `http://localhost:8787`。

3. **测试API端点**:
   - 获取区块链: `GET http://localhost:8787/blockchain`
   - 创建钱包: `GET http://localhost:8787/wallet/new`
   - 创建交易: `POST http://localhost:8787/transaction`
   - 挖矿: `POST http://localhost:8787/mine`
   - 获取余额: `GET http://localhost:8787/balance/{address}`

### 部署到 Cloudflare

完成测试后，可以将Worker部署到Cloudflare全球网络:

```bash
npm run publish
```

这将把你的区块链部署到Cloudflare的全球网络，并提供一个类似 `https://blockchain-worker.your-subdomain.workers.dev` 的URL。

## API 文档

### 获取区块链

- **URL**: `/blockchain`
- **方法**: `GET`
- **成功响应**:
  ```json
  {
    "chain": [...],
    "pendingTransactions": [...],
    "length": 1
  }
  ```

### 创建新钱包

- **URL**: `/wallet/new`
- **方法**: `GET`
- **成功响应**:
  ```json
  {
    "privateKey": "钱包私钥",
    "publicKey": "钱包公钥(地址)"
  }
  ```

### 创建交易

- **URL**: `/transaction`
- **方法**: `POST`
- **请求体**:
  ```json
  {
    "fromAddress": "发送方钱包地址",
    "toAddress": "接收方钱包地址",
    "amount": 10,
    "privateKey": "发送方私钥"
  }
  ```
- **成功响应**:
  ```json
  {
    "message": "Transaction added successfully",
    "transaction": {...}
  }
  ```

### 挖矿

- **URL**: `/mine`
- **方法**: `POST`
- **请求体**:
  ```json
  {
    "minerAddress": "矿工钱包地址"
  }
  ```
- **成功响应**:
  ```json
  {
    "message": "Block mined successfully",
    "lastBlock": {...}
  }
  ```

### 查询余额

- **URL**: `/balance/{walletAddress}`
- **方法**: `GET`
- **成功响应**:
  ```json
  {
    "address": "钱包地址",
    "balance": 100
  }
  ```

## 与前端集成

更新前端应用的API URL，指向你的Worker URL:

```typescript
// 在src/api/index.ts中
const API_BASE_URL = 'https://blockchain-worker.your-subdomain.workers.dev';
```

## 疑难解答

### 常见问题

1. **"Could not resolve 'buffer'" 错误**
   - 这是因为Cloudflare Workers环境与Node.js不完全兼容
   - 我们已经通过使用浏览器兼容库和添加兼容性标志解决了这个问题

2. **执行超时**
   - 默认情况下，Cloudflare Workers有CPU时间限制
   - 考虑降低挖矿难度或者升级到付费计划以获得更长的执行时间

3. **KV存储限制**
   - 免费计划有KV操作次数和存储容量限制
   - 监控使用情况，必要时升级

## 注意事项

1. **资源限制**: Cloudflare Workers有执行时间限制，复杂计算（如难度较高的挖矿）可能会超时。考虑调低难度或优化算法。

2. **KV存储限制**: 免费版本有存储和操作数量限制，监控使用情况。

3. **安全性**: 在生产环境中，应考虑添加更严格的访问控制和身份验证。

4. **CORS设置**: 当前配置允许所有源访问API。如果需要限制，请修改`createResponse`函数中的CORS头部。
