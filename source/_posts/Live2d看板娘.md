---
title: 使用自定义Hexo看板娘
date: 2018-07-20 10:34:41
tags: 前端笔记
categories: 前端笔记
---
向你的HEXO里放上一只萌萌哒二次元看板娘！
<!--more-->
首先安装Hexo插件 `npm install --save hexo-helper-live2d`
然后安装想要使用的模型插件 例如 `npm install --save live2d-widget-model-miku`
然后向`_config.yml`中添加配置
```
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  debug: false
  model:
    use: live2d-widget-model-miku
  display:
    position: right
    width: 150
    height: 300
  mobile:
    show: true
```
若要使用自定义的模型，则需要在根目录下创建一个live2d_models文件夹，再从其中新建一个子文件夹(自己的模型名称)，再将所有模型文件复制进去，并且修改目录结构与模型插件相对应，例如
子文件夹内应有`blood.model.json`、`blood.physics.json`、`xxx.moc`、`mtn`、`xxx.2048`以及使用的模型json文件中定义的目录和文件对应的相对位置
我的`_config.yml`配置：
```
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  model:
    use: blood
    #live2d-widget-model-hijiki
    hHeadPos: 0.5
    vHeadPos: 0.618
  display:
    width: 220
    height: 370
    position: right
    hOffset: -120
    vOffset: -130
  mobile:
    show: true
    scale: 0.2
```
本站使用的live2d模型来自[哔哩哔哩UP主Neko_kk](https://www.bilibili.com/video/av26797001)
