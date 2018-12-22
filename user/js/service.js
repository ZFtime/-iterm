// 企业服务质
    var serviceId = sessionStorage.getItem('infoId');
    layui.use(['layer', "form"], function(data) {
        $ = layui.jquery;
        layer = layui.layer;
        form = layui.form();
        var servicedataId = sessionStorage.getItem('infoId');
        // 获取数据
        $.ajax({
            type: "get",
            url: "http://qzt.cn/api.php/index/companyser.html",
            dataType: "json",
            data: {
                id: serviceId
            },
            success: function(data) {
                if (data.code == 200) {
                    $('#flag2').attr('data-id', '1');
                    var sv = data.data;
                    $('input[name=input1]').val(sv['input1']);
                    $('input[name=input2]').val(sv['input2']);
                    $('input[name=input3]').val(sv['input3']);
                    $('input[name=input4]').val(sv['input4']);
                    $('input[name=input5]').val(sv['input5']);
                    $('textarea[name=text1]').val(sv['text1']);
                    if (sv['check1'] == 1) {
                        $('input[type=checkbox][name=check1]').prop('checked',true);
                    }
                    if (sv['check2'] == 1) {
                        $('input[type=checkbox][name=check2]').prop('checked',true);
                    }
                    if (sv['check3'] == 1) {
                        $('input[type=checkbox][name=check3]').prop('checked',true);
                    }
                    form.render('checkbox');  
                } else if (data.code == 0) {
                    $('#flag2').attr('data-id', '0');
                } else {
                    layer.alert(data.msg);
                }
            },
            error: function() {

            }
        })
        //服务质量保存被点击
        form.on("submit(save2)", function(data) {
            var flag = $('#flag2').attr('data-id');
            if (flag == '') {
                layer.alert('请刷新页面');
                return false;
            } else if (flag != '1' && flag != '0') {
                layer.alert('非法篡改');
                return false;
            }
            data.field.servicedataId = servicedataId;
            var checkedFalse = [];
            if (flag == '1') {
                var addr = 'edit';
            } else {
                var addr = 'add';
            }
            // 提交数据
            $("input[type='checkbox']").each(function() {
                if (!$(this).prop('checked')) {
                    checkedFalse.push($(this).prop('name'))
                }
            })
            for (var i = 0; i < checkedFalse.length; i++) {
                data.field[checkedFalse[i]] = '0'
            }
            $.ajax({
                type: "post",
                url: "http://qzt.cn/api.php/index/companyser/" + addr + ".html",
                dataType: "json",
                data: data.field,
                success: function(data) {
                    if (data.code == 200) {

                    }
                },
                error: function() {

                }
            })

            return false;
        })
    })