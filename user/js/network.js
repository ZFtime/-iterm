/*删除*/
function delRow(obj, id) {
    $(obj).parent().parent().remove();
}
(function () {
    var jg1065 = sessionStorage.getItem('infoId');
    layui.use(['form', 'upload'], function () {
        $ = layui.jquery;
        form = layui.form();
        upload = layui.upload;
        var min0 = /^(0|[1-9]\d*)$/;
        var decimal = /^(0|0(\.\d{1,2})?|[1-9]\d*(\.\d{1,2})?)$/;
        var addName = 1;
        var addr = '';
        var Str = "";
        var html_file1 = "";
        // 信息安全管理度
        layui.upload({
            elem: '#upload1,#upload2,#upload3',
            url: 'http://qzt.cn/api.php/index/Netsecurity/upload.html',
            type: 'file',
            method: 'post',
            before: function (input) {
                $(input).after('<input type="hidden" name="id" value="' + jg1065 + '" />');
            },
            success: function (res) {
                if (res.code == 200) {
                    if (res.data.file_status == "file1") {
                        $("#upload_filename1").html(res.data.name);

                    } else if (res.data.file_status == "file2") {
                        $("#upload_filename1").html(res.data.name);
                        $("#upload_filetime1").html(res.data.time);
                    } else if (res.data.file_status == "file3") {
                        $("#upload_filename3").html(res.data.name);
                        $("#upload_filetime3").html(res.data.time);
                    }
                }else if(res.code == 200){
                    layer.alert(res.msg);
                }else{
                    layer.alert(res.msg);
                }
            },
            error:function(res){
                layer.alert(res.msg);
            }
        });
        form.verify({
            decimal: [decimal, '请填入合理的数字'],
            min0: [min0, '请填入大于等于0的整数'],
        });
        $(".table-celled-td").on('click',".addRow",function(){
                $('.table-celled-td').append(
                '<tr class="FG"><td><input id="_easyui_textbox_input9" type="text" class="layui-input" autocomplete="off" tabindex="" placeholder="" name="jg1058" value=""  maxlength="1000" style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 151px;"></td><td>  <input id="_easyui_textbox_input10" name="jg1059" type="text" class="layui-input" value="" autocomplete="off" tabindex="" placeholder="" maxlength="1000" style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 150px;"></td><td><input type="radio" class="radio" title="是" name="jg1060' + addName + '" id="jg1060" value="1"><input type="radio" id="jg1060" class="radio" name="jg1060' + addName + '" value="0" title="否" checked=""></td><td> <input id="_easyui_textbox_input22" type="text" class="layui-input validatebox-readonly textbox-prompt" name="jg1061" value="" autocomplete="off" tabindex=""  placeholder="" style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 140px;"></td><td><a href="javascript:void(0);" class="addRow"> <i class="layui-icon">&#xe608;</i> </a> <a href="javascript:;" onclick="delRow(this,\'1\')" <i class="layui-icon">&#xe640;</i></a></td>' +
                '</td>' +
                '</tr>'
            );
              addName++;
            form.render('radio');
            return false;
        })
        // 获取数据
        $.ajax({
            type: 'get',
            url: 'http://qzt.cn/api.php/index/netsecurity.html',
            dataType: 'json',
            data: {
                id: jg1065
            },
            success: function (res) {
                if (res.code == 200) {
                    // console.log(res)
                    var html_file1 = '';
                    var html_file2='';
                    var html_file3='';
                    if (res.data.file1_name != '') {
                        html_file1 += '<tr>' +
                            '<td><a href="/uploads/' + res.data.file1_addr + '"  id="upload_filename1">'+res.data.file1_name+'</a></td>' +
                            '<td><span id="upload_filetime1">' + res.data.file1_time + '</span></td>' +
                            ' <td><input type="file" name="file1" id="upload1"></td>' +
                            '</tr>'
                        $("#content2").html(html_file1);
                    } else {
                        $("#upload_filename1").html();
                        $("#upload_filetime1").html();
                    }
                    if (res.data.file2_name != '') {
                         html_file2+= '<tr>' +
                            '<td><a href="/uploads/' + res.data.file2_addr + '"  id="upload_filename2">'+res.data.file2_name+'</a></td>' +
                            '<td><span id="upload_filetime2">' + res.data.file2_time + '</span></td>' +
                            ' <td><input type="file" name="file2" id="upload2"></td>' +
                            '</tr>'
                             $("#content3").html(html_file2);
                    } else {
                        $("#upload_filename2").html();
                        $("#upload_filetime2").html();
                    }
                    if (res.data.file3_name != '') {
                        $("#upload_filename3").html(res.data.file3_name);
                        $("#upload_filetime3").html(res.data.file3_time);
                        html_file3+= '<tr>' +
                            '<td><a href="/uploads/' + res.data.file3_addr + '"  id="upload_filename3">'+res.data.file3_name+'</a></td>' +
                            '<td><span id="upload_filetime3">' + res.data.file3_time + '</span></td>' +
                            ' <td><input type="file" name="file3" id="upload3"></td>' +
                            '</tr>'
                             $("#content4").html(html_file3);
                    } else {
                        $("#upload_filename3").html();
                        $("#upload_filetime3").html();
                    }
                    $("#flag4").attr('data-id', '1');
                    $("input[name='jg1051']").val(res.data.jg1051);
                    $("input[name='jg1052']").val(res.data.jg1052);
                    $("#_easyui_textbox_input3").html(res.data.jg1053);
                    $("#_easyui_textbox_input4").html(res.data.jg1054);
                    $('#_easyui_textbox_input5').html(res.data.jg1055);
                    $('#_easyui_textbox_input6').html(res.data.jg1056);
                    $('#_easyui_textbox_input8').html(res.data.jg1057);

                    $('#_easyui_textbox_input12').html(res.data.jg1059);
                    $('#_easyui_textbox_input17').html(res.data.jg1060);
                    $('#_easyui_textbox_input18').html(res.data.jg1061);
                    $('#_easyui_textbox_input19').html(res.data.jg1062);
                    $('#_easyui_textbox_input20').html(res.data.jg1063);
                    $('input[name="jg1064"]').val(res.data.jg1064);
                    var data = res.data.jg1058;
                    // console.log(data);

                    var arr = JSON.parse(data);
                    // console.log(arr)
                    var html = "";

                    for (var i = 0; i < arr.length; i++) {
                        html += '<tr class="FG">' +
                            '<td>' +
                            '<input id="_easyui_textbox_input9" type="text" class="layui-input" autocomplete="off" tabindex="" placeholder="" name="jg1058" value=" ' + arr[i].input1 + ' "  maxlength="1000" style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 151px;"></td><td>  <input id="_easyui_textbox_input10" name="jg1059" type="text" class="layui-input" value=" ' + arr[i].input2 + ' " autocomplete="off" tabindex="" placeholder="" maxlength="1000" style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 150px;"></td><td><input type="radio" class="radio" title="是" name="jg1060' + addName + '" id="jg1060" value="1"><input type="radio" id="jg1060" class="radio" name="jg1060' + addName + '" value="0" title="否" checked=""></td><td> <input id="_easyui_textbox_input22" type="text" class="layui-input validatebox-readonly textbox-prompt" name="jg1061" value=" ' + arr[i].input4 + ' " autocomplete="off" tabindex=""  placeholder="" style="margin: 0px; padding-top: 0px; padding-bottom: 0px; height: 30px; line-height: 30px; width: 140px;"></td><td><a href="javascript:void(0);" class="addRow"> <i class="layui-icon">&#xe608;</i> </a> <a href="javascript:;" onclick="delRow(this,\'1\')" <i class="layui-icon">&#xe640;</i></a></td>' +
                            '</td>' +
                            '</tr>'
                        addName++;
                    }
                    $('.table-celled-td tr:eq(0)').siblings().remove();
                    $('.table-celled-td').append(html);
                    form.render('radio');
                    $('input[name=jg1068]').each(function () {
                        // console.log($(this));
                        if ($(this).val() == res.data.radio1) {
                            $(this).prop('checked', true);
                        }
                        form.render('radio');
                    })
                } else if (res.code == 0) {
                    layer.alert(res.msg);
                    $("#flag4").attr('data-id', '0');
                } else {
                    layer.alert(res.msg);
                }

            },
            error: function (res) {
                layer.alert(res.msg);
            }
        });
        form.on('submit(save4)', function (data) {
            var str = '[';
            $('.FG').each(function () {
                str += '{';
                str += '"input1":"' + $(this).find('input[name=jg1058]').val() + '",';
                str += '"input2":"' + $(this).find('input[name=jg1059]').val() + '",';
                str += '"radio1":"' + $(this).find('input[type=radio]:checked').val() + '",';
                str += '"input4":"' + $(this).find('input[name=jg1061]').val() + '"';

                str += '},';
            });
            str = str.replace(/,$/, '');
            str += ']';

            data.field.jg1065 = jg1065;
            data.field.jg1058 = str;
            var flag4 = $("#flag4").attr('data-id');
            if (flag4 == '1') {
                addr = 'edit';
            } else if (flag4 == '0') {
                addr = 'add';
            } else {
                layer.alert('error');
                return false;
            }
            $.ajax({
                type: "post",
                url: "http://qzt.cn/api.php/index/Netsecurity/" + addr + ".html",
                dataType: "json",
                data: data.field,
                success: function (data) {
                    if (data.code == 200) {
                        $('#flag4').attr('data-id','1');
                        layer.alert(data.msg);
                    }else if(data.code==1){
                        layer.alert(data.msg);
                    }else {
                        layer.alert(data.msg);
                    }
                },
                error: function () {

                }
            })
            console.log(data.field,"测试")
            return false;
        })

    });
})()