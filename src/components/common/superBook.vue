<template>
  <div class="content">
    <div class="content-top">
      <slot></slot>
    </div>
    <div class="content-main">
      <div class="main" v-for="(item,index) in categoryBook" :key="index" @click.prevent="goShop(categoryBook[index].id)">
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
      book_details:{
        book_id: Number,
      }
    }
  },
  props:{
    "categoryBook" :{}
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
      .content-main{
        display: flex;
        flex-wrap: wrap;
        margin: 2em 0;
        width: 90%;
        margin-left: 5%;
        box-sizing: border-box;
        .main{
          box-sizing: border-box;
          margin-top: 2em;
          width: 19.5%;
          // flex: 1;
          flex-wrap: wrap;
          border: 1px solid #e7e7e7;
          box-shadow: 0 2px 3px 0 rgba(0,0,0,.05);
          text-align: center;
          padding: 1.5em 0;
          margin: 0.1em 0.1em;
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