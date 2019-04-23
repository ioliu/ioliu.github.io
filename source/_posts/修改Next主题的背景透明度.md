---
title: NexT主题修改背景白色透明度
date: 2018-06-03 15:40:49
tags: 前端笔记
categories: 前端笔记
---
NexT主题的各版块是纯白色的，这样给站点加上背景特效后，一些板块是不会显示特效的，因为被白色覆盖了，可以通过修改板块的背景样式为透明来让它显示特效。
<!--more--><iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="https://music.163.com/outchain/player?type=2&id=31721697&auto=1&height=66"></iframe>
# 修改背景图
在`themes/next/source/css/_custom/custom.styl`中添加如下代码：
```
body{
    background:url(/images/bg4.jpg); //设置背景图
    background-size:cover;  //规定背景图像的尺寸
    background-repeat:repeat;  
	//设置是否及如何重复背景图像
	//repeat是背景图像将在垂直方向和水平方向重复
    background-attachment:fixed;  
	//设置背景图像是否固定或者随着页面的其余部分滚动
	//fixed的作用是当页面的其余部分滚动时，背景图像不会移动
    background-position:center;  //设置背景图像的起始位置
}
```
# 各版块透明度修改
## 内容板块透明
博客根目录`themes\next\source\css\_schemes\Pisces\_layout.styl`文件`.content-wrap`标签下`background: white`修改为：
`background: rgba(255,255,255,0.5);` //0.5是透明度
## 菜单栏背景
博客根目录`themes\next\source\css\_schemes\Pisces\_layout.styl`文件`.header-inner`标签下`background: white`修改为：
`background: rgba(255,255,255,0.5);`
## 站点概况背景
博客根目录`themes\next\source\css\_schemes\Pisces\_sidebar.styl`文件`.sidebar-inner`标签下`background: white`修改为：
`background: rgba(255,255,255,0.5);`
然后修改博客根目录`themes\next\source\css\_schemes\Pisces\_layout.styl`文件`.sidebar`标签下`background: $body-bg-color`修改为：
`background: rgba(255,255,255,0.5);`
## 按钮背景
博客根目录`themes\next\source\css\_common\components\post\post-button.styl`同上修改对应位置为`background: transparent;`
## 页数导航背景
博客根目录`themes\next\source\css\_schemes\Gemini\index.styl`搜索`pagination`，修改此标签下background属性`background: rgba(255,255,255,0.5);`
如果你使用的是其他的主题，不止需要这样修改，还要修改你使用的主题目录里对应的标签下的属性，例如本站使用Gemini主题，还需要修改`themes\next\source\css\_schemes\Gemini\index.styl `文件中对应的标签`.post-block`  `.comments`  `.pagination`的background属性
