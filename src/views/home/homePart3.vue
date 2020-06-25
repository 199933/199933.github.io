<template>
  <div id="part3">
    <div class="category">
      <div class="top1"><p>月销量超过10000本！</p></div>
      <div class="top2"><p>同行中的佼佼者！</p></div>
      <div class="top3"><p>专注做好服务与质量！</p></div>
    </div>
    <div class="content">
      <div class="content-top">
        <h4>精选书籍</h4>
      </div>
      <div class="content-main">
        <div class="main" v-for="(item,index) in part3" :key="index" @click.prevent="goShop(part3[index].id)">
          <a href=""><img :src="BaseUrL + item.picture" alt=""></a> 
          <p class="name">{{item.name | bookName}}</p> 
          <p class="price">{{item.prince | meiyuan}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      book_details:{
        book_id: Number,
      }
    }
  },
  props:{
    "part3":{
      type: Array,
      default(){
        return [
          {
            picture: '',
            name: '',
            prince: ''
          }
        ]
      }
    }
  },
  filters:{
    //超出规定长度展示省略号
    bookName(value){
      return value.length > 13 ? value.substring(0,13) + '...' : value 
    },
    meiyuan(value){
      return '$' + value
    }
  },
  methods: {
    goShop(id){
      this.book_details.book_id = id
      this.$router.push({
        path: '/shop',
        query: {
           id: id
        }
       })
    }
  },
}
</script>
<style lang="scss" scoped>
  #part3{
    // height: 762px;
    width: 100%;
    padding: 4em 6em;
    .category{
      display: flex;
      padding-bottom: 3em;
      .top1{
        position: relative;
        margin: 0 1em;
        width: 33%;
        height: 182px;
        color: #fff;
        font-weight: 600;
        background: url('../../assets/img/home/part3top1.jpg') 40% 80% no-repeat;
      }
      .top2{
        position: relative;
        margin: 0 1em;
        width: 33%;
        height: 182px;
        color: #fff;
        font-weight: 600;
        background: url('../../assets/img/home/part3top2.jpg') 40% 80% no-repeat;
      }
      .top3{
        position: relative;
        margin: 0 1em;
        width: 33%;
        height: 182px;
        color: #fff;
        font-weight: 600;
        background: url('../../assets/img/home/part3top3.jpg') 40% 80% no-repeat;
      }
      p{
        position: absolute;
        right: 0em;
        top: 3.5em;
        font-size: 22px;
      }
    }
    .content{
      .content-top{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #f4f4f4;
      }
      .content-main{
        display: flex;
        // flex-wrap: wrap;
        margin: 2em 0;
        .main{
          margin-top: 2em;
          width: 16.6%;
          border: 1px solid #e7e7e7;
          box-shadow: 0 2px 3px 0 rgba(0,0,0,.05);
          text-align: center;
          padding: 1.5em 0;
          margin: 0 0.1em;
          img{
          width: 80%;
          }
          .name{
            margin: 0.8em 0;
          }
          .price{
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
</style>