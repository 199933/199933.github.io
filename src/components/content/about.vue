<template>
    <div>
        <top-menu>
            <h3>关于我们</h3>
        </top-menu>
        <div class="content">
            <p class="title">我们的品牌故事</p>
            <p class="main">自1500年代以来，WHATGOING已经是文创时代符号。诚品的情怀及模式是一般书店学不来的，如今已是大型文化综合体运营商，入驻条件苛刻，一般商业地产发展商是真的不舍得，只有拥有大局观的国企及政府肯。除了书之外，文具、伴手礼、艺术感的工艺品、特质轻餐都具核心竞争力。主题混搭、生活及文化气息浓郁,能感受到无印特有的冷感艺术风。方所源于诚品，相比诚品，在艺术造诣上更大胆，广州店重创异艺术，成都店重复古底蕴。而且建面会小很多，更加适用于高端购物中心</p>
        </div>
    </div>
</template>
<script>
import topMenu from '@/components/common/topMenu.vue' 
export default {
    components:{
        topMenu
    }
}
</script>
<style lang="scss">
    .content{
        padding: 3em 5em;
        .title{
            font-size: 22px;
            font-weight: 600;
        }
        .main{
            color: #888686;
        }
    }
</style>