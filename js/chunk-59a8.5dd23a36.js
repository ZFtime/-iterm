(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59a8"],{"325c":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("c665"),a=n("aa9a"),o=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,null,[{key:"loadingShow",value:function(t){t.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:22}}),t("div","Loading")])}})}},{key:"loadingHide",value:function(t){t.$Spin.hide()}}]),t}()},5953:function(t,e,n){"use strict";var i=n("e7f8"),a=n.n(i);a.a},"82bb":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icp"},[n("div",{staticClass:"i-title"},[n("h3",[t._v("许可证信息")]),n("div",{staticClass:"i-input"},[n("Input",{attrs:{search:"","enter-button":"",size:"large",placeholder:"滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息"},on:{"on-enter":t.geticpovalue},model:{value:t.icpvalue,callback:function(e){t.icpvalue=e},expression:"icpvalue"}})],1),n("Divider",{attrs:{solide:""}})],1),n("Content",[n("Table",{attrs:{border:"",columns:t.columns7,"no-data-text":"暂无数据，请到我的公司添加公司",data:t.data1}})],1),n("div",{staticStyle:{}},[n("Page",{attrs:{total:t.totalNum,"show-elevator":""},on:{"on-change":t.changePage}})],1)],1)},a=[],o=(n("c5f6"),n("7f7f"),n("cadf"),n("551c"),n("097d"),n("bc3a")),c=n.n(o),s=n("325c"),l={data:function(){var t=this;return{columns7:[{title:"公司名称",key:"name",width:160,render:function(t,e){return t("div",[t("Icon",{props:{type:"person"}}),t("strong",e.row.name)])}},{title:"证书编号",key:"num"},{title:"证书类型",key:"type",width:100},{title:"业务类型",key:"activity",width:230},{title:"颁发时间",key:"atime",width:100},{title:"续期时间",key:"otime",width:100},{title:"证书状态",key:"state",width:100},{title:"操作",key:"action",width:200,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(n.index)}}},"年检"),e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(n.index)}}},"续期"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.show(n.index)}}},"提醒")])}}],data1:[],page:0,size:10,totalNum:0,icpvalue:""}},mounted:function(){this.renderData()},methods:{renderData:function(){var t=this;s["a"].loadingShow(this),c()({methods:"get",url:"http://localhost:8090/success",data:{page:this.page,size:this.size,userId:1}}).then(function(e){var n=e.data;n.code&&1===n.code&&(t.data1=n.result,t.totalNum=Number(n.totalNum)),s["a"].loadingHide(t)}).catch(function(e){s["a"].loadingHide(t)})},changePage:function(t){this.page=t-1,this.renderData()},geticpovalue:function(){console.log(this.icpvalue),c()({method:"请求方式",url:"请求接口",data:{value:this.icpvalue}}).then(function(t){console.log(t)}).catch(function(){})},show:function(t){this.$Modal.info({content:"请年检"})},remove:function(t){this.data1.splice(t,1)}}},u=l,r=(n("5953"),n("2877")),d=Object(r["a"])(u,i,a,!1,null,null,null);d.options.__file="icp.vue";e["default"]=d.exports},e7f8:function(t,e,n){}}]);