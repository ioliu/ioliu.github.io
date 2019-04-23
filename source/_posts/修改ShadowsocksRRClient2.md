---
title: 记第二次修改ShadowsocksRR安卓客户端
date: 2018-05-23 22:45:05
tags: 安卓相关
categories: 安卓相关
---
可以截图的ShadowsocksRR还不能满足我的使用需要，由于原版ShadowsocksR的粉色太过诱惑，用来科技上网的时候很容易控制不住，于是准备动手修改它的配色
<!--more-->
根据以前写android的经验，布局的配色往往在layout里定义，常用的一种就是采用ID来指定颜色，打包apk后，资源ID信息存储在安装包根目录的resources.arsc中

于是使用MT管理器打开该arsc文件，选择arsc编辑器，点击包名，发现其定义了以下几种资源

<img src="https://wx1.sinaimg.cn/large/006btIwUly1frmf0ldygsj30u01jrjvw.jpg" width="75%" height="75%"></img>

在color中很容易地找到了主界面的三种颜色，将其修改为FF66CCFF(天依蓝)

<img src="https://wx3.sinaimg.cn/large/006btIwUly1frmf0m3gg8j30u01hc7bx.jpg" width="75%" height="75%"></img>

保存、替换、签名、安装，发现连接服务器时小飞机的图标颜色未变，然后再次编辑arsc，仔细排查，并且使用PStouch修改了APP对外显示的图标颜色，最终效果如下

<img src="https://wx1.sinaimg.cn/large/006btIwUly1frmf0mxg48j30u01hcqfx.jpg" width="75%" height="75%"></img>
<img src="https://wx3.sinaimg.cn/large/006btIwUly1frmf0nk5pbj30u01hctey.jpg" width="75%" height="75%"></img>








