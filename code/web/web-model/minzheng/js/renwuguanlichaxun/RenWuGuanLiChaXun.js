$(function() {
	setPageCallbackFunction(queryData);
	queryData();
	$("#chax_c").click(queryData);
	$('body').on("click",".xiugai_btn",function(){
		queryData();
		var id = $(this).attr('dataid');
		layer.open({
			  type: 2,
			  title: '修改任务',
			  shadeClose: true,
			  shade: 0.8,
			  area: ['380px', '90%'],
			  content: _system_static_rootPath +'/HouTai/RenWuGuanLi/RenWuGuanLi_XiuGai.php?id='+id //iframe的url
			}); 
		
	})
	// $('body').on("click",".chakan_btn",function(){
	// 	var id = $(this).attr('dataid');
	// 	layer.open({
	// 		  type: 2,
	// 		  title: '查看任务',
	// 		  shadeClose: true,
	// 		  shade: 0.8,
	// 		  area: ['380px', '90%'],
	// 		  content: _system_static_rootPath +"/tabdetails.html" //iframe的url
	// 		}); 
	// })
	$("#scrwConfirmedBtn").click(function(){	
		//loading层
		var index = layer.load(1, {
			shade: [0.1,'#fff'] //0.1透明度的白色背景
		});
		$.post("RenWuGuanLiDel.php", {id:$(this).attr('dataid')}, function(data) {
			layer.close(index);
			if (data['is_ok']) {
				queryData();
				$('#scrwConfirmDialog').modal('hide');
				showmessage('删除完成。');
			} else {
				showmessage(data['msg'], 1);
			}
		}, 'json');
	});
	$("#fbrwConfirmedBtn").click(function(){
		///loading层
		var index = layer.load(1, {
			shade: [0.1,'#fff'] //0.1透明度的白色背景
		});
		var id = $(this).attr('dataid');
		$.post("RenWuGuanLiDel.php", {"id":id,'method':"fab"}, function(data) {
			layer.close(index);
			if (data['is_ok']) {
				queryData();
				$('#fbrwConfirmDialog').modal('hide');
				showmessage('发布完成。');
			} else {
				showmessage(data['msg'], 1);
			}
		}, 'json');
	});
	// $('body').on("click",".shanchu_btn",function(){
	// 	var id = $(this).attr('dataid');
	// 	var formBean = {"id":id};
	// 	var msg = "您真的确定要删除任务吗？删除后，无法恢复此任务的基本信息！";
	// 	if (confirm(msg)==true){
	// 		$.post("RenWuGuanLi_del.php", formBean, function(data) { 
	// 			showmessage(data['msg']);
	// 			queryData();
	// 		}, 'json');
	// 	}else{
	// 	return false;
	// 	}
	// });
	// $('body').on("click",".fabu_btn",function(){
	// 	var id = $(this).attr('dataid');
	// 	var formBean = {"id":id,'method':"fab"};
	// 	var msg = "您真的确定要发布此任务吗？发布后，系统将按此任务信息确定此期间的核验工作起止日期，并自动发布通知。任务发布后，对任务基本信息的修改和删除只能通过系统管理员后台操作。";
	// 	if (confirm(msg)==true){
	// 		$.post("RenWuGuanLi_del.php", formBean, function(data) { 
	// 			showmessage(data['msg']);
	// 			queryData();
	// 		}, 'json');
	// 	}else{
	// 	return false;
	// 	}
	// });
});
// function queryData() {
// 	$.post("RenWuGuanLiChaXun_ChaXun.php", formToBean("main"), function(data) {
// 		if (data['is_ok']) {
// 			// START 取出总数和页数，写入分页部分。
// 			var total = data['totalCount'];
// 			var pageCount = data['pageCount'];
// 			showPageInfo(total, pageCount);
// 			// END 取出总数和页数，写入分页部分。
// 			var result = data['result'];
// 			if(result){
// 				var htmlString = "";
// 				$(result).each(function(index,model){
// 					var QIXQ = model['MINGC'] ? model['MINGC'] : '';
// 					var KAISSJ = model['KAISSJ'] ? model['KAISSJ'] : '';
// 					var JIESSJ = model['JIESSJ'] ? model['JIESSJ'] : '';
// 					var ZHUANGT = model['ZHUANGT'] ? model['ZHUANGT'] : '';
// 					var LEIB = model['LEIB'] ? model['LEIB'] : '';
// 					var SHUL = model['SHUL'] ? model['SHUL'] : '';
// 					var FABRQ = model['FABRQ'] ? model['FABRQ'] : '';
// 					var DATAID = model['ID'] ? model['ID'] : '';
// 					var OPP = '';
// 					if(ZHUANGT == '已发布'){
// 						ZHUANGT = ZHUANGT + ' [' + FABRQ + ']';
// 						OPP = '<a class="chakan_btn" dataid="' + DATAID + '" href="javascript:void(0);">查看</a>';
// 						OPP += '<a class="shanchu_btn" dataid="' + DATAID + '" href="javascript:void(0);">删除</a>';
// 					}else{
// 						OPP = '<a class="chakan_btn" dataid="' + DATAID + '"  href="javascript:void(0);">查看</a>';
// 						OPP += '<a class="xiugai_btn" dataid="' + DATAID + '" href="javascript:void(0);">修改</a>';
// 						OPP += '<a class="shanchu_btn" dataid="' + DATAID + '" href="javascript:void(0);">删除</a>';
// 						OPP += '<a class="fabu_btn" dataid="' + DATAID + '" href="javascript:void(0);">发布</a>';
// 					}
// 					htmlString += '<tr>'+
// 									'<td>' + QIXQ +　'</td>'+
// 									'<td>' +KAISSJ+'</td>'+
// 									'<td>' + JIESSJ +　'</td>' + 
// 									'<td>' +ZHUANGT+'</td>' + 
// 									'<td>' + LEIB +　'</td>' +
// 									'<td>' + SHUL +　'</td>'+
// 									'<td>' + OPP+　'</td>' + 
// 									'</tr>';
					
// //					if(LEIB=="农村低保" || LEIB=="城镇低保"){
// //						htmlString +='<td>' +HUSHU+'</td>' +
// //									 '<td>--</td>' ;
// //					}else if(LEIB=="三无人员" || LEIB=="人员人员" || LEIB=="临时救助"){
// //						htmlString +='<td>--</td>' +
// //									 '<td>' +RENSHU+'</td>';
// //					}
// 				});
// 				$("#chaxjg>tbody").html(htmlString);
// 				registOppBtns();
// 			}else{
// 				showmessage("未查到有关任务", 1)
// 			}
// 		} else {
// 			showmessage(data['msg'], 1);
// 		}
// 	}, 'json');
// }
function registOppBtns(){
	$(".shanchu_btn").click(function(){
		$("#scrwConfirmedBtn").attr("dataid",$(this).attr('dataid'));
		$('#scrwConfirmDialog').modal('show');
	});
	$(".fabu_btn").click(function(){
		$("#fbrwConfirmedBtn").attr("dataid",$(this).attr('dataid'));
		$('#fbrwConfirmDialog').modal('show');
	});
}
