---
title: 'Python数据科学入门'
description: '使用Python进行数据分析和机器学习的基础教程'
pubDate: 'Dec 06 2024'
heroImage: '../../assets/cover.svg'
category: '数据科学'
tags: ['Python', '数据科学', '机器学习']
---

Python在数据科学领域有着广泛的应用。本文将介绍Python数据科学的基础知识。

## 核心库介绍

### NumPy - 数值计算
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())  # 计算平均值
```

### Pandas - 数据处理
```python
import pandas as pd

df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35]
})
print(df.head())
```

### Matplotlib - 数据可视化
```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel('x')
plt.ylabel('y')
plt.show()
```

## 机器学习基础

使用scikit-learn进行简单的机器学习：

```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# 数据准备和模型训练
X_train, X_test, y_train, y_test = train_test_split(X, y)
model = LinearRegression()
model.fit(X_train, y_train)
```

Python让数据科学变得更加accessible！
