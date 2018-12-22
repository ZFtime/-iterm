<?php 
session_start();
$uid = isset($_SESSION['think']['uid'])?$_SESSION['think']['uid']:'';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <title>企证通</title>
    <link rel="stylesheet" href="/static/css/common.css">
    <link rel="stylesheet" href="/static/css/bootstrap.css">
    <!-- <link rel="stylesheet" href="./css/bootstrap-theme.min.css"> -->
    <link rel="stylesheet" href="/static/css/index.css">
</head>

<body>
    <!-- 登陆弹出层 -->
    <div class="login none">
        <div class="k">
            <div class="qr-img">

            </div>
            <div class="sys">
                请打开微信扫一扫，自动登录注册
                <!-- <br/>如没有微信，请点击<a href="#" style="color: #3BA7FF;">手动注册</a> -->
            </div>
        </div>
    </div>
    <!-- 导航开始 -->
    <div class="Index_nav">
        <nav class="navbar navbar-inverse navbar-fixed-top Index_container">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="/">
                        <img src="/static/img/logo.png" alt="企证通logo">

                    </a>
                    <div class="logo-word">
                        <img src="/static/img/logo-word.png" alt="企证通文字">
                    </div>

                </div>
                <div id="navbar" class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <ul class="nav navbar-nav col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">企业信息<span class="caret"></span></a>
                            <ul class="dropdown-menu" style="left: -24px;">
                                <li><a href="#">企业信息查询</a></li>
                                <li><a href="#">经营许可证查询</a></li>
                                <li><a href="#">其他查询工具</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">知识产权 <span class="caret"></span></a>
                            <ul class="dropdown-menu" style="left: -24px;">
                                <li><a href="#">注册商标查询</a></li>
                                <li><a href="#">专利信息查询</a></li>
                                <li><a href="#">其他信息查询工具</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">其他工具查询 <span class="caret"></span></a>
                            <ul class="dropdown-menu" style="left: -4px;">
                                <li><a href="#">股权信息查询</a></li>
                                <li><a href="#">网站备案查询</a></li>
                                <li><a href="#">其他查询工具</a></li>
                            </ul>
                        </li>
                        <li class="last_child col-sm-offset-2  col-md-offset-3 col-lg-offset-5" id="login-btn">
                            <a href="#" class="dropdown-toggle login-btn" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">登录 <span class="caret"></span></a>
                        </li>
                        <li class="dropdown last_child col-sm-offset-2  col-md-offset-3 col-lg-offset-5" id="logged"
                            style="display:none">
                            <a href="/user/index.html" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false" id="loginUsername"><span class="caret"></span></a>
                            <ul class="dropdown-menu" style="left: -4px;">
                                <li><a href="/user/index.html">会员中心</a></li>
                                <li><a href="javascript:;" class="exitAdmin">退出</a></li>
                            </ul>
                        </li>

                        <!-- <li class="last_child col-sm-offset-2  col-md-offset-3 col-lg-offset-6">
                <a href="#" class="dropdown-toggle login-btn" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false" href="javascript:;">登录</a>
                    <a href="">注册</a>
                    </li> -->

                        <!--  <li class="fr reg-login">
                    <a href="#" class="login-btn" id="login-btn" href="javascript:;">登录</a>
                    <a  href="/user/index.html" id="btn"   style="display:none !important">会员</a>
                    <a  href="#" id="login_out"   style="display:none !important">退出</a>
                    </li> -->
                        <!--      <li class="uname">
                    欢迎您：{$uname}
                    <span class="logout">退出</span>
                    </li>   -->
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </nav>
    </div>
    <input type="hidden" id="uid" value="<?php echo $uid;?>">
    <!-- 导航结束 -->
    <!-- 内容开始 -->
        <div class="Index_banner container marketing">
            <h2>
                <p class="text-center">企业信息查询导航</p>
            </h2>
            <div class="row clearfix">
                <div class="col-sm-6 col-md-4 Index_div">
                    <a href="javascript:;" target="_blank">
                        <img class="img-circle" src="/static/img/home_01.png" alt="企业信息查询" width="70" height="70">
                        <h2>企业信息查询</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div">
                    <a href="https://jingyingxukezheng.com" target="_blank">
                        <img class="img-circle" src="/static/img/home_02.png" alt="经营许可证查询" width="70" height="70">
                        <h2>经营许可证查询</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div" style="display:none">
                    <a href="javascript:;" target="_blank">
                        <img class="img-circle" src="/static/img/home_03.png" alt="其他查询工具" width="70" height="70">
                        <h2>其他查询工具</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div">
                    <a href="javascript:;" target="_blank">
                        <img class="img-circle" src="/static/img/home_04.png" alt="专利信息查询" width="70" height="70">
                        <h2>专利信息查询</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div">
                    <a href="https://chashangbiao.net" target="_blank">
                        <img class="img-circle" src="/static/img/home_05.png" alt="注册商标查询" width="70" height="70">
                        <h2>注册商标查询</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div" style="display:none">
                    <a href="javascript:;" target="_blank">
                        <img class="img-circle" src="/static/img/home_03.png" alt="其他查询工具" width="70" height="70">
                        <h2>其他查询工具</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div">
                    <a href="javascript:;" target="_blank">
                        <img class="img-circle" src="/static/img/home_06.png" alt="追股权查询" width="70" height="70" id="guquan">
                        <h2>追股权查询</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div">
                    <a href="https://beiancha.cn" target="_blank">
                        <img class="img-circle" src="/static/img/home_07.png" alt="网站备案查询" width="70" height="70">
                        <h2>网站备案查询</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
                <div class="col-sm-6 col-md-4 Index_div" style="display:none">
                    <a href="javascript:;" target="_blank">
                        <img class="img-circle" src="/static/img/home_03.png" alt="其他查询工具" width="70" height="70">
                        <h2>其他查询工具</h2>
                    </a>
                </div><!-- /.col-lg-4 -->
            </div>
        </div>
    <!-- 内容结束 -->
    <!-- 尾部开始 -->
    <footer>
        <div class="footer_box col-lg-12">
            <div class="footer_left col-lg-10" style="padding-left: 20%;">
                <p class="text-center footer_upo">京ICP备123456789号-6京公安备案00000000000000</p>
                <div class="footer_div">
                    <ul class="list-inline text-center clearfix">
                        <li>数据来源：</li>
                        <li><a href="javascript:;">企业信用信息公示系统</a></li>
                        <li><a href="javascript:;">国家知识产权局</a></li>
                        <li><a href="javascript:;">商标局</a></li>
                        <li><a href="javascript:;">版权局</a></li>
                        <li><a href="javascript:;">中国裁判文书网</a></li>
                        <li><a href="javascript:;">工信部ICP/IP域名备案管理系统</a></li>
                    </ul>
                </div>
                <p class="text-center">©Copyright 2018 北京未来互联科技有限公司</p>
            </div>
            <div class="footer_right col-lg-2 visible-lg-inline" style="text-align: left;line-height: 103px;display: none !important;">
                <img src="/static/img/QR_code.png" alt="">
            </div>
        </div>
    </footer>

    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
    <script type="text/javascript" src="/static/js/pub.js"></script>
    <script src="/static/js/bootstrap.min.js"></script>
    <script src="https://cdn.bootcss.com/jquery/1.7.1/jquery.min.js"></script>
    <!-- <script src="./js/login.js"></script> -->
    <script type="text/javascript">
        $('.dropdown').mouseenter (function(){
            $(this).addClass('open');
        })
        $('.dropdown').mouseleave(function(){
            $(this).removeClass('open');
        })
        $("#loginUsername").click(function(){
            window.location.href="/user/index.html";
        })
        $("#guquan").click(function () {
            var uid = $("#uid").val();
            if (uid == '') {
                $(".login-btn").trigger("click");

            } else {
                window.open("https://guquanjiegou.cn/index.php?uid=" + '<?php echo base64_encode($uid);?>');
            }

        });
        $(".exitAdmin").click(function () {
            console.log(11);
            $.ajax({
                type: "get",
                url: "http://qzt.cn/api.php/index/Account/logout.html",
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    if (res.code && res.code == 200) {
                        $("#login_out").css('display', 'none');
                        window.location.href = '/';
                    } else {
                        // console.log(res);
                        // alert("未登录")
                    }
                },
                error: function (res) {

                }
            })

        })
        $.ajax({
            type: "get",
            url: "http://qzt.cn/api.php/index/account/is_login.html",
            dataType: "json",
            success: function (res) {
                if (res.code && res.code == 200) {
                    // console.log(res);
                    // alert("已登录");
                    var userName = res.data.userName
                    $("#loginUsername").text(userName);
                    sessionStorage.setItem('loginUsername', userName);
                    $("#login-btn").css("display", "none");
                    $("#logged").css("display", "block");
                    sessionStorage.setItem('isLogin', true);
                } else {
                    // console.log(res);
                    // alert("未登录")
                }
            },
            error: function (res) {

            }
        })

        function test() {
            if ($.browser.msie) {
                window.location.href = "/user/ie.html";
            } else {

            }
        }
        // $(function(){
        //      var _height = $(window).innerHeight();
        //      $(".Index_nav").innerHeight();
        //      $("footer").innerHeight();
        //      var _needHeight=_height-$(".Index_nav").innerHeight()-$("footer").innerHeight();
        //      $('.Index_banner').css('height', _needHeight + 'px'); 
        //      $(".dropdown").mouseenter(function(){
        //      $(this).removeClass("open");
        //      $(this).addClass("open");
        //      $(this).siblings().removeClass("open");
        //      })
        //      $(".dropdown").mouseleave(function(){
        //      $(this).removeClass("open");
        //      })
        //  })
    </script>

</body>

</html>