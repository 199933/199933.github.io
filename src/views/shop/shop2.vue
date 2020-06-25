<template>
  <div id="shop2" class="container-fulid">
    <div class="row">
      <div class="menu col-md-12">
        <ul>
          <li v-for="(item,index) in menu" :key="index" @click="showStyle(index)">
            <span :class="liIndex == index ? active : ''">
              {{item}}
            </span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="one" :class="{onshow:show.one}">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="two" :class="{onshow:show.two}">
          <div class="pinglun">
            <div class="nopinglun container-fluid" v-if="pinglun == false">
              <div class="row">
                <div class="col-md-12">
                  <p class="title">评论</p>
                  <p class="content">现在还没有评论</p>
                </div>
              </div>
            </div>
            <div class="havepinglun container-fluid" v-else>
              <div class="row">
                <div class="col-md-12 onePinglun" v-for="(item,index) in UserPinglun" :key="index">
                  <div class="content">
                    <span class="user">用户: {{item.user_name}}</span>
                    <span class="time">时间: {{item.create_time}}</span>
                    <div class="star">
                      <span>用户评星:</span>
                      <ul>
                        <li v-for="item1 in parseInt(item.stars)" :key="item1 + 'index1' ">
                          <img src="~@/assets/img/shop/star.png" alt="">
                        </li>
                        <li v-for="(item1,index) in parseInt(5 - item.stars)" :key="index + 'index'">
                          <img src="~@/assets/img/shop/nostar.png" alt="">
                        </li>
                      </ul>
                    </div>
                    <div class="pinglunContent">
                     {{item.message}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="send">
              <div class="centent">
                <form class="form-horizontal formWrapper">
                  <div style="margin-left:10%">
                    <div class="start">
                      您的评星为：
                      <ul>
                        <li v-for="(item,index) in starNum" :key="index" @click="ChooseStar(index + 1)">
                          <img src="~@/assets/img/shop/star.png" alt="">
                        </li>
                        <li v-for="(item,index) in NostarNum" :key="index + 'index'" @click="ChooseNoStar(index + 1)">
                          <img src="~@/assets/img/shop/nostar.png" alt="">
                        </li>
                      </ul>
                    </div>
                    <div class="form-top">
                      <h5>您的评论</h5> 
                      <textarea v-model="pinglunData.message" @keyup.enter="SendPinglun" class="form-control" rows="3" style="width:82.5%"></textarea>
                    </div>
                    <!-- <div class="form-group">
                      <label for="inputPassword3" class="col-sm-2 control-label">姓名</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3" placeholder="姓名">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                      <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                      </div>
                    </div> -->
                    <div class="form-group">
                      <div class="col-sm-offset-2 col-sm-10">
                        <button type="button" class="btn btn-default" @click="SendPinglun">提交</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tuijian">
        <book :start="0">
          <p>推荐书籍</p>
        </book>
      </div>
    </div>
  </div>
</template>
<script>
import book from '@/components/common/book.vue'
export default {
  data() {
    return {
      menu:['描述','评论'],
      liIndex: '',
      active: 'active',
      show:{
        one: false,
        two: true,
      },
      noshow: 'noshow',
      pinglun: false,
      book_data: {
        book_id: Number
      },
      NostarNum: 0,
      starNum: 5,
      pinglunData:{
        book_id: Number,
        pid: 0,
        message: '',
        stars: Number
      },
      UserPinglun: Array
    }
  },
  mounted() {
    this.showStyle(0);
    this.book_data.book_id = this.$route.query.id;
    this.pinglunData.book_id = this.$route.query.id;
    this.pinglunMsg();
  },
  methods: {
    ChooseStar(index){
      this.starNum = index;
      this.NostarNum = 5 - index;
    },
    ChooseNoStar(index){
      this.starNum = index + this.starNum;
      this.NostarNum = 5 - this.starNum;
    },
    showStyle(index){
      this.liIndex = index;
      index == 0 ? this.show.one = false : this.show.one = true;
      index == 1 ? this.show.two = false : this.show.two = true;
    },
    pinglunMsg(){
      this.$axios({
        method: 'post',
        url: `${this.BaseUrL}/message/view_message`,
        data: JSON.stringify(this.book_data)
      }).then((res)=>{
        // console.log(res.data)
        switch (res.data.code) {
          case '00000':
            this.UserPinglun = res.data.data
            this.pinglun = true
            break;
          case '20004':
            this.pinglun = false
          default:
            break;
        }
      })
    },
    SendPinglun(){
      this.pinglunData.stars = this.starNum
      this.$axios({
        method: 'post',
        url: `${this.BaseUrL}/message/leave_message`,
        data: JSON.stringify(this.pinglunData)
      }).then((res)=>{
        switch (res.data.code) {
          case '00000':
            this.$alert(`评论成功！`, '提示', {
            });
            this.pinglunData={
              book_id: Number,
              pid: 0,
              message: '',
              stars: Number
            }
            this.pinglunMsg()
            break;
          case '10010':
            this.$router.push('/login')
            break;
          case '10000':
            this.$alert(`未购买不能评论哦，赶紧下单购买吧！`, '提示', {
            });
            this.pinglunData={
              book_id: Number,
              pid: 0,
              message: '',
              stars: Number
            }
            break;
          case res.data.code:
            this.$notify.error({
              title: '错误',
              message: `${res.data.msg}`
            })
            break;
          default:
            break;
        }
      })
    }
  },
  components:{
    book
  }
}
</script>
<style lang="scss" scoped>
  #shop2{    
    margin-left: 1.5%;
    .menu{
      display: inline-block;
      text-align: center;
      padding: 0 1rem;
      ul{
        display: flex;
        border-bottom: 1px solid #eee;
        li{
          font-size: 20px;
          font-weight: 600;
          color: #818692;
          // margin-left: .5em;
          padding-right: 1em;
          margin-bottom: .5rem;
          cursor: pointer;
          span{
            padding-bottom: .5em;
          }
        }
      } 
    }
    .content{
      padding: 1rem 1rem 0 1rem;
      width: 100%;
      .one{
        color: #777;
      }
      .two{
        .pinglun{
          .nopinglun{
            padding: 2em 0;
            border-bottom: 1px solid rgba(0,0,0,.08);
          }
          .havepinglun{
            border-radius: 3px;
            .onePinglun{
              margin-top: .5em;
              background-color: #f4f4f4;
              .content{
                .user,.time{
                  font-size: 12px;
                  margin-right: 1em;
                }
                .star{
                  display: flex;
                  margin-top: 1em;
                  span{
                    margin-right: 1em;
                    font-weight: 600;
                  }
                  ul{
                  padding: 0;
                  margin: 0;
                  display: flex;
                  li{
                    list-style: none;
                    cursor: pointer;
                  }
                  }
                }
                .pinglunContent{
                  font-size: 15px;
                  padding: 1em 0;
                }
              }
            } 
          }
          .send{
            padding: 2em 0;
            .formWrapper{
              padding: 30px 30px 10px;
              background: #f7f7f7;
              border-radius: 5px;
              .start{
                padding: 0 1em;
                margin-bottom: 1em;
              }
              ul{
                padding: 0;
                margin: 0;
                display: flex;
                li{
                  list-style: none;
                  cursor: pointer;
                }
              }
              .form-top{
                padding: 0 1em;
              }
              .form-group{
                margin-top: 1em;
                button{
                  border-color: #1a43f3;
                  background-color: #1a43f3;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
  .active{
    color: #222529!important;
    border-bottom: 2px solid #222529;
  }
  .onshow{
    display: none;
  }
</style>