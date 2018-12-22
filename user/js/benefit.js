// 企业经济效益
(function(){
    var benefitId = sessionStorage.getItem('infoId');
    layui.use(['layer', "form"], function (data) {
        $ = layui.jquery;
        layer = layui.layer;
        form = layui.form();
        var decimal = /^(0|0(\.\d{1,2})?|[1-9]\d*(\.\d{1,2})?)$/;
        var benefitData=[];
         $(".layui-unselect").click(function(){
                // alert(2327839);
        })
        form.verify({
            decimal:[decimal,'请填入合理的数字']
        });
        $.ajax({
            type: 'get',
            url: 'http://qzt.cn/api.php/index/companybenefit.html',
            dataType: 'json',
            data: {
                id: benefitId
            },
            success:function(res){
                if (res.code == 200) {
                    $('#flag3').attr('data-id','1');
                    $("#_easyui_textbox_input1").val(res.data.jg1025);
                    $("#_easyui_textbox_input2").val(res.data.jg1026);
                    $("#_easyui_textbox_input3").val(res.data.jg1027);
                    $("#_easyui_textbox_input4").val(res.data.jg1028);
                    $("#_easyui_textbox_input5").val(res.data.jg1029);
                    $("#_easyui_textbox_input6").val(res.data.jg1030);
                    $("#_easyui_textbox_input7").val(res.data.jg1031);
                    $("#_easyui_textbox_input8").val(res.data.jg1032);
                    $("#_easyui_textbox_input9").val(res.data.jg1033);
                    $("#_easyui_textbox_input10").val(res.data.jg1034);
                    $("#_easyui_textbox_input11").val(res.data.jg1035);
                    $("#_easyui_textbox_input12").val(res.data.jg1036);
                    $("#_easyui_textbox_input13").val(res.data.jg1037);
                    $("#_easyui_textbox_input14").val(res.data.jg1038);
                    $("#_easyui_textbox_input15").val(res.data.jg1039);
                    $("#_easyui_textbox_input16").val(res.data.jg1040);
                    $("#_easyui_textbox_input17").val(res.data.jg1041);
                    $("#_easyui_textbox_input18").val(res.data.jg1042);
                    $("#_easyui_textbox_input19").val(res.data.jg1043);
                    $("#_easyui_textbox_input20").val(res.data.jg1044);
                    $("#_easyui_textbox_input21").val(res.data.jg1045);
                    $("#_easyui_textbox_input22").val(res.data.jg1046);
                    $("#_easyui_textbox_input23").val(res.data.jg1047);
                    $("#_easyui_textbox_input24").val(res.data.jg1048);
                    $("#_easyui_textbox_input25").val(res.data.jg1049);
                    $("#_easyui_textbox_input26").val(res.data.jg1050);
                    if(res.data.jg10251==1){
                        $('input[name=jg10251]').prop('checked',true);
                        form.render('checkbox');
                    };
                    if(res.data.jg10261==1){
                        $('input[name=jg10261]').prop('checked',true);
                        form.render('checkbox');
                    };
                    if(res.data.jg10281==1){
                        $('input[name=jg10261]').prop('checked',true);
                        form.render('checkbox');
                    }
                } else if (res.code == 0) {
                    layer.alert(res.msg);
                    $('#flag3').attr('data-id','0');
                } else {
                    layer.alert(res.msg);
                }
            },
            error:function(){

            }
        })
        form.on("submit(save3)",function(data){
            
            data.field.benefitId = benefitId;
            $("input[type='checkbox']").each(function(){
                if(!$(this).prop('checked')) {
                benefitData.push($(this).prop('id'))
                }
            })
            for(var i=0;i<benefitData.length;i++){
                data.field[benefitData[i]]='0'
            }

            if ($('#flag3').attr('data-id') == '1') {
                var addr = 'edit';
            } else if ($('#flag3').attr('data-id') == '0') {
                var addr = 'add';
            } else {
                layer.alert('请重新刷新页面');
                return false;
            }

            $.ajax({
                type: 'post',
                url: 'http://qzt.cn/api.php/index/companybenefit/' + addr + '.html',
                dataType: 'json',
                data: data.field,
                success:function(res){
                    if (res.code == 200) {
                        $('#flag3').attr('data-id','1');
                        layer.alert(res.msg);
                    } else if(res.code == 1){
                        layer.alert(res.msg);
                    }else {
                         layer.alert(res.msg);
                    }
                },
                error:function(){

                }
            })
            console.log(data.field); 
        })
    })
})()
