---
title: NexT主题修改圆角头像
date: 2018-05-24 19:48:49
tags: 前端笔记
categories: 前端笔记
---
修改圆角头像之前应先将头像开关打开，编辑主题配置文件next/_config.yml，修改字段avatar，值设置成头像的链接地址。<!--more-->其中，头像的链接地址可以是:
<table class="table table-condensed table-striped table-bordered table-hover"><thead><tr><th>地址</th><th>值</th></tr></thead><tr><td>完整的互联网 URI</td><td><code>https://wx4.sinaimg.cn/large/006btIwUly1frlbyhddakj30zk0zkkjm.jpg</code></td><tr><td>站点内的地址</td><td><p>将头像放置主题目录下的  <code>source/uploads/</code> （新建 uploads 目录若不存在）<配置为：<code>avatar: /uploads/avatar.png</code><p>或者放置在<code>source/images/</code>目录下<br>配置为：<code>avatar: /images/avatar.png</code></p></td></tbody></table>然后在 \themes\next\source\css\_common\components\sidebar\sidebar-author.styl 里添加如下代码
```
.site-author-image {
  display: block;
  margin: 0 auto;
  padding: $site-author-image-padding;
  max-width: $site-author-image-width;
  height: $site-author-image-height;
  border: $site-author-image-border-width solid $site-author-image-border-color;

  /* 头像圆形 */
  border-radius: 80px;
  -webkit-border-radius: 80px;
  -moz-border-radius: 80px;
  box-shadow: inset 0 -1px 0 #333sf;
}
.site-author-image{
  display: block;
  margin: 0 auto;
  padding: 2px;
  max-width: 120px;
  height: auto;
  border: 1px solid #eee;
  opacity: 1
}
.site-author-image{
  border-radius:70%;
  padding:2px;
  border:1px solid #eee;
  animation:cycle 1s .5s forwards;
  transition:border-radius 2s
}
.site-author-image:hover{
  border-radius:0;
  border:1px solid #eee
}
```