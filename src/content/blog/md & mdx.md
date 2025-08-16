---
title: 'md & mdx'
description: '学习mdx文件'
pubDate: '2025-08-16'
heroImage: '../../assets/cover.svg'
category: ''
series: ''
tags: ['笔记', 'mdx']
---

1️⃣ Markdown 基础回顾 (.md)

Markdown 文件只能写静态内容，比如文字、图片、列表等：

## 我的博客

今天学习了 Astro，很开心！

- 学会了创建页面
- 学会了写文章
- 学会了使用组件

渲染效果：

大标题：我的博客

文字段落：今天学习了 Astro，很开心！

列表：

学会了创建页面

学会了写文章

学会了使用组件

特点：完全静态，不能用 JS 或组件，内容不可交互。

2️⃣ MDX 基础 (.mdx)

MDX 可以写 Markdown，同时可以 引入组件 并使用 JavaScript：

import MyButton from '../components/MyButton.jsx'

## 我的博客

今天学习了 Astro，很开心！

<MyButton>点击我试试</MyButton>


注意：

import 可以引入任何 React / Preact / Solid 组件。

<MyButton> 是一个可以交互的按钮，不是静态文本。

渲染效果：

大标题：我的博客

段落文字：今天学习了 Astro，很开心！

按钮：点击后可以触发事件（比如弹窗、计数等）

3️⃣ 更动态的 MDX 示例

假设我们写一个计数器组件 Counter.jsx：

``` jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

然后在 MDX 中使用它：

import Counter from '../components/Counter.jsx'

## 动态计数器

<Counter />

效果：

页面加载后显示：计数：0

点击按钮计数 +1，页面实时更新

纯 Markdown 做不到这个交互

4️⃣ MD vs MDX 对比表

| 特性           | Markdown (.md) | MDX (.mdx) |
| -------------- | :-------------: | :--------: |
| 文字内容       | ✅ 支持         | ✅ 支持    |
| 图片 / 列表 / 链接 | ✅ 支持     | ✅ 支持    |
| JS / 动态交互  | ❌ 不支持       | ✅ 支持    |
| 组件嵌入       | ❌ 不支持       | ✅ 支持    |
| 使用场景       | 简单博客、文档  | 高级博客、交互式文档、演示组件 |

---

✅ 总结

Markdown 适合纯静态文章。

MDX 可以把 Markdown 和组件结合，做动态、交互页面。

对 Astro 来说，推荐写博客文章时使用 MDX，这样以后想加图表、按钮或动画都方便。

---

btw,也许这可能就是我最后一篇md blog文档了
