<template>
  <div id="part4">
    <div class="top-ad">
      <div class="font">
        <p><i>新用户</i></p>
        <h2>订单满 $299 可享30%的折扣</h2>
      </div>
      <img src="../../assets/img/home/part4Top.png" alt="">
    </div>
    <book :start="2">
      <h4 style="line-height:50px">最新书籍</h4>
    </book>
  </div>
</template>
<script>
import book from '@/components/common/book.vue'
export default {
  components:{
    book
  }
}
</script>
<style lang="scss" scoped>
  #part4{
    width: 100%;
    background-color: #f4f4f4;
    margin-bottom: 3em;
    .top-ad{
      height: 207px;
      background-color: #1a43f3;
      color: #fff;
      position: relative;
      overflow: hidden;
      .font{
        position: absolute;
        top: 2em;
        left: 5em;
      }
      img{
          width: 36%;
          position: absolute;
          right: 0;
      }
    }
    .content{
      padding: 0 6em;
      // height: 533px;
      padding-bottom: 2em;
    }
  }
</style>