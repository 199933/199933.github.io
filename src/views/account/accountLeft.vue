<template>
  <div id="Left">
    <div class="wrapper">
      <ul>
        <li v-for="(item,index) in menu" :key="index" @click="$store.state.accountIndex = index+1">{{ item }}</li>
        <li @click="loginOut()">登出</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu:['个人中心','订单']
    }
  },
  methods: {
    loginOut(){
      this.$axios({
        method: 'get',
        url: `${this.BaseUrL}/user/logout`
      }).then(()=>{
        localStorage.clear()
        // this.$store.state.UserName = '我的账户'
        this.$router.go(0)
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  #Left{
    .wrapper{
      padding: .8em 1.5em;
      border: 1px solid #f4f4f4;
      ul{
        li{
          border-bottom: 1px solid #eee;
          margin: .5em 0;
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
</style>