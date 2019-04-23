---
title: 在hexo上使用cPlayer播放器
date: 2018-06-12 20:50:11
tags: 
- 前端笔记
- 喜欢的歌曲
categories: 前端笔记
---
之前使用网易云的iframe音乐外链，引入的音乐不能自动播放，而且有一部分歌曲因为版权原因也禁止生成外链；

尝试使用获取到的歌曲的id并将其替换到iframe中，虽然iframe上显示歌曲的名字和歌手，但是却无法播放，点击播放根本没有反应，所以就跟没引用一样，使用非常不方便

在百度上找到一款H5播放器 cplayer 支持双语歌词显示，顺序播放，随机播放，单曲循环，音量调整，shadow dom等等操作；有对应的hexo插件可以直接使用<!--more-->

具体做法 在Hexo根目录执行`npm install hexo-tag-cplayer --save`在博文中添加以下代码便可使用

```YAML
<center>
{% cplayer autoplay %}
- name: 中华粘土娘 # 自定义歌曲名
  artist: 三无Marblue # 自定义歌曲名
  poster: https://p1.music.126.net/naihNDWAJXSxy7UE3XVKEg==/17692241602844445.jpg # 音乐海报
  src: https://music.163.com/song/media/outer/url?id=33497436.mp3 # 音乐资源链接
  volume: 0.5
- 33497436 # 也可以直接使用网易云音乐 ID
{% endcplayer %}
</center>
```
<center>**效果如下**</center>
<center>{% cplayer autoplay %}
- name: 中华粘土娘 # 自定义歌曲名
  artist: 三无Marblue # 自定义歌曲名
  poster: https://p1.music.126.net/naihNDWAJXSxy7UE3XVKEg==/17692241602844445.jpg # 音乐海报
  src: https://music.163.com/song/media/outer/url?id=33497436.mp3 # 音乐资源链接
- 33497436 # 也可以直接使用网易云音乐 ID
{% endcplayer %}</center>
