/**
 * 楠岃瘉Form杈撳叆鎯呭喌
 * @param formId 琚獙璇丗orm鐨処D
 * @param errorMsgContainerId锛岄敊璇俊鎭樉绀轰綅缃殑ID
 * @param showError锛屾槸鍚﹂渶瑕佹樉绀烘垨闅愯棌閿欒淇℃伅鏄剧ず浣嶇疆銆�
 * @param errorCallback锛岄獙璇佸け璐ョ殑鍥炶皟鍑芥暟锛堣鍑芥暟鍙湁1鍙傛暟涓洪敊璇彁绀猴級
 * @returns boolean 鏄惁楠岃瘉鎴愬姛銆�
 */
 function checkForm(formId,errorMsgContainerId,showError,errorCallback){
	var valid = true;
	var errorMsg;
	formId = formId || "";
	errorMsgContainerId = errorMsgContainerId || "";
	showError = showError || false;
	if(!formId)
		return valid;
	var form1 = $("#" + formId);
	if(form1.length > 0){
		var form = document.getElementById(formId);
		form1.find(":input").each(function(index,element){
			var value = null;
			if(element.tagName.toUpperCase() == 'TEXTAREA'){
				value=$.trim($(element).val());
			}else{
				switch (element.type.toLowerCase()) {
				case "radio" : 
					return true;
				case "checkbox" : 
					return true;
				case "select-one" : 
					var value1 = '', opt, index = element.selectedIndex;
					if (index >= 0) {
						opt = element.options[index];
						value1 = $.trim(opt.value);
						if (!value1 && !('value' in opt)) value1 = opt.text;
					}
					value = $.trim(value1);
					break;
				case "select-multiple" :
					if (!object[element.name]) {object[element.name] = new Array();};
					for (var j = 0; j < element.options.length; j++) {
						var opt = element.options[j];
						if (opt.selected) {
							var optValue = $.trim(opt.value);
							if (!optValue && !('value' in opt)) optValue = opt.text;
							value = value + $.trim(optValue);
						}
				    }
				    break;
				default :
					if (element.type.toLowerCase() != "submit" && element.type.toLowerCase() != "button" && element.type.toLowerCase() != "reset") {
						value = $.trim(element.value);
					}
					break;
				}
			}
			var $element = $(element);
			var elementName = $element.attr("inputName");
			if(!elementName){
				var elementLabel = form1.find("label[for='" + $element.attr("id") + "']");
				if(elementLabel && elementLabel.length > 0){
					elementName = $(elementLabel).html();
				}
			}
			if(value){
				var max = $element.attr("max");
				var min = $element.attr("min");
				var patternString = $element.attr("pattern");
				if(patternString){
					var patterns = patternString.split(',,,');
					var patternValidCount = 0;
					$(patterns).each(function(patternIndex,patternstr){
						pattern = eval(patternstr);
						if(!pattern.test(value)){
							patternValidCount ++;
						}
					});
					if(patternValidCount >= patterns.length){
						valid = false;
						errorMsg = elementName + '鐨勫€间笉绗﹀悎瑙勮寖銆�';
						return false;
					}
				}
				if(min || min === '0' || min === 0){
					var minId = false;
					minElement = $("#" + min);
					if(minElement.length > 0){
						min = minElement.val();
						minId = minElement.attr('id');
					}
					try{
						min = Number(min);
					}catch(e){}
					try{
						value = Number(value);
					}catch(e){}
				    if((min || min === 0) && value < min){
				    	valid = false;
				    	errorMsg = elementName + '鐨勫€煎お灏忋€�';
				    	if(minId){
				    		var label = $("label[for='" + minId + "']");
				    		if(label.length>0){
				    			var text = label.html();
				    			if(text){
				    				errorMsg = elementName + "鐨勫€煎簲澶т簬鎴栫瓑浜�" + text + "鐨勫€硷紙褰撳墠鍊间负" + min + "锛夈€�";
				    			}
							}
				    	}
				    }
				}
				if(max || max === '0' || max === 0){
					var maxId = false;
					maxElement = $("#" + max);
					if(maxElement.length > 0){
						max = $(maxElement).val();
						maxId = $(maxElement).attr('id');
					}
					try{
						max = Number(max);
					}catch(e){}
					try{
						value = Number(value);
					}catch(e){}
				    if((max || max === 0) && value > max){
				    	valid = false;
				    	errorMsg = elementName + '鐨勫€煎お澶с€�';
				    	if(maxId){
				    		var label = $("label[for='" + maxId + "']");
				    		if(label.length>0){
				    			var text = label.html();
				    			if(text){
				    				errorMsg = elementName + "鐨勫€煎簲灏忎簬鎴栫瓑浜�" + text + "鐨勫€硷紙褰撳墠鍊间负" + max + "锛夈€�";
				    			}
							}
				    	}
				    }
				}
			}else{
				if($element.attr("feikong")){
					valid = false;
					errorMsg = '蹇呴』濉啓' + elementName + '銆�';
				}
			}
			if(!valid){
				return false;
			}
		});
	}
	if(!valid && errorMsgContainerId){
		$errorMsgContainer = $("#" + errorMsgContainerId);
		if($errorMsgContainer && $errorMsgContainer.length > 0){
			$errorMsgContainer.css("color","#f00");
			$errorMsgContainer.html(errorMsg);
			if(showError){
				$errorMsgContainer.show();
			}
		}
	}else{
		$errorMsgContainer = $("#" + errorMsgContainerId);
		if($errorMsgContainer && $errorMsgContainer.length > 0){
			$errorMsgContainer.html("");
			if(showError){
				$errorMsgContainer.hide();
			}
		}
	}
	if(!valid && errorCallback){
		errorCallback(errorMsg);
	}
	return valid;
}
/**
 * 灏唂orm杞负javascript瀵硅薄銆�
 * 杞崲瑙勫垯涓猴細
 * 		鏍规嵁杈撳叆妗嗘垨鎸夐挳鐨刵ame浣滀负瀵硅薄鐨勫睘鎬э紱
 * 		杈撳叆妗嗙殑鍊间綔涓哄璞″睘鎬у€笺€�
 * @param formId 琚浆鎹㈢殑form鐨処D銆�
 * @param ignoreButton boolean 鏄惁蹇界暐鎸夐挳銆傚彲涓虹┖锛岄粯璁や负true
 * @returns 琚浆鎹㈠悗鐨勫璞°€�
 */
