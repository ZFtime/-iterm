(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e3c"],{4604:function(t,i,e){},"620c":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("Row",[e("i-col",{attrs:{span:"12"}},[e("Card",[e("div",{staticClass:"cropper-example cropper-first"},[e("cropper",{attrs:{src:t.exampleImageSrc,"crop-button-text":"确认提交"},on:{"on-crop":t.handleCroped}})],1)])],1)],1)],1)},n=[],o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"cropper-wrapper"},[e("div",{staticClass:"img-box"},[e("img",{staticClass:"cropper-image",attrs:{id:t.imgId,alt:""}})]),e("div",{staticClass:"right-con"},[t.preview?e("div",{staticClass:"preview-box",attrs:{id:t.previewId}}):t._e(),e("div",{staticClass:"button-box"},[t._t("default",[e("Upload",{attrs:{action:"image/upload","before-upload":t.beforeUpload}},[e("Button",{staticStyle:{width:"150px"},attrs:{type:"primary"}},[t._v("上传图片")])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.insideSrc,expression:"insideSrc"}]},[e("Button",{attrs:{type:"primary"},on:{click:t.rotate}},[e("Icon",{attrs:{type:"md-refresh",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:t.shrink}},[e("Icon",{attrs:{type:"md-remove",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:t.magnify}},[e("Icon",{attrs:{type:"md-add",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:function(i){t.scale("X")}}},[e("Icon",{attrs:{custom:"iconfont icon-shuipingfanzhuan",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:function(i){t.scale("Y")}}},[e("Icon",{attrs:{custom:"iconfont icon-chuizhifanzhuan",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:function(i){t.move(0,-t.moveStep)}}},[e("Icon",{attrs:{type:"md-arrow-round-up",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:function(i){t.move(-t.moveStep,0)}}},[e("Icon",{attrs:{type:"md-arrow-round-back",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:function(i){t.move(0,t.moveStep)}}},[e("Icon",{attrs:{type:"md-arrow-round-down",size:18}})],1),e("Button",{attrs:{type:"primary"},on:{click:function(i){t.move(t.moveStep,0)}}},[e("Icon",{attrs:{type:"md-arrow-round-forward",size:18}})],1),e("Button",{staticStyle:{width:"150px","margin-top":"10px"},attrs:{type:"primary"},on:{click:t.crop}},[t._v(t._s(t.cropButtonText))])],1)],2)])])},r=[],s=(e("a481"),e("c5f6"),e("bab4")),h=e.n(s),c=(e("a0f2"),e("4604"),{name:"Cropper",props:{src:{type:String,default:""},preview:{type:Boolean,default:!0},moveStep:{type:Number,default:4},cropButtonText:{type:String,default:"裁剪"}},data:function(){return{cropper:null,insideSrc:""}},computed:{imgId:function(){return"cropper".concat(this._uid)},previewId:function(){return"cropper_preview".concat(this._uid)}},watch:{src:function(t){this.replace(t)},insideSrc:function(t){this.replace(t)}},methods:{beforeUpload:function(t){var i=this,e=new FileReader;return e.readAsDataURL(t),e.onload=function(t){i.insideSrc=t.srcElement.result},!1},replace:function(t){this.cropper.replace(t),this.insideSrc=t},rotate:function(){this.cropper.rotate(90)},shrink:function(){this.cropper.zoom(-.1)},magnify:function(){this.cropper.zoom(.1)},scale:function(t){this.cropper["scale".concat(t)](-this.cropper.getData()["scale".concat(t)])},move:function(){var t;(t=this.cropper).move.apply(t,arguments)},crop:function(){var t=this;this.cropper.getCroppedCanvas().toBlob(function(i){t.$emit("on-crop",i)})}},mounted:function(){var t=this;this.$nextTick(function(){var i=document.getElementById(t.imgId);t.cropper=new h.a(i,{preview:"#".concat(t.previewId),checkCrossOrigin:!0})})}}),l=c,d=e("2877"),p=Object(d["a"])(l,o,r,!1,null,null,null);p.options.__file="index.vue";var u=p.exports,m=u,f=e("7e1e"),g={name:"cropper_page",components:{Cropper:m},data:function(){return{exampleImageSrc:""}},methods:{handleCroped:function(t){var i=this,e=new FormData;e.append("croppedImg",t),Object(f["e"])(e).then(function(){i.$Message.success("Upload success~")})}}},v=g,w=(e("d846"),Object(d["a"])(v,a,n,!1,null,null,null));w.options.__file="cropper.vue";i["default"]=w.exports},"65db":function(t,i,e){},a0f2:function(t,i,e){},bab4:function(t,i,e){
/*!
 * Cropper.js v1.2.2
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2018 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-01-03T13:27:18.062Z
 */
(function(i,e){t.exports=e()})(0,function(){"use strict";var t="undefined"!==typeof window?window:{},i="cropper",e="all",a="crop",n="move",o="zoom",r="e",s="w",h="s",c="n",l="ne",d="nw",p="se",u="sw",m=i+"-crop",f=i+"-disabled",g=i+"-hidden",v=i+"-hide",w=i+"-invisible",b=i+"-modal",x=i+"-move",y="action",C="preview",M="crop",D="move",B="none",k="crop",E="cropend",T="cropmove",S="cropstart",W="dblclick",N="error",H="load",L=t.PointerEvent?"pointerdown":"touchstart mousedown",z=t.PointerEvent?"pointermove":"touchmove mousemove",O=t.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",Y="ready",X="resize",I="wheel mousewheel DOMMouseScroll",R="zoom",A=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,U=/^data:/,j=/^data:image\/jpeg;base64,/,_=/^(img|canvas)$/i,P={viewMode:0,dragMode:M,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},q='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>',$="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")},Q=function(){function t(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(i,e,a){return e&&t(i.prototype,e),a&&t(i,a),i}}(),Z=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)},J=Number.isNaN||t.isNaN;function K(t){return"number"===typeof t&&!J(t)}function V(t){return"undefined"===typeof t}function G(t){return"object"===("undefined"===typeof t?"undefined":$(t))&&null!==t}var tt=Object.prototype.hasOwnProperty;function it(t){if(!G(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&tt.call(e,"isPrototypeOf")}catch(t){return!1}}function et(t){return"function"===typeof t}function at(t,i){if(t&&et(i))if(Array.isArray(t)||K(t.length)){var e=t.length,a=void 0;for(a=0;a<e;a+=1)if(!1===i.call(t,t[a],a,t))break}else G(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)});return t}function nt(t){for(var i=arguments.length,e=Array(i>1?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];if(G(t)&&e.length>0){if(Object.assign)return Object.assign.apply(Object,[t].concat(e));e.forEach(function(i){G(i)&&Object.keys(i).forEach(function(e){t[e]=i[e]})})}return t}function ot(t,i){for(var e=arguments.length,a=Array(e>2?e-2:0),n=2;n<e;n++)a[n-2]=arguments[n];return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.apply(i,a.concat(n))}}var rt=/\.\d*(?:0|9){12}\d*$/i;function st(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return rt.test(t)?Math.round(t*i)/i:t}var ht=/^(width|height|left|top|marginLeft|marginTop)$/;function ct(t,i){var e=t.style;at(i,function(t,i){ht.test(i)&&K(t)&&(t+="px"),e[i]=t})}function lt(t,i){return t.classList?t.classList.contains(i):t.className.indexOf(i)>-1}function dt(t,i){if(i)if(K(t.length))at(t,function(t){dt(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className=e+" "+i):t.className=i}}function pt(t,i){i&&(K(t.length)?at(t,function(t){pt(t,i)}):t.classList?t.classList.remove(i):t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function ut(t,i,e){i&&(K(t.length)?at(t,function(t){ut(t,i,e)}):e?dt(t,i):pt(t,i))}var mt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(mt,"$1-$2").toLowerCase()}function gt(t,i){return G(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-"+ft(i))}function vt(t,i,e){G(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-"+ft(i),e)}function wt(t,i){if(G(t[i]))try{delete t[i]}catch(e){t[i]=null}else if(t.dataset)try{delete t.dataset[i]}catch(e){t.dataset[i]=null}else t.removeAttribute("data-"+ft(i))}var bt=/\s+/;function xt(t,i,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(et(e)){var n=i.trim().split(bt);n.length>1?at(n,function(i){xt(t,i,e,a)}):t.removeEventListener?t.removeEventListener(i,e,a):t.detachEvent&&t.detachEvent("on"+i,e)}}function yt(t,i,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(et(e)){var n=i.trim().split(bt);if(n.length>1)at(n,function(i){yt(t,i,e,a)});else{if(a.once){var o=e;e=function(){for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];return xt(t,i,e,a),o.apply(t,r)}}t.addEventListener?t.addEventListener(i,e,a):t.attachEvent&&t.attachEvent("on"+i,e)}}}function Ct(t,i,e){if(t.dispatchEvent){var a=void 0;return et(Event)&&et(CustomEvent)?a=V(e)?new Event(i,{bubbles:!0,cancelable:!0}):new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):V(e)?(a=document.createEvent("Event"),a.initEvent(i,!0,!0)):(a=document.createEvent("CustomEvent"),a.initCustomEvent(i,!0,!0,e)),t.dispatchEvent(a)}return!t.fireEvent||t.fireEvent("on"+i)}function Mt(t){var i=document.documentElement,e=t.getBoundingClientRect();return{left:e.left+((window.scrollX||i&&i.scrollLeft||0)-(i&&i.clientLeft||0)),top:e.top+((window.scrollY||i&&i.scrollTop||0)-(i&&i.clientTop||0))}}function Dt(t){while(t.firstChild)t.removeChild(t.firstChild)}var Bt=t.location,kt=/^(https?:)\/\/([^:/?#]+):?(\d*)/i;function Et(t){var i=t.match(kt);return i&&(i[1]!==Bt.protocol||i[2]!==Bt.hostname||i[3]!==Bt.port)}function Tt(t){var i="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+i}function St(t){var i=t.rotate,e=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];K(n)&&0!==n&&r.push("translateX("+n+"px)"),K(o)&&0!==o&&r.push("translateY("+o+"px)"),K(i)&&0!==i&&r.push("rotate("+i+"deg)"),K(e)&&1!==e&&r.push("scaleX("+e+")"),K(a)&&1!==a&&r.push("scaleY("+a+")");var s=r.length?r.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}var Wt=t.navigator,Nt=Wt&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(Wt.userAgent);function Ht(t,i){if(!t.naturalWidth||Nt){var e=document.createElement("img"),a=document.body||document.documentElement;e.onload=function(){i(e.width,e.height),Nt||a.removeChild(e)},e.src=t.src,Nt||(e.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",a.appendChild(e))}else i(t.naturalWidth,t.naturalHeight)}function Lt(t){var i=nt({},t),e=[];return at(t,function(t,a){delete i[a],at(i,function(i){var a=Math.abs(t.startX-i.startX),n=Math.abs(t.startY-i.startY),o=Math.abs(t.endX-i.endX),r=Math.abs(t.endY-i.endY),s=Math.sqrt(a*a+n*n),h=Math.sqrt(o*o+r*r),c=(h-s)/s;e.push(c)})}),e.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),e[0]}function zt(t,i){var e=t.pageX,a=t.pageY,n={endX:e,endY:a};return i?n:nt({startX:e,startY:a},n)}function Ot(t){var i=0,e=0,a=0;return at(t,function(t){var n=t.startX,o=t.startY;i+=n,e+=o,a+=1}),i/=a,e/=a,{pageX:i,pageY:e}}var Yt=Number.isFinite||t.isFinite;function Xt(t){var i=t.aspectRatio,e=t.height,a=t.width,n=function(t){return Yt(t)&&t>0};return n(a)&&n(e)?e*i>a?e=a/i:a=e*i:n(a)?e=a/i:n(e)&&(a=e*i),{width:a,height:e}}function It(t){var i=t.width,e=t.height,a=t.degree;if(a=Math.abs(a)%180,90===a)return{width:e,height:i};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),s=i*r+e*o,h=i*o+e*r;return a>90?{width:h,height:s}:{width:s,height:h}}function Rt(t,i,e,a){var n=i.naturalWidth,o=i.naturalHeight,r=i.rotate,s=void 0===r?0:r,h=i.scaleX,c=void 0===h?1:h,l=i.scaleY,d=void 0===l?1:l,p=e.aspectRatio,u=e.naturalWidth,m=e.naturalHeight,f=a.fillColor,g=void 0===f?"transparent":f,v=a.imageSmoothingEnabled,w=void 0===v||v,b=a.imageSmoothingQuality,x=void 0===b?"low":b,y=a.maxWidth,C=void 0===y?1/0:y,M=a.maxHeight,D=void 0===M?1/0:M,B=a.minWidth,k=void 0===B?0:B,E=a.minHeight,T=void 0===E?0:E,S=document.createElement("canvas"),W=S.getContext("2d"),N=Xt({aspectRatio:p,width:C,height:D}),H=Xt({aspectRatio:p,width:k,height:T}),L=Math.min(N.width,Math.max(H.width,u)),z=Math.min(N.height,Math.max(H.height,m)),O=[-n/2,-o/2,n,o];return S.width=st(L),S.height=st(z),W.fillStyle=g,W.fillRect(0,0,L,z),W.save(),W.translate(L/2,z/2),W.rotate(s*Math.PI/180),W.scale(c,d),W.imageSmoothingEnabled=w,W.imageSmoothingQuality=x,W.drawImage.apply(W,[t].concat(Z(O.map(function(t){return Math.floor(st(t))})))),W.restore(),S}var At=String.fromCharCode;function Ut(t,i,e){var a="",n=void 0;for(e+=i,n=i;n<e;n+=1)a+=At(t.getUint8(n));return a}var jt=/^data:.*,/;function _t(t){var i=t.replace(jt,""),e=atob(i),a=new ArrayBuffer(e.length),n=new Uint8Array(a);return at(n,function(t,i){n[i]=e.charCodeAt(i)}),a}function Pt(t,i){var e=new Uint8Array(t),a="";return at(e,function(t){a+=At(t)}),"data:"+i+";base64,"+btoa(a)}function qt(t){var i=new DataView(t),e=void 0,a=void 0,n=void 0,o=void 0;if(255===i.getUint8(0)&&216===i.getUint8(1)){var r=i.byteLength,s=2;while(s<r){if(255===i.getUint8(s)&&225===i.getUint8(s+1)){n=s;break}s+=1}}if(n){var h=n+4,c=n+10;if("Exif"===Ut(i,h,4)){var l=i.getUint16(c);if(a=18761===l,(a||19789===l)&&42===i.getUint16(c+2,a)){var d=i.getUint32(c+4,a);d>=8&&(o=c+d)}}}if(o){var p=i.getUint16(o,a),u=void 0,m=void 0;for(m=0;m<p;m+=1)if(u=o+12*m+2,274===i.getUint16(u,a)){u+=8,e=i.getUint16(u,a),i.setUint16(u,1,a);break}}return e}function $t(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90;break;default:}return{rotate:i,scaleX:e,scaleY:a}}var Ft={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,a=this.cropper;dt(a,g),pt(t,g);var n={width:Math.max(e.offsetWidth,Number(i.minContainerWidth)||200),height:Math.max(e.offsetHeight,Number(i.minContainerHeight)||100)};this.containerData=n,ct(a,{width:n.width,height:n.height}),dt(t,g),pt(a,g)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,a=Math.abs(i.rotate)%180===90,n=a?i.naturalHeight:i.naturalWidth,o=a?i.naturalWidth:i.naturalHeight,r=n/o,s=t.width,h=t.height;t.height*r>t.width?3===e?s=t.height*r:h=t.width/r:3===e?h=t.width/r:s=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:s,height:h};c.left=(t.width-s)/2,c.top=(t.height-h)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImageData=nt({},i),this.initialCanvasData=nt({},c)},limitCanvas:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=e.viewMode,s=n.aspectRatio,h=this.cropped&&o;if(t){var c=Number(e.minCanvasWidth)||0,l=Number(e.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(l*s>c?c=l*s:l=c/s)):r>0&&(c?c=Math.max(c,h?o.width:0):l?l=Math.max(l,h?o.height:0):h&&(c=o.width,l=o.height,l*s>c?c=l*s:l=c/s));var d=Xt({aspectRatio:s,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(i)if(r){var p=a.width-n.width,u=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,u),h&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,i){var e=this.canvasData,a=this.imageData;if(i){var n=It({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,s=e.width*(o/e.naturalWidth),h=e.height*(r/e.naturalHeight);e.left-=(s-e.width)/2,e.top-=(h-e.height)/2,e.width=s,e.height=h,e.aspectRatio=o/r,e.naturalWidth=o,e.naturalHeight=r,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,ct(this.canvas,nt({width:e.width,height:e.height},St({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);nt(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),ct(this.image,nt({width:e.width,height:e.height},St(nt({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=nt({},n)},limitCropBox:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,s=e.aspectRatio;if(t){var h=Number(e.minCropBoxWidth)||0,c=Number(e.minCropBoxHeight)||0,l=Math.min(a.width,r?n.width:a.width),d=Math.min(a.height,r?n.height:a.height);h=Math.min(h,a.width),c=Math.min(c,a.height),s&&(h&&c?c*s>h?c=h/s:h=c*s:h?c=h/s:c&&(h=c*s),d*s>l?d=l/s:l=d*s),o.minWidth=Math.min(h,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}i&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,a=this.cropBoxData;(a.width>a.maxWidth||a.width<a.minWidth)&&(a.left=a.oldLeft),(a.height>a.maxHeight||a.height<a.minHeight)&&(a.top=a.oldTop),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),this.limitCropBox(!1,!0),a.left=Math.min(Math.max(a.left,a.minLeft),a.maxLeft),a.top=Math.min(Math.max(a.top,a.minTop),a.maxTop),a.oldLeft=a.left,a.oldTop=a.top,t.movable&&t.cropBoxMovable&&vt(this.face,y,a.width>=i.width&&a.height>=i.height?n:e),ct(this.cropBox,nt({width:a.width,height:a.height},St({translateX:a.left,translateY:a.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),this.complete&&Ct(this.element,k,this.getData())}},Qt={initPreview:function(){var t=this.crossOrigin,i=this.options.preview,e=t?this.crossOriginUrl:this.url,a=document.createElement("img");if(t&&(a.crossOrigin=t),a.src=e,this.viewBox.appendChild(a),this.image2=a,i){var n=i.querySelector?[i]:document.querySelectorAll(i);this.previews=n,at(n,function(i){var a=document.createElement("img");vt(i,C,{width:i.offsetWidth,height:i.offsetHeight,html:i.innerHTML}),t&&(a.crossOrigin=t),a.src=e,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',Dt(i),i.appendChild(a)})}},resetPreview:function(){at(this.previews,function(t){var i=gt(t,C);ct(t,{width:i.width,height:i.height}),t.innerHTML=i.html,wt(t,C)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,a=e.width,n=e.height,o=t.width,r=t.height,s=e.left-i.left-t.left,h=e.top-i.top-t.top;this.cropped&&!this.disabled&&(ct(this.image2,nt({width:o,height:r},St(nt({translateX:-s,translateY:-h},t)))),at(this.previews,function(i){var e=gt(i,C),c=e.width,l=e.height,d=c,p=l,u=1;a&&(u=c/a,p=n*u),n&&p>l&&(u=l/n,d=a*u,p=l),ct(i,{width:d,height:p}),ct(i.getElementsByTagName("img")[0],nt({width:o*u,height:r*u},St(nt({translateX:-s*u,translateY:-h*u},t))))}))}},Zt={bind:function(){var t=this.element,i=this.options,e=this.cropper;et(i.cropstart)&&yt(t,S,i.cropstart),et(i.cropmove)&&yt(t,T,i.cropmove),et(i.cropend)&&yt(t,E,i.cropend),et(i.crop)&&yt(t,k,i.crop),et(i.zoom)&&yt(t,R,i.zoom),yt(e,L,this.onCropStart=ot(this.cropStart,this)),i.zoomable&&i.zoomOnWheel&&yt(e,I,this.onWheel=ot(this.wheel,this)),i.toggleDragModeOnDblclick&&yt(e,W,this.onDblclick=ot(this.dblclick,this)),yt(t.ownerDocument,z,this.onCropMove=ot(this.cropMove,this)),yt(t.ownerDocument,O,this.onCropEnd=ot(this.cropEnd,this)),i.responsive&&yt(window,X,this.onResize=ot(this.resize,this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;et(i.cropstart)&&xt(t,S,i.cropstart),et(i.cropmove)&&xt(t,T,i.cropmove),et(i.cropend)&&xt(t,E,i.cropend),et(i.crop)&&xt(t,k,i.crop),et(i.zoom)&&xt(t,R,i.zoom),xt(e,L,this.onCropStart),i.zoomable&&i.zoomOnWheel&&xt(e,I,this.onWheel),i.toggleDragModeOnDblclick&&xt(e,W,this.onDblclick),xt(t.ownerDocument,z,this.onCropMove),xt(t.ownerDocument,O,this.onCropEnd),i.responsive&&xt(window,X,this.onResize)}},Jt={resize:function(){var t=this.options,i=this.container,e=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||e.width<=a||e.height<=n)){var o=i.offsetWidth/e.width;if(1!==o||i.offsetHeight!==e.height){var r=void 0,s=void 0;t.restore&&(r=this.getCanvasData(),s=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(at(r,function(t,i){r[i]=t*o})),this.setCropBoxData(at(s,function(t,i){s[i]=t*o})))}}},dblclick:function(){this.disabled||this.options.dragMode===B||this.setDragMode(lt(this.dragBox,m)?D:M)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*e,t)))},cropStart:function(t){if(!this.disabled){var i=this.options,e=this.pointers,n=void 0;t.changedTouches?at(t.changedTouches,function(t){e[t.identifier]=zt(t)}):e[t.pointerId||0]=zt(t),n=Object.keys(e).length>1&&i.zoomable&&i.zoomOnTouch?o:gt(t.target,y),A.test(n)&&!1!==Ct(this.element,S,{originalEvent:t,action:n})&&(t.preventDefault(),this.action=n,this.cropping=!1,n===a&&(this.cropping=!0,dt(this.dragBox,b)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),!1!==Ct(this.element,T,{originalEvent:t,action:i})&&(t.changedTouches?at(t.changedTouches,function(t){nt(e[t.identifier],zt(t,!0))}):nt(e[t.pointerId||0],zt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?at(t.changedTouches,function(t){delete e[t.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,ut(this.dragBox,b,this.cropped&&this.options.modal)),Ct(this.element,E,{originalEvent:t,action:i}))}}},Kt={change:function(t){var i=this.options,m=this.canvasData,f=this.containerData,v=this.cropBoxData,w=this.pointers,b=this.action,x=i.aspectRatio,y=v.left,C=v.top,M=v.width,D=v.height,B=y+M,k=C+D,E=0,T=0,S=f.width,W=f.height,N=!0,H=void 0;!x&&t.shiftKey&&(x=M&&D?M/D:1),this.limited&&(E=v.minLeft,T=v.minTop,S=E+Math.min(f.width,m.width,m.left+m.width),W=T+Math.min(f.height,m.height,m.top+m.height));var L=w[Object.keys(w)[0]],z={x:L.endX-L.startX,y:L.endY-L.startY},O=function(t){switch(t){case r:B+z.x>S&&(z.x=S-B);break;case s:y+z.x<E&&(z.x=E-y);break;case c:C+z.y<T&&(z.y=T-C);break;case h:k+z.y>W&&(z.y=W-k);break;default:}};switch(b){case e:y+=z.x,C+=z.y;break;case r:if(z.x>=0&&(B>=S||x&&(C<=T||k>=W))){N=!1;break}O(r),M+=z.x,x&&(D=M/x,C-=z.x/x/2),M<0&&(b=s,M=0);break;case c:if(z.y<=0&&(C<=T||x&&(y<=E||B>=S))){N=!1;break}O(c),D-=z.y,C+=z.y,x&&(M=D*x,y+=z.y*x/2),D<0&&(b=h,D=0);break;case s:if(z.x<=0&&(y<=E||x&&(C<=T||k>=W))){N=!1;break}O(s),M-=z.x,y+=z.x,x&&(D=M/x,C+=z.x/x/2),M<0&&(b=r,M=0);break;case h:if(z.y>=0&&(k>=W||x&&(y<=E||B>=S))){N=!1;break}O(h),D+=z.y,x&&(M=D*x,y-=z.y*x/2),D<0&&(b=c,D=0);break;case l:if(x){if(z.y<=0&&(C<=T||B>=S)){N=!1;break}O(c),D-=z.y,C+=z.y,M=D*x}else O(c),O(r),z.x>=0?B<S?M+=z.x:z.y<=0&&C<=T&&(N=!1):M+=z.x,z.y<=0?C>T&&(D-=z.y,C+=z.y):(D-=z.y,C+=z.y);M<0&&D<0?(b=u,D=0,M=0):M<0?(b=d,M=0):D<0&&(b=p,D=0);break;case d:if(x){if(z.y<=0&&(C<=T||y<=E)){N=!1;break}O(c),D-=z.y,C+=z.y,M=D*x,y+=z.y*x}else O(c),O(s),z.x<=0?y>E?(M-=z.x,y+=z.x):z.y<=0&&C<=T&&(N=!1):(M-=z.x,y+=z.x),z.y<=0?C>T&&(D-=z.y,C+=z.y):(D-=z.y,C+=z.y);M<0&&D<0?(b=p,D=0,M=0):M<0?(b=l,M=0):D<0&&(b=u,D=0);break;case u:if(x){if(z.x<=0&&(y<=E||k>=W)){N=!1;break}O(s),M-=z.x,y+=z.x,D=M/x}else O(h),O(s),z.x<=0?y>E?(M-=z.x,y+=z.x):z.y>=0&&k>=W&&(N=!1):(M-=z.x,y+=z.x),z.y>=0?k<W&&(D+=z.y):D+=z.y;M<0&&D<0?(b=l,D=0,M=0):M<0?(b=p,M=0):D<0&&(b=d,D=0);break;case p:if(x){if(z.x>=0&&(B>=S||k>=W)){N=!1;break}O(r),M+=z.x,D=M/x}else O(h),O(r),z.x>=0?B<S?M+=z.x:z.y>=0&&k>=W&&(N=!1):M+=z.x,z.y>=0?k<W&&(D+=z.y):D+=z.y;M<0&&D<0?(b=d,D=0,M=0):M<0?(b=u,M=0):D<0&&(b=l,D=0);break;case n:this.move(z.x,z.y),N=!1;break;case o:this.zoom(Lt(w),t),N=!1;break;case a:if(!z.x||!z.y){N=!1;break}H=Mt(this.cropper),y=L.startX-H.left,C=L.startY-H.top,M=v.minWidth,D=v.minHeight,z.x>0?b=z.y>0?p:l:z.x<0&&(y-=M,b=z.y>0?u:d),z.y<0&&(C-=D),this.cropped||(pt(this.cropBox,g),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break;default:}N&&(v.width=M,v.height=D,v.left=y,v.top=C,this.action=b,this.renderCropBox()),at(w,function(t){t.startX=t.endX,t.startY=t.endY})}},Vt={crop:function(){return this.ready&&!this.disabled&&(this.cropped||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&dt(this.dragBox,b),pt(this.cropBox,g)),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=nt({},this.initialImageData),this.canvasData=nt({},this.initialCanvasData),this.cropBoxData=nt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(nt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),pt(this.dragBox,b),dt(this.cropBox,g)),this},replace:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.image2.src=t,at(this.previews,function(i){i.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.load(t))),this},enable:function(){return this.ready&&(this.disabled=!1,pt(this.cropper,f)),this},disable:function(){return this.ready&&(this.disabled=!0,dt(this.cropper,f)),this},destroy:function(){var t=this.element,e=this.image;return this.loaded?(this.isImg&&this.replaced&&(t.src=this.originalUrl),this.unbuild(),pt(t,g)):this.isImg?xt(t,H,this.onStart):e&&e.parentNode.removeChild(e),wt(t,i),this},move:function(t,i){var e=this.canvasData,a=e.left,n=e.top;return this.moveTo(V(t)?t:a+Number(t),V(i)?i:n+Number(i))},moveTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(K(t)&&(e.left=t,a=!0),K(i)&&(e.top=i,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=Number(t),t=t<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var a=this.options,n=this.canvasData,o=n.width,r=n.height,s=n.naturalWidth,h=n.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&a.zoomable){var c=s*t,l=h*t;if(!1===Ct(this.element,R,{originalEvent:e,oldRatio:o/s,ratio:c/s}))return this;if(e){var d=this.pointers,p=Mt(this.cropper),u=d&&Object.keys(d).length?Ot(d):{pageX:e.pageX,pageY:e.pageY};n.left-=(c-o)*((u.pageX-p.left-n.left)/o),n.top-=(l-r)*((u.pageY-p.top-n.top)/r)}else it(i)&&K(i.x)&&K(i.y)?(n.left-=(c-o)*((i.x-n.left)/o),n.top-=(l-r)*((i.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),K(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,K(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(K(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(K(t)&&(e.scaleX=t,a=!0),K(i)&&(e.scaleY=i,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,e=this.imageData,a=this.canvasData,n=this.cropBoxData,o=void 0;if(this.ready&&this.cropped){o={x:n.left-a.left,y:n.top-a.top,width:n.width,height:n.height};var r=e.width/e.naturalWidth;at(o,function(i,e){i/=r,o[e]=t?Math.round(i):i})}else o={x:0,y:0,width:0,height:0};return i.rotatable&&(o.rotate=e.rotate||0),i.scalable&&(o.scaleX=e.scaleX||1,o.scaleY=e.scaleY||1),o},setData:function(t){var i=this.options,e=this.imageData,a=this.canvasData,n={};if(et(t)&&(t=t.call(this.element)),this.ready&&!this.disabled&&it(t)){var o=!1;i.rotatable&&K(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(K(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),K(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=e.width/e.naturalWidth;K(t.x)&&(n.left=t.x*r+a.left),K(t.y)&&(n.top=t.y*r+a.top),K(t.width)&&(n.width=t.width*r),K(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?nt({},this.containerData):{}},getImageData:function(){return this.loaded?nt({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&at(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return et(t)&&(t=t.call(this.element)),this.ready&&!this.disabled&&it(t)&&(K(t.left)&&(i.left=t.left),K(t.top)&&(i.top=t.top),K(t.width)?(i.width=t.width,i.height=t.width/e):K(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,i=void 0;return this.ready&&this.cropped&&(i={left:t.left,top:t.top,width:t.width,height:t.height}),i||{}},setCropBoxData:function(t){var i=this.cropBoxData,e=this.options.aspectRatio,a=void 0,n=void 0;return et(t)&&(t=t.call(this.element)),this.ready&&this.cropped&&!this.disabled&&it(t)&&(K(t.left)&&(i.left=t.left),K(t.top)&&(i.top=t.top),K(t.width)&&t.width!==i.width&&(a=!0,i.width=t.width),K(t.height)&&t.height!==i.height&&(n=!0,i.height=t.height),e&&(a?i.height=i.width/e:n&&(i.width=i.height*e)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=Rt(this.image,this.imageData,i,t);if(!this.cropped)return e;var a=this.getData(),n=a.x,o=a.y,r=a.width,s=a.height,h=r/s,c=Xt({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),l=Xt({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0}),d=Xt({aspectRatio:h,width:t.width||r,height:t.height||s}),p=d.width,u=d.height;p=Math.min(c.width,Math.max(l.width,p)),u=Math.min(c.height,Math.max(l.height,u));var m=document.createElement("canvas"),f=m.getContext("2d");m.width=st(p),m.height=st(u),f.fillStyle=t.fillColor||"transparent",f.fillRect(0,0,p,u);var g=t.imageSmoothingEnabled,v=void 0===g||g,w=t.imageSmoothingQuality;f.imageSmoothingEnabled=v,w&&(f.imageSmoothingQuality=w);var b=e.width,x=e.height,y=n,C=o,M=void 0,D=void 0,B=void 0,k=void 0,E=void 0,T=void 0;y<=-r||y>b?(y=0,M=0,B=0,E=0):y<=0?(B=-y,y=0,M=Math.min(b,r+y),E=M):y<=b&&(B=0,M=Math.min(r,b-y),E=M),M<=0||C<=-s||C>x?(C=0,D=0,k=0,T=0):C<=0?(k=-C,C=0,D=Math.min(x,s+C),T=D):C<=x&&(k=0,D=Math.min(s,x-C),T=D);var S=[y,C,M,D];if(E>0&&T>0){var W=p/r;S.push(B*W,k*W,E*W,T*W)}return f.drawImage.apply(f,[e].concat(Z(S.map(function(t){return Math.floor(st(t))})))),m},setAspectRatio:function(t){var i=this.options;return this.disabled||V(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,a=this.face;if(this.loaded&&!this.disabled){var n=t===M,o=i.movable&&t===D;t=n||o?t:B,vt(e,y,t),ut(e,m,n),ut(e,x,o),i.cropBoxMovable||(vt(a,y,t),ut(a,m,n),ut(a,x,o))}return this}},Gt=t.Cropper,ti=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(F(this,t),!i||!_.test(i.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=i,this.options=nt({},P,it(e)&&e),this.complete=!1,this.cropped=!1,this.disabled=!1,this.isImg=!1,this.limited=!1,this.loaded=!1,this.ready=!1,this.replaced=!1,this.wheeling=!1,this.originalUrl="",this.canvasData=null,this.cropBoxData=null,this.previews=null,this.pointers={},this.init()}return Q(t,[{key:"init",value:function(){var t=this.element,e=t.tagName.toLowerCase(),a=void 0;if(!gt(t,i)){if(vt(t,i,this),"img"===e){if(this.isImg=!0,a=t.getAttribute("src")||"",this.originalUrl=a,!a)return;a=t.src}else"canvas"===e&&window.HTMLCanvasElement&&(a=t.toDataURL());this.load(a)}}},{key:"load",value:function(t){var i=this;if(t){this.url=t,this.imageData={};var e=this.element,a=this.options;if(a.checkOrientation&&window.ArrayBuffer)if(U.test(t))j.test(t)?this.read(_t(t)):this.clone();else{var n=new XMLHttpRequest;n.onerror=function(){i.clone()},n.onload=function(){i.read(n.response)},a.checkCrossOrigin&&Et(t)&&e.crossOrigin&&(t=Tt(t)),n.open("get",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===e.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var i=this.options,e=this.imageData,a=qt(t),n=0,o=1,r=1;if(a>1){this.url=Pt(t,"image/jpeg");var s=$t(a);n=s.rotate,o=s.scaleX,r=s.scaleY}i.rotatable&&(e.rotate=n),i.scalable&&(e.scaleX=o,e.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,i=this.url,e=void 0,a=void 0;this.options.checkCrossOrigin&&Et(i)&&(e=t.crossOrigin,e?a=i:(e="anonymous",a=Tt(i))),this.crossOrigin=e,this.crossOriginUrl=a;var n=document.createElement("img");e&&(n.crossOrigin=e),n.src=a||i;var o=ot(this.start,this),r=ot(this.stop,this);this.image=n,this.onStart=o,this.onStop=r,this.isImg?t.complete?this.start():yt(t,H,o):(yt(n,H,o),yt(n,N,r),dt(n,v),t.parentNode.insertBefore(n,t.nextSibling))}},{key:"start",value:function(t){var i=this,e=this.isImg?this.element:this.image;t&&(xt(e,H,this.onStart),xt(e,N,this.onStop)),Ht(e,function(t,e){nt(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.loaded=!0,i.build()})}},{key:"stop",value:function(){var t=this.image;xt(t,H,this.onStart),xt(t,N,this.onStop),t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t=this;if(this.loaded){this.ready&&this.unbuild();var a=this.element,n=this.options,o=this.image,r=a.parentNode,s=document.createElement("div");s.innerHTML=q;var h=s.querySelector("."+i+"-container"),c=h.querySelector("."+i+"-canvas"),l=h.querySelector("."+i+"-drag-box"),d=h.querySelector("."+i+"-crop-box"),p=d.querySelector("."+i+"-face");this.container=r,this.cropper=h,this.canvas=c,this.dragBox=l,this.cropBox=d,this.viewBox=h.querySelector("."+i+"-view-box"),this.face=p,c.appendChild(o),dt(a,g),r.insertBefore(h,a.nextSibling),this.isImg||pt(o,v),this.initPreview(),this.bind(),n.aspectRatio=Math.max(0,n.aspectRatio)||NaN,n.viewMode=Math.max(0,Math.min(3,Math.round(n.viewMode)))||0,this.cropped=n.autoCrop,n.autoCrop?n.modal&&dt(l,b):dt(d,g),n.guides||dt(d.getElementsByClassName(i+"-dashed"),g),n.center||dt(d.getElementsByClassName(i+"-center"),g),n.background&&dt(h,i+"-bg"),n.highlight||dt(p,w),n.cropBoxMovable&&(dt(p,x),vt(p,y,e)),n.cropBoxResizable||(dt(d.getElementsByClassName(i+"-line"),g),dt(d.getElementsByClassName(i+"-point"),g)),this.setDragMode(n.dragMode),this.render(),this.ready=!0,this.setData(n.data),this.completing=setTimeout(function(){et(n.ready)&&yt(a,Y,n.ready,{once:!0}),Ct(a,Y),Ct(a,k,t.getData()),t.complete=!0},0)}}},{key:"unbuild",value:function(){this.ready&&(this.complete||clearTimeout(this.completing),this.ready=!1,this.complete=!1,this.initialImageData=null,this.initialCanvasData=null,this.initialCropBoxData=null,this.containerData=null,this.canvasData=null,this.cropBoxData=null,this.unbind(),this.resetPreview(),this.previews=null,this.viewBox=null,this.cropBox=null,this.dragBox=null,this.canvas=null,this.container=null,this.cropper.parentNode.removeChild(this.cropper),this.cropper=null)}}],[{key:"noConflict",value:function(){return window.Cropper=Gt,t}},{key:"setDefaults",value:function(t){nt(P,it(t)&&t)}}]),t}();return nt(ti.prototype,Ft,Qt,Zt,Jt,Kt,Vt),ti})},d846:function(t,i,e){"use strict";var a=e("65db"),n=e.n(a);n.a}}]);