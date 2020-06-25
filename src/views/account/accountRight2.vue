<template>
  <div id="dingdan">
    <div>
      <table class="table table-condensed">
        <thead>
          <tr>
            <th class="product-name">订单号</th>
            <th class="product-time">创建时间</th>
            <th class="product-price">订单状态</th>
            <th class="product-quantity">收货地址</th>
            <th class="product-subtotal">合计</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(item ,index) in right2Data" :key="index">
              <td class="product-thumbnail"><a>{{item.uuid | dingdan}}</a></td>
              <td class="product-name"><p>{{item.create_time | time}}</p></td>
              <td class="product-price"><p>{{item.status}}</p></td>
              <td class="product-quantity">{{item.address}}</td>
              <td class="product-subtotal" style="color: #3256f4; font-weight:600"><p>{{item.price}}</p></td>
              <td><button type="button" @click="dingdanDetail(item.uuid)" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">查看详情</button></td>
            </tr>
        </tbody>
      </table>
      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">订单详情</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <table class="table table-condensed" v-for="(item,index) in detali" :key="index">
                <tr>
                  <td>订单号</td>
                  <td>{{item.uuid}}</td>
                </tr>
                <tr>
                  <td>封面</td>
                  <td><img :src="BaseUrL + item.picture" alt="" width="50"></td>
                </tr>
                <tr>
                  <td>书名</td>
                  <td>{{item.name}}</td>
                </tr>
                <tr>
                  <td>作者</td>
                  <td>{{item.author}}</td>
                </tr>
                <tr>
                  <td>数量</td>
                  <td>{{item.number}}</td>
                </tr>
                <tr>
                  <td>价格</td>
                  <td>{{item.price}}</td>
                </tr>
                
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detali: Array
    }
  },
  methods: {
    openError(msg) {
      this.$notify.error({
        title: '错误',
        message: `${msg}`
      })
    },
    dingdanDetail(dingdan){
      this.$axios({
          method: 'post',
          url: `${this.BaseUrL}/order/order_details`, 
          data: JSON.stringify({uuid:dingdan})
        }).then((res)=>{
          this.detali = res.data.data
           switch (res.data.code) {
            case '00000':
            break;
            case res.data.code:
              this.openError(res.data.msg)
              break;
            default:
              this.openError('服务器错误')
              break;
          }
        })
    }
  },
  props:{
    "right2Data":{}
  },
  filters:{
    dingdan(value){
      return value.substring('30') + '...'
    },
    time(value){
      return value.split(' ')[0]
    }
  }
}
</script>
<style lang="scss" scoped>
  #dingdan{
    margin-bottom: 10em;
  }
  #myModal{
    table{
      margin-top: 2em;
      border-bottom: 3px solid rgb(12, 15, 231);
    }
  }
</style>