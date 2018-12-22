layui.use(['form'], function() {
     var save5Id = sessionStorage.getItem('infoId');
    $ = layui.jquery;
    form = layui.form();
    var min0 = /^(0|[1-9]\d*)$/;
    var decimal = /^(0|0(\.\d{1,2})?|[1-9]\d*(\.\d{1,2})?)$/;
    var ckeckStr = "";
    var checkedStr = "";
    var flag5 = $("#flag5").attr('data-id');
    form.verify({
        decimal: [decimal, '请填入合理的数字'],
        min0: [min0, '请填入大于等于0的整数'],
    });
    var arr=[];
    function handleCheckboxData(data) {
        //这里是处理下传递过来的checkedvalue；
        var ind=arr.indexOf(data);
        if(ind==-1) {
            arr.push(data)
        }else {
            arr.splice(ind,1)
        }
    }
    // console.log($("input[name='jg2181']"));
    form.on('checkbox(jg2181)', function(data) {
        handleCheckboxData(data.value);
        if (data.value == '6') {
            if (data.elem.checked) {
                $('#_easyui_textbox_input1').prop('disabled', false);
            } else {
                $('#_easyui_textbox_input1').prop('disabled', true).val();
            }
        }
        
    });
    $.ajax({
        type: 'get',
        url: 'http://qzt.cn/api.php/index/netser.html',
        dataType: 'json',
        data: {
            id: save5Id
        },
        success:function(res){
            console.log(res);
            if(res.code==200){
                $("#flag5").attr('data-id', '1');
                $("#_easyui_textbox_input13").val(res.data.jg2180);
                $("#_easyui_textbox_input2").val(res.data.jg2182);
                $("#_easyui_textbox_input3").val(res.data.jg2183);
                $("#_easyui_textbox_input4").val(res.data.jg2184);
                $("#_easyui_textbox_input5").val(res.data.jg2185);
                $("#_easyui_textbox_input6").val(res.data.jg2186);
                $("#_easyui_textbox_input7").val(res.data.jg2187);
                $("#_easyui_textbox_input8").val(res.data.jg2188);
                $("#_easyui_textbox_input9").val(res.data.jg2189);
                $("#_easyui_textbox_input10").val(res.data.jg2191);
                $("#_easyui_textbox_input11").val(res.data.jg2192);
                $("#_easyui_textbox_input12").val(res.data.jg2193);
                $("input[name='jg2190']").each(function(){
                    if($(this).val() == res.data.jg2190){
                        $(this).prop('checked',true);
                    }
                        form.render('radio');
                })
            }else if(res.code==0){
                $("#flag5").attr('data-id', '0');
            }else{
                layer.alert(res.msg);
            }
        },
        error:function(res){

        }
    })
    form.on('submit(save5)', function(data) {
        var arrSort=arr.sort();
        var arrStr=arr.join(',');
        var checkboxStr=arrStr+$('#_easyui_textbox_input1').val();
        data.field.save5Id=save5Id
        data.field.jg2181 = checkboxStr;
         if ($('#flag5').attr('data-id') == '1') {
                var addr = 'edit';
            } else if ($('#flag5').attr('data-id') == '0') {
                var addr = 'add';
            } else {
                layer.alert('请重新刷新页面');
                return false;
            }

            $.ajax({
                type: 'post',
                url: 'http://qzt.cn/api.php/index/netser/' + addr + '.html',
                dataType: 'json',
                data: data.field,
                success:function(res){
                    if (res.code == 200) {
                        $('#flag5').attr('data-id','1');
                        layer.alert('操作成功');
                    } else{
                        layer.alert(res.msg);                    }
                },
                error:function(){

                }
            }) 

        console.log(data.field);
        return false;
    })
})