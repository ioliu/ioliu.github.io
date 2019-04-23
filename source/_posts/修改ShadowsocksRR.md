---
title: 记第一次修改ShadowsocksRR安卓客户端
date: 2018-05-23 19:55:05
tags: 
- 安卓相关
categories: 安卓相关
---
ShadowsocksRR是由github上的一位大神<a href="https://github.com/Akkariin">@Akkariin</a>基于ShadowsocksR开发的，添加了一些新的算法和权限
<a href="https://github.com/Akkariin">@Akkariin</a>在3.5.3版本中加入了防止屏幕截图的功能，本来还没有发现，直到有次给同学分享这款科技上网神器时才感觉到很不方便，于是稍微懂一点安卓反编译的我就利用手头上的MT管理器做了下小小的修改
<!--more-->
首先要准备的当然是原版安装包了，由于手机已经root，就直接到/data/app/in.zhaoj.shadowsocksrr中提取出安装包来

然后使用安卓反编译神器MT管理器查看安装包，结构如下

<img src="https://wx1.sinaimg.cn/large/006btIwUly1frmev6dkqmj30u01hc7ic.jpg" width="75%" height="75%"></img>

使用Dex编辑器++打开classes.dex

查找资料得知安卓app禁止截图实现的方式就是在setContentView()方法前加上:getWindow().setFlags(LayoutParams.FLAG_SECURE,LayoutParams.FLAG_SECURE); 
意思就是设置了这个flag后, 系统会把当前窗口的内容视为安全隐私内容, 系统会阻止这些内容被截屏或者在不安全可靠的场景显示出来.

这个flag可以实现以下功能:

阻止屏幕截图

在Recent apps(任务切换界面)中只显示应用名字和图标, 不显示内容

Google App的Now on tap功能不会去分析你的页面的内容


所以直接在编辑器里搜索setFlags，如下图所示

<img src="https://wx4.sinaimg.cn/large/006btIwUly1frmev70h0ej30u01hcaei.jpg" width="75%" height="75%"></img>

根据包名和类名可以判断出应该是在ProfileManagerActivity或者Shadowsocks中实现的，因为除此之外的类都是核心库或者服务类。

打开Shadowsocks类，得到smali代码，感觉smali代码看起来不形象，于是将其转换为Java代码，搜索setFlags得到如下代码

<img src="https://wx1.sinaimg.cn/large/006btIwUly1frmev4cuh6j30u01hc4h7.jpg" width="75%" height="75%"></img>

至此可以确定禁止截图就是它在发挥作用了，然后回到修改smali代码的界面，搜索setFlags，删除如下所示的代码

<img src="https://wx2.sinaimg.cn/large/006btIwUly1frmev517vlj30u01hc14p.jpg" width="75%" height="75%"></img>

然后保存退出，在编辑器界面编译，之后替换dex文件，签名安装包安装

打开主界面截图，发现可以截图了，切换到配置文件列表截图发现仍不能截图

<img src="https://wx3.sinaimg.cn/large/006btIwUly1frmev5toxwj30u01hcqfj.jpg" width="75%" height="75%"></img>

于是按照刚才的方法修改ProfileManagerActivity类中对应的代码，编译、签名，至此大功告成







