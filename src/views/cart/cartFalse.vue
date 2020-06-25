<template>
  <div id="cartFalse">
    <div class="msg">
      <h4>您的购物车是空的，赶紧去选购商品吧！</h4>
    </div>
    <div class="btn">
      <a href="/"><button>商品选购</button></a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  #cartFalse{
    position: relative;
    // margin-bottom: 3em;
    .msg{
      width: 80%;
      margin-left: 10%;
      background-color: rgb(93, 93, 230);
      height: 50px;
      margin-top: 2em;
      margin-bottom: 2em;
      color: #fff;
      h4{
        margin-left: 2em;
        line-height: 50px;
      }
    }
    .btn{
      position: relative;
      left: 5%;
      margin-bottom: 2em;
      button{
        border-radius: 2px;
        padding: 5px;
        color: #fff;
        font-weight: 600;
        border: none;
        background-color: rgb(17, 17, 240);
      }
    }
  }
</style>