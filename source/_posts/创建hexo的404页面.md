---
title: Hexo 404 页面的创建
date: 2018-05-25 09:18:12
tags: 前端笔记
categories: 前端笔记
---
由于hexo是部署在GithubPages空间里的，GithubPages创建404页面只需要在仓库根目录上传名为404.html的文件即可；但是由于每次deploy后都会把仓库的所有不存在于本地的文件替换掉，所以需要把404页面放在hexo主题目录的source文件夹下，例如我需要把CNAME和404.html放在 F:\HEXO\themes\next\source 目录下<!--more-->

另外也可以在source文件夹下创建其他文件和文件夹，这样执行hexo deploy后，这些文件和文件夹会一并上传到仓库

404页面的内容可以自己定制也可以使用第三方如腾讯公益
本站使用了文字敲出的效果，js实现
```
	<body onload="type()">
		<div align="center">
			<script language="javascript">
				text = "<b>秋名山上行人稀，常有车手较高低。<br>如今车道依旧在，不见当年老司机。</b>";
				i = 0;
					function type(){ 
					str = text.substr(0,i);
					txt.innerHTML = str + "_"; //前一个字符出现后在后面跟一个下划线
					i++;
					if (i>text.length)window.location = "https://leave.ren";	//效果结束后跳转到首页
					setTimeout("type()",150);	//用于设置敲出字符的时间间隔
					}
			</script>
			<div 
				id="txt"><b>秋名山上行人稀，常有车手较高低。<br>如今车道依旧在，不见当年老司机。</b>
			</div>
			<div>
				<p align="center"><b>你要访问的页面不存在<br>正在前往首页<br>By_何处似樽前</b></p>
			</div>
		</div>
	</body>
```
本站404页面的地址<a href="/404.html">点击此处</a>