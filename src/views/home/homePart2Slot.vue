<template>
  <div>
    <home-part2>
      <div class="itemBook" v-for="(item,index) in part2" :key="index" @click.prevent="goShop(part2[index].id)">
        <a><img :src="BaseUrL + item.picture" alt=""></a> 
        <p>{{item.name | bookName}}</p> 
        <p class="price">{{item.prince | meiyuan}}</p>
      </div>
    </home-part2>
  </div>
</template>
<script>
import homePart2 from './homePart2.vue'
export default {
  data(){
    return{
      book_details:{
        book_id: Number,
      }
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
  // beforeRouteUpdate (to, from, next) {
  //   this.$store.state.BookDetail = res.data.data
  //   next()
  // },
  props:{
    "part2":{
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
  components:{
    homePart2
  }
}
</script>
<style lang="scss" scoped>
  .itemBook{
    width: 25%;
    height: 50%;
    border: 1px solid #f4f4f4;
    text-align: center;
    padding-top: 1.5em;
    img{
      width: 70%;
    }
    p{
      font-size: 15px;
      font-weight: 400;
    }
    .price{
      font-weight: 600;
      font-size: 16px;
    }
  }
</style>