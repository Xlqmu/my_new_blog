---
title: '二分查找的几种变体实现'
description: '深入理解二分查找算法的不同应用场景'
pubDate: '2025-07-28'
heroImage: '../../../assets/blog-placeholder-2.jpg'
category: '算法'
readingTime: 7
tags: ['算法', '二分查找', '数据结构', '编程']
---

二分查找是最经典的算法之一，但在实际应用中有很多变体。

## 标准二分查找

```javascript
function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```

## 查找左边界

```javascript
function leftBound(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}
```

## 查找右边界

```javascript
function rightBound(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}
```

## 应用场景

1. **搜索插入位置**：leftBound可以找到目标值应该插入的位置
2. **搜索范围**：结合leftBound和rightBound可以找到目标值的范围
3. **峰值查找**：在山脉数组中查找峰值

## 总结

掌握二分查找的各种变体，能够优雅地解决很多问题。关键在于理解边界条件的处理。
