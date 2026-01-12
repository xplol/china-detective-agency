# Favicon 说明

## 当前状态

已创建一个简单的SVG favicon作为占位符。

**文件**: `favicon.svg`

**设计说明**:
- 黑色背景 (#1a1a1a)
- 金色徽章图案 (#d4af37)
- 字母 "S" 代表 Spy007

## 建议替换

为了更好的品牌形象，建议创建专业的favicon：

### 推荐尺寸

- **favicon.ico**: 16x16, 32x32, 48x48 (多尺寸ICO文件)
- **favicon.svg**: 矢量图，适用于现代浏览器
- **apple-touch-icon.png**: 180x180 (iOS设备)
- **favicon-192.png**: 192x192 (Android设备)
- **favicon-512.png**: 512x512 (PWA)

### 在线生成工具

1. **RealFaviconGenerator**: https://realfavicongenerator.net/
   - 上传你的logo
   - 自动生成所有尺寸
   - 提供完整的HTML代码

2. **Favicon.io**: https://favicon.io/
   - 从文字生成
   - 从图片生成
   - 从emoji生成

### 设计建议

**侦探主题元素**:
- 🔍 放大镜
- 🕵️ 侦探帽
- 🔐 锁或钥匙
- 📋 文件夹
- 🎯 目标图标

**颜色方案**:
- 主色: 深色背景 (#1a1a1a, #2d2d2d)
- 强调色: 金色 (#d4af37) 或深红色 (#8b0000)
- 保持简洁，在小尺寸下清晰可见

### 替换步骤

1. 使用在线工具生成favicon包
2. 下载并解压到 `client/public/`
3. 更新 `client/index.html` 中的favicon引用
4. 重新部署网站

### 当前HTML引用

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="alternate icon" href="/favicon.ico" />
```

### 完整的Favicon标记（可选）

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#1a1a1a" />
```

## 验证

部署后访问：
- https://www.spy007.top/favicon.svg
- 在浏览器标签页中查看图标

---

**创建日期**: 2026-01-12  
**状态**: 占位符（建议替换为专业设计）