function formToBean(formId, ignoreButton) {
	var object = {};
	formId = formId || "";
	if(!formId)
		return object;
	if (typeof(ignoreButton) == "undefined" || ignoreButton == true) {
		ignoreButton = true;
	} else {
		ignoreButton = false;
	}
	var form1 = $("#" + formId);
	if(form1.length > 0){
		var form = document.getElementById(formId);
		form1.find(":input[name]").each(function(index,element){
			var value = null;
			if(element.tagName.toUpperCase() == 'TEXTAREA'){
				value=$.trim($(element).val());
			}else{
				switch (element.type.toLowerCase()) {
				case "radio" : 
					if (element.checked) { 
						value=$.trim(element.value);
					} 
					break;
				case "checkbox" : 
					if (!form[element.name].length) {
						if (element.checked) 
							value=$.trim(element.value) ;
						else 
							value="";
					} else {
						if (!object[element.name]) {object[element.name] = new Array();};
						if (element.checked) {object[element.name].push($.trim(element.value));}
					}
					break;
				case "select-one" : 
					var value1 = '', opt, index = element.selectedIndex;
					if (index >= 0) {
						opt = element.options[index];
						value1 = $.trim(opt.value);
						if (!value1 && !('value' in opt)) value1 = opt.text;
					}
					object[element.name] = $.trim(value1);
					break;
				case "select-multiple" :
					if (!object[element.name]) {object[element.name] = new Array();};
					for (var j = 0; j < element.options.length; j++) {
						var opt = element.options[j];
						if (opt.selected) {
							var optValue = $.trim(opt.value);
							if (!optValue && !('value' in opt)) optValue = opt.text;
							object[element.name].push($.trim(optValue));
						}
				    }
				    break;
				default :
					if (ignoreButton) {
						if (element.type.toLowerCase() != "submit" && element.type.toLowerCase() != "button" && element.type.toLowerCase() != "reset") {
							value = $.trim(element.value);
						}
					} else {
						value = $.trim(element.value);
					}
					break;
				}
			}
			var defaultvalue=$(element).attr("tip");
			if(value===defaultvalue){
				value = null;
			}
			if(value){
				object[element.name] = value;
			}
		});
	}
	return object;
}
/**
 * 灏唈avascript瀵硅薄鎸夌収瀵硅薄灞炴€у悕杞负form杈撳叆妗嗙殑鍊笺€�
 * 杞崲瑙勫垯涓猴細
 * 		鏍规嵁杈撳叆妗嗘垨鎸夐挳鐨刵ame涓庡璞＄殑灞炴€у悕杩涜鍖归厤锛�
 * 		鍖归厤鎴愬姛鐨勮緭鍏ユ鎴栨寜閽殑鍊艰璧嬪€间负瀵硅薄鐨勫睘鎬у€笺€�
 * @param data 瀵硅薄銆傚繀闇€
 * @param formId 琚祴鍊肩殑form鐨処D锛屽繀闇€
 * @param prePix 鑷姩璧嬪€兼椂鐨刵ame鍓嶇紑锛屽彲绌恒€�
 * @returns 鏃犺繑鍥炲€笺€�
 */
