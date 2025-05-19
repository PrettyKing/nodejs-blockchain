# Cloudflare Worker部署指南

本指南介绍如何将Node.js区块链应用部署到Cloudflare Workers平台。

## 前提条件

1. Cloudflare账户
2. 安装了Wrangler CLI工具
3. 已经克隆了此仓库

## 部署步骤

### 1. 安装Wrangler CLI

```bash
npm install -g wrangler
```

### 2. 登录Cloudflare账户

```bash
wrangler login
```

### 3. 创建Cloudflare KV命名空间

KV命名空间用于存储区块链数据：

```bash
wrangler kv:namespace create "BLOCKCHAIN_KV"
```

复制输出的命名空间ID，将用于下一步。

### 4. 创建wrangler.toml配置文件

在项目根目录下创建`wrangler.toml`文件：

```toml
name = "blockchain-api"
main = "cloudflare-worker.js"
compatibility_date = "2023-01-01"

kv_namespaces = [
  { binding = "BLOCKCHAIN_KV", id = "您的KV命名空间ID" }
]

[triggers]
crons = []
```

将`您的KV命名空间ID`替换为上一步获取的命名空间ID。

### 5. 发布Worker

```bash
wrangler publish
```

发布成功后，Wrangler会显示您的Worker URL，通常格式为`https://blockchain-api.您的用户名.workers.dev`

## 前端配置

要使前端连接到Cloudflare Worker，需要更新`blockchain-frontend`项目中的API配置：

1. 编辑`src/api/index.ts`文件
2. 将`API_BASE_URL`更改为您的Worker URL：

```typescript
const API_BASE_URL = 'https://blockchain-api.您的用户名.workers.dev';
```

## 功能限制

Cloudflare Worker版与原始Node.js实现相比有以下限制：

1. **钱包功能简化**：由于Cloudflare Workers不支持椭圆曲线加密库，钱包地址生成是简化的
2. **存储限制**：Cloudflare KV存储有容量限制，大型区块链可能需要分页存储
3. **计算资源**：复杂的挖矿操作可能受到Cloudflare Workers CPU限制
4. **无P2P网络**：省略了P2P网络功能

## 调整前端

由于上述限制，前端可能需要进行一些调整：

1. 禁用或简化钱包签名验证
2. 增加请求超时设置，因为挖矿操作可能需要更长时间
3. 处理钱包格式的差异

## 监控和维护

部署后，您可以在Cloudflare Workers仪表板中监控您的Worker：

1. 访问 [Cloudflare Workers Dashboard](https://dash.cloudflare.com/?to=/:account/workers)
2. 选择您的Worker
3. 查看请求统计、错误日志等信息

## 注意事项

- 免费计划的Cloudflare Workers有每日请求限制
- KV存储在免费计划中也有限制
- 考虑将挖矿难度降低，以适应Cloudflare Workers的CPU限制

## 故障排除

如果部署后遇到问题，请检查：

1. Worker日志是否有错误
2. KV命名空间绑定是否正确
3. CORS配置是否允许前端域名
4. 复杂操作是否超时