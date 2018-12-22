layui.use(['form','laypage'], function () {
    $ = layui.jquery;
    var form = layui.form();
    var laypage = layui.laypage;
     
    (function () {
        getBrandData(1, 10)
    })()

    function getBrandData(page, size) {
        $.ajax({
            url: 'http://qzt.cn/api.php/index/Trademark.html',
            type: "get",
            dataType: "json",
            data: {
                page: page,
                size: size
            },
            success: function (res) {
                var data = res.data.data;
                if (res.code && res.code == 200) {
                    var htmlStr = "";
                    var BrandCount=res.data.count;
                    data.forEach(function (i) {
                        htmlStr += '<tr>' +
                            '<td>' + i.id + '</td>' +
                            '<td>' + i.title + '</td>' +
                            '<td>' + i.apply_date + '</td>' +
                            '<td>  <img style="width:50px;height:50px;" src="' + i.thumbnail + '" alt=""></td>' +
                            '<td>' + i.applicant_zh + '</td>' +
                            '<td>' + i.brand_status + '</td>' +
                            '</tr>';
                    })
                    $("#x-link").html(htmlStr);
                    laypage({
                            cont: "page",
                            pages: BrandCount,
                            limit: 10,
                            curr:page,
                            prev: "上一页",
                            next: "下一页",
                            jump:function(obj,first){
                                    curr=obj.curr;
                                    if(!first){
                                        getBrandData(curr,obj.limit);
                                    }
                                }
                        })
                } else {
                    htmlStr = " <td colspan='8'>" + "暂无数据" + "</td>"
                    $("##x-link").html(htmlStr);
                }
            }
        })
    }
})