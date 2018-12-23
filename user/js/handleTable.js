// 企业基本情况
var jg1020 = sessionStorage.getItem('infoId');
(function () {
    function judgeLength() {
        var spanLength = $('#jg1003-1').children('span').length;
        if (spanLength > 2) {
            $("input:checkbox[name='jg1003']").each(function () {
                if ($(this).is(':checked') == false) {
                    $(this).prop('disabled', true);
                }
            })
            layer.alert("选中三个，不能再选了");
        } else {
            $("input:checkbox[name='jg1003']").each(function () {
                $(this).prop('disabled', false);
            })
        }
    }
    layui.use(['form', 'layer'], function () {
        $ = layui.jquery;
        layer = layui.layer;
        form = layui.form();
        // 获取数据
        $.ajax({
            type: 'get',
            url: 'http://qzt.cn/api.php/index/companybase/index.html',
            dataType: 'json',
            data: {
                id: jg1020
            },
            success: function (data) {
                if (data.code == 200) {
                    $("#flag1").attr('data-id', '1');
                    $("#_easyui_textbox_input1").val(data.data.jg1000)
                    $("#_easyui_textbox_input2").val(data.data.jg1001);
                    $("#_easyui_textbox_input3").val(data.data.jg1002);
                    $("#_easyui_textbox_input4").val(data.data.jg1004);
                    $("#_easyui_textbox_input5").val(data.data.jg1005);
                    $("#_easyui_textbox_input6").val(data.data.jg1006);
                    $("#_easyui_textbox_input7").val(data.data.jg1007);
                    $("#_easyui_textbox_input22").val(data.data.jg1008);
                    $('#_easyui_textbox_input8').val(data.data.jg1009);
                    $("#_easyui_textbox_input9").val(data.data.jg1010);
                    $("#_easyui_textbox_input10").val(data.data.jg1011);
                    $("#_easyui_textbox_input11").val(data.data.jg1012);
                    $("#_easyui_textbox_input28").val(data.data.jg1015);

                    $("#_easyui_textbox_input18").val(data.data.jg1017);
                    $("#_easyui_textbox_input19").val(data.data.jg1018);
                    $("#_easyui_textbox_input20").val(data.data.jg1019);
                    // console.log(data.data.jg1003)
                    var arr = [];
                    var str = '';
                    str = data.data.jg1003;
                    arr = (str || '').split(',');
                    $('#jg1003-1').find('span').remove()
                    $("input[name='jg1003']").each(function () {
                        for (var i = 0; i < arr.length; i++) {
                            if ($(this).attr('data-id') == arr[i]) {
                                $(this).prop('checked', true);
                                $("#jg1003-1").append('<span style="margin-right:5px;" id="' + $(this).val() + '" data-id="' + arr[i] + '">' +
                                    $(this).val() + '</span>')
                            }

                        }
                    })
                    $("input[name='jg1013']").each(function () {
                        if ($(this).val() == data.data.jg1013) {
                            $(this).prop('checked', true);
                        }
                        form.render('radio');
                    })
                    var dataStatus = (data.data.jg1014 || '').slice(0, 1);
                    if(dataStatus==1) {
                         $('#_easyui_textbox_input12').prop('disabled', true)
                        $('#_easyui_textbox_input28').prop('disabled', true)
                        $("#_easyui_textbox_input28").val("");
                    }else if(dataStatus==6) {

                        $('#_easyui_textbox_input12').prop('disabled', false);
                        $('#_easyui_textbox_input28').prop('disabled', false);
                        $("#_easyui_textbox_input12").val(data.data.jg1014.slice(1));
                    }else {
                         $('#_easyui_textbox_input12').prop('disabled', true);
                        $('#_easyui_textbox_input28').prop('disabled', false);
                        $("#_easyui_textbox_input28").val(data.data.jg1015);
                    }
                    $("input[name='jg1014']").each(function () {
                        if ($(this).val() == dataStatus) {
                            $(this).prop('checked', true)
                        }
                        // form.render('radio');
                    })
                    $("input[name='jg1016']").each(function () {
                        if ($(this).val() == data.data.jg1016) {
                            $(this).prop('checked', true);
                        }
                        form.render('radio');
                    })
                    if (data.data.slide1 == 1) {
                        $('input[name=slide1]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide2 == 1) {
                        $('input[name=slide2]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide3 == 1) {
                        $('input[name=slide3]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide4 == 1) {
                        $('input[name=slide4]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide5 == 1) {
                        $('input[name=slide5]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide6 == 1) {
                        $('input[name=slide6]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide7 == 1) {
                        $('input[name=slide7]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide8 == 1) {
                        $('input[name=slide8]').prop('checked', true);
                        form.render('checkbox');
                    }
                    if (data.data.slide9 == 1) {
                        $('input[name=slide9]').prop('checked', true);
                        form.render('checkbox');
                    }
                } else if (data.code == 0) {
                    layer.alert(data.msg);
                    $("#flag1").attr('data-id', '0');
                } else {
                    layer.alert(data.msg);
                }
            },
            error: function () {
                layer.alert(data.msg)
            }
        })
        form.on('checkbox(jg1003)', function (data) {
            if (data.elem.checked) {
                $('#jg1003-1').append('<span style="margin-right:5px;" id="' + data.value + '">' +
                    data.value + '</span>')
            } else {
                $('#jg1003-1').find('#' + data.value + '').remove()
            }
            judgeLength();

        });
        form.on('radio(jg1014)', function (data) {
            if (data.value == '1') {
                $('#_easyui_textbox_input12').prop('disabled', true)
                $('#_easyui_textbox_input28').prop('disabled', true)
            } else if (data.value == '6') {
                $('#_easyui_textbox_input12').prop('disabled', false)
                $('#_easyui_textbox_input28').prop('disabled', false)
            } else {
                $('#_easyui_textbox_input12').prop('disabled', true)
                $('#_easyui_textbox_input28').prop('disabled', false)
            }
        });

        form.on('submit(save1)', function (data) {
            var checkedFalse = [];
            var ckeckStr = "";
            var ckeckedStr = "";
            var addr = '';
            data.field.jg1020 = jg1020;
            data.field.jg1014 = data.field.jg1014 + data.field.jg10141;
            var flag1 = $("#flag1").attr('data-id');
            delete data.field.jg10141
            $("input[type='checkbox']").each(function () {
                if (!$(this).prop('checked')) {
                    checkedFalse.push($(this).prop('name'))
                }
            })
            for (var i = 0; i < checkedFalse.length; i++) {
                data.field[checkedFalse[i]] = '0'
            }
            $('#jg1003-1').find('span').each(function () {
                ckeckStr += $(this).attr('id').slice(1, 2) + ','
                ckeckedStr = ckeckStr
            })
            ckeckedStr = ckeckedStr.substring(0, ckeckedStr.length - 1)
            //选中的字符串
            data.field.jg1003 = ckeckedStr
            if (flag1 == '1') {
                addr = 'edit';
            } else if (flag1 == '0') {
                addr = 'add';
            } else {
                layer.alert('error');
            }
            $.ajax({
                type: "post",
                url: "http://qzt.cn/api.php/index/companybase/" + addr + ".html",
                dataType: "json",
                data: data.field,
                success: function (res) {
                    if (res.code == 200) {
                         $('#flag1').attr('data-id','1');
                        layer.alert(res.msg);
                    } else if (res.code == 1) {
                        layer.alert(res.msg)
                    } else {
                        layer.alert(res.msg);
                    }
                },
                error: function () {
                    layer.alert(res.msg);
                }
            })

            // console.log(data.field);
            return false;
        });
    })
})()