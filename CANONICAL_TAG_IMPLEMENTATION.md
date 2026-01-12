# Canonical Tag 实现文档

## 概述

本文档说明了为中国侦探社（China Detective Agency）网站实现的规范链接（Canonical Tag）功能，这是针对Cloudflare Pages部署的关键SEO优化。

## 为什么需要Canonical标签？

### Cloudflare Pages的SEO挑战

当网站部署在Cloudflare Pages时，会同时存在多个域名：

- **主域名**: `https://chinadetective.com`
- **Pages域名**: `https://[project-name].pages.dev`

如果没有Canonical标签，搜索引擎可能会：
- 将两个域名视为不同网站
- 分散SEO权重
- 导致重复内容问题
- 降低主域名的排名

### Canonical标签的作用

通过在每个页面的 `<head>` 中添加canonical标签，我们告诉搜索引擎：

> "无论用户通过哪个域名访问，所有SEO权重都应该归属于主域名 chinadetective.com"

## 技术实现

### 1. 安装依赖

```bash
pnpm add react-helmet-async
```

**react-helmet-async** 是一个React组件，用于管理文档头部（document head）的标签，支持SSR和异步渲染。

### 2. 创建SEO组件

创建了 `client/src/components/SEO.tsx` 组件，包含以下功能：

#### 核心功能

```typescript
const SITE_URL = "https://chinadetective.com";

// 自动获取当前路由
const [location] = useLocation();

// 构建规范URL
const canonicalUrl = `${SITE_URL}${location}`;
```

#### 生成的HTML标签

每个页面会自动生成以下标签：

```html
<!-- Canonical标签 - 最重要的SEO标签 -->
<link rel="canonical" href="https://chinadetective.com/当前路径" />

<!-- 基础Meta标签 -->
<title>页面标题</title>
<meta name="title" content="页面标题" />
<meta name="description" content="页面描述" />
<meta name="keywords" content="关键词" />

<!-- Open Graph标签（社交媒体分享） -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://chinadetective.com/当前路径" />
<meta property="og:title" content="页面标题" />
<meta property="og:description" content="页面描述" />
<meta property="og:image" content="图片URL" />

<!-- Twitter卡片标签 -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://chinadetective.com/当前路径" />
<meta property="twitter:title" content="页面标题" />
<meta property="twitter:description" content="页面描述" />
<meta property="twitter:image" content="图片URL" />

<!-- 其他SEO标签 -->
<meta name="robots" content="index, follow" />
<meta name="language" content="English" />
<meta name="revisit-after" content="7 days" />
<meta name="author" content="China Detective Agency" />
```

### 3. 集成到应用

#### App.tsx - 添加HelmetProvider

```typescript
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
```

#### 在每个页面中使用

**Home.tsx**:
```typescript
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div>
      <SEO
        title="China Private Investigator | Professional Detective Agency"
        description="Professional private investigation services in China..."
        keywords="private investigator China, China detective agency..."
      />
      {/* 页面内容 */}
    </div>
  );
}
```

## 页面级SEO配置

### 首页 (/)

```
Title: China Private Investigator | Professional Detective Agency
Canonical: https://chinadetective.com/
Keywords: private investigator China, China detective agency, background check China
```

### 服务页面 (/services)

```
Title: Investigation Services in China | Private Detective Agency
Canonical: https://chinadetective.com/services
Keywords: investigation services China, private detective China, relationship investigation
```

### 关于页面 (/about)

```
Title: About Us | China Private Investigator & Detective Agency
Canonical: https://chinadetective.com/about
Keywords: about China detective agency, private investigator team
```

### 联系页面 (/contact)

```
Title: Contact Us | China Private Investigator & Detective Agency
Canonical: https://chinadetective.com/contact
Keywords: contact China detective, private investigator contact
```

### 404页面 (/404)

```
Title: 404 - Page Not Found | China Detective Agency
Canonical: https://chinadetective.com/404
Keywords: 404, page not found, China detective agency
```

## 验证方法

### 1. 本地开发验证

启动开发服务器：
```bash
pnpm dev
```

在浏览器中打开 `http://localhost:5173`，右键查看源代码，检查 `<head>` 中是否包含：

```html
<link rel="canonical" href="https://chinadetective.com/" />
```

### 2. 生产环境验证

部署后访问网站，查看源代码：

```bash
curl -s https://chinadetective.com/ | grep canonical
```

预期输出：
```html
<link rel="canonical" href="https://chinadetective.com/">
```

### 3. 使用SEO工具验证

- **Google Search Console**: 提交网站后，检查"覆盖率"报告
- **Screaming Frog**: 爬取网站，检查Canonical标签
- **Ahrefs Site Audit**: 检查Canonical标签配置

### 4. 浏览器开发者工具

打开浏览器开发者工具（F12），在Elements标签中查看 `<head>` 部分：

```html
<head>
  ...
  <link rel="canonical" href="https://chinadetective.com/services">
  ...
</head>
```

## SEO效果

### 立即效果

1. **统一权重**: 所有域名的SEO权重集中到 chinadetective.com
2. **避免重复内容**: 搜索引擎不会将pages.dev视为重复内容
3. **提升索引质量**: 搜索引擎明确知道哪个是主要版本

