$(function(){
	// 鍒ゆ柇娴忚鍣�
	if(!Modernizr.bgpositionxy
		||!Modernizr.borderradius
		||!Modernizr.canvas
		||!Modernizr.canvastext
		||!Modernizr.cssremunit
		||!Modernizr.csstransforms
		||!Modernizr.input
		||!Modernizr.inputtypes
		||!Modernizr.lastchild
		||!Modernizr.nthchild
		||!Modernizr.opacity
		||!Modernizr.rgba){
		$(".notHtml5Element").show();
		$(".onlyHtml5Element").hide();
	}else{
		$(".notHtml5Element").hide();
		$(".onlyHtml5Element").show();
	}
	$('[data-toggle="tooltip"]').tooltip({container:'body'});
	$("#maxSize_btn").click(function(){
		$("#userinfo_btn").popover('hide');
		$(".ht-right-content-container").addClass('maxed');
		$(".ht-biaoti-container").addClass("maxed");
		$("#maxSize_btn").hide();
		$("#restoreSize_btn").show();
	});
	$("#restoreSize_btn").click(function(){
		$("#userinfo_btn").popover('hide');
		$(".ht-right-content-container").removeClass('maxed');
		$(".ht-biaoti-container").removeClass("maxed");
		$("#restoreSize_btn").hide();
		$("#maxSize_btn").show();
	});
	$("#enterwithoutpermission").click(function(){
		$(".notHtml5Element").hide();
		$(".onlyHtml5Element").show();
	});
	$("#nav_move_left").click(function(){
		console.log('left')
		$("#tabsHeaderRow").stop();
		var left = $("#tabsHeaderRow").position().left;
		if(left >= 0){
			return;
		}else{
			left = left + 100;
			left = left > 0 ? 0 : left;
			$("#tabsHeaderRow").animate({
			    left:left + 'px'
			  },'fast');
		}
	});
	$("#nav_move_right").click(function(){
		console.log('right')
		$("#tabsHeaderRow").stop();
		var left = $("#tabsHeaderRow").position().left;
		var width = $("#tabsHeaderRow").width();
		var widthOfParent = $("#tabsHeaderRow").parent().width();
		var right = widthOfParent - left - width;
		if(right >= 0){
			return;
		}else{
			left = left - 100;
			left = left > 0 ? 0 : left;
			$("#tabsHeaderRow").animate({
				left:left + 'px'
			  },'fast');
		}
	});
	$("#userinfo_btn").click(function(){
		$("#userinfo_btn").popover({
			container:'body',
			// <tr><td>鍗曚綅锛�</td><td class="text-primary">' + danw + '</td></tr>
			content : ``,
			html:true,
			title:'用户信息'
		});
	});
	$("#userinfo_btn,#maxSize_btn,#restoreSize_btn,#nav_move_right,#nav_move_left,.tabHeadTitle").hover(function(){
		$(this).addClass("bg-primary-1");
	},function(){
		$(this).removeClass("bg-primary-1");
	});
	registNavigatorTitleClickEvent($("#tabsHeaderRow").children(".tabHeadTitle")[0]);
	$("#tabsHeaderRow").children(".tabHeadTitle")[0].click();
	queryModules();
});
function queryModules(){
	var $leibs = [];
	var $leibmoks = {};
	$.post("../../common/php/ChaXun_Moks.php",{},function(data){
		var is_ok = data['is_ok'];
		if(is_ok){
			var list = data['rs'];
			$(list).each(function(index,mok){
				var leib = mok['LEIB'];
				if($leibs.indexOf(leib) > -1){
					var moks = $leibmoks[leib];
					moks.push(mok);
				}else{
					$leibs.push(leib);
					var moks = [];
					moks.push(mok);
					$leibmoks[leib] = moks;
				}
			});
			htmlstring = ''
			$($leibs).each(function(index,leib){
				var moks = $leibmoks[leib];
				if(moks && moks.length > 0){
					htmlstring += '<div class="panel" id="modulsNavigatorPanelContainer"><div class="panel-heading" role="tab" id="GongNengDaoHangHeader_' + index + '"><h4 class="panel-title"><a role="button" data-toggle="collapse" href="#GongNengDaoHangGroup_' + index + '" aria-expanded="true" aria-controls="GongNengDaoHangGroup_' + index + '"><span class="glyphicon glyphicon-plus"></span>' + leib + '</a></h4></div><div id="GongNengDaoHangGroup_' + index + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="GongNengDaoHangHeader_' + index + '" aria-expanded="true"><div class="panel-seperator"></div><div class="list-group">';
					$(moks).each(function(index_mok,mok){
						var mokUrl = mok['URL'];
						if(mokUrl.substr(0, 4) != 'http'){
							mokUrl = _system_static_rootPath + '/' + mok['URL']
						}
						htmlstring += '<a mokid="' + mok['ID'] +銆€'" mokurl="' + mokUrl +銆€'" class="list-group-item mokLink" href="javascript:void(0);"><span class="glyphicon glyphicon-play-circle"></span>' + mok['MINGC'] + '</a>';
					});
					htmlstring += '</div></div></div><div class="panel-seperator"></div>';
				}
			});
			$("#mokLinkGroupContainer").html(htmlstring);
			registMokLinkClickEvent();
		}else{
			window.location.href = "../../index.php";
		}
	},'json');
}
function registMokLinkClickEvent(){
	$(".mokLink").click(function(){
		var $this = $(this);
		var mokid = $this.attr('mokid');
		var mokurl = $this.attr('mokurl');
		if($('.tabHeadTitle[mokid="' + mokid + '"]').length > 0){
			$('.tabHeadTitle[mokid="' + mokid + '"]').click();
		}else{
			var htmlstring = '<div mokid="' + mokid + '" mokurl="' + mokurl + '" class="tabHeadTitle active"><span>' + $this.text() + '</span><span class="closeTab">&times</span></div>';
			$("#tabsHeaderRow").append(htmlstring);
			registNavigatorTitleClickEvent('.tabHeadTitle[mokid="' + mokid + '"]');
			$("#tabsHeaderRow").stop();
			var width = $("#tabsHeaderRow").width();
			var widthOfParent = $("#tabsHeaderRow").parent().width();
			if(width > widthOfParent){
				var left = widthOfParent - width;
				$("#tabsHeaderRow").animate({
					left:left + 'px'
				},'fast',function(){
					$('.tabHeadTitle[mokid="' + mokid + '"]').click();
				});
			}else{
				$('.tabHeadTitle[mokid="' + mokid + '"]').click();
			}
		}
	});
	$("#modulsNavigatorPanelContainer.panel").find('span').css('margin-right','10px');
	$("#modulsNavigatorPanelContainer.panel").on('hide.bs.collapse', function () {
		  var $this = $(this);
		  $this.find('span').removeClass('glyphicon-minus');
		  $this.find('span').addClass('glyphicon-plus');
	});
	$("#modulsNavigatorPanelContainer.panel").on('show.bs.collapse', function () {
		  var $this = $(this);
		  $this.find('span').removeClass('glyphicon-plus');
		  $this.find('span').addClass('glyphicon-minus');
	});
}
function registNavigatorTitleClickEvent(element){
	var $element = $(element);
	$element.click(function(){
		$(".tabHeadTitle").removeClass('active');
		$(this).addClass('active');
		$(".frame-component").hide();
		var mokid = $(this).attr('mokid');
		var mokurl = $(this).attr('mokurl');
		var mokname = $(this).children(":first").text();
		if($('.frame-component[mokid="' + mokid + '"]').length > 0){
			$('.frame-component[mokid="' + mokid + '"]').show();
		}else{
			var htmlstring = '<iframe class="frame-component" mokid="' + mokid + '" src="' + (mokurl.indexOf("?") > -1 ? (mokurl + '&mokname=') : (mokurl + '?mokname=')) +mokname+'" mokname="'+ mokname+'"></iframe>';
			$("#frameContainer").append(htmlstring);
		}
	});
	$element.children('.closeTab').click(function(event){
		event.stopPropagation();
		var parent = $(this).parent();
		var mokid = parent.attr('mokid');
		var mokurl = parent.attr('mokurl');
		parent.fadeOut(200,function(){
			if(parent.hasClass("active")){
				var prev = parent.prev();
				if(!prev.hasClass('active')){
					prev.click();
					$("#nav_move_left").click();
				}
			}
			if($('.frame-component[mokid="' + mokid + '"]').length > 0){
				$('.frame-component[mokid="' + mokid + '"]').remove();
			}
			parent.remove();
		});
	});
	$element.children('.closeTab').hover(function(){
		var $this = $(this);
		if(!$this.hasClass('closeTabHovered')){
			$this.addClass('closeTabHovered');
		}
	},function(){
		var $this = $(this);
		if($this.hasClass('closeTabHovered')){
			$this.removeClass('closeTabHovered');
		}
	});
}
function logout(){
	window.location.href = "../../common/php/logout.php";
}
function closeUserInfo(){
	$("#userinfo_btn").popover('hide');
}