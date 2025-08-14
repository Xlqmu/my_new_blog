---
title: '树莓派家庭服务器搭建记录'
description: '使用树莓派4B搭建家用NAS和媒体服务器的完整过程'
pubDate: '2025-08-10'
heroImage: '../../../assets/blog-placeholder-4.jpg'
category: '硬件'
readingTime: 8
tags: ['树莓派', '硬件', 'NAS', '服务器', 'DIY']
---

最近入手了一块树莓派4B，准备搭建一个家庭媒体服务器。

## 硬件准备

- 树莓派4B 8GB版本
- 128GB高速SD卡
- 散热套件
- 1TB移动硬盘

## 系统安装

选择了Raspberry Pi OS Lite版本，因为不需要桌面环境...

## 服务配置

### 安装Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### 配置Samba文件共享

```bash
sudo apt install samba samba-common-bin
```

## 性能测试

经过一周的使用，这个小服务器表现出色：

- 文件传输速度：40MB/s
- 4K视频流播放流畅
- 24/7运行稳定

## 总结

树莓派虽小，但功能强大，非常适合作为家庭服务器使用。
