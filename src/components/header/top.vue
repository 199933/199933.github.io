<template>
    <div class="top-menu container-fluid" :class="{ActiveFixed : isFixd}">
      <div class="row">
        <div class="menu-left col-md-7">
            <img src="~@/assets/img/logo_ecommerce_black.png" alt="This is logo">
            <ul class="menu">
              <li v-for="(item,index) in menu" :key="item" >
                <router-link v-if="item !== '产品'" :to="menuUrl[index]" tag="span">
                  {{item}}
                </router-link>
                <span id="menus" v-else>{{item}}<svg t="1585129463725" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2229" width="16" height="16"><path d="M994.944 256.64a32 32 0 0 0-45.248 1.28L512 711.808 74.304 257.92a32 32 0 1 0-46.4 44.096l459.328 477.376c6.656 7.04 15.744 9.984 24.768 9.536 8.96 0.448 18.112-2.56 24.768-9.6l459.328-477.312a32 32 0 0 0-1.152-45.248z" fill="#707070" p-id="2230"></path></svg></span>
                <div class="twoMenu" v-if="item == '产品'">
                  <ul>
                    <li v-for="(item,index) in menuTwo" :key="index" @click="go_detail(index + 1)">
                      <!-- <router-link :to="'/category?id=' + index" tag="span"> -->
                        {{item}}
                      <!-- </router-link> -->
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
        </div> 
        <div class="menu-right col-md-5">
          <span class="searchInput">
            <input type="text" v-model="searchData.name" @keyup.enter="search(searchData.name)" placeholder="I'am searching for..." style="width:100%">
          </span>
          <span class="searchBtn">
            <button @click="search(searchData.name)">
              <svg t="1583848913731" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2321" width="32" height="32"><path d="M441.192 181.831c132.48-13.704 255.824 68.524 292.371 191.868 4.568 18.274-4.568 27.41-13.704 31.978-9.137 0-22.841-4.568-27.41-18.274-31.978-109.639-137.049-178.163-251.256-159.89-22.841 4.567-27.41-41.114 0-45.683zM765.539 693.479c-4.568-4.567 0-18.274 4.567-22.841 50.251-63.955 77.661-141.617 77.661-228.413 0-201.004-164.459-365.463-365.463-365.463-201.004 0-365.463 164.459-365.463 365.463 0 201.004 164.459 365.463 365.463 365.463 86.797 0 164.459-27.41 223.846-73.092 9.137-9.137 18.274-13.704 27.41-4.567l127.913 132.48c9.137 9.137 27.41 4.567 36.547-4.567v0c9.137-9.137 9.137-22.841 0-31.978l-132.48-132.48zM482.307 766.571c-178.163 0-319.779-146.185-319.779-324.348s141.617-319.779 319.779-319.779c178.163 0 324.348 141.616 324.348 319.779 0 178.163-146.185 324.348-324.348 324.348z" p-id="2322" fill="#515151"></path></svg>
            </button>
          </span>
          <!-- 搜索框结束 -->
          <div class="people">
            <div class="myaccount" @click="goWhere">
              <svg t="1583851576737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3171" width="32" height="32"><path d="M960 906.8H64v-75.6C64 701.5 169.5 596 299.2 596h425.6C854.5 596 960 701.5 960 831.2v75.6zM108.9 862h806.3v-30.8c0-105-85.4-190.4-190.4-190.4H299.2c-105 0-190.4 85.4-190.4 190.4V862zM512 587.6c-129.7 0-235.2-105.5-235.2-235.2S382.3 117.2 512 117.2s235.2 105.5 235.2 235.2S641.7 587.6 512 587.6z m0-425.6c-105 0-190.4 85.4-190.4 190.4S407 542.8 512 542.8s190.4-85.4 190.4-190.4S617 162 512 162z" fill="#515151" p-id="3172"></path></svg>
            </div>
            <div class="zhongxing">
              <p>Hello!</p>
              <p class="name">{{$store.state.UserName}}</p>
            </div>
            <router-link to="/cart" tag="span">
            <div class="cart">
              <svg t="1583895263836" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7038" width="48" height="48"><path d="M453.55 842.82m-55.97 0a55.97 55.97 0 1 0 111.94 0 55.97 55.97 0 1 0-111.94 0Z" p-id="7039" fill="#515151"></path><path d="M743.72 842.82m-55.97 0a55.97 55.97 0 1 0 111.94 0 55.97 55.97 0 1 0-111.94 0Z" p-id="7040" fill="#515151"></path><path d="M899.92 268.18c-16.01-20.21-39.99-31.81-65.79-31.81H281.45l-9.72-44.6c-6.02-34.82-34.86-60.58-70.13-62.64l-66.09-3.87c-15.43-0.9-28.67 10.87-29.57 26.3-0.9 15.43 10.87 28.67 26.3 29.57l66.09 3.87c9.18 0.54 16.68 7.24 18.47 17.49l22.7 104.28c0.05 0.22 0.11 0.42 0.17 0.63l61.88 286.94c0.03 0.15 0.06 0.29 0.1 0.44l17.5 81.12c8.29 38.4 42.8 66.26 82.06 66.26h410.92c15.45 0 27.98-12.53 27.98-27.98 0-15.45-12.53-27.98-27.98-27.98H401.21c-13.09 0-24.59-9.29-27.35-22.09l-10.23-47.44 420.5 0.46h0.08c39.19 0 72.79-26.63 81.74-64.78l49.93-212.85c5.88-25.12 0.07-51.11-15.96-71.32z m-38.54 58.52l-49.93 212.85c-2.98 12.72-14.18 21.6-27.25 21.6h-0.03l-432.63-0.48-57.88-268.34h540.46c8.59 0 16.59 3.87 21.93 10.6 5.35 6.75 7.29 15.41 5.33 23.77z" p-id="7041" fill="#515151"></path></svg>
              <span class="cart-num" style="color: #fff">{{$store.state.cartNum}}</span>
            </div>
            </router-link>
          </div>
        </div> 
      </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        menu: ['主页','产品','关于我们','我们的优势'],
        menuUrl:['/',' ','/about','/advantage'],
        menuTwo:['推理悬疑','艺术摄影','科幻幻想','商业与投资','文学与小说'],
        isFixd: false,
        cartNum: Number,
        searchData: {
          name: ''
        }
      }
    },
    mounted() {  
      window.addEventListener('scroll', this.fixedActiveBtn);
      //请求购物车数量
      this.getCartNum();
      //获取用户信息
      this.UserMsg()
    },
    computed: {
    },
    props:{
    },
    methods: {
      UserMsg(){
        this.$axios({
          method: 'get',
          url: `${this.BaseUrL}/user/user_info`,
        }).then((res)=>{
          switch (res.data.code) {
            case '00000':
              this.$store.state.UserName = res.data.data.nickname
              break;
            case '10010':
              this.$store.state.UserName = '我的账户'
              break;
            default:
              break;
          }
        })
      },
      search(index){
        this.$axios({
          method: 'post',
          url: `${this.BaseUrL}/book/book_search`,
          data: JSON.stringify(this.searchData)
        }).then((res)=>{
          switch (res.data.code) {
            case '00000':
              this.$store.state.SearchDate = res.data.data;
              this.$router.push('/search?' + index).catch(()=>{})
              break;
            case '20004':
              this.$message.error('搜索数据不存在！');
            default:
              break;
          }
          // console.log(res.data)
        })
      },
      goWhere(){
        if(localStorage.getItem('token')){
          this.$router.push('/account').catch(()=>{})
        }else{
          this.$router.push('/login').catch(()=>{})
        }
      },
      go_detail(index){
        this.$router.push('/category?id=' + index)
      },
      fixedActiveBtn() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop >= 46 ? this.isFixd = true : this.isFixd = false
      },
      getCartNum() {
        this.$axios({
          method: 'get',
          url: `${this.BaseUrL}/cart/get_cart_items`,
        }).then((res) =>{
          if(res.data.code == '10010'){
           this.$store.state.cartNum = 0
          }else{
            this.$store.state.cartNum = res.data.data.num
          }
        })
      }
    },
}
</script>
<style lang="scss" scoped>
//router-link 被选中的页面有这个class类
  .router-link-exact-active {
    color: #fe1656;
  }
  input:focus,
  button:focus{
    outline:none;//去掉边框
  }
  .ActiveFixed{
    position: fixed;
    top: 0;
    z-index: 200; 
    // height: 90px;
    // padding-top: -12px;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.06);
  }
  .top-menu{
    // position: fixed;
    transition: 1s all ease;
    background-color: #fff;
    .menu-left{
      display: flex;
      padding: 2em 3em;
      ul{
        display: flex;
        line-height: 30px;
        font-size: 16px;
        font-weight: 600;
        padding-left: 4em;
        li{
          margin: 0 2em;
        }
        li:hover{
          cursor: pointer;
          color: #fe1656;
        }
        li:hover .twoMenu{
          display: block;
          color: #696969;
        }
        .twoMenu{
          display: none;
          z-index: 12;
          position: absolute;
          top: 55%;
          margin-left: -2em;
          background-color: #fff;
          box-shadow: 0 5px 8px rgba(0,0,0,.15);
          border-top: 0 solid #ccc;
          width: 25%;
          box-sizing: border-box;
          &:hover{
            display: block;
          }
          ul{
            box-sizing: border-box;
            text-indent: 1em;//首行缩进
            display: flex;
            flex-wrap: wrap;
            // min-width: 200px;
            background-color: transparent;
            padding: 5px 0;
            z-index: 10;
            li{
              padding: 0;
              margin: 0;
              display: inline-block;
              width: 100%;
              text-transform: uppercase;
              &:hover{
                background-color: #f4f4f4;
              }
            }
          }
        }
      }
    }
    .menu-right{
      display: flex;
      align-items: center;
      // border-left: 1px solid rgba(0,0,0,.06);
      .searchInput{
        input{
          border-radius: 20px 0 0 20px;
          background-color: #f4f4f4;
          border: none;
          height: 48px;
          padding: 0 0 0 25px;
          font-style: italic;
          width: 246px;
        }
      }
      .searchBtn{
        button{
          border-radius: 0 20px 20px 0;
          background-color: #f4f4f4;
          border: none;
          height: 48px;
          padding: 0 0 0 25px;
          font-style: italic;
          cursor: pointer;
          svg{
            width: 24px;
            height: 24px;
            position: relative;
            right: 1em;
          }
        }
      }
      .people{
        display: flex;
        justify-content: center;
        align-items: center;
        .myaccount{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #e7e7e7;
          margin: 0 1em;
          cursor: pointer;
          svg{
            width: 60%;
          }
        }
        .zhongxing{
          p{
            margin-top: 0;
            margin-bottom: 0;
            font-size: 12px;
          }
          .name{
            font-weight: 600;
          }
        }
        .cart{
          margin: 0 1em;
          position: relative;
          cursor: pointer;
          .cart-num{
            position: absolute;
            background: #ed5348;
            width: 20px;
            height: 20px;
            box-shadow: -1px 1px 2px 0 rgba(0,0,0,.3);
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            border-radius: 50%;
            line-height: 20px;
            right: -5px;
            top: -5px;
          }
        }
      }
    }
  }
  #menus{
    svg{
      width: 24px;
    }
  }
</style>