/**
 * 寮曞叆姝ゆ枃浠讹紝鑾峰緱浠ヤ笅鍔熻兘锛�
 * <ul>
 *  <li>鍚慖D涓簆ages鐨凞OM鍏冪礌鍐呭啓鍏ュ垎椤电粍浠躲€傚垎椤电粍浠跺皾璇曚互1琛屾樉绀恒€�</li>
 *  <li>鍚慖D涓簆ages2Lines鐨凞OM鍏冪礌鍐呭啓鍏ュ垎椤电粍浠躲€傚垎椤电粍浠跺皾璇曚互2琛屾樉绀恒€�</li>
 *  <li>鍒嗛〉鏂规硶setPageCallbackFunction($pageCallbackFunction)锛氳缃垎椤垫煡璇㈠嚱鏁帮紙$pageCallbackFunction锛夛紝褰撶偣鍑讳笂涓€椤点€佷笅涓€椤电瓑鍒嗛〉缁勪欢鏃讹紝璋冪敤姝ゅ嚱鏁版墽琛屾煡璇€傛鍑芥暟搴旀槸鏃犲弬鍑芥暟銆�</li>
 *  <li>鍒嗛〉鏂规硶showPageInfo(total,pageCount)锛氳缃垎椤典俊鎭紝鍙傛暟鍒嗗埆鏄€昏褰曟暟鍜屾€婚〉鏁般€傚簲鍦ㄦ墽琛屾煡璇箣鍚庤皟鐢ㄦ鏂规硶锛屼负鍒嗛〉缁勪欢璁剧疆姝ｇ‘鐨勫€笺€�</li>
 * 	<li>showmessage(msg,failed) 鏄剧ず鎻愮ず淇℃伅</li>
 *  <li>涓篒D涓篵ackByHistory鐨凞OM鍏冪礌娉ㄥ唽浜嬩欢锛岀偣鍑昏DOM鍏冪礌锛屽皢鎸夌収娴忚鍣ㄥ巻鍙茶繑鍥�</li>
 *  <li>backByHistory()锛屾寜鐓ф祻瑙堝櫒鍘嗗彶杩斿洖</li>
 *  <li>generateFujianLink(pid,linkId, type, rq, fileName, storageName)锛氱敓鎴愰檮浠朵笅杞介摼鎺ュ湴鍧€锛圲RL锛夈€傚弬鏁板垎鍒负锛氭潈闄怚D銆乤鏍囩鐨処D銆佸瓨鍌ㄦ枃浠跺す銆佸瓨鍌ㄦ枃浠跺す涓嬬殑鏃ユ湡鏂囦欢澶� YYYY-MM-DD銆佹枃浠朵笅杞藉悗鐨勬樉绀哄悕绉般€佹枃浠剁殑瀛樺偍鍚嶇О</li>
 *  <li>鍙负table娣诲姞condition鏍峰紡绫伙紝浣滀负鏌ヨ鏉′欢琛ㄦ牸</li>
 *  <li>鍙负table娣诲姞infoForm鏍峰紡绫伙紝浣滀负缂栬緫琛ㄥ崟琛ㄦ牸</li>
 *  <li>鍙负table娣诲姞readonly鏍峰紡绫伙紝璇ヨ〃鏍间笅鐨勬墍鏈夎緭鍏ユ鍜屾寜閽缃负涓嶅彲鐢ㄧ姸鎬�</li>
 *  <li>鍙负table娣诲姞result鏍峰紡绫伙紝浣滀负琛岃褰曡〃鏍�</li>
 *  <li>鏀寔涓簊elect娣诲姞mingcInput灞炴€э紝鑻ュ湪select鏍囩涓娇鐢ㄦ灞炴€э紝褰搒elect鐨勫€煎彂鐢熷彉鍖栨椂锛岃嚜鍔ㄥ悜ID涓鸿灞炴€у€肩殑鍙緭鍏ュ厓绱犱腑鍐欏叆value锛寁alue涓鸿select琚€変腑鐨刼ption鐨刲abel鍊笺€�</li>
 *  <li>鏀寔涓篿nput娣诲姞date鏍峰紡绫伙紝鑻ュ湪input鏍囩鍖呭惈姝ゆ牱寮忕被锛屽綋榧犳爣杩涘叆姝nput锛屼細寮瑰嚭鏃ユ湡閫夋嫨妗嗐€備笖鍒ゆ柇鐢ㄦ埛杈撳叆鐨勬棩鏈熸槸鍚︾鍚堟棩鏈熸牸寮忥紝鑻ヤ笉绗﹀悎锛岃嚜鍔ㄦ竻绌篿nput</li>
 *  <li>鏀寔涓篿nput娣诲姞int鏍峰紡绫伙紝鑻ュ湪input鏍囩鍖呭惈姝ゆ牱寮忕被锛屽皢鍒ゆ柇鐢ㄦ埛杈撳叆鐨勫唴瀹规槸鍚︿负鏁存暟锛岃嫢涓嶆槸鏁存暟锛岃嚜鍔ㄦ竻绌篿nput銆�</li>
 *  <li>鏀寔涓篿nput娣诲姞float鏍峰紡绫伙紝鑻ュ湪input鏍囩鍖呭惈姝ゆ牱寮忕被锛屽皢鍒ゆ柇鐢ㄦ埛杈撳叆鐨勫唴瀹规槸鍚︿负娴偣鏁帮紝鑻ヤ笉鏄诞鐐规暟锛岃嚜鍔ㄦ竻绌篿nput銆�</li>
 * </ul>
 */
 $(function(){
    //	$("body").append('<div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="errorModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="errorModalLabel"></h4></div><div class="modal-body" id="errorModalContent"></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">鍏抽棴</button></div></div></div></div>');
        $("#backByHistory").click(backByHistory);
        $("table.condition").addClass("table table-condensed");
        $("table.infoForm").addClass("table table-bordered");
        $("table.readonly").find("input,textarea,select,checkbox,radio").attr("readonly","readonly");
        $("table.readonly").find("select,checkbox,radio").attr("disabled","disabled");
        $("table.result").addClass("table table-condensed table-bordered table-hover");
        $("#pages").append("<span style='height: 40px; line-height: 40px; margin-top: 10px; text-align: right; color: #FF0000;'>总计<span style='color: #0000FF;' id='totalCount'>10</span>条<span style='color: #0000FF;' id='totalPage'>1</span>页</span><label for='xianjCondition'></label><select class='form-control' id='pagenumCondition' name='pagenum'><option value='20'>20页</option><option value='10'>10页</option><option value='50'>50页</option><option value='100'>100页</option></select><button class='btn' id='Syy_btn' type='button'><span class='glyphicon glyphicon-chevron-left'></span>上一页</button>&nbsp;<button class='btn' id='Xyy_btn' type='button'>下一页<span class='glyphicon glyphicon-chevron-right'></span></button><label for='tiaozdCondition'>转跳到</label><input type='number' class='form-control int' defaultValue='1' id='tiaozdCondition' name='page' style='width: 80px;' value='1'><label for='tiaozdCondition'>页</label>");
        $("#pages2Lines").append("<span style='display:block;width:100%;height:40px;line-height:40px;margin-top:20px;text-align:right;color:#FF0000;'>鎬昏<span style='color:#0000FF;' id='totalCount'>0</span>鏉�,<span style='color:#0000FF;' id='totalPage'>0</span>椤点€�</span><br /><div class='form-group'><label for='xianjCondition'>姣忛〉</label><select class='form-control' id='pagenumCondition' name='pagenum'><option value='10'>10鏉�</option><option value='20'>20鏉�</option><option value='50'>50鏉�</option><option value='100'>100鏉�</option></select></div>&nbsp;<div class='form-group'><button class='btn' id='Syy_btn' type='button'><span class='glyphicon glyphicon-chevron-left'></span>涓婁竴椤�</button>&nbsp;<button class='btn' id='Xyy_btn' type='button'>涓嬩竴椤�<span class='glyphicon glyphicon-chevron-right'></span></button></div>&nbsp;<div class='form-group'><label for='tiaozdCondition'>璺宠浆鍒�</label><input type='number' class='form-control' id='tiaozdCondition' name='page' style='width:80px;' value='1'><label for='tiaozdCondition'>椤�</label></div>");
        $("select[mingcInput]").change(function(){
            var $this = $(this);
            var mingcInput = $this.attr("mingcInput");
            var $mingcInput = $("#" + mingcInput);
            if($mingcInput && $mingcInput.length > 0){
                var index = this.selectedIndex;
                var text = '';
                if (index >= 0) {
                    opt = this.options[index];
                    var value = $.trim(opt.value);
                    if (value){
                        text = opt.text;
                    }
                }
                $mingcInput.val(text);
            }
        });
        $("input.date").focus(function(){
            WdatePicker();
        }).change(function(){
            var v = $(this).val();
            if(v && !checkDate(v) && !checkDateTime(v) && !checkTime(v)){
                $(this).val('');
            }
        });
        $("input.int").change(function(){
            var v = $(this).val();
            if(v){
                var pattern = /^-?\d+$/;
                if(!pattern.test(v)){
                    var dv = $(this).attr("defaultValue");
                    if(!dv){
                        dv = '';
                    }
                    $(this).val(dv);
                }
            }
        });
        $("input.float").change(function(){
            var v = $(this).val();
            if(v){
                var pattern = /^(-?\d+)(\.\d+)?$/;
                if(!pattern.test(v)){
                    var dv = $(this).attr("defaultValue");
                    if(!dv){
                        dv = '';
                    }
                    $(this).val(dv);
                }
            }
        });
    });
    /**
     * 鍒嗛〉鏌ヨ鍑芥暟銆傚綋鐐瑰嚮涓婁竴椤点€佷笅涓€椤电瓑鍒嗛〉缁勪欢鏃讹紝璋冪敤姝ゅ嚱鏁版墽琛屾煡璇€傛鍑芥暟搴旀槸鏃犲弬鍑芥暟銆�
     */
    var pageCallbackFunction;
    /**
     * 娉ㄥ唽鍒嗛〉缁勪欢浜嬩欢銆傚鎴蜂笉闇€瑕佷富鍔ㄨ皟鐢ㄦ鏂规硶銆傚簲璋冪敤setPageCallbackFunction($pageCallbackFunction)鏂规硶璁剧疆鍒嗛〉缁勪欢鏌ヨ鍑芥暟銆�
     */
    function addPage(){
        $("#Syy_btn").click(function(){
            var currentPage = $("#tiaozdCondition").val();
            currentPage = parseInt(currentPage);
            if(currentPage > 1){
                $("#tiaozdCondition").val(currentPage - 1);
                if(pageCallbackFunction)
                    pageCallbackFunction();
            }
        });
        $("#Xyy_btn").click(function(){
            var currentPage = $("#tiaozdCondition").val();
            currentPage = parseInt(currentPage);
            $("#tiaozdCondition").val(currentPage + 1);
            if(pageCallbackFunction)
                pageCallbackFunction();
        });
        $("#pagenumCondition,#tiaozdCondition").change(function(){
            if(pageCallbackFunction)
                pageCallbackFunction();
        });
    }
    /**
     * 璁剧疆鍒嗛〉鏌ヨ鍑芥暟銆傚綋鐐瑰嚮涓婁竴椤点€佷笅涓€椤电瓑鍒嗛〉缁勪欢鏃讹紝璋冪敤姝ゅ嚱鏁版墽琛屾煡璇€傛鍑芥暟搴旀槸鏃犲弬鍑芥暟銆�
     * @param $pageCallbackFunction
     */
    function setPageCallbackFunction($pageCallbackFunction){
        pageCallbackFunction = $pageCallbackFunction;
        addPage();
    }
    /**
     * 鎸夌収娴忚鍘嗗彶杩斿洖銆�
     */
    function backByHistory(){
        history.go(-1);
    }
    /**
     * 璁剧疆鍒嗛〉淇℃伅
     * @param total 鎬绘潯鏁�
     * @param pageCount 鎬婚〉鏁�
     */
    function showPageInfo(total,pageCount){
        $("#totalCount").html(total);
        $("#totalPage").html(pageCount);
    }
    /**
     * 鏄剧ず鎻愮ず淇℃伅
     * @param msg 鎻愮ず淇℃伅鍐呭
     * @param failed 鏄惁鏄敊璇彁绀恒€�
     */
    function showmessage(msg,failed){
        var errorModal = $("#errorModal");
        var errorModalTitle = $("#errorModalLabel");
        var errorModalContent = $("#errorModalContent");
        errorModalTitle.html('鎻愮ず');
        errorModalContent.html(msg);
        errorModal.modal();
    }
    /**
     * 鐢熸垚闄勪欢涓嬭浇閾炬帴鍦板潃锛圲RL锛�
     * @param pid 鏉冮檺ID
     * @param linkId a鏍囩鐨処D
     * @param type 瀛樺偍鏂囦欢澶�
     * @param rq 瀛樺偍鏂囦欢澶逛笅鐨勬棩鏈熸枃浠跺す YYYY-MM-DD
     * @param fileName 鏂囦欢涓嬭浇鍚庣殑鏄剧ず鍚嶇О
     * @param storageName 鏂囦欢鐨勫瓨鍌ㄥ悕绉�
     */
    function generateFujianLink(pid,linkId, type, rq, fileName, storageName){
        $("#" + linkId).attr("href", "javascript:void(0)");
        if(!storageName){
            $("#" + linkId).html("鏃犳晥鐨勬枃浠躲€�");
            return;
        }
        fileName = fileName ? fileName : storageName;
        $("#" + linkId).html(fileName);
        var href = _system_static_rootPath + "/common/php/fileDownload.php?type=" + type + "&rq=" + rq + "&fileName=" + fileName + "&name=" + storageName + "&p=" + pid;
        href = encodeURI(href);
        $("#" + linkId).attr("href", href);
    }