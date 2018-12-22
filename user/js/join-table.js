        var min0 = /^(0|[1-9]\d*)$/;
        var decimal = /^(0|0(\.\d{1,2})?|[1-9]\d*(\.\d{1,2})?)$/;
        var flagId = sessionStorage.getItem('infoId');
        layui.use(['form', 'layer'], function() {
            $ = layui.jquery;
            var layer = layui.layer;
            var form = layui.form();
            form.verify({
                min0:[min0, '请填写大于等于0的整数'],
                decimal:[decimal, '请填写合法的数'],
            });
            $.ajax({
                  type: "get",
                    url: "http://qzt.cn/api.php/index/netins.html",
                    dataType: "json",
                    data:{
                        flagId: flagId 
                    },   
                    success:function(res){
                        $("#flag6").attr('data-id', '1');
                        $('input[name=join1]').val(res.data.join1);
                        $('input[name=join2]').val(res.data.join2);
                        $('input[name=join3]').val(res.data.join3);
                        $('input[name=join4]').val(res.data.join4);
                        $('input[name=join5]').val(res.data.join5);
                        $('input[name=join6]').val(res.data.join6);
                        $('input[name=join7]').val(res.data.join7);
                        $('input[name=join8]').val(res.data.join8);
                        $('input[name=join9]').val(res.data.join9);
                        $('input[name=join10]').val(res.data.join10);
                        $('.cause').html(res.data.join12);
                        $('.plan').html(res.data.join13);
                        $('.advice').html(res.data.join14);
                        $('input[name=join11]').each(function(){
                             if($(this).val()==res.data.join11){
                                $(this).prop('checked',true);
                            }
                            form.render('radio');
                        })
                    },
                    error:function(res){
                        $("#flag6").attr('data-id', '0');
                    }
            })
            form.on('submit(save_join)',function(data){
                // console.log(data.field);
                data.field.flagId=flagId
                var flag6 = $("#flag6").attr('data-id');
                var addr='';
                 if (flag6 == '1') {
                    addr = 'edit';
                } else if (flag6 == '0') {
                    addr = 'add';
                } else {
                    layer.alert('error');
                    return false;
                }
                 $.ajax({
                    type: "post",
                    url: "http://qzt.cn/api.php/index/netins/"+addr+".html",
                    dataType: "json",
                    data: data.field,
                    success: function (res) {
                        console.log(res);
                        if (res.code == 200) {
                            layer.alert(res.msg);
                        }
                    },
                    error: function (res) {
                        layer.alert(res.msg);
                    }
                })
                // http://qzt.cn/api.php/index/netins.html
                return false;
            })
        });