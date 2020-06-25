<template>
  <div id="shop1">
    <div class="container coontent">
      <div class="row"> 
        <div class="col-md-12 left">
          <div class="proShow">
            <img :src="this.BaseUrL + BookDetail.picture" alt="">
            <div class="bianti">
              <img :src="this.BaseUrL + BookDetail.picture" alt="">
            </div>
          </div>
          <div class="pro">
            <h2>{{BookDetail.name}}</h2>
            <div class="star">
              <ul>
                <li v-for="(item,index) in starNum" :key="index">
                  <img src="~@/assets/img/shop/star.png" alt="">
                </li>
                <li v-for="(item,index) in NostarNum" :key="index + 'index'">
                  <img src="~@/assets/img/shop/nostar.png" alt="">
                </li>
              </ul>
              <div class="hengxian">
              </div>
            </div>
            <div class="price">
              <del>{{BookDetail.prince | meiyuan}}</del> 
              <span>{{BookDetail.prince - 30 + '.00' | meiyuan}}</span>
            </div>
            <div class="miaoshu">
              <p>
                {{BookDetail.remark}}
              </p>
            </div>
            <div class="kucun">
              <p>库存: <span>{{BookDetail.number}}</span></p>
            </div>
            <div class="pro-pay">
              <div class="one">
                <form autocomplete="off" @submit.prevent="onSubmit">
                  <button type="button" value="-" class="minus" @click="addToCartData.number-- <= 1 ? addToCartData.number = 1 : ''">-</button>
                  <input type="number" v-model="addToCartData.number" id="quantity" class="input-text" :step="1" :min="1" :max="BookDetail.number">
                  <button type="button" value="+" class="plus" @click="addToCartData.number++ >= BookDetail.number ?  addToCartData.number=BookDetail.number : ''">+</button>
                </form>
              </div>
              <div class="two">
                <button @click="addToCart()" :disabled="btn">
                  <svg t="1584499785191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3370" width="16" height="16"><path d="M891.136 313.728H758.656v-23.552c0-23.552-4.608-47.232-9.088-70.784C712.96 82.432 571.392 2.304 438.912 40.064c-64 18.816-118.784 61.312-150.784 122.752-22.784 47.232-32 99.072-27.392 151.04h-127.872c-18.304 0-36.48 18.944-36.48 37.76v396.416c0 136.832 105.088 245.376 237.568 245.376h356.352c132.48 0 237.568-108.544 237.568-245.376V351.488c-0.256-18.816-18.432-37.76-36.736-37.76z m-539.008-118.016c22.784-42.496 64-75.52 109.568-89.6 95.872-28.288 200.96 28.288 228.352 132.096 4.608 18.816 4.608 33.024 4.608 51.968v23.552H329.344c-4.608-37.76 4.48-80.256 22.784-118.016z m507.008 547.456c0 94.336-77.696 174.592-168.96 174.592H333.824c-91.392 0-168.96-80.256-168.96-174.592V384.512h694.272v358.656z m0 0" p-id="3371" fill="#ffffff"></path></svg>
                  加入购物车
                </button>
                <span class="notice" :style="{display: isMaxNum}">超过库存！</span>
              </div>
            </div>
            <!-- <div class="shejiao">
              <div class="share">
                <div class="facebook">
                  <svg t="1584500730797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4294" width="16" height="16"><path d="M672.00704 191.99616c-88.369433 0-160.00704 71.637607-160.00704 160.00704l0 96.00832-127.99744 0 0 127.99744 127.99744 0 0 447.99104 127.99744 0 0-447.99104 143.992 0 32.0096-127.99744-176.0016 0 0-96.00832c0-17.673887 14.335713-32.0096 32.0096-32.0096l160.00704 0 0-127.99744-160.00704 0z" p-id="4295" fill="#2c2c2c"></path></svg>
                </div>
                <div class="tuite">
                  <svg t="1584500979545" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4634" width="16" height="16"><path d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z" fill="#000000" p-id="4635"></path></svg>
                </div>
                <div class="in">
                  <svg t="1584501221216" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5722" width="16" height="16"><path d="M298.666667 170.666667a128 128 0 0 0-128 128v426.666666a128 128 0 0 0 128 128h426.666666a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128H298.666667z m0-85.333334h426.666666a213.333333 213.333333 0 0 1 213.333334 213.333334v426.666666a213.333333 213.333333 0 0 1-213.333334 213.333334H298.666667a213.333333 213.333333 0 0 1-213.333334-213.333334V298.666667a213.333333 213.333333 0 0 1 213.333334-213.333334z m213.333333 640a213.333333 213.333333 0 1 1 0-426.666666 213.333333 213.333333 0 0 1 0 426.666666z m0-85.333333a128 128 0 1 0 0-256 128 128 0 0 0 0 256z m234.666667-298.666667a64 64 0 1 1 0-128 64 64 0 0 1 0 128z" fill="#2c2c2c" p-id="5723"></path></svg>
                </div>
                <div class="gmail">
                  <svg t="1584501253850" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6112" width="16" height="16"><path d="M1024 192v640c0 36.266667-27.733333 64-64 64H896V315.178667l-384 275.754666-384-275.754666V896H64C27.690667 896 0 868.266667 0 832v-640c0-18.133333 6.912-34.133333 18.389333-45.568A63.36 63.36 0 0 1 64 128H85.333333l426.666667 309.333333L938.666667 128h21.333333c18.133333 0 34.133333 6.912 45.610667 18.432 11.52 11.434667 18.389333 27.434667 18.389333 45.568z" fill="#2c2c2c" p-id="6113"></path></svg>
                </div>
                <div class="email">
                  <svg t="1584501291671" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6985" width="16" height="16"><path d="M853.994667 341.994667l0-85.994667-341.994667 213.994667-341.994667-213.994667 0 85.994667 341.994667 212.010667zM853.994667 170.005333q34.005333 0 59.008 26.005333t25.002667 60.010667l0 512q0 34.005333-25.002667 60.010667t-59.008 26.005333l-684.010667 0q-34.005333 0-59.008-26.005333t-25.002667-60.010667l0-512q0-34.005333 25.002667-60.010667t59.008-26.005333l684.010667 0z" p-id="6986" fill="#2c2c2c"></path></svg>
                </div>
              </div>
            </div> -->
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
      starNum: 3,
      NostarNum: 2,

      addToCartData:{
        book_id: Number,
        number: 1
      },
      btn: false,
      isMaxNum: 'none'
    }
  },
  mounted() {
    
  },
  props:{
    'BookDetail':{
      type: Object,
      default(){
        return {
        //默认数据，防止请求事件过长，控制台报错
        BookDetail:{
          author: "",
          cate_name: "",
          id: "",
          name: "",
          number: "",
          picture: "",
          pid: "",
          prince: "",
          remark: "",
          sales: "",
        },
        }
      }
    }
  },
  filters:{
    meiyuan(value){
      return '$' + value;
    }
  },
  methods: {
    addToCart(){
        this.addToCartData.book_id = this.$route.query.id
        if(this.addToCartData.number <= this.BookDetail.number && this.addToCartData.number >= 1){
          this.isMaxNum = 'none'
          this.$axios({
            method: 'post',
            url: `${this.BaseUrL}/cart/add_to_cart`,
            data: JSON.stringify(this.addToCartData)
          }).then((res)=>{
            this.$router.push({
              path: '/cart',
              }).catch((err)=>{
                // console.log(err)
            })
          })
          console.log('ok')
        }else{
          this.isMaxNum = 'inline-block'
          console.log('no')
        }
    }
  },
}
</script>
<style lang="scss" scoped>
  #shop1{
    .coontent{
      padding-top: 2em;
      padding-bottom: 2em;
      .left{
        display: flex;
        .proShow{
          margin-right: 1.5em;
          width: 45%;
          height: auto;
          img{
            width: 100%;
          }
          .bianti{
            width: 25%;
            margin-top: 0.8em;
            border: 2px solid #222529;
          }
        }
        .pro{
          position: relative;
          width: 55%;
          .star{
            position: relative;
            ul{
              padding: 0;
              margin: 0;
              display: flex;
              li{
                list-style: none;
              }
            }
            .hengxian{
              position: absolute;
              top: 3.3em;
              width: 3em;
              height: 0;
              border: 1px solid #a7a7a7;
            }
          }
          .price{
            position: absolute;
            top: 7.5em;
            margin-bottom: 2em;
            del{
              color: #a7a7a7;
              font-size: 18px;
              font-weight: 500;
            }
            span{
              color: #000;
              font-size: 25px;
              font-weight: 600;
              margin-left: .8em;
            }
          }
          .miaoshu{
            position: absolute;
            top: 11em;
            p{
              color: #777;
              font-size: 18px;
            }
          }
          .kucun{
            position: absolute;
            top: 22em;
            p{
              color: #777;
              span{
                font-weight: 600;
                color: #000;
                font-size: 18px;
              }
            }
          }
          .pro-pay{
            height: 91px;
            padding: 1em 0;
            border-top: 1px solid #e7e7e7;
            border-bottom: 1px solid #e7e7e7;
            position: relative;
            top: 21em;
            .one{
              margin-right: .5rem;
              display: inline-block;
              button{
                width: 30px;
                height: 3rem;
                border: solid 1px #e7e7e7;
                color: #222529;
                border-radius: 0;
              }
              .minus{
                background: transparent;
                position: relative;
                line-height: 1;
                padding: 0;
                outline: none;
                text-indent: -9999px;
                right: -1px;
              }
              .minus::before{
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                width: 9px;
                border-top: 1px solid;
                margin-top: -.5px;
                margin-left: -4.5px;
              }
              input{
                position: relative;
                top: 1px;
                width: 44px;
                height: 3rem;
                font-size: 1rem;
                font-weight: 700;
                text-align: center;
                line-height: 14px;
                border-radius: 0;
                border-width: 1px 0 1px 0;
                padding-left: 0;
                padding-right: 0;
                box-shadow: none;
                color: #222529;
                background-color: #fff;
                border: 1px solid #e7e7e7;
                outline: none;
              }
              .plus{
                background: transparent;
                position: relative;
                line-height: 1;
                padding: 0;
                outline: none;
                text-indent: -9999px;
                left: -1px;
              }
              .plus::before{
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                width: 9px;
                border-top: 1px solid;
                margin-top: -.5px;
                margin-left: -4.5px;
              }
              .plus::after{
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                height: 9px;
                border-left: 1px solid;
                margin-top: -4.5px;
                margin-left: -.5px;
              }
            }
            .two{
              display: inline-block;
              .notice{
                color: red;
                margin-left: 1em;
              }
              button{
                padding: 0.8em 2em;
                background: #222529;
                color: #fff;
                font-weight: 600;
                border: none;
                &:hover{
                  border-color: #1a43f3;
                  background-color: #1a43f3;
                }
                svg{
                  padding: 0;
                  margin: 0;
                  position: relative;
                  top: -2px;
                }
              }
            }
          }
          .shejiao{
            position: absolute;
            bottom: 15%;
            .share{
              display: flex;
              div{
                width: 32px;
                height: 32px;
                border-radius: 50%;
                color: #222529;
                border: 2px solid #e7e7e7;
                margin-right: .5em;
                text-align: center;
                svg{
                  position: relative;
                  left: -1px;
                  top: -1px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>