<template>
  <div id="shop1">
    <div class="top-menu">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  #shop1{
    .top-menu{
      height: 65px;
      background-color: #f8f8f8;
      border-top: 1px solid #e7e7e7;
      border-bottom: 1px solid #e7e7e7;
      h3{
        line-height: 65px;
        margin: 0 2em;
      }
    }
  }
</style>