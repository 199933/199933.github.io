<template>
  <div class="content">
    <div class="content-top">
      <slot></slot>
    </div>
    <div class="content-main">
      <div class="main" v-for="(item,index) in data" :key="index" @click.prevent="goShop(data[index].id)">
        <a href=""><img :src="BaseUrL + item.picture" alt=""></a> 
        <p class="name">{{item.name | bookName}}</p> 
        <p class="price">{{item.prince | meiyuan}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      data:{},
      book_details:{
        book_id: Number,
      }
    }
  },
  props:{
    start:{
      type: Number
    }
  },
  mounted() {
    this.$axios({
      method:'get',
      url: `${this.BaseUrL}/book/hot_book`
    }).then((res)=>{
      this.data = res.data.data.splice(this.start,6)
    })
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
  .content{
      .content-top{
        padding: 3em 0;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #dbdbdb;
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
</style>