(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-productDetails-productDetails"],{"1b43":function(t,e){function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}this.msgpack||function(t){t.msgpack={pack:c,unpack:l,worker:"msgpack.js",upload:v,download:m};var e=/MSIE/.test(navigator.userAgent),o={},r={},i={},a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),s={8:128,16:32768,32:2147483648},u=/.{8}/g;function c(t){return w(d([],t))}function l(t){return{data:"string"===typeof t?x(t):t,index:-1,decode:f}.decode()}function d(t,e){var r,i,a,s,c,l,f,p,h,m=0,v=0,g=0;if(null==e)t.push(192);else switch(n(e)){case"boolean":t.push(e?195:194);break;case"number":e!==e?t.push(203,255,255,255,255,255,255,255,255):e===1/0?t.push(203,127,240,0,0,0,0,0,0):Math.floor(e)===e?(e<0?e>=-32?t.push(224+e+32):e>-128?t.push(208,e+256):e>-32768?(e+=65536,t.push(209,e>>8,255&e)):e>-2147483648?(e+=4294967296,t.push(210,e>>>24,e>>16&255,e>>8&255,255&e)):++g:e<128?t.push(e):e<256?t.push(204,e):e<65536?t.push(205,e>>8,255&e):e<4294967296?t.push(206,e>>>24,e>>16&255,e>>8&255,255&e):++g,g&&(c=Math.floor(e/4294967296),l=4294967295&e,t.push(e<0?211:207,c>>24&255,c>>16&255,c>>8&255,255&c,l>>24&255,l>>16&255,l>>8&255,255&l))):(s=o,f=e<0,f&&(e*=-1),p=Math.log(e)/Math.LN2+1023|0,h=Math.floor(e*Math.pow(2,1075-p)).toString(2).slice(1),p=("000000000"+p.toString(2)).slice(-11),a=(+f+p+h).match(u),t.push(203,s[a[0]],s[a[1]],s[a[2]],s[a[3]],s[a[4]],s[a[5]],s[a[6]],s[a[7]]));break;case"string":for(a=[],r=e.length,v=0;v<r;++v)i=e.charCodeAt(v),i<128?a.push(127&i):i<2048?a.push(i>>>6&31|192,63&i|128):i<65536&&a.push(i>>>12&15|224,i>>>6&63|128,63&i|128);b(t,32,a.length,[160,218,219]),Array.prototype.push.apply(t,a);break;default:if("[object Array]"===Object.prototype.toString.call(e))for(m=e.length,b(t,16,m,[144,220,221]);v<m;++v)d(t,e[v]);else{if(Object.keys)m=Object.keys(e).length;else for(v in e)e.hasOwnProperty(v)&&++m;for(v in b(t,16,m,[128,222,223]),e)d(t,v),d(t,e[v])}}return t}function f(){var t,e,n,o,r,i,a,u,c,l=0,d=0,f=this,b=f.data,m=b[++f.index];if(m>=224)return m-256;if(m<128)return m;switch(m<144?(n=m-128,m=128):m<160?(n=m-144,m=144):m<192&&(n=m-160,m=160),m){case 192:return null;case 194:return!1;case 195:return!0;case 202:return t=p(f,4),i=t&s[32],a=t>>23&255,u=8388607&t,t&&2147483648!==t?255===a?u?NaN:1/0:(i?-1:1)*(8388608|u)*Math.pow(2,a-127-23):0;case 203:return t=p(f,4),i=t&s[32],a=t>>20&2047,u=1048575&t,t&&2147483648!==t?2047===a?(p(f,4),u?NaN:1/0):(i?-1:1)*((1048576|u)*Math.pow(2,a-1023-20)+p(f,4)*Math.pow(2,a-1023-52)):0;case 207:return p(f,4)*Math.pow(2,32)+p(f,4);case 206:return p(f,4);case 205:return p(f,2);case 204:return p(f,1);case 211:return h(f);case 210:t=p(f,4);case 209:t===e&&(t=p(f,2));case 208:return t===e&&(t=p(f,1)),d=4<<1+(3&m),t<s[d]?t:t-2*s[d];case 219:n=p(f,4);case 218:n===e&&(n=p(f,2));case 160:for(l=f.index+1,f.index+=n,t=[],ri=-1,o=l+n;l<o;++l)r=b[l],r<128?t[++ri]=r:r<224?t[++ri]=(31&r)<<6|63&b[++l]:r<240&&(t[++ri]=(15&r)<<12|(63&b[++l])<<6|63&b[++l]);return String.fromCharCode.apply(null,t);case 223:n=p(f,4);case 222:n===e&&(n=p(f,2));case 128:for(t={};l<n;++l)c=f.decode(),t[c]=f.decode();return t;case 221:n=p(f,4);case 220:n===e&&(n=p(f,2));case 144:for(t=[];l<n;++l)t.push(f.decode())}return t}function p(t,e){var n=0,o=t.data,r=t.index;switch(e){case 4:n+=16777216*o[++r]+(o[++r]<<16);case 2:n+=o[++r]<<8;case 1:n+=o[++r]}return t.index=r,n}function h(t){var e,n=0,o=t.data.slice(t.index+1,t.index+9);return t.index+=8,128&o[0]&&(++n,o[0]^=255,o[1]^=255,o[2]^=255,o[3]^=255,o[4]^=255,o[5]^=255,o[6]^=255,o[7]^=255),e=72057594037927940*o[0]+281474976710656*o[1]+1099511627776*o[2]+4294967296*o[3]+16777216*o[4]+65536*o[5]+256*o[6]+o[7],n?-1*(e+1):e}function b(t,e,n,o){n<e?t.push(o[0]+n):n<65536?t.push(o[1],n>>8,255&n):n<4294967296&&t.push(o[2],n>>>24,n>>16&255,n>>8&255,255&n)}function m(t,e,n){e.method="GET",e.binary=!0,g(t,e,n)}function v(e,n,o){if(n.method="PUT",n.binary=!0,n.worker&&t.Worker){var r=new Worker(msgpack.worker);r.onmessage=function(t){n.data=t.data,g(e,n,o)},r.postMessage({method:"pack",data:n.data})}else n.data=w(c(n.data)),g(e,n,o)}function g(n,o,r){function i(){if(4===m.readyState){var n,i,a,u=m.status,c={status:u,ok:u>=200&&u<300};if(!v++){if("PUT"===d)n=c.ok?m.responseText:"";else if(c.ok){if(o.worker&&t.Worker)return i=new Worker(msgpack.worker),i.onmessage=function(t){r(t.data,o,c)},i.postMessage({method:"unpack",data:m.responseText}),void s();a=e?y(m):x(m.responseText),n=l(a)}h&&h(m,o,c),r(n,o,c),s()}}}function a(t,e){if(!v++){var n={status:e||400,ok:!1};h&&h(m,o,n),r(null,o,n),s(t)}}function s(e){e&&m&&m.abort&&m.abort(),c&&(clearTimeout(c),c=0),m=null,t.addEventListener&&t.removeEventListener("beforeunload",a,!1)}var u,c=0,d=o.method||"GET",f=o.header||{},p=o.before,h=o.after,b=o.data||null,m=t.XMLHttpRequest?new XMLHttpRequest:t.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null,v=0,g="overrideMimeType",w="setRequestHeader",k="GET"===d&&o.binary;try{for(u in m.onreadystatechange=i,m.open(d,n,!0),p&&p(m,o),k&&m[g]&&m[g]("text/plain; charset=x-user-defined"),b&&m[w]("Content-Type","application/x-www-form-urlencoded"),f)m[w](u,f[u]);t.addEventListener&&t.addEventListener("beforeunload",a,!1),m.send(b),c=setTimeout(function(){a(1,408)},1e3*(o.timeout||10))}catch(C){a(0,400)}}function x(t){var e,n,o=[],i=r,a=t.split(""),s=-1;n=a.length,e=n%8;while(e--)++s,o[s]=i[a[s]];e=n>>3;while(e--)o.push(i[a[++s]],i[a[++s]],i[a[++s]],i[a[++s]],i[a[++s]],i[a[++s]],i[a[++s]],i[a[++s]]);return o}function y(t){var e,n,o,r,i,a,s,u,c,l,d,f,p=[],h="charCodeAt",b=-1;f=vblen(t),e=vbstr(t),o=Math.ceil(f/2),n=o%8;while(n--)r=e[h](++b),p.push(255&r,r>>8);n=o>>3;while(n--)r=e[h](++b),i=e[h](++b),a=e[h](++b),s=e[h](++b),u=e[h](++b),c=e[h](++b),l=e[h](++b),d=e[h](++b),p.push(255&r,r>>8,255&i,i>>8,255&a,a>>8,255&s,s>>8,255&u,u>>8,255&c,c>>8,255&l,l>>8,255&d,d>>8);return f%2&&p.pop(),p}function w(e){var n=[],o=0,r=-1,s=e.length,u=[0,2,1][e.length%3],c=i,l=a;if(t.btoa){while(r<s)n.push(c[e[++r]]);return btoa(n.join(""))}--s;while(r<s)o=e[++r]<<16|e[++r]<<8|e[++r],n.push(l[o>>18&63],l[o>>12&63],l[o>>6&63],l[63&o]);return u>1&&(n[n.length-2]="="),u>0&&(n[n.length-1]="="),n.join("")}self.importScripts&&(onmessage=function(t){"pack"===t.data.method?postMessage(w(c(t.data.data))):postMessage(l(t.data.data))}),function(){for(var t,e=0;e<256;++e)t=String.fromCharCode(e),o[("0000000"+e.toString(2)).slice(-8)]=e,r[t]=e,i[e]=t;for(e=128;e<256;++e)r[String.fromCharCode(63232+e)]=e}(),e&&document.write('<script type="text/vbscript">Function vblen(b)vblen=LenB(b.responseBody)End Function\nFunction vbstr(b)vbstr=CStr(b.responseBody)+chr(0)End Function<\/script>')}(this)},3333:function(t,e,n){var o=n("bea0");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("055ed6ea",o,!0,{sourceMap:!1,shadowMode:!1})},"3b23":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-flex uni-column"},[n("v-uni-button",{staticClass:"backBtn",attrs:{type:"default",plain:"ture"},on:{click:function(e){e=t.$handleEvent(e),t.goback()}}},[n("v-uni-image",{staticClass:"backImage",attrs:{src:"../../static/backImage.png",mode:""}})],1),n("v-uni-view",{staticClass:"flex-topItem flex-item-V"},[n("v-uni-image",{staticClass:"topImage",attrs:{src:t.topUrl,mode:""}})],1),n("v-uni-view",{staticClass:"productTitleView uni-flex uni-column"},[n("v-uni-text",{staticClass:"productName"},[t._v(t._s(t.name))]),n("v-uni-text",{staticClass:"productPic"},[t._v("¥"+t._s(t.productionPic))])],1),n("v-uni-view",{staticClass:"flex-optionItem uni-flex uni-column"},[n("v-uni-view",{staticClass:"segmentView uni-flex uni-row"},[n("v-uni-view",{staticClass:"itemTitle"},[t._v("规格")]),n("uni-segmented-control",{staticClass:"segmentedItem",attrs:{current:t.current,values:t.priceItems,styleType:t.styleType,activeColor:t.activeColor},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}})],1),n("v-uni-view",{staticClass:"segmentView uni-flex uni-row"},[n("v-uni-view",{staticClass:"itemTitle"},[t._v("数量")]),n("uni-number-box",{staticClass:"numberBoxItem",attrs:{min:1,max:99,value:t.productNumber},on:{change:function(e){e=t.$handleEvent(e),t.onNumberChange(e)}}})],1),n("v-uni-view",{staticClass:"segmentView uni-flex uni-row"},[n("v-uni-view",{staticClass:"itemTitle"},[t._v("手机号")]),n("v-uni-input",{staticClass:"phoneInputItem",attrs:{placeholder:"请输入手机号",value:t.inputPhoneNumber},on:{input:function(e){e=t.$handleEvent(e),t.KeyInput(e)}}})],1)],1),n("v-uni-view",{staticClass:"flex-deitilItem flex-item-V"},[n("v-uni-view",{staticClass:"deitilTitle"},[t._v("商品详情")]),n("v-uni-view",{staticClass:"uni-common-mt",staticStyle:{background:"#FFF",padding:"20upx"}},[n("v-uni-rich-text",{attrs:{nodes:t.text}})],1)],1),n("v-uni-view",{staticClass:"bottomView uni-flex uni-row"},[n("v-uni-view",{staticClass:"totalAmountText"},[t._v("合计:¥"+t._s(t.totalAmount)+"元")]),n("v-uni-button",{staticClass:"toBuyBtn",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.toBuyBtn()}}},[t._v("立即购买")])],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-numbox"},[n("v-uni-view",{staticClass:"uni-numbox-minus",class:{"uni-numbox-disabled":t.disableSubtract},on:{click:function(e){e=t.$handleEvent(e),t._calcValue("subtract")}}},[t._v("-")]),n("v-uni-input",{staticClass:"uni-numbox-value",attrs:{type:"number",disabled:t.disabled,value:t.inputValue},on:{blur:function(e){e=t.$handleEvent(e),t._onBlur(e)}}}),n("v-uni-view",{staticClass:"uni-numbox-plus",class:{"uni-numbox-disabled":t.disableAdd},on:{click:function(e){e=t.$handleEvent(e),t._calcValue("add")}}},[t._v("+")])],1)},a=[],s={name:"uni-number-box",props:{value:{type:Number,default:0},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:this.value}},computed:{disableSubtract:function(){return this.value<=this.min},disableAdd:function(){return this.value>=this.max}},watch:{value:function(t){this.inputValue=t},inputValue:function(t){this.$emit("change",t)}},methods:{_calcValue:function(t){var e=this._getDecimalScale(),n=this.inputValue*e,o=this.step*e;"subtract"===t?n-=o:"add"===t&&(n+=o),n<this.min||n>this.max||(this.inputValue=n/e)},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onBlur:function(t){var e=t.detail.value;e?(e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min),this.inputValue=e):this.inputValue=0}}},u=s,c=(n("fe1a"),n("2877")),l=Object(c["a"])(u,i,a,!1,null,"34c56738",null);l.options.__file="uni-number-box.vue";var d=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:t.styleType,style:t.wrapStyle},t._l(t.values,function(e,o){return n("v-uni-view",{key:o,staticClass:"segmented-control-item",class:t.styleType,style:o===t.currentIndex?t.activeStyle:t.itemStyle,on:{click:function(e){e=t.$handleEvent(e),t.onClick(o)}}},[t._v("\n\t\t"+t._s(e)+"\n\t")])}))},p=[],h={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: ".concat(this.activeColor);break}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:t="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return t}},methods:{onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}},b=h,m=(n("f4e3"),Object(c["a"])(b,f,p,!1,null,"254a230d",null));m.options.__file="uni-segmented-control.vue";var v,g=m.exports,x=n("d173"),y=n.n(x),w=(n("1b43"),{data:function(){return{orderId:"",inputPhoneNumber:"",productionId:"",productionPic:100,userInfo:{},topUrl:"../../static/home/banner_02.png",priceItems:[],current:0,activeColor:"#4cd964",styleType:"button",productNumber:1,totalAmount:100,name:"京东购物卡",text:""}},onLoad:function(t){v=this;var e=t.productid;this.getproductDetails(e),uni.getStorage({key:"userInfo",success:function(t){v.userInfo=t.data,console.log("get usreInfo =="+JSON.stringify(v.userInfo))}})},components:{uniSegmentedControl:g,uniNumberBox:d},methods:{KeyInput:function(t){v.inputPhoneNumber=t.detail.value},getproductDetails:function(t){uni.showNavigationBarLoading();var e=y.a.getRequestUrl("getProductDetails");console.log(e),y.a.httpRequest("POST",e,{productId:t},function(t){uni.hideNavigationBarLoading(),uni.stopPullDownRefresh();var e=t.resData[0];console.log(e),v.productionPic=e.currentpeice,v.productionId=e.productid;var n=e.productimgpath.split("/"),o=n.pop();v.topUrl="../../static/home/"+o,v.text=e.productcontent,v.name=e.productname,v.priceItems=e.price.split(","),v.totalAmount=(v.productionPic*parseFloat(v.productNumber)).toFixed(2)})},onClickItem:function(t){this.current!==t&&(this.current=t),"0"==this.current?this.productionPic=parseFloat(v.priceItems[0]).toFixed(2):"1"==this.current?this.productionPic=parseFloat(v.priceItems[1]).toFixed(2):"2"==this.current?this.productionPic=parseFloat(v.priceItems[2]).toFixed(2):"3"==this.current&&(this.productionPic=parseFloat(v.priceItems[3]).toFixed(2)),this.totalAmount=(this.productionPic*parseFloat(this.productNumber)).toFixed(2)},onNumberChange:function(t){this.productNumber=t,this.totalAmount=this.productionPic*parseFloat(this.productNumber)},toBuyBtn:function(){v.createOrder()},createOrder:function(){if(v.userInfo)if(v.inputPhoneNumber){var t=y.a.getRequestUrl("createOrder"),e=Number(v.productionPic),n=[{product_id:v.productionId,image:v.topUrl,title:v.name,price:e,quantity:v.productNumber}],o={userid:v.userInfo.xinid,phone:v.inputPhoneNumber,total:v.totalAmount,products:n};y.a.httpRequest("POST",t,o,function(t){console.log(t),v.orderId=t.resData.orderid,v.updataOrder(v.orderId)})}else uni.showModal({title:"提示",content:"请在顶部输入框中，输入要购买商品的手机号",showCancel:!1,confirmText:"确定"});else uni.showToast({title:"还没有获取用户信息",duration:2e3})},toPayOrder:function(t){var e="c94ac88f-4671-3976-b60a-09064f1811e8",n=t.transactionid,o=Number(t.total)/500,r="1a240817-05f3-46f6-abcf-56d12fc8c32d",i="244bb7e9-0dee-4173-a2b6-24d1854b96fb",a=t.orderid?t.orderid:"superCardMall";i=i.toString(),r=r.toString(),e=e.toString(),o=o.toString(),n=n.toString(),a=a.toString();var s="https://mixin.one/pay?recipient="+i+"&asset="+e+"&amount="+o+"&trace="+n+"&memo="+a;s=s.toString(),console.log("payUrl ="+s),y.a.toUrl(s)},updataOrder:function(t){if(t){var e=y.a.getRequestUrl("updataOrder"),n=y.a.uuid(),o=v.userInfo.xinid,r={orderId:t,paymentaccount:o,transactionid:n,orderType:"1"};y.a.httpRequest("POST",e,r,function(t){console.log(t),v.toPayOrder(t.resData)})}else uni.showToast({title:"还没有订单信息",duration:2e3})},goback:function(){uni.reLaunch({url:"../tabBar/home/home"})}}}),k=w,C=(n("50c7"),Object(c["a"])(k,o,r,!1,null,"109fe403",null));C.options.__file="productDetails.vue";e["default"]=C.exports},"46db":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.uni-numbox[data-v-34c56738]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:%?70?%\n}\n.uni-numbox-minus[data-v-34c56738],.uni-numbox-plus[data-v-34c56738]{margin:0;background-color:#f9f9f9;width:%?80?%;height:100%;line-height:%?70?%;text-align:center;color:#555\n}\n.uni-numbox-minus[data-v-34c56738]{border:%?2?% solid #ccc;border-right:none;border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%\n}\n.uni-numbox-plus[data-v-34c56738]{border:%?2?% solid #ccc;border-left:none;border-top-right-radius:%?6?%;border-bottom-right-radius:%?6?%\n}\n.uni-numbox-value[data-v-34c56738]{border:%?2?% solid #ccc;background-color:#fff;width:%?80?%;height:100%;text-align:center\n}\n.uni-numbox-disabled[data-v-34c56738]{color:silver\n}",""])},"50c7":function(t,e,n){"use strict";var o=n("3333"),r=n.n(o);r.a},"6abb":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.segmented-control[data-v-254a230d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?28?%;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden\n}\n.segmented-control.button[data-v-254a230d]{border:%?2?% solid\n}\n.segmented-control.text[data-v-254a230d]{border:0;border-radius:%?0?%\n}\n.segmented-control-item[data-v-254a230d]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.segmented-control-item.button[data-v-254a230d]{border-left:%?1?% solid\n}\n.segmented-control-item.text[data-v-254a230d]{border-left:0\n}\n.segmented-control-item[data-v-254a230d]:first-child{border-left-width:0\n}",""])},"6c7c":function(t,e,n){var o=n("6abb");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("6cff49dc",o,!0,{sourceMap:!1,shadowMode:!1})},bea0:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.page[data-v-109fe403]{background-color:#f8f8f8\n}\n.backBtn[data-v-109fe403]{height:%?50?%;width:%?50?%;margin:%?10?% %?5?% %?0?% %?15?%;text-align:center\n}\n.backImage[data-v-109fe403]{height:%?30?%;width:%?30?%;margin:%?0?% 0 %?20?% %?-15?%\n}\n.flex-topItem[data-v-109fe403]{height:%?350?%;width:%?600?%;margin:%?-10?% %?0?% %?30?% %?75?%;text-align:center\n}\n.topImage[data-v-109fe403]{height:%?350?%;width:%?600?%;border-radius:%?20?%\n}\n.productTitleView[data-v-109fe403]{height:%?100?%;width:100%;border-top-style:outset;background-color:#fff\n}\n.productName[data-v-109fe403]{margin-left:%?20?%\n}\n.productPic[data-v-109fe403]{margin-left:%?20?%;color:#dd524d\n}\n.flex-optionItem[data-v-109fe403]{height:%?330?%;background-color:#fff;margin-top:%?20?%\n}\n.segmentView[data-v-109fe403]{margin-top:%?20?%;height:%?100?%;line-height:%?150?%;border-bottom:solid;border-width:%?1?%;border-color:#f4f5f6;text-align:center\n}\n.itemTitle[data-v-109fe403]{margin-left:%?20?%;margin-top:%?16?%;color:#7a7e83\n}\n.segmentedItem[data-v-109fe403]{margin-top:%?10?%;height:%?60?%\n}\n.numberBoxItem[data-v-109fe403]{margin-left:%?400?%;height:%?65?%\n}\n.phoneInputItem[data-v-109fe403]{margin-top:%?10?%;margin-left:%?30?%;height:%?60?%;border:1px solid #4cd964;border-radius:%?10?%\n}\n.flex-deitilItem[data-v-109fe403]{margin-top:%?20?%;margin-bottom:%?120?%;background-color:#fff\n}\n.deitilTitle[data-v-109fe403]{font-size:%?20?%;height:%?60?%;text-align:center;line-height:%?60?%;border-width:%?1?%;border-color:#f4f5f6;border-bottom-style:solid\n}\n.bottomView[data-v-109fe403]{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;bottom:0;width:100%;height:%?120?%;background-color:#fff;border-width:%?1?%;border-color:#f4f5f6;border-top-style:solid\n}\n.totalAmountText[data-v-109fe403]{margin:%?30?% 0 0 %?20?%;color:#dd524d;width:%?300?%;font-size:%?30?%\n}\n.toBuyBtn[data-v-109fe403]{height:%?80?%;width:%?200?%;margin:%?20?% 0 0 %?200?%;text-align:center;font-size:%?30?%\n}",""])},d173:function(t,e){function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e,n,o){uni.showLoading({title:"加载中"});var r=new XMLHttpRequest;"get"==t?i({url:e,type:"get",dataType:"jsonp",success:function(t){console.log(t)},error:function(t){console.log(t)}}):(r.open(t,e),r.setRequestHeader("Content-type","application/json;charset=utf-8"),n?(console.log("JSON == "+JSON.stringify(n)),r.send(JSON.stringify(n))):r.send()),r.onreadystatechange=function(){if(uni.hideLoading(),4==r.readyState&&200==r.status){var t=JSON.parse(r.response);o(t)}}}function r(t){var e="https://cardmallserver.applinzi.com/cardMallServer/";return"getProductList"==t?e+"getProductList.do":"register"==t?e+"register.do":"getProductDetails"==t?e+"getProductDetails.do":"createOrder"==t?e+"createOrder.do":"updataOrder"==t?e+"updataOrder.do":"getUserOrderList"==t?e+"getUserOrderList.do":"请传入有效的参数"}function i(t){var e,o,r,i,a,s;function u(t){return t.replace(/^\s+|\s+$/g,"")}t=t||{},o=t.type||"GET",o=u(o).toUpperCase(),r=t.url,r=u(r),i=t.async||!0,a=t.dataType||"HTML",a=u(a).toUpperCase(),s=t.data||{};var c=function(){if("object"==n(s)){var t="";for(var e in s)t+=e+"="+s[e]+"&";s=t.substr(0,t.length-1)}"GET"!=o&&"JSONP"!=a||(-1==r.lastIndexOf("?")?r+="?"+s:r+="&"+s)};if(e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),"JSONP"==a){"function"==typeof t.beforeSend&&t.beforeSend(e);var l=("jsonp_"+Math.random()).replace(".",""),d=document.getElementsByTagName("head")[0];s.callback=l;var f=document.createElement("script");return f.type="text/javascript",f.onerror=function(){console.log("failed"),t.error&&t.error("failed")},d.appendChild(f),window[l]=function(e){d.removeChild(f),window[l]=null,t.success&&t.success(e)},c(),void(f.src=r)}c(),e.open(o,r,i),e.setRequestHeader("Content-type","application/json;charset=utf-8"),"function"==typeof t.beforeSend&&t.beforeSend(e),e.send(s),e.onreadystatechange=function(){if(200!=e.status)return console.log(e.status+"failed"),void(t.error&&t.error(e.status+"failed"));if(4==e.readyState&&200==e.status){if("JSON"==a)try{res=JSON.parse(e.responseText)}catch(n){console.log("json格式错误"),t.error("json格式错误")}else res="XML"==a?e.responseXML:e.responseText;t.success&&t.success(res)}}}function a(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null}function s(t){console.log("url =="+t),window.location.href=t}function u(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function c(){return u()+u()+"-"+u()+"-"+u()+"-"+u()+"-"+u()+u()+u()}function l(){for(var t=[],e="0123456789abcdef",n=0;n<36;n++)t[n]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var o=t.join("");return o}t.exports={httpRequest:o,getRequestUrl:r,ajaxRequest:i,getUrlKey:a,toUrl:s,guid:c,uuid:l}},ec61:function(t,e,n){var o=n("46db");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("77280840",o,!0,{sourceMap:!1,shadowMode:!1})},f4e3:function(t,e,n){"use strict";var o=n("6c7c"),r=n.n(o);r.a},fe1a:function(t,e,n){"use strict";var o=n("ec61"),r=n.n(o);r.a}}]);