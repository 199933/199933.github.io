import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//引入vuex
import store from './vuex/store.js'

import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css' 

//引入自适应布局
import 'amfe-flexible/index.js'

Vue.use(ElementUI) 
Vue.prototype.$axios = axios;
axios.defaults.withCredentials=true;//让ajax携带cookie

Vue.config.productionTip = false
Vue.prototype.BaseUrL = 'http://106.53.66.58:18800'
Vue.prototype.getCartNum = function (){
  this.$axios({
    method: 'get',
    url: `${this.BaseUrL}/cart/get_cart_items`,
  }).then((res) =>{
    this.$store.state.cartNum = res.data.data.num
    if(this.$store.state.cartNum == 0){
      this.$store.state.HaveProduct = true;
      this.$store.state.NoProduct = false;
    }else{
      this.$store.state.HaveProduct = false;
      this.$store.state.NoProduct = true;
    }
  }).catch(()=>{
    this.$store.state.cartNum = 0
  })
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
    //页面是否登录
    if (localStorage.getItem("token")) {
      //本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
      next({
        name: "login"
      });
    }
  } else {
    //表示不需要登录
    next(); //继续往后走
  }
});