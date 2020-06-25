<template>
  <div>
    <div class="topAdItem">
      <slot name="topIcon"></slot>
      <slot name="topMsg"></slot>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .topAdItem{
        flex: 1;
        // height: 30px;
        // line-height: 30px;
        padding: 10px 8em;        
    }
</style>