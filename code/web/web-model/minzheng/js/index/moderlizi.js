/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-bgpositionxy-borderradius-canvas-canvastext-cssremunit-csstransforms-input-inputtypes-lastchild-nthchild-opacity-rgba-setclasses-cssclassprefix:modernizr_ !*/
 !function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,s,o,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)o=e[s],a=o.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),x.push((i?"":"no-")+a.join("-"))}}function s(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?w.className.baseVal=t:w.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function l(e,n,r,i){var s,l,u,d,f="modernizr",c=o("div"),p=a();if(parseInt(r,10))for(;r--;)u=o("div"),u.id=i?i[r]:f+(r+1),c.appendChild(u);return s=o("style"),s.type="text/css",s.id="s"+f,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=d,w.offsetHeight):c.parentNode.removeChild(c),!!l}function u(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var i;for(var s in e)if(e[s]in t)return n===!1?e[s]:(i=t[e[s]],r(i,"function")?f(i,n||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(s){var o=s.error?"error":"log";s[o].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+p(t[i])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function v(e,t,i,s){function a(){f&&(delete $.style,delete $.modElem)}if(s=r(s,"undefined")?!1:s,!r(i,"undefined")){var l=h(e,i);if(!r(l,"undefined"))return l}for(var f,c,p,m,v,y=["modernizr","tspan","samp"];!$.style&&y.length;)f=!0,$.modElem=o(y.shift()),$.style=$.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],v=$.style[m],u(m,"-")&&(m=d(m)),$.style[m]!==n){if(s||r(i,"undefined"))return a(),"pfx"==t?m:!0;try{$.style[m]=i}catch(g){}if($.style[m]!=v)return a(),"pfx"==t?m:!0}return a(),!1}function y(e,t,n,i,s){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?v(a,t,i,s):(a=(e+" "+L.join(o+" ")+o).split(" "),c(a,t,n))}function g(e,t,r){return y(e,n,n,t,r)}var x=[],C=[],b={_version:"3.4.0",_config:{classPrefix:"modernizr_",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var w=t.documentElement,S="svg"===w.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=o("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof o("canvas").getContext("2d").fillText}),Modernizr.addTest("cssremunit",function(){var e=o("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=o("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var T=o("input"),_="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),k={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)k[t[n]]=!!(t[n]in T);return k.list&&(k.list=!(!o("datalist")||!e.HTMLDataListElement)),k}(_);var z="search tel url email datetime date month week time datetime-local number range color".split(" "),P={};Modernizr.inputtypes=function(e){for(var r,i,s,o=e.length,a="1)",l=0;o>l;l++)T.setAttribute("type",r=e[l]),s="text"!==T.type&&"style"in T,s&&(T.value=a,T.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&T.style.WebkitAppearance!==n?(w.appendChild(T),i=t.defaultView,s=i.getComputedStyle&&"textfield"!==i.getComputedStyle(T,null).WebkitAppearance&&0!==T.offsetHeight,w.removeChild(T)):/^(search|tel)$/.test(r)||(s=/^(url|email)$/.test(r)?T.checkValidity&&T.checkValidity()===!1:T.value!=a)),P[e[l]]=!!s;return P}(z);var E=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=E,Modernizr.addTest("opacity",function(){var e=o("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var A=b.testStyles=l;A("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),A("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5);var N="Moz O ms Webkit",j=b._config.usePrefixes?N.split(" "):[];b._cssomPrefixes=j;var L=b._config.usePrefixes?N.toLowerCase().split(" "):[];b._domPrefixes=L;var V={elem:o("modernizr")};Modernizr._q.push(function(){delete V.elem});var $={style:V.elem.style};Modernizr._q.unshift(function(){delete $.style}),b.testAllProps=y,b.testAllProps=g,Modernizr.addTest("bgpositionxy",function(){return g("backgroundPositionX","3px",!0)&&g("backgroundPositionY","5px",!0)}),Modernizr.addTest("borderradius",g("borderRadius","0px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),i(),s(x),delete b.addTest,delete b.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);