function beanToForm(data,formId,prePix) {
	data = data || "";
	formId = formId || "";
	prePix = prePix || "";
	if(!data && ! formId)
		return;
	var form1 = $("#" + formId);
	if(form1.length > 0){
		form1.find(":input[name]").not(":button,:reset,:submit").each(function(index,element){
			var name = element.name;
			if(prePix){
				name = name.replace(prePix + ".", "");
			}
			var val = "";
			if (!data[name])
				val = "";
			if(data[name]){
				val = $.trim(data[name].value) || $.trim(data[name]);
			}
			switch (element.type.toLowerCase()) {
			case "text": ;
			case "number": ;
			case "date": ;
			case "hidden": ;
			case "password": element.value = val; break;
			case "radio" : 
			case "checkbox" : 
				if (val instanceof Array) element.checked = (val.indexOf(element.value) > -1);
				else element.checked = (element.value ==val);
				break;
			case "select-one" : 
			case "select-multiple" : 
				for (var j = 0; j < element.options.length; j++) {
					var option = element.options[j];
					if (val instanceof Array) {
						option.selected = (val.indexOf(option.value) > -1);
					} else {
						option.selected = (option.value == val);
					}
				}
				break;
			};
			switch(element.tagName.toUpperCase()){
				case "TEXTAREA" :
					$(element).html(val);
					$(element).val(val);
				break;
			}
			setTimeout(function() {
				$(element).trigger("change");
			}, 0);
		});
	}
}

/**
 * 鍒ゆ柇鏃ユ湡鏍煎紡鏄惁姝ｇ‘锛坹yyy-mm-dd)
 * @param dateString
 * @returns
 */
