import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/components/content/homePage.vue')
  },
  {
    path: '/home',
    redirect: '/' 
  },
  {
    path:'*',
    component: () => import('@/components/content/404.vue')
  },
  {
    path:'/about',
    component: () => import('@/components/content/about.vue')
  },
  {
    path:'/advantage',
    component: () => import('@/components/content/advantage.vue')
  },
  {
    path:'/search',
    component: () => import('@/components/content/search.vue')
  },
  {
    name: 'login',
    // path: '/login/:redirect',
    path: '/login',
    component: () => import('@/components/content/login.vue')
  },
  {
    path: '/shop',
    component: () => import('@/components/content/shop.vue')
  },
  {
    path: '/cart',
    component: () => import('@/components/content/cart.vue'),
    meta: {
      needLogin: true //需要加校检判断的路由
    },
  },
  {
    path: '/category',
    component: () => import('@/components/content/category.vue')
  },
  {
    path: '/account',
    component: () => import('@/components/content/myAccount.vue'),
    meta: {
      needLogin: true //需要加校检判断的路由  
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //解决页面跳转后，滚动条不在顶部的问题
  scrollBehavior(to, from, saveTop){
    if (saveTop) {
        return saveTop;
    } else {
        return {x: 0, y: 0}
    }
},
})

export default router