---
title: 手机QQ安卓v7.6.3的“彩蛋”
date: 2018-05-30 09:16:11
tags: 安卓相关
categories: 安卓相关
---
5月28日，部分安卓QQ用户发现，只要在“菜刀”表情和“心碎”表情中间加一个特殊的英文半角符号，比如等号、加号等，再点击发送就会自动生成为骂人的话。<!--more-->
<img src="http://5b0988e595225.cdn.sohucs.com/images/20180528/3a416fe0e6bf40ca88ecf1d7af122e55.jpeg" width="65%" height="65%" />以下为手机QQ回应全文：
<blockquote>5月28日下午，我们收到网友对QQ表情存在“彩蛋”的反馈。经排查，该现象属于产品BUG，受影响的为安卓版本，不涉及iOS等其他版本。我们预计于今晚完成修复，届时，安卓用户在重新登录QQ后就可正常使用。对于此事给大家造成的困扰，我们深表歉意。</blockquote>
在QQ安卓版7.6.3安装包的classes2.dex中搜索其中一句骂人的话，得到此bug对应的源码，发现原来不止图上这几句，类名叫LoveLanguageConfig，猜测是腾讯的程序员想把骂人的话转成表情，结果写反了
```java
//
// Decompiled by Jadx - 1010ms
//
package com.tencent.mobileqq.lovelanguage;

import android.text.TextUtils;

/* compiled from: ProGuard */
public class LoveLanguageConfig {
    public static final int[] a = new int[]{
    0x7f02070c, 0x7f02070d, 0x7f020718, 0x7f02071f, 0x7f020720, 0x7f020721, 0x7f020722, 0x7f020723, 0x7f020724, 0x7f020725, 0x7f020725, 0x7f02070f, 0x7f020710, 0x7f020711, 0x7f020712, 0x7f020713, 0x7f020714, 0x7f020715, 0x7f020716, 0x7f020717, 0x7f020719, 0x7f02071a, 0x7f02071b, 0x7f02071c, 0x7f02071d, 0x7f02071e, 0x7f020717, 0x7f02071a, 0x7f02070c, 0x7f02070c, 0x7f02070d, 0x7f02070d, 0x7f020718, 0x7f02071f, 0x7f020720, 0x7f02071a, 0x7f02071a, 0x7f02071a, 0x7f02071a, 0x7f02071a, 0x7f020721, 0x7f020722, 0x7f020722, 0x7f020722, 0x7f02070e, 0x7f02070e, 0x7f02070f, 0x7f020711, 0x7f020712, 0x7f020712, 0x7f020712, 0x7f020714, 0x7f020715, 0x7f020716, 0x7f020716, 0x7f020724, 0x7f02071b, 0x7f02071c, 0x7f02071c, 0x7f02071c, 0x7f020719, 0x7f020719, 0x7f02071e, 0x7f02071e, 0x7f020713, 0x7f02070e, 0x7f02071a
    };
    public static final String[] f0a = new String[]{
    "asshole", "bitch", "damn you", "fuck", "go to hell", "shit", "爆菊", "碧莲", "婊子", "草泥马", "尼玛", "丢你老母", "法克鱿", "狗屁", "滚蛋", "绿茶婊", "去你大爷", "去你妈的", "我去你妹", "死胖子", "日你妈", "弱智", "他妈的", "王八蛋", "我靠", "猪一样", "fatty", "idiot", "菊花残", "没屁眼", "臭婊砸", "贱逼", "该死的", "操你", "去死吧", "白痴", "傻瓜", "痴线", "傻屌", "傻逼", "吃屎", "捅你菊花", "插你菊花", "屁眼交易", "卧槽", "我操", "丢雷老母", "狗屎", "混蛋", "操蛋", "妈蛋", "老不死", "你妈逼", "干你妹的", "操你妹的", "表要脸", "去他喵的", "龟儿子", "老王八", "龟孙", "我日", "狗日的", "猪脑", "猪头", "心机婊", "我草", "脑残"
    };

    public static int a(char c) {
        return c - 30;
    }

    public static int a(int i) {
        return i + 30;
    }

    public static String a(int i, String str) {
        if (i >= 0 || i < a.length) {
            int i2;
            int i3;
            if ((i >= 0 && i <= 5) || i == 26 || i == 27) {
                i2 = 64;
                i3 = 64;
                for (int i4 = 0; i4 < str.length(); i4++) {
                    if (Character.isUpperCase(str.charAt(i4))) {
                        if (i4 < 6) {
                            i3 |= 1 << ((6 - i4) - 1);
                        } else {
                            i2 |= 1 << ((12 - i4) - 1);
                        }
                    }
                }
            } else {
                i2 = 64;
                i3 = 64;
            }
            return String.valueOf(new char[]{'\u0011', (char) a(i), (char) i3, (char) i2});
        }
        throw new IllegalArgumentException("love language invalid index: " + i);
    }

    public static String a(String str) {
        int a = a(str.charAt(1));
        String str2 = f0a[a];
        char charAt = str.charAt(2);
        char charAt2 = str.charAt(3);
        StringBuilder stringBuilder = new StringBuilder(10);
        if ((a < 0 || a > 5) && a != 26 && a != 27) {
            return str2;
        }
        a = 0;
        while (a < str2.length()) {
            int i;
            if (a < 6) {
                i = (6 - a) - 1;
                i = ((1 << i) & charAt) >> i;
            } else {
                i = (12 - a) - 1;
                i = ((1 << i) & charAt2) >> i;
            }
            stringBuilder.append(i == 1 ? (char) (str2.charAt(a) - 32) : str2.charAt(a));
            a++;
        }
        return stringBuilder.toString();
    }

    public static boolean m0a(char c) {
        return c >= '\u001e' && c < f0a.length + 30;
    }

    public static boolean m1a(String str) {
        return (TextUtils.isEmpty(str) || -1 == str.indexOf(17)) ? false : true;
    }
}
```