function checkDate(dateString){
	dateString = dateString ? $.trim(dateString) : false;
	if(!dateString)
		return false;
	var pattern = /^((((19|20)\d{2})-(0?(1|[3-9])|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
	if(pattern.test(dateString)){
		pattern = /^\d{4}\-\d{2}\-\d{2}$/;
		return pattern.test(dateString);
	}
	return false;
}
/**
 * 鍒ゆ柇鏃ユ湡鏃堕棿鏍煎紡鏄惁姝ｇ‘锛坹yyy-mm-dd HH:mm:ss)
 * @param dateTimeString
 * @returns
 */
function checkDateTime(dateTimeString){
	dateTimeString = dateTimeString ? $.trim(dateTimeString) : false;
	if(!dateTimeString)
		return false;
	var pattern = /^((\d{2}(([02468][048])|([13579][26]))-((((0?[13578])|(1[02]))-((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))-((0?[1-9])|([1-2][0-9])|(30)))|(0?2-((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))-((((0?[13578])|(1[02]))-((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))-((0?[1-9])|([1-2][0-9])|(30)))|(0?2-((0?[1-9])|(1[0-9])|(2[0-8]))))))(\s((([0-1][0-9])|(2?[0-3]))\:([0-5]?[0-9])((\s)|(\:([0-5]?[0-9])))))?$/;
	if(pattern.test(dateTimeString)){
		pattern = /^\d{4}\-\d{2}\-\d{2} \d{2}\:\d{2}\:\d{2}$/;
		return pattern.test(dateTimeString);
	}
	return false;
}
/**
 * 鍒ゆ柇鏃堕棿鏍煎紡鏄惁姝ｇ‘锛圚H:mm:ss)
 * @param timeString
 * @returns
 */
function checkTime(timeString){
	timeString = timeString ? $.trim(timeString) : false;
	if(!timeString)
		return false;
	var pattern = /^([0-1][0-9]|2[0-3])(:[0-5][0-9]){2}$/;
	if(pattern.test(timeString)){
		pattern = /^\d{2}\:\d{2}\:\d{2}$/;
		return pattern.test(timeString);
	}
	return false;
}
/***
 * 娣诲姞灏忔椂鏁�
 */
function addHours(date, hours){
	if(date && date instanceof Date && hours){
		try{
			hours = parseInt(hours);
		}catch(e){
			return date;
		}
		var hour = 60 * 60 *1000;
		var result = date.getTime() + (hours * hour);
		return new Date(result);
	}
	return date;
}
/***
 * 娣诲姞鏃ユ湡鏁�
 * @param date
 * @param days
 * @returns
 */
function addDays(date, days){
	if(date && date instanceof Date && days){
		try{
			days = parseInt(days);
		}catch(e){
			return date;
		}
		var day = 24 * 60 * 60 *1000;
		var result = date.getTime() + (days * day);
		return new Date(result);
	}
	return date;
}
/***
 * 杩斿洖鏃ユ湡鏁�
 * @param d1
 * @param d2
 * @returns
 */

function DateDiff(d1,d2){
	if(d1 && d2 && d1 instanceof Date && d2 instanceof Date){
		var day = 24 * 60 * 60 *1000;
		try{
			var checkTime = d1.getTime();
			var checkTime2 = d2.getTime();
			var cha = (checkTime - checkTime2)/day;  
			if(cha < 0)
				return Math.ceil(cha);
			else
				return Math.floor(cha);
		}catch(e){}
	}
    return 0;
}
/***
 * 杩斿洖灏忔椂鏁�
 * @param d1
 * @param d2
 * @returns
 */
function HourDiff(d1,d2){
	if(d1 && d2 && d1 instanceof Date && d2 instanceof Date){
		var day = 60 * 60 *1000;
		try{
			var checkTime = d1.getTime();
			var checkTime2 = d2.getTime();
			var cha = (checkTime - checkTime2)/day;  
			cha = cha % 24;
			if(cha < 0)
				return Math.ceil(cha);
			else
				return Math.floor(cha);
		}catch(e){}
	}
	return false;
}
/***
 * 璁剧疆鏃ユ湡鏍煎紡
 * @param fmt
 * @returns
 */
Date.prototype.pattern=function(fmt) {    
	var o = {       
	"M+" : this.getMonth()+1, //鏈堜唤       
	"d+" : this.getDate(), //鏃�       
	"h+" : this.getHours() == 0 ? 12 : this.getHours(), //灏忔椂       
	"H+" : this.getHours(), //灏忔椂       
	"m+" : this.getMinutes(), //鍒�       
	"s+" : this.getSeconds(), //绉�       
	"q+" : Math.floor((this.getMonth()+3)/3), //瀛ｅ害       
	"S" : this.getMilliseconds() //姣       
	};
	var week = {"0":"\u65e5","1":"\u4e00","2":"\u4e8c","3":"\u4e09","4":"\u56db","5":"\u4e94","6":"\u516d"};       
	if(/(y+)/.test(fmt)){       
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));       
	}       
	if(/(E+)/.test(fmt)){       
		fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);       
	}       
	for(var k in o){       
		if(new RegExp("("+ k +")").test(fmt)){       
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));       
		}     
	}    
	var m = {
		"s":"m",
		"d":"h"
	};
	return fmt;       
}
/**
 * 妫€鏌ユ祻瑙堝櫒鏄惁鏀寔HTML5鍙婁竴浜涗富瑕佸姛鑳姐€�
 * @return boolean
 */
function checkModernBrowser(){
	return (Modernizr.bgpositionxy
	&& Modernizr.borderradius
	&& Modernizr.canvas
	&& Modernizr.canvastext
	&& Modernizr.cssremunit
	&& Modernizr.csstransforms
	&& Modernizr.input
	&& Modernizr.inputtypes
	&& Modernizr.lastchild
	&& Modernizr.nthchild
	&& Modernizr.opacity
	&& Modernizr.rgba);
}