### 长期效果（1-3个月）

1. **排名提升**: 主域名的关键词排名逐步提升
2. **流量增加**: 自然搜索流量集中到主域名
3. **权威性增强**: 单一域名的权威性更高

## 最佳实践

### ✅ 正确做法

1. **每个页面都有唯一的canonical标签**
   - 首页: `https://chinadetective.com/`
   - 服务页: `https://chinadetective.com/services`
   - 关于页: `https://chinadetective.com/about`

2. **使用绝对URL**
   - ✅ `https://chinadetective.com/services`
   - ❌ `/services`

3. **包含协议（https://）**
   - ✅ `https://chinadetective.com/`
   - ❌ `chinadetective.com/`

4. **保持一致性**
   - 始终使用同一个主域名
   - 不要在不同页面使用不同的域名

### ❌ 避免的错误

1. **自引用错误**: Canonical指向不存在的页面
2. **循环引用**: A页面指向B，B页面指向A
3. **多个Canonical**: 一个页面有多个canonical标签
4. **相对URL**: 使用相对路径而非绝对URL

## 与其他SEO优化的配合

### 1. Sitemap.xml

Sitemap中的URL应该与Canonical标签一致：

```xml
<url>
  <loc>https://chinadetective.com/services</loc>
  <lastmod>2026-01-12</lastmod>
</url>
```

### 2. robots.txt

确保主域名可被抓取：

```
User-agent: *
Allow: /

Sitemap: https://chinadetective.com/sitemap.xml
```

### 3. 301重定向

在Cloudflare Pages设置中，配置从pages.dev到主域名的301重定向：

```
https://[project-name].pages.dev/* → https://chinadetective.com/:splat 301
```

### 4. HSTS头部

在 `_headers` 文件中添加：

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## 监控与维护

### Google Search Console

1. **提交主域名**: 添加 chinadetective.com 作为资源
2. **监控索引状态**: 检查哪些URL被索引
3. **查看Canonical报告**: 确认Google识别的Canonical URL
4. **检查覆盖率**: 确保没有Canonical相关的错误

### 定期检查清单

- [ ] 每周检查Google Search Console的Canonical报告
- [ ] 每月验证所有页面的Canonical标签
- [ ] 新增页面时确保添加SEO组件
- [ ] 监控pages.dev域名的流量（应该很少）

## 技术细节

### React Helmet Async vs React Helmet

我们选择 **react-helmet-async** 而非 react-helmet 的原因：

1. **更好的性能**: 异步处理，不阻塞渲染
2. **SSR支持**: 支持服务端渲染（未来可能需要）
3. **维护活跃**: react-helmet已停止维护
4. **React 18兼容**: 完全支持React 19

### 动态路由支持

使用 `useLocation()` hook 自动获取当前路径：

```typescript
const [location] = useLocation();
const canonicalUrl = `${SITE_URL}${location}`;
```

这意味着：
- `/` → `https://chinadetective.com/`
- `/services` → `https://chinadetective.com/services`
- `/about` → `https://chinadetective.com/about`

### 锚点链接处理

对于服务页面的锚点链接（如 `/services#relationship-investigation`），Canonical标签会保留锚点：

```html
<link rel="canonical" href="https://chinadetective.com/services#relationship-investigation" />
```

这是正确的做法，因为每个锚点代表不同的内容部分。

## 故障排查

### 问题1: Canonical标签不显示

**可能原因**:
- HelmetProvider未正确包裹应用
- SEO组件未导入到页面
- React渲染问题

**解决方法**:
```bash
# 检查TypeScript编译
pnpm check

# 重新启动开发服务器
pnpm dev
```

### 问题2: Canonical指向错误的URL

**可能原因**:
- SITE_URL常量配置错误
- useLocation() hook返回错误路径

**解决方法**:
检查 `SEO.tsx` 中的 `SITE_URL` 常量：
```typescript
const SITE_URL = "https://chinadetective.com"; // 确保正确
```

### 问题3: Google未识别Canonical

**可能原因**:
- 页面未被Google抓取
- Canonical标签格式错误
- 网站刚上线，需要时间

**解决方法**:
1. 在Google Search Console中请求索引
2. 检查robots.txt没有阻止抓取
3. 等待1-2周让Google重新抓取

## 总结

通过实现Canonical标签，我们确保了：

✅ **SEO权重集中**: 所有权重指向 chinadetective.com  
✅ **避免重复内容**: pages.dev不会分散权重  
✅ **提升搜索排名**: 单一域名权威性更高  
✅ **改善用户体验**: 统一的品牌形象  
✅ **未来可扩展**: 支持多语言、子域名等场景  

这是Cloudflare Pages部署的网站必须实施的SEO优化，优先级最高。配合sitemap、meta标签、结构化数据等其他优化，将显著提升网站的搜索引擎可见性。

## 相关资源

- [Google Canonical标签文档](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [React Helmet Async文档](https://github.com/staylor/react-helmet-async)
- [Cloudflare Pages SEO指南](https://developers.cloudflare.com/pages/configuration/seo/)
- [Sitemap实现文档](./SITEMAP_README.md)

---

**实施日期**: 2026-01-12  
**实施者**: Manus Agent  
**状态**: ✅ 已完成并通过测试
