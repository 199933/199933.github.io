<template>
    <div>
        <top-menu>
            <h3>我们的优势</h3>
        </top-menu>
        <div class="content">
            <p class="title">为什么选择我们</p>
            <div class="main container">
                <div class="row">
                    <div class="col-md-4">
                        <h4>免运费</h4>
                        <p>WHATGOINGON完全免运费，不管你结账金额的大小</p>
                    </div>
                    <div class="col-md-4">
                        <h4>100％退款保证</h4>
                        <p>WHATGOINGON有完整的退款流程，可放心购买</p>
                    </div>
                    <div class="col-md-4">
                        <h4>在线客服支持</h4>
                        <p>WHATGOINGON有专业的客服，可随时为你解答疑惑</p>
                    </div>
                </div>
            </div>
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
<style lang="scss" scoped>
    .content{
        padding: 3em 5em;
        .title{
            font-size: 22px;
            font-weight: 600;
            margin-left: 8%;
        }
        .main{
            .col-md-4{
                margin-top: 3em;
                margin-bottom: 3em;
                border: 1px solid #eee;
                // margin-right: .3em;
                padding: 3em;
                p{
                    margin-top: 2em;
                    color: rgb(95, 95, 95);
                }
            }
        }
    }
</style>