// function basicData(){
// 	 $("input[name='jg1013']").click(function(){
//             // console.log($(this).attr("id"));
            
//         })
// }
layui.use(['layer'], function () {
	$ = layui.jquery;
	layer = layui.layer;
	var checks = $('input[name=diy-check]');
	var val = '';
	checks.click(function(){
		var num = $('input[name=diy-check]:checked').length;
		val = '';
		if (num > 3) {
			layer.alert('最多只能选3个');
			return false;
		}else{
			  if ($("input[name='jg1003']:checked").length <= 3) {
                var html = "";
                $("input[name='jg1003']:checked").each(function () {
                    if (html != "") {
                        html += ",";
                    }
                    html += "<span style ='margin-right:5px;' data-id='" + $(this).attr('data-id') + "'  id = '" + $(this).val() +
                        "'>" + $(this).val() + "</span>";
                    // basicArray.push(str);
                    // console.log($(this).attr('data-id')); //获取id传给后台的数据
                })
                $("#jg1003-1").html(html);
            }
		}
		checks.each(function(k,v){
			if ($(v).prop('checked')) {
				val += $(v).val() + ',';
			}
		})
		// val = val.replace(/,$/,'');
		val = val.substr(0, val.length - 1);
	});

	
});