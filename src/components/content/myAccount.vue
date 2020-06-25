<template>
  <div>
    <top-menu>
      <h3>个人中心</h3>
    </top-menu>
    <div class="container">
      <div class="row content">
        <div class="col-md-4">
          <Left></Left>
        </div>
        <div class="col-md-8">
          <Right1 v-show="this.$store.state.accountIndex == 1" :right1Data="right1Data"></Right1>
          <Right2 v-show="this.$store.state.accountIndex == 2" :right2Data="right2Data"></Right2>
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
import topMenu from '@/components/common/topMenu.vue'
import Left from '@/views/account/accountLeft.vue'
import Right1 from '@/views/account/accountRight1.vue'
import Right2 from '@/views/account/accountRight2.vue'

export default {
  data() {
    return {
      right1Data: {},
      right2Data: []
    }
  },
  mounted() {
    this.right1()
    this.right2()
  },
  methods: {
    async right1(){
        this.$axios({
          method: 'get',
          url: `${this.BaseUrL}/user/user_info`,  
        }).then((res)=>{
          switch (res.data.code) {
            case '00000':
              this.right1Data = res.data.data;
              break;
            case '10010':
              this.$router.push('/login')
              break;
            default:
              break;
          }
        })
      },
    async right2(){
      this.$axios({
        method: 'get',
        url: `${this.BaseUrL}/order/get_order_list`,  
      }).then((res)=>{
        // console.log(res.data.data)
        this.right2Data = res.data.data
      })
    }
  },
  components:{
    Left,
    Right1,
    Right2,
    topMenu
  }
}
</script>
<style lang="scss" scoped>
  .content{
    margin: 5em 0;
  }
</style>