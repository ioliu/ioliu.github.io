---
title: 解决IDEA报无效的发行源版
date: 2018-07-25 11:09:00
tags: 
- Linux
- 折(作)腾(死)日记
categories: 折(作)腾(死)日记
---
在Linux中使用idea运行spring项目时出现java:无效的发行源版1.9。本以为是不支持自带的openjdk，修改ProjectSDK为JDK8后仍报此错误
解决办法：在ProjectStructure中修改ProjectLanguageLevel与目前使用的jdk版本对应
使用的是Linux自带的openjdk1.8，所以修改为8-Lambdas,type annotations
