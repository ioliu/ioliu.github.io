---
title: apk文件的简单解释
date: 2018-10-18 20:59:18
tags: 
- Test
- 安卓相关
categories: 安卓相关
---
　　<center>好久没发博客了，随便写点占个坑，还好我还记得密码和操作</center>
![](https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=804004031,3612180739&fm=85&s=10106C32CBF950924C48847F03001063)
<!--more-->
　　APK，通俗的讲就是安卓系统的软件安装包，即Android Application Package。安卓开发者开发完一个app后，IDE会将app运行需要的资源文件、代码、配置清单全部打包到一个.apk文件中，你可能会发现，apk文件可以使用zip方式打开，因为其本质上就是一个zip文件。
　　使用具有查看zip压缩包功能的文件浏览器打开任何一个完整的apk文件，会发现其中会有这几种文件：AndroidMainfest.xml、classes.dex、resources.arsc，以及这几个文件夹：assets、lib、res、META-INF，复杂一些的apk可能有其他的文件，用于实现一些特定的功能
![](https://wx4.sinaimg.cn/large/006btIwUly1fwcog9rafuj30k00zk79p.jpg)
　　如上图，右边一栏是Chrome浏览器的安装包内容，左边一栏是网易云音乐的安装包内容
　　Chrome安装包中的文件格式基本上是大部分apk文件中都有的。
　　assets文件夹中存放一些静态资源、配置文件，比如一些编译好了的二进制文件、应用内需要离线展示的html或md文件、js脚本。lib文件夹中存放一些库文件，这些库文件多是.so格式，是C语言库，用于对不同架构的cpu进行适配。META-INF文件夹中包含该安装包的签名信息，每一个app都需要签名才能正常安装并运行（除非使用了核心破解），如果你希望该app能无缝升级（不需要卸载原有app），必须安装具有相同证书签名的apk文件，否则会显示应用程序未安装。res文件夹中存放一些媒体资源和app布局定义，app运行时需要显示的一些图片、音乐都存放在此文件夹中，以及app中按钮、输入框、图片等信息的布局。AndroidMainfest.xml定义了应用程序的名字、版本、权限、引用的库文件等等信息，是每个apk应用程序必须包含的文件。classes.dex文件是java源码编译后生成的java字节码文件，dex是Dalvik VM executes的全称，即Android Dalvik执行程序，利用解析工具可以将其转换成java来加以阅读和理解。resources.arsc是编译后的二进制资源文件，一般情况下，app运行时显示的一些文本信息、res中资源文件的ID信息存放在此文件中。
　　

