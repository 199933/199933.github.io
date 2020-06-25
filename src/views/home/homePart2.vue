<template>
  <div id="part2">
    <div class="title">
     <h4>畅销书</h4> 
     <!-- <div class="right">
        <a href=""><span>查看所有书籍</span></a>
        <span><svg t="1584014562756" class="icon" viewBox="0 0 1211 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1927" width="16" height="16"><path d="M717.034962 1023.997037a47.40727 47.40727 0 0 1-33.185089-80.592359l427.850614-427.850614a15.407363 15.407363 0 0 0 4.740727-10.666636 11.851818 11.851818 0 0 0-3.555545-8.296272L699.257236 81.777541a47.768751 47.768751 0 0 1 67.55536-67.55536l413.628433 413.628433a105.481176 105.481176 0 0 1 30.814725 77.036814 110.221903 110.221903 0 0 1-33.185089 77.036814L750.220051 1010.960038a47.40727 47.40727 0 0 1-33.185089 13.036999z" fill="#13227a" p-id="1928"></path><path d="M1142.515213 559.405789H47.40727a47.40727 47.40727 0 1 1 0-94.814541h1095.107943a47.40727 47.40727 0 1 1 0 94.814541z" fill="#13227a" p-id="1929"></path></svg></span>
     </div> -->
    </div>
    <div class="content">
      <div class="one">
        <p><i>whatgoingon</i></p>
        <h3>我们只做最好书籍和服务</h3>
        <img src="~@/assets/img/home/part2Left.png" alt="">
      </div>
      <div class="two">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
  #part2{
    width: 100%;
    // height: 720px;
    background-color: #f4f4f4;
    padding: 3em 5em;
    .title{
      height: 45px;
      line-height:45px;
      display: flex;
      padding-bottom: 6em 0;
      border-bottom: 1px solid #e7e7e7;
      .right{
        font-weight: 500;
        line-height: 45px;
        font-size: 13px;
        color: #3256f4;
        position: absolute;
        right: 5em;
        svg{
          margin-left: 0.3em;
        }
      }
    }
    .content{
      display: flex;
      background-color: #fff;
      // height: 88%;
      margin: 3em 0;
      width: 100%;
      .one{
        height: 100%;
        width: 40%;
        text-align: center;
        padding-top: 6%;
        display: inline-block;
        p{
          color: rgba(34,37,41,0.6);
          font-family: 'Sans';
        }
        img{
          margin-top: 1em;
          width: 70%;
        }
      }
      .two{
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        height: 100%;
      }
    }
  }
</style>