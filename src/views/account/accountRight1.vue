<template>
  <div id="right1">
    <transition name="el-fade-in-linear">
      <div v-show="show" class="content">
        <div class="main">
          <h5>基本信息</h5>
          <div class="msg">
            <p>Hi! <strong>{{right1Data.nickname}}</strong></p>
            <p>欢迎光临 WHATGOINGON！</p>
            <p class="password">密码：******<button @click="show = !show">修改密码</button></p>
            <p class="address">收货地址：{{right1Data.address | fliterAddress}}<button @click="addressInput">编辑收货地址</button></p>
          </div>
        </div>
      </div>
    </transition>
    <transition name="el-fade-in">
      <div v-if="show == false" class="changePassword">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">旧密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" v-model="changePassword.used_password" placeholder="旧密码">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">新密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" v-model="changePassword.new_password" placeholder="新密码">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-3 control-label">确认密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" v-model="changePassword.new_password_confirm" placeholder="确认新密码">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default" @click="ChangePs()">提交</button>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      changePassword:{
        used_password: '',
        new_password: '',
        new_password_confirm: ''
      },
      address: '暂无',
      addressSend:{
        address : String
      }
    }
  },
  filters:{
    fliterAddress(value){
      return value == null ? '暂无' : value
    }
  },
  props:{
    "right1Data":{
      
    }
  },
  methods: {
    addressInput() {
      this.$prompt('请输入收货地址', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        //发送数据
        this.addressSend.address = value
        this.$axios({
          method: 'post',
          url: `${this.BaseUrL}/user/receiving_address`,
          data: JSON.stringify(this.addressSend)
        }).then((res)=>{
          switch (res.data.code) {
            case '00000':
              this.$message({
                type: 'success',
                message: '你的收货地址是: ' + value
              });
              this.$router.go(0)
            break;
            case res.data.code:
              this.openError(res.data.msg)
              break;
            default:
              this.openError('服务器错误')
              break;
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    openError(msg) {
      this.$notify.error({
        title: '错误',
        message: `${msg}`
      })
    },
    success() {
      this.$alert('修改成功', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `修改成功`
          });
        }
      });
    },
    ChangePs(){
      if(this.changePassword.new_password == this.changePassword.new_password_confirm){
        this.$axios({
          method: 'post',
          url: `${this.BaseUrL}/user/change_pwd`,
          data: JSON.stringify(this.changePassword)
        }).then((res)=>{
          // console.log(res)
          switch (res.data.code) {
            case '00000':
              this.$axios({
                method: 'get',
                url: `${this.BaseUrL}/user/logout`
              }).then(()=>{
                localStorage.clear()
                this.$router.go(0)
              })
              break;
            case res.data.code:
              this.openError(res.data.msg)
              break;
            default:
              this.openError('服务器错误')
              break;
          }
        })
      }else{
        this.openError('密码和确认密码不一致！')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#right1{
  position: relative;
  .content{
    box-sizing: border-box;
    padding: 3em 3em;
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
    text-align: center;
    .main{
      h5{
        font-weight: 700;
      }
      .msg{
        margin-top: 2em;
        .password{
          button{
            background-color: #1a43f3;
            border-radius: 2px;
            border: none;
            color: #fff;
            padding: .2em;
            margin-left: 1em;
            font-size: 14px;
          }
        }
        .address{
          button{
            background-color: #1a43f3;
            border-radius: 2px;
            border: none;
            color: #fff;
            padding: .2em;
            margin-left: 1em;
            font-size: 14px;
          }
        }
      }
    }
  }
  .changePassword{
    // width:80%;
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
    padding: 2em;
    .form-horizontal{
      margin-left: 15%;
      .form-group{
        button{
          background-color: #1a43f3;
          border-radius: 2px;
          border: none;
          color: #fff;
          padding: .2em 1em;
          font-size: 16px;
        }
      }
      }
  }
}
</style>