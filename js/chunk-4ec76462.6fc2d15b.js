(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec76462"],{"29d3":function(t,a,e){"use strict";var o=e("3554"),n=e.n(o);n.a},"2e98":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 one"},[t._m(0),e("h1",{},[t._v(t._s(t.CategoryName))]),e("h5",[t._v("我们只做最好的书籍")])]),e("div",{staticClass:"col-md-4 two"}),t._m(1)])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"title"},[e("i",[t._v("WHATGOINGON")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-3 three"},[e("h3",[t._v("PORTO")])])}],s={props:{CategoryName:{default:function(){return"未分类"}}}},r=s,i=(e("3859"),e("2877")),c=Object(i["a"])(r,o,n,!1,null,"f088c690",null);a["a"]=c.exports},3554:function(t,a,e){},3859:function(t,a,e){"use strict";var o=e("d0fb"),n=e.n(o);n.a},"3aaa":function(t,a,e){"use strict";var o=e("7bc3"),n=e.n(o);n.a},"3acc":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"category"}},[e("category-top",{attrs:{CategoryName:t.CategoryName}}),e("top-menu",[e("h3",[t._v("分类")])]),e("super-book",{attrs:{categoryBook:t.CategoryBookdata}})],1)},n=[],s=(e("a9e3"),e("7a19")),r=e("2e98"),i=e("ca9b"),c={data:function(){return{CategoryBookdata:Array,CategoryName:String,categoryId:{cate_id:Number}}},created:function(){this.categoryId.cate_id=this.$route.query.id},mounted:function(){var t=this;this.$axios({method:"post",url:"".concat(this.BaseUrL,"/book/get_book"),data:JSON.stringify(this.categoryId)}).then((function(a){t.CategoryBookdata=a.data.data.book_lists,t.CategoryName=a.data.data.cate_name}))},components:{topMenu:s["a"],categoryTop:r["a"],superBook:i["a"]}},u=c,l=e("2877"),d=Object(l["a"])(u,o,n,!1,null,null,null);a["default"]=d.exports},"7a19":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"shop1"}},[e("div",{staticClass:"top-menu"},[t._t("default")],2)])},n=[],s={},r=s,i=(e("29d3"),e("2877")),c=Object(i["a"])(r,o,n,!1,null,"6239ac54",null);a["a"]=c.exports},"7bc3":function(t,a,e){},ca9b:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"content-top"},[t._t("default")],2),e("div",{staticClass:"content-main"},t._l(t.categoryBook,(function(a,o){return e("div",{key:o,staticClass:"main",on:{click:function(a){return a.preventDefault(),t.goShop(t.categoryBook[o].id)}}},[e("a",{attrs:{href:""}},[e("img",{attrs:{src:t.BaseUrL+a.picture,alt:""}})]),e("p",{staticClass:"name"},[t._v(t._s(t._f("bookName")(a.name)))]),e("p",{staticClass:"price"},[t._v(t._s(t._f("meiyuan")(a.prince)))])])})),0)])},n=[],s=(e("a9e3"),{data:function(){return{book_details:{book_id:Number}}},props:{categoryBook:{}},filters:{bookName:function(t){return t.length>13?t.substring(0,13)+"...":t},meiyuan:function(t){return"$"+t}},methods:{goShop:function(t){this.book_details.book_id=t,this.$router.push({path:"/shop",query:{id:t}})}}}),r=s,i=(e("3aaa"),e("2877")),c=Object(i["a"])(r,o,n,!1,null,"1acba906",null);a["a"]=c.exports},d0fb:function(t,a,e){}}]);
//# sourceMappingURL=chunk-4ec76462.6fc2d15b.js.map