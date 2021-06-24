$(function() {
	setPageCallbackFunction(queryData);
	queryData();
	$("#chax_c").click(queryData);
	$("#DaoChu").click(DaoChu);
	$(".title_bl").css({"display":"none"});
});

function queryData() {
	$.post("ChengBao_ChaXun.php", formToBean("main"), function(data) {
		
		if (data['is_ok']) {
			var dqcount = data['dqcount'];
			var hj = data['hj'];
			console.log(hj);
			if(hj.length>0){
				var shul = hj[0]['SHUL'];
				var stg = hj[0]['TG'];
				var swtg = hj[0]['WHY'];
				
				var tgbl = Math.round((parseInt(hj[0]['TG'])/parseInt(hj[0]['SHUL']))*100* 100) / 100+"%";
				var wtgbl = Math.round((parseInt(hj[0]['WHY'])/parseInt(hj[0]['SHUL']))*100* 100) / 100+"%";
				datas = [
					//{ label: "总户数", data: HJ },
					{ label: "已调查户数", data: hj[0]['TG'] },
					{ label: "未调查户数", data: hj[0]['WHY'] },
				];
				$.plot($("#pieDiv"), datas, {
					series: {
						pie: {
							show: true,
							//innerRadius: 0.5,  
							radius: 0.65,
							label: {
								show: true,
								radius: 1 / 3,
								formatter: function (label, series) {
									return '<div style="font-size:5pt;text-align:center;padding:2px;color:black;">' + Math.round(series.percent) + '%</div>';
								}
							}
						}
					},
					colors: ["#00FF00", "#FF0000", "#0000FF"],
					grid: {
						hoverable: true,
					},
					legend: {
						show: true,
						labelFormatter: function labelFormatter(label, series) {
							return '<div style="font-size:8pt; text-align:center; padding:2px;color:' + series.color + ';">' + label + '</div>';
						}
					}
				});
			}else{
				var tgbl = "0%";
				var wtgbl = "0%";
				var shul = "0";
				var stg = "0";
				var swtg = "0";
				$("#pieDiv").html('');
			}
			var htmlString = "";
			$(dqcount).each(function(index,model){
				var DIQUID = model['DIQUID'] ? model['DIQUID'] : '';
				var SHUL = model['SHUL'] ? model['SHUL'] : '';
				var WTG = model['WHY'] ? model['WHY'] : '';
				var MINGC = model['MINGC'] ? model['MINGC'] : '';
				var TG = model['TG'] ? model['TG'] : '';
				if(parseInt(SHUL)>0){
					
					var WTGBL = Math.round((parseInt(WTG)/parseInt(SHUL))*100* 100) / 100+"%";
					var TGBL = Math.round((parseInt(TG)/parseInt(SHUL))*100* 100) / 100+"%";
				}else{
					var WTGBL = "0%";
					var TGBL  = "0%";
				}
					htmlString += '<tr>'+
									'<td>'+MINGC+'</td>'+
									'<td>' +SHUL+'</td>'+
									'<td>' + TG +　'</td>' + 
									'<td>' +TGBL+'</td>' + 
									'<td>' + WTG +　'</td>' +
									'<td>' + WTGBL +　'</td>' +
								  '</tr>'; 
			});
			htmlString+='<tr>'+
							'<td>合计</td>'+
							'<td>' +shul+'</td>'+
							'<td>' + stg +　'</td>' + 
							'<td>' +tgbl+'</td>' + 
							'<td>' + swtg +　'</td>' +
							'<td>' + wtgbl +　'</td>' +
						  '</tr>';
				$("#chaxjg>tbody").html(htmlString);
				
				//每日折线图
				var data_tg  = new Array();
				var data_why = new Array();
				var sj = new Array(); 
				var TickArr = [];   //X轴自定义刻度
				var bl_tg = [];
				var bl_why = [];
				var brokenLine = data['brokenLine'];
				if(brokenLine){
					$(".title_bl").css({"display":"block"});
					$(brokenLine).each(function(index,model){
						var DIQUID = model['DIQUID'] ? model['DIQUID'] : '';
						var HUS = model['HUS'] ? model['HUS'] : '';
						var HUS_TG= model['HUS_TG'] ? model['HUS_TG'] : '';
						var HUS_WTG= model['HUS_WTG'] ? model['HUS_WTG'] : '';
						var HUS_WHY = model['HUS_WHY'] ? model['HUS_WHY'] : '';
						var RIQ = model['RIQ'] ? model['RIQ'] : '';
						var ID = model['TASKID'];
						if(!HUS_WTG){
							HUS_WTG = 0;
						}
						data_tg.push(parseInt(HUS_TG)+parseInt(HUS_WTG));
						data_why.push(HUS_WHY);
						sj.push(RIQ);
					});
					var zs_result = {
							data_tg:data_tg,
							data_why:data_why,
							sj:sj
					};	
					for(var i=0; i<zs_result.sj.length; i++){
				          TickArr.push([ i+1, zs_result.sj[i] ]);
				          bl_tg.push([ i+1, zs_result.data_tg[i] ]);
				          bl_why.push([ i+1, zs_result.data_why[i] ]);
				        }
					var data_hs = [
				   	     { 
				   	        "label": "已调查", 
				   	        data: bl_tg, 
				   	        points: {show: true, radius: 4, lineWidth: 3, fillColor: 'rgba(50,1160,180,0.6)'}, 
				   	        lines: {show: true, lineWidth: 0, fill: 0.5, fillColor: 'rgba(50,1160,180,0.6)'}, 
				   	        color: 'rgba(50,1160,180,0.6)', 
				   	        grid: {hoverable: true, clickable: true, borderWidth: 0, color: '#ccc'}, 
				   	     },
					   	  { 
				   	        "label": "未调查", 
				   	        data: bl_why, 
				   	        points: {show: true, radius: 4, lineWidth: 3, fillColor: 'rgba(18,147,204,0.6)'}, 
				   	        lines: {show: true, lineWidth: 0, fill: 0.5, fillColor: 'rgba(18,147,204,0.6)'}, 
				   	        color: 'rgba(18,147,204,0.6)', 
				   	        grid: {hoverable: true, clickable: true, borderWidth: 0, color: '#ccc'}, 
				   	     },
					];
					
					
					  var options = { 
						       lines: { 
						           show: true, 
						       }, 
						       points: { 
						           show: true 
						       }, 
						       xaxis: { 
						    	   ticks: TickArr,//x轴自定义刻度数据 
						       }, 
						       grid: {hoverable: true, borderWidth: 1, borderColor: '#ccc'}// 开启 hoverable 事件   
						   }; 
						   $.plot($("#GongZJZ"), data_hs, options);
						// 节点提示   
						   $("<div id='tooltip'></div>").css({ 
						       position: "absolute", 
						       display: "none", 
						       border: "1px solid #000", 
						       padding: "3px 8px", 
						       "background-color": "#000", 
						       opacity: 0.80, 
						       color: "#FFF", 
						       "border-radius": "4px", 
						       "font-size": "12px" 
						   }).appendTo("body"); 
						   $("#GongZJZ").bind("plothover", function(event, pos, item) { 
						       if (item) { 
						           var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2); 
						           $("#tooltip").html(item.series.label + " ：" + parseInt(y)) 
						                   .css({top: item.pageY - 38, left: item.pageX - 0}) 
						                   .fadeIn(200); 
						       } else { 
						           $("#tooltip").hide(); 
						       } 
						   });
				};
				//月调查
				var brokenYueLine = data['brokenYueLine'];
				var yue_tg  = new Array();
				var yue_why = new Array();
				var yue_sj = new Array(); 
				var yue_TickArr = [];   //X轴自定义刻度
				var y_tg = [];
				var y_why = [];
				if(brokenYueLine){
					$(brokenYueLine).each(function(index,model){
						var DIQUID = model['DIQUID'] ? model['DIQUID'] : '';
						var HUS_TG= model['TG'] ? model['TG'] : '';
						var HUS_WTG= model['WTG'] ? model['WTG'] : '';
						var HUS_WHY = model['WHY'] ? model['WHY'] : '';
						var RIQ = model['RIQ'] ? model['RIQ'] : '';
						var MINGC = model['MINGC'] ? model['MINGC'] : '';
						if(!HUS_WTG){
							HUS_WTG = 0;
						}
						yue_tg.push(parseInt(HUS_TG)+parseInt(HUS_WTG));
						yue_why.push(HUS_WHY);
						yue_sj.push(RIQ);
					});
						var zs_result = {
								yue_tg:yue_tg,
								yue_why:yue_why,
								yue_sj:yue_sj
						};	
						for(var i=0; i<zs_result.yue_sj.length; i++){
							yue_TickArr.push([ i+1, zs_result.yue_sj[i] ]);
					          y_tg.push([ i+1, zs_result.yue_tg[i] ]);
					          y_why.push([ i+1, zs_result.yue_why[i] ]);
					        }
						var data_hs = [
					   	     { 
					   	        "label": "已调查", 
					   	        data: y_tg, 
					   	        points: {show: true, radius: 4, lineWidth: 3, fillColor: 'rgba(50,1160,180,0.6)'}, 
					   	        lines: {show: true, lineWidth: 0, fill: 0.5, fillColor: 'rgba(50,1160,180,0.6)'}, 
					   	        color: 'rgba(50,1160,180,0.6)', 
					   	        grid: {hoverable: true, clickable: true, borderWidth: 0, color: '#ccc'}, 
					   	     },
						   	  { 
					   	        "label": "未调查", 
					   	        data: y_why, 
					   	        points: {show: true, radius: 4, lineWidth: 3, fillColor: 'rgba(18,147,204,0.6)'}, 
					   	        lines: {show: true, lineWidth: 0, fill: 0.5, fillColor: 'rgba(18,147,204,0.6)'}, 
					   	        color: 'rgba(18,147,204,0.6)', 
					   	        grid: {hoverable: true, clickable: true, borderWidth: 0, color: '#ccc'}, 
					   	     },
						];
						
						
						  var options = { 
							       lines: { 
							           show: true, 
							       }, 
							       points: { 
							           show: true 
							       }, 
							       xaxis: { 
							    	   ticks: TickArr,//x轴自定义刻度数据 
							       }, 
							       grid: {hoverable: true, borderWidth: 1, borderColor: '#ccc'}// 开启 hoverable 事件   
							   }; 
							   $.plot($("#GongZJZYue"), data_hs, options);
							// 节点提示   
							   $("<div id='tooltip'></div>").css({ 
							       position: "absolute", 
							       display: "none", 
							       border: "1px solid #000", 
							       padding: "3px 8px", 
							       "background-color": "#000", 
							       opacity: 0.80, 
							       color: "#FFF", 
							       "border-radius": "4px", 
							       "font-size": "12px" 
							   }).appendTo("body"); 
							   $("#GongZJZYue").bind("plothover", function(event, pos, item) { 
							       if (item) { 
							           var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2); 
							           $("#tooltip").html(item.series.label + " ：" + parseInt(y)) 
							                   .css({top: item.pageY - 38, left: item.pageX - 0}) 
							                   .fadeIn(200); 
							       } else { 
							           $("#tooltip").hide(); 
							       } 
							   });
				}
				
		} else {
			var msg = data['msg'];
			showmessage(msg);
		}
	}, 'json');
};
function DaoChu(){
	var leib = $("#leib").val();
	var renylb = $("#renylb").val();
	var xianjCondition=$("#xianjCondition").val();
	var zhenjCondition=$("#zhenjCondition").val();
	var cunjCondition=$("#cunjCondition").val();
	
	window.location.href="ChengBao_DaoChu.php?xianjCondition="+xianjCondition+"&zhenjCondition="+zhenjCondition+"&cunjCondition="+cunjCondition+"&leib="+leib+"&renylb="+renylb;
}