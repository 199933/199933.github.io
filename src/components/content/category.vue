<template>
  <div id="category">
    <category-top :CategoryName="CategoryName"></category-top>
    <top-menu>
      <h3>分类</h3> 
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
      CategoryBookdata : Array,
      CategoryName: String,
      categoryId:{
        cate_id: Number
      },
    }
  },
  created() {
    this.categoryId.cate_id = this.$route.query.id
  },
  mounted() {
    this.$axios({
      method:'post',
      url: `${this.BaseUrL}/book/get_book`,
      data: JSON.stringify(this.categoryId)
    }).then((res)=>{
      this.CategoryBookdata = res.data.data.book_lists
      this.CategoryName = res.data.data.cate_name
    })
  },
  components:{
    topMenu,
    categoryTop,
    superBook
  }
}
</script>

