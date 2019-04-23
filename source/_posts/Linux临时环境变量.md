---
title: Linux临时环境变量
date: 2018-07-31 21:30:00
tags: 
- linux
- 服务器相关
categories: 服务器相关
---
自从装了Linux以后，win10就很少用了，感觉linux除了显卡上的支持不够好之外，其他方面都很好用，而且各种IDE运行起来很流畅
以前在windows上下载百度云的资源是用的Chrome插件+一个大神开发的高速下载器(非多线程，基于算法提速)，而这个下载器只有OSX和win版的，无奈只好用proxyee-down多线程下载了
proxyee在windows上有exe版的启动工具来调用目录里的JRE来运行主程序，到了Linux中，就直接使用系统自带的Openjdk来启动 `java -jar proxyee-down.jar`，但是出现了如下的情况
![](https://wx3.sinaimg.cn/large/006btIwUly1ftucrjwuarj30hs05p749.jpg)总之就是没启动起来，什么异常都没留下，判断是JRE(Openjdk)的原因，但是又不想更改系统的环境变量，所以采用临时环境变量的方法，即设置一次环境变量只在当前bash中有效，具体命令为 `export PATH=/media/ljc/spare1/LinuxJDK/jdk10/bin:$PATH` 然后再正常启动就可以了 `java -jar proxyee-down.jar`
![](https://wx4.sinaimg.cn/large/006btIwUly1ftucrjhliwj30n106ddfq.jpg) ![](https://wx1.sinaimg.cn/large/006btIwUly1ftucrk8kcjj305801y3y9.jpg)但是由于命令太长而且又是临时的，所以将它们保存在一个`Start.sh`文件里，等想要启动的时候直接执行该sh文件就可以了
