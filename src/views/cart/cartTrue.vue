<template>
  <div id="cartTrue" class="container">
    <div class="menu row">
      <div class="col-md-6 one">
        <span>商品详情</span>
      </div>
      <div class="col-md-6 two">
        <span @click="checkout">继续结账</span>
      </div>
    </div>

    <div class="content row">
      <div class="col-md-9">
        <div class="wrapper">
          <form>
            <table>
              <thead>
                <tr>
                  <th class="product-remove"></th>
                  <th class="product-thumbnail"></th>
                  <th class="product-name">书籍名称</th>
                  <th class="product-price">单价</th>
                  <th class="product-quantity">数量</th>
                  <th class="product-subtotal">合计</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item ,index) in CartMsg" :key="index">
                  <td class="product-remove" @click.prevent="open(item.id)" style="cursor: pointer"><a>×</a></td>
                  <td class="product-thumbnail"><a href=""><img :src="BaseUrL + item.picture" alt=""></a></td>
                  <td class="product-name" style="color: #3256f4;"><p>{{item.name}}</p></td>
                  <td class="product-price"><p>{{item.prince}}</p></td>
                  <td class="product-quantity"><input type="number" :value="item.number"></td>
                  <td class="product-subtotal" style="color: #3256f4;"><p>{{item.prince * item.number}}</p></td>
                </tr>
              </tbody>
            </table>
          </form>
          <div class="container content-bottom">
            <div class="row">
              <div class="col-md-6 one">
                <a href="/"><span>继续购物</span></a>
              </div>
              <div class="col-md-6 two">
                <a @click.prevent="checkout"><span>下一步</span></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="cartSum">
          <div class="top">
             购物车总计
          </div>
          <div class="amount">
            <p class="leiji">累计:</p>
            <h5 class="price">{{cartTotol}}</h5>
          </div>
          <a class="jiesuan" @click.prevent="checkout">
            <font>进行结算</font>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      CartMsg : Array,
      accountMsg : Number,
      productNum: Number,
      cartTotol: Number
    }
  },
  mounted() {
    //请求购物车数据
    this.getCartMsg()
    //计算总价
  },
  methods: {
    open(id) {
      this.$confirm('此操作将从购物车中移除商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '在想想',
        type: 'warning'
      }).then(() => {
        this.Delete(id)
        this.$message({
          type: 'success',
          message: '移除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消移除'
        });          
      });
    },
    openError(msg) {
      this.$notify.error({
        title: '错误',
        message: `${msg}`
      })
    },
    checkout() {
      this.$alert(`<strong>总共 ${this.productNum} 件商品 , 共计 ${this.cartTotol} 元</strong>`, '清单', {
        dangerouslyUseHTMLString: true
      }).then(()=>{
        this.$axios({
          method: 'get',
          url: `${this.BaseUrL}/order/cart_purchase`,
        }).then((res)=>{
          switch (res.data.code) {
            case '00000':
              this.$router.push('/account')
              break;
            case res.data.code:
              this.openError(res.data.msg)
              break;
            default:
              this.openError('服务器错误!')
              break;
        }
        })
      });
    },
    getCartMsg(){
        this.$axios({
        method: 'get',
        url: `${this.BaseUrL}/cart/cart_details`
      }).then((res)=>{
        this.cartTotol = res.data.data.totol
        delete res.data.data.totol;
        this.CartMsg = res.data.data
        this.productNum = Object.keys(this.CartMsg).length
      })
    },
    Delete(id){
      var DeleteId = {
        book_id: id
      }
      this.$axios({
        method: 'post',
        url: `${this.BaseUrL}/cart/clear_cart`,
        data: JSON.stringify(DeleteId)
      }).then((res)=>{
        //删除成功后，不刷新页面改变购物车页面商品数量
        this.getCartMsg()
        //重新请求商品数量
        this.getCartNum();
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  #cartTrue{
    width: 100%;
    .menu{
      height: 50px;
      line-height: 50px;
      margin: 2em 0;
      .one{
        text-align: left;
        font-weight: 600;
        color: #3256f4;
        font-size:20px;
      }
      .two{
          text-align: right;
        span{
          padding: 0.5em;
          cursor: pointer;
          color: #fff;
          background-color: #3256f4;
          border-color: #3256f4 #3256f4 #0d35e7;
        }
      }
    }
    .content{
      .wrapper{
        // height: 420px;
        width: 100%;  
        background: #fff;
        padding: 30px 20px 10px 20px;
        border-top: 3px solid #3256f4;
        border-bottom: 1px solid #dfdfdf;
        border-left: 1px solid #ececec;
        border-right: 1px solid #ececec;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
        margin-bottom: 2em;
        table{
          width: 100%;
          thead{
            tr{
              th{
                color: #777;
                background: transparent;
                border-bottom: none;
                font-weight: 600;
                padding: 9px;
              }
            }
          }
          tbody{
            tr{
              border-top: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
              td{
                text-align: left;
                padding: 10px;
              }
            }
          }
        }
        .product-remove{
          width: 10%;
          a{
            font-size: 30px;
            font-weight: 800;
            text-decoration: none;
            color: #1a43f3;
          }
        }
        .product-thumbnail{
          width: 25%;
          img{
            width: 65%;
          }
        }
        .product-name{
          width: 25%;
        }
        .product-price{
          width: 13%;
        }
        .product-quantity{
          width: 13%;
          padding: 0;
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
              -webkit-appearance: none;
          }
          input[type="number"]{
              -moz-appearance: textfield;
          }
          input{
            width: 52%;
            text-align: center;
            border: 1px solid #c8bfc6;
            padding: 0 4px;
            color: #222529;
            outline: none;
            overflow: visible;
            margin: 0;
            position: relative;
            top: -4px;
          }
        }
        .product-subtotal{
          width: 13%;
        }
        .content-bottom{
          padding-top: 2em;
          padding-bottom: 2em;
          .one{
            a{
              text-decoration: none;
              span{
                &:hover{
                color: #333;
                background-color: #f2f2f2;
                border-color: rgba(0,0,0,.06);
              }
              font-size: 15px;
              color: #333;
              background-color: #fff;
              border:1px solid rgba(0,0,0,.06);
              padding: 0.5em 0.8em;
            }
            }
          }
          .two{
            text-align: right;
            cursor: pointer;
            a{
              text-decoration: none;
              span{
                &:hover{
                color: #333;
                background-color: #f2f2f2;
                border-color: rgba(0,0,0,.06);
                }
                font-size: 15px;
                color: #333;
                background-color: #fff;
                border:1px solid rgba(0,0,0,.06);
                padding: 0.5em 0.8em;
              }
            }
          }
        }
      }
      .cartSum{
        width: 90%;
        margin-left: 5%;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 0;
        .top{
          color: #3256f4;
          font-size: 15px;
          font-weight: 600;
          height: 60px;
          line-height: 60px;
          padding: 0 1em;
          background-color: rgba(0,0,0,.03);
        }
        .amount{
          padding: 15px 15px 7px;
          border-top: none;
          border-radius: 0 0 6.99px 6.99px;
          background-color: #fbfbfb;
          display: flex;
          border-bottom: 1px  solid #dcdcdc;
          position: relative;
          .leiji{
            color: #777;
            font-size: 15px;
          }
          .price{
            position: absolute;
            right: 0.5em;
          }
        }
        .jiesuan{
          color: #fff;
          background-color: #3256f4;
          border-color: #3256f4 #3256f4 #0d35e7;
          width: 80%;
          text-decoration: none;
          margin: 1em 0;
          text-align: center;
          margin-left: 10%;
          cursor: pointer;
          font{
            font-weight: 500;
          }
        }
      }
    }
  }
</style>