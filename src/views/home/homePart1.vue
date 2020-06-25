<template>
  <div class="wrapper">
    <!-- <div class="content" v-for="(item,index) in part1" :key="item.id">
      <img :src="BaseUrL + item.picture" alt="" @click="go_category(index)">
      <p class="name">{{item.name}}</p>
    </div> -->
    <el-carousel :interval="2000" type="card" height="500px">
      <el-carousel-item v-for="(item,index) in part1" :key="index">
        <div @click="go_category(item.id)">
          <h2 class="title">{{item.name}}</h2>
          <img class="one" :src="BaseUrL + item.picture" alt="">
          <img class="two" :src="BaseUrL + item.book_info[0].picture" alt="">
        </div>
      </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props:{
    "part1":{
      type: Array,
      default(){
        return [
          {
             id : '',
            name : '',
            pid : ''
          }
        ]
      }
    }
  },
  methods: {
    go_category(index){
      this.$router.push({
          path: '/category',
          query:{
            id: index
          }
        })
    }
  },
}
</script>
<style lang="scss" scoped>
  .wrapper{
    width: 100%;
    overflow: hidden;
    background-image: linear-gradient(to bottom,#f4f4f4,#fff);
    padding: 2em 0;
    .el-carousel__item{
      // text-align: center;
    }
    .el-carousel__item .title{
      // position: absolute;
      top: 0;
      color: #fff;
      z-index: 20;
      text-align: center;
      // left: 30%;
    }
    .el-carousel__item .one {
      width: 100%;
      position: absolute;
    }
    .el-carousel__item .two {
      // width: 100%;
      position: absolute;
      top: 0;
      left: 30%;
      top: 20%;
      width: 40%;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    //  .content{
    //   display: inline-block;
    //   // margin-top: 1em;
    //   // margin-bottom: 2em;
    //   // margin-left: 2%;
    //   // margin-right: 2%;
    //   text-align: center;
    //   img{
    //     cursor: pointer;
    //     transform: scale(0.9);
    //   }
    //   .name{
    //     font-family: 'Bold';
    //     margin: 1em 0;
    //     font-weight: 600;
    //   }
    //  }
    //  .content:after{
    //    content: "";
    //    display: block;
    //    clear: both;
    //  }
   }
</style>