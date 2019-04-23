---
title: 更换Valine评论系统的js地址
date: 2018-06-24 22:43:41
tags: 前端笔记
categories: 前端笔记
---
有时打开Hexo会感觉到加载特别慢，偶然一次看到左下角显示正在等待[unpkg.com](http://unpkg.com)的响应，打开发现是一个公共CDN节点，但是为什么会出现在我的Hexo网页中呢<!--more-->
审查元素，搜索该关键字，得到这样一段代码
```javascript
  <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
  <script src="//unpkg.com/valine/dist/Valine.min.js"></script>
```
很明显这是Valine评论系统所需的js文件，next主题的作者通过引用外部js来优化打开速度（本意可能是这样吧）
但是在[站长之家](http://tool.chinaz.com/dns/)检测了一下，结果如下
![DNS测试结果](https://wx1.sinaimg.cn/large/006btIwUly1fsmo17hy6ej30th0mt75p.jpg)
清一色全是美国CloudFlare，怪不得打开慢
在网上找了一个比较快的Valine的公共CDN，修改办法
打开NexT主题目录下的` \layout\_third-party\comments`，我的完整路径为`F:\HEXO\themes\next\layout\_third-party\comments`
找到`valine.swig`编辑其内容，修改
` <script src="//unpkg.com/valine/dist/Valine.min.js"></script>`为
`<script src="//cdn.jsdelivr.net/npm/valine@latest/dist/Valine.min.js"></script>`