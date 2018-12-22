layui.use(['element', 'laypage', 'layer', 'form'], function () {
    $ = layui.jquery; //jquery  
    laypage = layui.laypage; //分页
    layer = layui.layer; //弹出层
    form = layui.form();
    (function(){
        weisiteDate(1,10);
    })()
    function weisiteDate(page,size) {
        $.ajax({
            type: "get",
            url:'http://qzt.cn/api.php/index/ba.html',
            dataType: "json",
            data: {
                page: page,
                size: size
            },  
            success:function(res){
                 if (res.code == 200) {
                 var html = '';
                 var websiteCount=res.data.count;
                $(res.data.data).each(function (k, v) {
                    html += '<tr>' +
                        // '<td><input type="checkbox" value="' + v.ID + '" name=""></td>' +
                        '<td>' + v.ID + '</td>' +
                        '<td>' + v.DWMC + '</td>' +
                        '<td>' + v.DWXZ + '</td>' +
                        '<td>' + v.ZT_BAXH + '</td>' +
                        '<td>' + v.WZMC + '</td>' +
                        '<td>' + v.YM + '</td>' +
                        '<td>' + v.SHSJ + '</td>' +
                        '<td>' + '操作' + '</td>' +
                        '</tr>';
                })
                $('tbody').html(html);
                laypage({
                    cont: "page",
                    pages: websiteCount,
                    limit: 10,
                    curr:page,
                    prev: "上一页",
                    next: "下一页",
                    jump:function(obj,first){
                        curr=obj.curr;
                        if(!first){
                            weisiteDate(curr,obj.limit);
                        }
                    }
                })
            } else {
                layer.alert(res.msg, {
                    icon: 5
                });
            }
            }
        })
    }
})