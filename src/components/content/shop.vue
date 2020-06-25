<template>
  <div>
    <top-menu>
      <h3>商品详情</h3>
    </top-menu>
    <div id="shop">
      <div class="left">
        <shop1 :BookDetail="BookDetail.book_details"></shop1>
        <shop2></shop2>
      </div>
      <div class="right" :class="{isFixd: isFixd}">
        <shop3 :BookDetail="BookDetail.book_details" :others="BookDetail.others"></shop3>
      </div>
    </div>
  </div>
</template>
<script>
import shop1 from '@/views/shop/shop1.vue'
import shop2 from '@/views/shop/shop2.vue'
import shop3 from '@/views/shop/shop3.vue'
import topMenu from '@/components/common/topMenu.vue'
export default {
  data() {
    return {
      datatest:{
        book_id: Number
      },
      //默认数据，防止请求事件过长，控制台报错
      BookDetail : {},
      isFixd: false
    }
  },
  mounted() {
    this.datatest.book_id = this.$route.query.id
    this.$axios({
      method: 'post',
      url: `${this.BaseUrL}/book/book_details`,
      data: JSON.stringify(this.datatest)
    }).then((res)=>{
      this.BookDetail = res.data.data
    }).catch((err)=>{
      console.log(err)
    })
    
    window.addEventListener('scroll', this.fixedActiveBtn);
  },
  methods: {
    fixedActiveBtn() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop >= 390 && scrollTop <= 1000 ? this.isFixd = true : this.isFixd = false
      },
  },
  components:{
    shop1,
    shop2,
    shop3,
    topMenu
  }
}
</script>
<style lang="scss" scoped>
  #shop{
    display: flex;
  }
  .left{
    width: 75%;
  }
  .right{
    width: 25%;
  }
  .isFixd{
    position: fixed;
    right: .1em;
    width: 25%;
    top: 110px;
  }
</style>