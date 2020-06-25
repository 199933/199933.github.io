<template>
  <div id="category">
    <category-top :CategoryName="CategoryName"></category-top>
    <top-menu>
      <h3>搜索结果</h3> 
    </top-menu>
    <super-book :categoryBook="CategoryBookdata"></super-book>
  </div>
</template>
<script>
import topMenu from '../common/topMenu'
import categoryTop from '../common/categoryTop'
import superBook from '../common/superBook'
export default {
  data() {
    return {
      CategoryBookdata : [],
      CategoryName: '搜索结果',
      categoryId:{
        cate_id: Number
      },
    }
  },
  created() {
    this.CategoryBookdata = this.$store.state.SearchDate
  },
  mounted() {
  },
  components:{
    topMenu,
    categoryTop,
    superBook
  }
}
</script>

