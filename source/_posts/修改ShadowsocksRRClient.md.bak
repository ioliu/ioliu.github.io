---
title: 记第三次修改ShadowsocksRR安卓客户端
date: 2018-05-23 23:10:05
tags: 安卓相关
categories: 安卓相关
---
修改后的SSRR客户端显得清新了许多，但是由于是提供给从未接触过科技上网的小白使用，SSR是一个工具，没有配置文件还是不能科技上网，网上有一些免费的订阅链接，如果能够在apk安装好直接就能用岂不是非常方便
<!--more-->
于是再次拆包，使用Dex编辑器++搜索apk本身自带的示例链接和默认DNS，将其替换为自己搜罗到的免费订阅连接和<a href="https://puredns.cn">PureDNS</a>

<img src="https://wx3.sinaimg.cn/large/006btIwUly1frmf37ruu9j30u01hcqgw.jpg" width="75%" height="75%"></img>
<img src="https://wx3.sinaimg.cn/large/006btIwUly1frmf38qbi7j30u01hc7kf.jpg" width="75%" height="75%"></img>

顺手找到主界面对应的布局文件res/xml/pref_all.xml修改密码输入框的属性

``` 
<com.github.shadowsocks.preferences.PasswordEditTextPreference
            android:persistent="false"
            android:title="@string/sitekey"
            android:key="sitekey"
            android:summary="@string/sitekey_summary"
            android:inputType="textPassword" />
```

删掉android:inputType使密码可以直接查看而不再以*显示

保存、编译、签名安装，得到目前正在使用的终极版本(修改了包名，所以可以与原版共存)

最后附上修改完的SSRR客户端和SS客户端的下载地址

提取密码: j7s8

下载链接: <a href="https://pan.baidu.com/s/1WLMzskMAIj8yJllYJxnRHQ">百度网盘</a> 
