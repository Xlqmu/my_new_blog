---
title: 'ROS机器人开发基础'
description: 'Robot Operating System (ROS) 机器人操作系统入门教程'
pubDate: 'Dec 04 2024'
heroImage: '../../assets/cover.svg'
category: '机器人'
tags: ['ROS', '机器人', '自动化']
---

ROS (Robot Operating System) 是一个用于机器人应用开发的开源框架。本文将介绍ROS的基础概念。

## ROS核心概念

### 节点 (Nodes)
ROS中的基本执行单元：

```bash
# 启动ROS核心
roscore

# 运行节点
rosrun package_name node_name
```

### 话题 (Topics)
节点间通信的数据通道：

```bash
# 查看话题列表
rostopic list

# 发布消息到话题
rostopic pub /topic_name geometry_msgs/Twist "linear: {x: 1.0}"
```

### 服务 (Services)
请求-响应式通信：

```bash
# 查看服务列表
rosservice list

# 调用服务
rosservice call /service_name
```

## 编写简单的ROS节点

```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import String

def publisher():
    pub = rospy.Publisher('chatter', String, queue_size=10)
    rospy.init_node('talker', anonymous=True)
    rate = rospy.Rate(10)  # 10hz
    
    while not rospy.is_shutdown():
        hello_str = "hello world %s" % rospy.get_time()
        rospy.loginfo(hello_str)
        pub.publish(hello_str)
        rate.sleep()

if __name__ == '__main__':
    try:
        publisher()
    except rospy.ROSInterruptException:
        pass
```

ROS让机器人开发变得更加模块化和高效！
