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