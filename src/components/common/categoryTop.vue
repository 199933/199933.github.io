<template>
  <div>
    <div class="top">
      <div class="container">
        <div class="row">
          <div class="col-md-5 one">
            <p class="title"><i>WHATGOINGON</i></p>
            <h1 v-cloak>{{CategoryName}}</h1>
            <h5>我们只做最好的书籍</h5>
          </div>
          <div class="col-md-4 two"></div>
          <div class="col-md-3 three">
            <h3>PORTO</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    "CategoryName":{
      default(){
        return '未分类'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    [v-cloak]{
      display: none;
    }
    .top{
      height: 240px;
      width: 100%;
      background-color: #f4f4f4;
      line-height: 40px;
      overflow: hidden;
      .one{
        position: relative;
        top: 3em;
        .title{
          font-size: 15px;
          color: rgba(34,37,41,0.6);
          font-weight: 200;
          margin: 0;
        }
        h1{
          font-weight: 700;

        }
        h5{
          font-size:  18px;
          color: #777777;
          font-weight: 600;
        }
      }
      .two{
        background-image: url('../../assets/img/categoryTop.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 120px;
        padding-bottom: 120px;
      }
      .three{
        h3{
          text-align: right;
          line-height: 240px;
        }
      }
    }
</style>