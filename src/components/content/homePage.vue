<template>
  <div>
    <homePart1 :part1="part1"></homePart1>
    <homePart2 :part2="part2"></homePart2>
    <homePart3 :part3="part3"></homePart3>
    <homePart4></homePart4>
  </div>
</template>
<script>
import homePart1 from '@/views/home/homePart1.vue'
import homePart2 from '@/views/home/homePart2Slot.vue'
import homePart3 from '@/views/home/homePart3.vue'
import homePart4 from '@/views/home/homePart4.vue'

export default {
  data() {
    return {
      part1: [],
      part2: [],
      part3: []
    }
  },
  mounted() {
     this.cateBook()
     this.hotBook()
     this.jingxuanBook()
  },
  methods: {
    async cateBook(){
        this.$axios({
        method: 'get',
        url: `${this.BaseUrL}/book/navigation_bar`
      }).then((res)=>{
        this.part1 = res.data.data
      })
    },
    async hotBook(){
        this.$axios({
        method:'get',
        url: `${this.BaseUrL}/book/hot_book`
      }).then((res)=>{
        this.part2 = res.data.data;
      })
    },
    async jingxuanBook(){
       this.$axios({
        method:'get',
        url: `${this.BaseUrL}/book/hot_book`
      }).then((res)=>{
        this.part3 = res.data.data.splice(0,6)
      })
    }
  },
  components:{
    homePart1,
    homePart2,
    homePart3,
    homePart4
  }
}
</script>