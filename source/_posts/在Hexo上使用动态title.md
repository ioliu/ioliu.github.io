---
title: Hexo为所有页面添加动态title
date: 2018-05-30 21:00:16
tags: 前端笔记
categories: 前端笔记
---
动态title的效果为当浏览器展示的标签页不是目标页时，目标页的网页标题改变，当切换回目标页时，网页的标题再次改变，可通过js脚本实现<!--more-->
对于hexo，最好将此js保存为文件，然后放在主题的js目录中，例如我的是F:\HEXO\themes\next\source\js\src\dynamic-title.js
```javascript
<!--崩溃欺骗-->
var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/img/TEP.ico");
		//动态更改图标
         document.title = '╭(°A°`)╮ 页面崩溃啦 ~ |何处似樽前';
         clearTimeout(titleTime);
     }
     else {
        // $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 噫又好了~' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 3000);
     }
 });
 ```
 或者你也可以<a href="/src/js/dynamic-title.js">点击下载</a>
 由于这个js文件是自己定义的，所以如果要让其在页面中生效，需要在layout.swig中引入；与引入鼠标点击出现小红心的方式相同，打开主题目录中的layout/_layout.swig文件，在最下面添加
```html
<script type="text/javascript" src="/js/src/dynamic-title.js" ></script>
```
然后执行hexo clean&&hexo g&&hexo s，打开<a href="http://localhost:4000">localhost:4000</a>就可以看到效果了