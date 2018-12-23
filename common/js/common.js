var serId = sessionStorage.getItem('infoId');
var isLogin = sessionStorage.getItem('isLogin');
// console.log(sessionStorage.getItem('isLogin'))
if (isLogin !== 'true') {
    window.parent.location.href = '/';
}

var companyname = sessionStorage.getItem('companyname');
var companynumber = sessionStorage.getItem('companynumber');
layui.use(['layer'], function () {
    $ = layui.jquery;
    var layer = layui.layer
    $("#companyName").html(companyname);
    $('#companyNumber').html(companynumber);
});

for (var i = 0; i < document.querySelectorAll('input[type="text"]').length; i++) {
    document.querySelectorAll('input[type="text"]')[i].addEventListener('mouseover', function () {
        var placeholder = this.getAttribute('placeholder') || ""
        if (placeholder == "") {
            return
        }
        layer.tips(placeholder, this, {
            tips: [1, '#333333']
        });
    })
}
for (var i = 0; i < document.querySelectorAll('textarea').length; i++) {
    document.querySelectorAll('textarea')[i].addEventListener('mouseover', function () {
        var placeholder = this.getAttribute('placeholder') || ""
        if (placeholder == "") {
            return
        }
        layer.tips(placeholder, this, {
            tips: [1, '#333333']
        });
    })
}