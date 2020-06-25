<template>
  <div>
    <cart-top>
      <h3>购物车</h3>
    </cart-top>
    <cart-false :class="{emputy : $store.state.NoProduct}" :key="$route.fullPath + 'index'"></cart-false>
    <cart-true :class="{emputy :  $store.state.HaveProduct}" :key="$route.fullPath"></cart-true>
  </div>
</template>
<script>
import cartTop from '../common/topMenu.vue'
import cartTrue from '@/views/cart/cartTrue.vue'
import cartFalse from '@/views/cart/cartFalse.vue'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    //请求购物车数量是否为0
    this.getCartNum()
  },
  components:{
    cartTop,
    cartFalse,
    cartTrue
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .emputy{
    display: none;
  }
</style>