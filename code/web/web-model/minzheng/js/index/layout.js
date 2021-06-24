/**************************
*Desc:鎻愪氦鎿嶄綔鏃堕伄缃�
*Argument:type=0 鍏ㄥ睆閬� 1灞€閮ㄩ伄
*Author:Zery-Zhang
*Date:2014-09-18
*Version:1.0.0
**************************/
; (function ($) { 
    $.fn.jqLoading =function(option) {
        var defaultVal = {
            backgroudColor: "#ECECEC",//鑳屾櫙鑹�
            backgroundImage: _system_static_rootPath+"/common/resources/loading.gif",//鑳屾櫙鍥剧墖
            text: "涓婁紶涓�....",//鏂囧瓧 
            width: 60,//瀹藉害
            height: 60,//楂樺害
            type:0 //0鍏ㄩ儴閬紝1 灞€閮ㄩ伄
            
        };
        var opt = $.extend({}, defaultVal, option);

        if (opt.type == 0) {
            //鍏ㄥ睆閬�
            openLayer();
        } else {
            //灞€閮ㄩ伄(褰撳墠瀵硅薄搴斾负闇€瑕佽閬尅鐨勫璞�)
            openPartialLayer(this);
        }
        
        //閿€姣佸璞�
        if (option === "destroy") {
            closeLayer();
        }
        
        //璁剧疆鑳屾櫙灞傞珮
        function height () {
            var scrollHeight, offsetHeight;
            // handle IE 6
           // if ($.browser.msie && $.browser.version < 7) {
                scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                offsetHeight = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                if (scrollHeight < offsetHeight) {
                    return $(window).height();
                } else {
                    return scrollHeight;
                }
                // handle "good" browsers
            //}
            //else if ($.browser.msie && $.browser.version == 8) {
             //   return $(document).height() - 4;
           // }
            //else {
           //     return $(document).height();
            //}
        };
        
        //璁剧疆鑳屾櫙灞傚
        function width() {
            var scrollWidth, offsetWidth;
            // handle IE
            //if ($.browser.msie) {
                scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (scrollWidth < offsetWidth) {
                    return $(window).width();
                } else {
                    return scrollWidth;
                }
                // handle "good" browsers
            //}
            //else {
             //   return $(document).width();
            //}
        };
        
        /*==========鍏ㄩ儴閬僵=========*/
        function openLayer() {
            //鑳屾櫙閬僵灞�
            var layer = $("<div id='layer'></div>");
            layer.css({
                zIndex:9998,
                position: "absolute",
                height: height() + "px",
                width: width() + "px",
                background: "black",
                top: 0,
                left: 0,
                filter: "alpha(opacity=30)",
                opacity: 0.3
              
            });
           
           //鍥剧墖鍙婃枃瀛楀眰
            var content = $("<div id='content'></div>");
            content.css({
                textAlign: "left",
                position:"absolute",
                zIndex: 9999,
                height: opt.height + "px",
                width: opt.width + "px",
                top: "50%",
                left: "50%",
                verticalAlign: "middle",
                background: opt.backgroudColor,
                borderRadius:"8px",
                fontSize:"13px"
            });
            
            content.append("<img style='width:30px;height:30px;vertical-align:middle;margin:"+(opt.height/4)+"px; 0 0 5px;margin-right:5px;' src='" + opt.backgroundImage + "' /><span style='text-align:center; vertical-align:middle;color:#fff;'>" + opt.text + "</span>");
            $("body").append(layer).append(content);
            var top = content.css("top").replace('px','');
            var left = content.css("left").replace('px','');
            content.css("top",(parseFloat(top)-opt.height/2)).css("left",(parseFloat(left)-opt.width/2));
            
           return this;
        }

        //閿€姣佸璞�
        function closeLayer() {
            $("#layer,#content,#partialLayer").remove();
            return this;
        }
        
        /*==========灞€閮ㄩ伄缃�=========*/
        function openPartialLayer(obj) {
         
            var eheight = $(obj).css("height");//鍏冪礌甯x鐨勯珮瀹藉害
            var ewidth = $(obj).css("width");
            var top = $(obj).offset().top; // 鍏冪礌鍦ㄦ枃妗ｄ腑浣嶇疆 婊氬姩鏉′笉褰卞搷
            var left = $(obj).offset().left;

            var layer = $("<div id='partialLayer'></div>");
            layer.css({
                style: 'z-index:9998',
                position: "absolute",
                height: eheight,
                width: ewidth,
                background: "black",
                top: top,
                left: left,
                filter: "alpha(opacity=60)",
                opacity: 0.6,
                borderRadius:"3px",
                dispaly: "block"
            });
            $("body").append(layer);

            return this;
        }
    };
    
})(jQuery)