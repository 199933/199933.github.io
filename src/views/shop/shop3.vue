<template>
  <div id="shop3">
    <div class="one">
      <p>作者</p>
      <div class="content">
        <h5>{{BookDetail.author}}</h5>
        <p>美国作家</p>
        <p>享年: 1927~1987, 性别: 男, 代表作: {{BookDetail.name}}</p>
      </div>
    </div>
    <div class="two">
      <div class="twoContent">
        <p>热卖书籍</p>
        <div class="warpper" v-for="(item1,index) in book()" :key="index" @click="go_detail(item1.id)">
          <div class="img">
            <img :src="BaseUrL + item1.picture" alt="">
          </div>
          <div class="content">
            <p class="title">{{item1.name}}</p>
            <ul>
              <li v-for="(item ,index) in starNum" :key="index">
                <img src="~@/assets/img/shop/star.png" alt="">
              </li>
              <li v-for="(item,index) in NostarNum" :key="index + 'index'">
                <img src="~@/assets/img/shop/nostar.png" alt="">
              </li>
            </ul>
            <p class="price">{{ '$' + item1.prince }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      starNum: 3,
      NostarNum: 2,
      NewOthers: Array,
      book_details:{
        book_id: Number
      }
    }
  },
  props:{
    'BookDetail':{
      type: Object,
      default(){
        return {
        //默认数据，防止请求事件过长，控制台报错
        BookDetail:{
          author: "",
          cate_name: "",
          id: "",
          name: "",
          number: "",
          picture: "",
          pid: "",
          prince: "",
          remark: "",
          sales: "",
        },
        }
      }
    },
    'others':{
      type:Array,
      default(){
        return [
            {
                id: "",
                name: "",
                picture: "",
                prince: ""
            },
          ]
        }
    }
  },
  mounted() {

  },
  methods: {
    book(){
      return this.others.slice(0,2)
    },
    go_detail(id){
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
  #shop3{
    .one{
      margin: 1.5em 1em;
      p{
        font-size: 13px;
        font-weight: 500;
      }
      .content{
        width: 100%;
        background-color: #f4f4f4;
        padding-top: 25px;
        padding-right: 20px;
        padding-bottom: 25px;
        padding-left: 20px;
        h5{
          font-weight: 600;
        }
      }
    }
    .two{
      border-top: 1px solid #eee;
      margin: 1.5em 1em;
      .twoContent{
        margin-top: 2em;
        p{
          font-weight: 600;
        }
        .warpper{
          display: flex;
          margin-bottom: 0.5em;
          cursor: pointer;
          .img{
            width: 30%;
            img{
              width: 100%;
            }
          }
          .content{
            padding: 0.2em 0.8em;
            ul{
              display: flex;
            }
            .title{
              color: #777;
              margin: 0;
            }
            .price{
              font-weight: 700;
            }
          }
        }
      }
      
    }
  }
</style>