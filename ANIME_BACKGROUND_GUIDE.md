# 二次元背景使用指南

## 1. 准备背景图片

将你的二次元风格图片放到 `public/images/anime-bg/` 目录下，建议的文件名：

- `sakura-landscape.jpg` - 樱花风景
- `anime-city.jpg` - 动漫城市风景  
- `sunset-field.jpg` - 夕阳田野
- `cherry-blossom.jpg` - 樱花盛开
- `anime-sky.jpg` - 动漫天空

## 2. 图片要求

- 分辨率：推荐 1920x1080 或更高
- 格式：JPG, PNG, WebP
- 大小：建议压缩到 500KB 以下
- 风格：清新、柔和的二次元场景

## 3. 使用方法

### 方法一：在任意页面使用背景组件

```astro
---
import AnimeBackground from '../components/AnimeBackground.astro';
---

<html>
<head>
  <!-- head 内容 -->
</head>
<body>
  <AnimeBackground variant="sakura" opacity={0.15} particles={true} />
  <!-- 页面内容 -->
</body>
</html>
```

### 方法二：修改全局CSS（已配置）

全局CSS已经配置了默认背景，你只需要：

1. 将图片放到正确目录
2. 确保第一张图片命名为 `anime-bg-1.jpg`

### 方法三：为特定页面设置不同背景

在页面组件中添加类名来切换背景：

```astro
<body class="anime-bg-2">
  <!-- 页面内容 -->
</body>
```

## 4. 自定义选项

### AnimeBackground 组件参数：

- `variant`: 'sakura' | 'ocean' | 'sunset' | 'random' (默认: 'random')
- `opacity`: 0-1 之间的数字 (默认: 0.1)  
- `particles`: true/false (默认: true)

### CSS 变量自定义：

```css
:root {
  --anime-bg-opacity: 0.1;
  --anime-particle-color: #ffb6c1;
  --anime-overlay-color: rgba(255, 182, 193, 0.05);
}
```

## 5. 推荐的二次元图片来源

- Pixiv (需要账号)
- Unsplash (搜索 anime landscape)
- Wallhaven (anime 分类)
- 自己绘制或委托绘制

## 6. 性能优化建议

1. 压缩图片大小
2. 使用 WebP 格式
3. 为移动端提供较小尺寸的图片
4. 考虑懒加载背景图片

## 7. 示例页面结构

```astro
---
import AnimeBackground from '../components/AnimeBackground.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<html>
<body>
  <AnimeBackground variant="random" />
  <Header />
  <main class="anime-content-wrapper">
    <div class="anime-card">
      <h1>欢迎来到我的二次元博客</h1>
      <p>这里有最新的动漫资讯和个人感想...</p>
    </div>
  </main>
  <Footer />
</body>
</html>
```
