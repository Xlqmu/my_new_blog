---
title: '个人博客搭建历程'
description: '从WordPress到静态网站生成器的网站搭建之路'
pubDate: '2025-08-05'
heroImage: '../../../assets/blog-placeholder-1.jpg'
category: '网站'
readingTime: 6
tags: ['网站', 'Astro', '博客', 'Web开发']
---

这个博客网站的搭建经历了好几个阶段。

## 第一阶段：WordPress

最开始使用WordPress，优点是：

- 上手简单
- 主题丰富
- 插件生态完善

但是缺点也很明显：

- 加载速度慢
- 需要数据库
- 安全性问题

## 第二阶段：Jekyll

转向静态网站生成器Jekyll：

- 速度快
- 安全性好
- GitHub Pages支持

但Ruby环境配置比较麻烦。

## 第三阶段：Astro

最终选择了Astro：

- 现代化的开发体验
- 组件化开发
- 优秀的性能
- TypeScript支持

## 搭建过程

### 初始化项目

```bash
npm create astro@latest
```

### 配置TailwindCSS

```bash
npx astro add tailwind
```

### 部署到Vercel

连接GitHub仓库，自动部署。

## 总结

Astro是目前最满意的博客解决方案，既有现代化的开发体验，又有出色的性能表现。
