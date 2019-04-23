---
title: Hexo发布带有本地图片的博文
date: 2018-05-23 09:12:54
tags: 
- 喜欢的歌曲
- Test
categories: Test
---
测试第一个带图片的hexo博文
<!--more-->
<img src="/upload/nv.jpg" title="图片为三无MarBlue的寄明月单曲封面" width="50%" height="50%"/><img src="/upload/nan.jpg" title="自己P的情侣头像" width="50%" height="50%"/>
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=365 height=86 src="https://music.163.com/outchain/player?type=2&id=529316794&auto=1&height=66"></iframe>
由于图片体积太大而github仓库的国内访问速度太慢，今后的图片都使用新浪微博作为网络图源
hexo博文插入图片方法

```
{% asset_img nan.jpg 这是一个新的博客的图片的说明 %}
<img src="https://leave.ren/nan.jpg" width="50%" height="50%"/>
<img src="src" title="这是一个新的博客的图片的说明" width="50%" height="50%"/>
```

直接在图片后面加上对应的CSS样式即可!
```
[test image size](url)
```
改写为
```
![test image size](url){:class="img-responsive"}
![test image size](url){:height="50%" width="50%"}
![test image size](url){:height="100px" width="400px"}
```
