$(function() {
	setPageCallbackFunction(queryData);
	queryData();
	$("#chax_c").click(queryData);
	$("#xinjian").click(xinjian);

	$('body').on("click",".chakan_btn",function(){
		var id = $(this).attr('dataid');
		layer.open({
			  type: 2,
			  title: '鏌ョ湅浠诲姟',
			  shadeClose: true,
			  shade: 0.8,
			  area: ['380px', '90%'],
			  content: _system_static_rootPath +"/HouTai/RenWuGuanLi/RenWuGuanLi_ChaKan.php?method='ck'&&id="+id //iframe鐨剈rl
			}); 
	})

	$("#fbrwConfirmedBtn").click(function(){
		///loading灞�
		var index = layer.load(1, {
			shade: [0.1,'#fff'] //0.1閫忔槑搴︾殑鐧借壊鑳屾櫙
		});
		var id = $(this).attr('dataid');
		$.post("RenWuGuanLi_del.php", {"id":id,'method':"fab"}, function(data) {
			layer.close(index);
			if (data['is_ok']) {
				queryData();
				$('#fbrwConfirmDialog').modal('hide');
				showmessage('鍙戝竷瀹屾垚銆�');
			} else {
				showmessage(data['msg'], 1);
			}
		}, 'json');
	});
	// $('body').on("click",".shanchu_btn",function(){
	// 	var id = $(this).attr('dataid');
	// 	var formBean = {"id":id};
	// 	var msg = "鎮ㄧ湡鐨勭‘瀹氳鍒犻櫎浠诲姟鍚楋紵鍒犻櫎鍚庯紝鏃犳硶鎭㈠姝や换鍔＄殑鍩烘湰淇℃伅锛�";
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
	// 	var msg = "鎮ㄧ湡鐨勭‘瀹氳鍙戝竷姝や换鍔″悧锛熷彂甯冨悗锛岀郴缁熷皢鎸夋浠诲姟淇℃伅纭畾姝ゆ湡闂寸殑鏍搁獙宸ヤ綔璧锋鏃ユ湡锛屽苟鑷姩鍙戝竷閫氱煡銆備换鍔″彂甯冨悗锛屽浠诲姟鍩烘湰淇℃伅鐨勪慨鏀瑰拰鍒犻櫎鍙兘閫氳繃绯荤粺绠＄悊鍛樺悗鍙版搷浣溿€�";
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
function xinjian() {
	//iframe灞�
	layer.open({
	  type: 2,
	  title: '鏂板缓浠诲嫏',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['380px', '90%'],
	  content: _system_static_rootPath +'/HouTai/RenWuGuanLi/RenWuGuanLi_Xinjian.php?id=' //iframe鐨剈rl
	}); 
}
function queryData() {
	$.post("RenWuGuanLi_ChaXun.php", formToBean("main"), function(data) {
		if (data['is_ok']) {
			// START 鍙栧嚭鎬绘暟鍜岄〉鏁帮紝鍐欏叆鍒嗛〉閮ㄥ垎銆�
			var total = data['totalCount'];
			var pageCount = data['pageCount'];
			showPageInfo(total, pageCount);
			// END 鍙栧嚭鎬绘暟鍜岄〉鏁帮紝鍐欏叆鍒嗛〉閮ㄥ垎銆�
			var result = data['result'];
			if(result){
				var htmlString = "";
				$(result).each(function(index,model){
					var QIXQ = model['MINGC'] ? model['MINGC'] : '';
					var KAISSJ = model['KAISSJ'] ? model['KAISSJ'] : '';
					var JIESSJ = model['JIESSJ'] ? model['JIESSJ'] : '';
					var ZHUANGT = model['ZHUANGT'] ? model['ZHUANGT'] : '';
					var LEIB = model['LEIB'] ? model['LEIB'] : '';
					var SHUL = model['SHUL'] ? model['SHUL'] : '';
					var FABRQ = model['FABRQ'] ? model['FABRQ'] : '';
					var DATAID = model['ID'] ? model['ID'] : '';
					var OPP = '';
					if(ZHUANGT == '宸插彂甯�'){
						ZHUANGT = ZHUANGT + ' [' + FABRQ + ']';
						OPP = '<a class="chakan_btn" dataid="' + DATAID + '" href="javascript:void(0);">鏌ョ湅</a>';
					}else{
						OPP = '<a class="fabu_btn" dataid="' + DATAID + '" href="javascript:void(0);">鍙戝竷</a>';
					}
					htmlString += '<tr>'+
									'<td>' + QIXQ +銆€'</td>'+
									'<td>' +KAISSJ+'</td>'+
									'<td>' + JIESSJ +銆€'</td>' + 
									'<td>' +ZHUANGT+'</td>' + 
									'<td>' + LEIB +銆€'</td>' +
									'<td>' + SHUL +銆€'</td>'+
									'<td>' + OPP+銆€'</td>' + 
									'</tr>';
					
//					if(LEIB=="鍐滄潙浣庝繚" || LEIB=="鍩庨晣浣庝繚"){
//						htmlString +='<td>' +HUSHU+'</td>' +
//									 '<td>--</td>' ;
//					}else if(LEIB=="涓夋棤浜哄憳" || LEIB=="浜哄憳浜哄憳" || LEIB=="涓存椂鏁戝姪"){
//						htmlString +='<td>--</td>' +
//									 '<td>' +RENSHU+'</td>';
//					}
				});
				$("#chaxjg>tbody").html(htmlString);
				registOppBtns();
			}else{
				showmessage("鏈煡鍒版湁鍏充换鍔�", 1)
			}
		} else {
			showmessage(data['msg'], 1);
		}
	}, 'json');
}
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