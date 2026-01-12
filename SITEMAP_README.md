# Sitemap 文档

## 概述

本文档说明了为中国侦探社（China Detective Agency）网站生成的sitemap.xml文件的结构和优化策略。

## 网站结构分析

### 主要页面路由

根据代码分析（`client/src/App.tsx`），网站采用 **wouter** 路由库，包含以下主要页面：

1. **首页** (`/`) - Home.tsx
2. **服务页面** (`/services`) - Services.tsx
3. **关于我们** (`/about`) - About.tsx
4. **联系我们** (`/contact`) - Contact.tsx
5. **404页面** (`/404`) - NotFound.tsx

### 服务详情（锚点链接）

服务页面（Services.tsx）包含9个详细的服务项目，每个服务都有唯一的slug作为锚点ID：

1. **relationship-investigation** - 关系调查
2. **background-check** - 背景调查
3. **business-investigation** - 商业调查
4. **corporate-due-diligence** - 企业尽职调查
5. **asset-investigation** - 资产调查
6. **locate-missing-persons** - 寻找失踪人员
7. **debt-collection** - 债务催收调查
8. **fraud-investigation** - 欺诈调查
9. **employee-investigation** - 员工调查

## Sitemap 结构

### URL 优先级设置

```
1.0 - 首页 (/)
0.9 - 服务总览页面 (/services)
0.8 - 关于我们、联系我们
0.7 - 各个具体服务锚点
```

### 更新频率设置

```
weekly - 首页、服务页面（内容更新较频繁）
monthly - 关于我们、联系我们、具体服务（相对稳定）
```

### 最后修改日期

所有页面的 `lastmod` 设置为 **2026-01-12**（生成日期）

## SEO 优化要点

### 1. 包含服务锚点链接

虽然锚点链接（#）通常不包含在sitemap中，但考虑到：
- 每个服务都有丰富的SEO关键词内容
- 服务页面较长，锚点可以帮助搜索引擎更好地索引具体服务
- 提升用户体验，直接导航到特定服务

因此在sitemap中包含了所有9个服务的锚点URL。

### 2. 符合XML Sitemap 0.9标准

- 使用标准的XML命名空间
- 包含XSI schema验证
- 所有必需字段完整（loc, lastmod, changefreq, priority）

### 3. 优先级策略

- **首页最高** (1.0) - 作为网站入口
- **服务页面次之** (0.9) - 核心业务展示
- **主要页面** (0.8) - 关于和联系页面
- **服务详情** (0.7) - 具体服务内容

## 部署说明

### 当前位置

生成的sitemap文件位于：
- `/home/ubuntu/china-detective-agency/sitemap.xml`（新生成的优化版本）
- `/home/ubuntu/china-detective-agency/client/public/sitemap.xml`（原有版本）

### 部署步骤

1. **替换现有sitemap**：
   ```bash
   cp sitemap.xml client/public/sitemap.xml
   ```

2. **验证sitemap**：
   - 使用在线工具验证XML格式：https://www.xml-sitemaps.com/validate-xml-sitemap.html
   - 确保所有URL可访问

3. **提交到搜索引擎**：
   - **Google Search Console**: https://search.google.com/search-console
   - **Bing Webmaster Tools**: https://www.bing.com/webmasters
   - **Baidu站长平台**: https://ziyuan.baidu.com（如果目标中国市场）

4. **robots.txt 确认**：
   确保 `client/public/robots.txt` 包含sitemap引用：
   ```
   User-agent: *
   Allow: /
   
   Sitemap: https://chinadetective.com/sitemap.xml
   ```

## 维护建议

### 定期更新

1. **内容更新时**：修改对应页面的 `lastmod` 日期
2. **新增页面时**：添加新的 `<url>` 条目
3. **建议频率**：每月检查一次，有重大更新时立即更新

### 自动化方案（可选）

考虑在构建流程中添加sitemap自动生成脚本：

```javascript
// 可以使用 sitemap 库
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// 在 vite.config.ts 或单独的脚本中实现
```

## 相关文件

- **路由配置**: `client/src/App.tsx`
- **服务详情**: `client/src/pages/Services.tsx`
- **SEO文档**: `SEO_IMPLEMENTATION.md`
- **Robots文件**: `client/public/robots.txt`

## 技术栈信息

- **框架**: React + Vite
- **路由**: Wouter
- **部署**: 静态网站（根据build.json）
- **域名**: https://chinadetective.com

## 验证清单

- [x] 所有主要页面已包含
- [x] 服务锚点链接已添加
- [x] XML格式正确
- [x] 优先级合理设置
- [x] 更新频率符合实际
- [x] 日期格式正确（YYYY-MM-DD）
- [x] 符合sitemap 0.9标准
- [ ] 提交到Google Search Console（需要网站所有者操作）
- [ ] 提交到Bing Webmaster Tools（需要网站所有者操作）
- [ ] 验证所有URL可访问（需要网站上线后验证）

## 联系信息

如有sitemap相关问题，请参考：
- Google Sitemap文档: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Sitemaps.org标准: https://www.sitemaps.org/protocol.html
