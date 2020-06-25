import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    cartNum: 0,
    HaveProduct: false,
    NoProduct: true,
    accountIndex: 1,
    UserName: '我的账户',
    SearchDate: ''
  },
  mutations:{

  }
})

export default store