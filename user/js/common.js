    var serId = sessionStorage.getItem('infoId');
    var isLogin=sessionStorage.getItem('isLogin');
    // console.log(sessionStorage.getItem('isLogin'))
    if(isLogin!=='true') {
        window.parent.location.href='/';
    }

var companyname = sessionStorage.getItem('companyname');
var companynumber = sessionStorage.getItem('companynumber');
layui.use(['layer'], function(){
    $ = layui.jquery;
     var layer = layui.layer
     $("#companyName").html(companyname);
    $('#companyNumber').html(companynumber);
});
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


