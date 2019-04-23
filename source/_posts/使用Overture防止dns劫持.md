---
title: Windows上使用OverTure防DNS劫持(可上P站Tumblr等)
date: 2018-07-18 13:35:41
tags: 服务器相关
categories: 服务器相关
---
之前一直有一个未解决的问题，就是纯净DNS在Windows上的使用，现在很多地方的运营商都采用了53端口抢答实现DNS劫持；并且学校屏蔽 53端口绕过验证 的方法也是在出口上加防火墙规则，只允许其规定的IP（114DNS以及各运营商DNS）出/入站
<!--more-->
![校园网nslookup测试](https://wx4.sinaimg.cn/large/006btIwUly1ftdzvyhfrpj30fv0ouwlq.jpg)
因此，在Windows上仅仅修改了IPV4配置是没有效果的，校园网根本不允许通过53端口与白名单以外的IP通讯
所以只能使用非标端口的DNS，但是在Windows上，dns查询所使用的端口默认的就是53，而且修改默认规则非常不方便，因为要考虑到其他使用环境下非标端口可能不能使用
经过一番学习，了解到可以使用Overture在本地搭建一个递归DNS服务器，意思就是让本机成为一个DNS服务器，然后把本机的DNS服务器设置为127.0.0.1就可以了
原理很简单，本机向localhost:53（本地的Overture服务器）请求DNS查询，由于是本地的53端口，校园网无法干涉到；然后本地的Overture服务器通过非标端口向其他DNS服务器递归查询
Overture的配置文件里可以对本地DNS进行一些DIY
```json
{
  "BindAddress": ":53",
  "PrimaryDNS": [
    {
      "Name": "DNSPod",
      "Address": "123.207.13.111:443",
      "Protocol": "udp",
      "SOCKS5Address": "",
      "Timeout": 3,
      "EDNSClientSubnet": {
        "Policy": "disable",
        "ExternalIP": ""
      }
    }
  ],
  "AlternativeDNS": [
    {
      "Name": "OpenDNS",
      "Address": "193.112.15.186:2323",
      "Protocol": "udp",
      "SOCKS5Address": "",
      "Timeout": 3,
      "EDNSClientSubnet": {
        "Policy": "disable",
        "ExternalIP": ""
      }
    }
  ],
  "OnlyPrimaryDNS": false,
  "RedirectIPv6Record": false,
  "IPNetworkFile": "./ip_network_sample",
  "DomainFile": "./domain_sample",
  "DomainBase64Decode": true,
  "HostsFile": "C:/Windows/System32/drivers/etc/hosts",
  "MinimumTTL": 0,
  "CacheSize" : 0,
  "RejectQtype": [255]
}
```
例如可以更改DNS的端口、使用tcp查询、设置超时时间等
其中EDNSClientSubnet是谷歌提交的一份DNS扩展协议，允许DNS resolver传递用户的ip地址给authoritative DNS server，如果CDN的DNS支持该协议，就可以获取用户真实的IP地址，进行准确的调度。
另外，既然使用了非标DNS，为了保证解析的准确性，此时可以把"domain_sample"中的内容删去了，使用自己定义的非标DNS查询其真实结果就可以；建议把HostsFile修改为本系统的Hosts文件路径，这样解析所用到的hosts就是自己系统的hosts
该文件相当于一个GFWList，用于对被GFW屏蔽的域名进行特殊的解析，但是貌似现在解析出来的结果也被GFW污染了
Overture在Windows上使用有个不方便的地方，就是运行之后会常驻一个cmd的窗口，我们可以采用win10自带的手段将其隐藏起来，让他后台运行
![overture的常驻窗口](https://wx4.sinaimg.cn/large/006btIwUly1ftdzvy3p3wj30rd06xwev.jpg)
首先在Overture的目录中新建一个powershell的文件，名为"Start.ps1"，用文本方式打开，编辑内容为
```
Start-Process -WindowStyle hidden -FilePath H:\Mr.Liu\Desktop\overture-windows-amd64\overture.exe
```
-FilePath 后面是overture所在的路径
然后再从目录里新建一个Start.cmd文件，用于运行上面那段powershell命令，编辑内容为
```
powershell -executionPolicy bypass -file h:\Mr.Liu\Desktop\overture-windows-amd64\Start.ps1
```
这两个文件都必须保存在overture所在目录下面，需要使用overture的时候直接运行start.cmd即可，此时overture会运行在后台，在任务管理器里可以看到
另外，不要忘了更改本机的dns配置为127.0.0.1