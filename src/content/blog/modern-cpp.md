---
title: 'C++现代特性详解'
description: 'C++11/14/17/20新特性介绍与实践应用'
pubDate: 'Dec 08 2024'
heroImage: '../../assets/cover.svg'
category: '编程'
tags: ['C++', '现代C++', '编程语言']
---

C++作为一门历史悠久的编程语言，在C++11之后迎来了现代化的变革。本文将介绍C++的现代特性。

## 智能指针

现代C++引入了智能指针来自动管理内存：

```cpp
#include <memory>

auto ptr = std::make_unique<int>(42);
auto shared = std::make_shared<std::string>("Hello");
```

## 自动类型推导

使用`auto`关键字简化代码：

```cpp
auto numbers = std::vector<int>{1, 2, 3, 4, 5};
for (const auto& num : numbers) {
    std::cout << num << " ";
}
```

## Lambda表达式

匿名函数让代码更简洁：

```cpp
auto lambda = [](int x, int y) { return x + y; };
std::cout << lambda(5, 3) << std::endl;
```

现代C++让开发更高效、更安全！
