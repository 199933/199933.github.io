(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-967c7a52"],{"068b":function(t,e,r){"use strict";var n=r("a23c"),o=r.n(n);o.a},"0cdc":function(t,e,r){"use strict";var n=r("584e"),o=r.n(n);o.a},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}},"1da6":function(t,e,r){t.exports=r.p+"img/part2Left.a748e0a0.png"},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4d37":function(t,e,r){"use strict";var n=r("b40b"),o=r.n(n);o.a},"584e":function(t,e,r){},6285:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"content-top"},[t._t("default")],2),r("div",{staticClass:"content-main"},t._l(t.data,(function(e,n){return r("div",{key:n,staticClass:"main",on:{click:function(e){return e.preventDefault(),t.goShop(t.data[n].id)}}},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:t.BaseUrL+e.picture,alt:""}})]),r("p",{staticClass:"name"},[t._v(t._s(t._f("bookName")(e.name)))]),r("p",{staticClass:"price"},[t._v(t._s(t._f("meiyuan")(e.prince)))])])})),0)])},o=[],a=(r("a434"),r("a9e3"),{data:function(){return{data:{},book_details:{book_id:Number}}},props:{start:{type:Number}},mounted:function(){var t=this;this.$axios({method:"get",url:"".concat(this.BaseUrL,"/book/hot_book")}).then((function(e){t.data=e.data.data.splice(t.start,6)}))},filters:{bookName:function(t){return t.length>13?t.substring(0,13)+"...":t},meiyuan:function(t){return"$"+t}},methods:{goShop:function(t){this.book_details.book_id=t,this.$router.push({path:"/shop",query:{id:t}})}}}),i=a,c=(r("eb54"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"e01847b2",null);e["a"]=s.exports},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),a=r("b622"),i=a("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"7b05":function(t,e,r){"use strict";var n=r("dea0"),o=r.n(n);o.a},"80c8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("homePart1",{attrs:{part1:t.part1}}),r("homePart2",{attrs:{part2:t.part2}}),r("homePart3",{attrs:{part3:t.part3}}),r("homePart4")],1)},o=[],a=(r("a434"),r("96cf"),r("1da1")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("el-carousel",{attrs:{interval:2e3,type:"card",height:"500px"}},t._l(t.part1,(function(e,n){return r("el-carousel-item",{key:n},[r("div",{on:{click:function(r){return t.go_category(e.id)}}},[r("h2",{staticClass:"title"},[t._v(t._s(e.name))]),r("img",{staticClass:"one",attrs:{src:t.BaseUrL+e.picture,alt:""}}),r("img",{staticClass:"two",attrs:{src:t.BaseUrL+e.book_info[0].picture,alt:""}})])])})),1)],1)},c=[],s={data:function(){return{}},props:{part1:{type:Array,default:function(){return[{id:"",name:"",pid:""}]}}},methods:{go_category:function(t){this.$router.push({path:"/category",query:{id:t}})}}},u=s,l=(r("f4ce"),r("2877")),f=Object(l["a"])(u,i,c,!1,null,"46ea0e05",null),h=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("home-part2",t._l(t.part2,(function(e,n){return r("div",{key:n,staticClass:"itemBook",on:{click:function(e){return e.preventDefault(),t.goShop(t.part2[n].id)}}},[r("a",[r("img",{attrs:{src:t.BaseUrL+e.picture,alt:""}})]),r("p",[t._v(t._s(t._f("bookName")(e.name)))]),r("p",{staticClass:"price"},[t._v(t._s(t._f("meiyuan")(e.prince)))])])})),0)],1)},d=[],v=(r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"part2"}},[t._m(0),r("div",{staticClass:"content"},[t._m(1),r("div",{staticClass:"two"},[t._t("default")],2)])])}),m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h4",[t._v("畅销书")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"one"},[n("p",[n("i",[t._v("whatgoingon")])]),n("h3",[t._v("我们只做最好书籍和服务")]),n("img",{attrs:{src:r("1da6"),alt:""}})])}],y={data:function(){return{}}},g=y,_=(r("068b"),Object(l["a"])(g,v,m,!1,null,"6de2039d",null)),b=_.exports,w={data:function(){return{book_details:{book_id:Number}}},methods:{goShop:function(t){this.book_details.book_id=t,this.$router.push({path:"/shop",query:{id:t}})}},props:{part2:{type:Array,default:function(){return[{picture:"",name:"",prince:""}]}}},filters:{bookName:function(t){return t.length>13?t.substring(0,13)+"...":t},meiyuan:function(t){return"$"+t}},components:{homePart2:b}},k=w,x=(r("7b05"),Object(l["a"])(k,p,d,!1,null,"2e75bd53",null)),E=x.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"part3"}},[t._m(0),r("div",{staticClass:"content"},[t._m(1),r("div",{staticClass:"content-main"},t._l(t.part3,(function(e,n){return r("div",{key:n,staticClass:"main",on:{click:function(e){return e.preventDefault(),t.goShop(t.part3[n].id)}}},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:t.BaseUrL+e.picture,alt:""}})]),r("p",{staticClass:"name"},[t._v(t._s(t._f("bookName")(e.name)))]),r("p",{staticClass:"price"},[t._v(t._s(t._f("meiyuan")(e.prince)))])])})),0)])])},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category"},[r("div",{staticClass:"top1"},[r("p",[t._v("月销量超过10000本！")])]),r("div",{staticClass:"top2"},[r("p",[t._v("同行中的佼佼者！")])]),r("div",{staticClass:"top3"},[r("p",[t._v("专注做好服务与质量！")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-top"},[r("h4",[t._v("精选书籍")])])}],O={data:function(){return{book_details:{book_id:Number}}},props:{part3:{type:Array,default:function(){return[{picture:"",name:"",prince:""}]}}},filters:{bookName:function(t){return t.length>13?t.substring(0,13)+"...":t},meiyuan:function(t){return"$"+t}},methods:{goShop:function(t){this.book_details.book_id=t,this.$router.push({path:"/shop",query:{id:t}})}}},$=O,j=(r("0cdc"),Object(l["a"])($,L,C,!1,null,"6d146a9a",null)),S=j.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"part4"}},[t._m(0),r("book",{attrs:{start:2}},[r("h4",{staticStyle:{"line-height":"50px"}},[t._v("最新书籍")])])],1)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-ad"},[n("div",{staticClass:"font"},[n("p",[n("i",[t._v("新用户")])]),n("h2",[t._v("订单满 $299 可享30%的折扣")])]),n("img",{attrs:{src:r("fd7d"),alt:""}})])}],P=r("6285"),A={components:{book:P["a"]}},R=A,U=(r("4d37"),Object(l["a"])(R,N,B,!1,null,"4b74a9fc",null)),G=U.exports,T={data:function(){return{part1:[],part2:[],part3:[]}},mounted:function(){this.cateBook(),this.hotBook(),this.jingxuanBook()},methods:{cateBook:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$axios({method:"get",url:"".concat(t.BaseUrL,"/book/navigation_bar")}).then((function(e){t.part1=e.data.data}));case 1:case"end":return e.stop()}}),e)})))()},hotBook:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$axios({method:"get",url:"".concat(t.BaseUrL,"/book/hot_book")}).then((function(e){t.part2=e.data.data}));case 1:case"end":return e.stop()}}),e)})))()},jingxuanBook:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$axios({method:"get",url:"".concat(t.BaseUrL,"/book/hot_book")}).then((function(e){t.part3=e.data.data.splice(0,6)}));case 1:case"end":return e.stop()}}),e)})))()}},components:{homePart1:h,homePart2:E,homePart3:S,homePart4:G}},F=T,q=Object(l["a"])(F,n,o,!1,null,null,null);e["default"]=q.exports},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},9624:function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new $(n||[]);return a._invoke=E(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function m(){}function y(){}var g={};g[a]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(j([])));b&&b!==r&&n.call(b,a)&&(g=b);var w=y.prototype=v.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t,e){function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return S()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=w.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a23c:function(t,e,r){},a434:function(t,e,r){"use strict";var n=r("23e7"),o=r("23cb"),a=r("a691"),i=r("50c4"),c=r("7b0b"),s=r("65f0"),u=r("8418"),l=r("1dde"),f=r("ae40"),h=l("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,v=Math.min,m=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var r,n,l,f,h,p,g=c(this),_=i(g.length),b=o(t,_),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=_-b):(r=w-2,n=v(d(a(e),0),_-b)),_+r-n>m)throw TypeError(y);for(l=s(g,n),f=0;f<n;f++)h=b+f,h in g&&u(l,f,g[h]);if(l.length=n,r<n){for(f=b;f<_-n;f++)h=f+n,p=f+r,h in g?g[p]=g[h]:delete g[p];for(f=_;f>_-n+r;f--)delete g[f-1]}else if(r>n)for(f=_-n;f>b;f--)h=f+n-1,p=f+r-1,h in g?g[p]=g[h]:delete g[p];for(f=0;f<r;f++)g[f+b]=arguments[f+2];return g.length=_-n+r,l}})},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),a=r("5135"),i=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var r=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:s,f=a(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,l,f)}))}},b40b:function(t,e,r){},b877:function(t,e,r){},dea0:function(t,e,r){},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},eb54:function(t,e,r){"use strict";var n=r("b877"),o=r.n(n);o.a},f4ce:function(t,e,r){"use strict";var n=r("9624"),o=r.n(n);o.a},fd7d:function(t,e,r){t.exports=r.p+"img/part4Top.d4e5c415.png"}}]);
//# sourceMappingURL=chunk-967c7a52.b0a53b01.js.map