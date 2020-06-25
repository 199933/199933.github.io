<template>
  <div class="container-fulid">
    <div class="row mianbiao">
      <div class="col-md-12">
        <h3>登录 / 注册</h3>
      </div>
    </div>

    <div class="row content">
      <div class="col-md-12 main-content">
        <article>
          <div class="wrapper">
            <div class="container">
              <div class="row">
                <div class="col-md-6 login">
                <div class="login-logo">
                  <h3>登录</h3>
                </div>
                <form>
                  <div class="form-group">
                    <label for="phone1">手机号</label>
                    <input type="number" v-model="login.phone" id="phone1" class="form-control" placeholder="phone">
                  </div>
                  <div class="form-group">
                    <label for="Password1">密码</label>
                    <input type="password" v-model="login.password" id="password1" class="form-control" placeholder="Password">
                  </div>
                  <button type="button" class="btn btn-default" @click="loginUser">登录</button>
                </form>
                <p style="font-size:15px;text-align:right">
                  <i id="lostpassword" data-toggle="modal" data-target="#PasswordModal">忘记密码？</i>
                </p>
              </div>
              <div class="col-md-6 login">
                <div class="login-logo">
                  <h3>注册</h3>
                </div>
                <form>
                  <div class="form-group">
                    <label for="Phone2">手机号</label>
                    <input type="number" id="phone2" v-model="Registermsg.phone" class="form-control" placeholder="Phone Number">
                  </div>
                  <div class="form-group">
                    <label for="Name2">姓名</label>
                    <input type="text" id="Name2" v-model="Registermsg.nickname" class="form-control" placeholder="Name">
                  </div>
                  <div class="form-group">
                    <label for="Password2">密码</label>
                    <input type="password" id="Password2" v-model="Registermsg.password" class="form-control" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <label for="Password3">确认密码</label>
                    <input type="password" id="Password3" v-model="Registermsg.password_confirm" class="form-control" placeholder="Confirm Password">
                  </div>
                  <div class="form-group">
                    <label for="code">验证码</label><br>
                    <input type="text" id="code" v-model="Registermsg.code" class="form-control" placeholder="验证码">
                    <button type="button" :disabled = isDisable class="get" @click="GetCode">{{time}}</button>       
                  </div>
                  <button type="button" class="btn btn-default" @click="Register">注册</button>
                </form>
              </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="PasswordModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="myModalLabel">找回密码</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">绑定的手机号</label>
                      <input type="number" class="form-control" placeholder="手机号" v-model="findPasswordData.phone">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">新密码</label>
                      <input type="password" class="form-control" placeholder="Password" v-model="findPasswordData.password">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">确认新密码</label>
                      <input type="password" class="form-control" placeholder="Password" v-model="findPasswordData.password_confirm">
                    </div>
                    <div class="form-group">
                      <!-- <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label> -->
                      <input type="text" id="code1" v-model="findPasswordData.code" class="form-control" placeholder="验证码">
                      <button type="button" :disabled = isDisable class="get" @click="GetCode">{{time}}</button> 
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" @click="findPassword">提交</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isDisable: false,
      time: 'GET',
      login:{
        phone:'',
        password:''
      },
      Registermsg:{
        phone: '',
        nickname: '',
        password:'',
        password_confirm: '',
        code:''
      },
      findPasswordData:{
        phone: '',
        code: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  methods: {
    openError(msg) {
      this.$notify.error({
        title: '错误',
        message: `${msg}`
      })
    },
    success(msg) {
      this.$alert(`${msg}`, '提示', {
        // confirmButtonText: '确定',
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `${msg}成功`
        //   });
        // }
      });
    },
    loginUser(){
      this.$axios({
        method: 'post',
        url: `${this.BaseUrL}/user/login`,
        data: JSON.stringify(this.login)
      }).then((res)=>{
        switch (res.data.code) {
            case '00000':
              localStorage.setItem("token", this.login.phone);
              this.$router.go(-1)
              this.$axios({
                method: 'get',
                url: `${this.BaseUrL}/user/user_info`,
              }).then((res)=>{
                this.$store.state.UserName = res.data.data.nickname
              })
              break;
            case '10001':
              this.openError('输入框不能为空！')
              break;
            case '10011':
              this.openError('用户名或密码不正确！')
            break;
            case '10002':
              this.openError('参数未通过验证规则!')
            break;
            default:
              this.openError('服务器错误,修改密码失败!')
              break;
        }
        // console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    },
    GetCode(){
      var phone = this.Registermsg.phone == '' ? this.findPasswordData.phone + '/1'  : this.Registermsg.phone + '/0'
      this.$axios({
        method: 'get',
        url: `${this.BaseUrL}/code/${phone}`,
      }).then((res)=>{
        this.isDisable = true;
        this.time = 60;
        var timer = setInterval(()=>{
          this.time = this.time - 1;
          if(this.time == 0){
            clearInterval(timer);
            this.isDisable = false;
            this.time = 'GET';
          }
        },1000)
        switch (res.data.code) {
            case '00000':
              this.success('验证码发送成功！')
              break;
            case res.data.code:
              this.openError(res.data.msg)
              break;
            default:
              this.openError('服务器错误!')
              break;
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    Register(){
      var RegisterMsg = JSON.stringify(this.Registermsg);
      // console.log(RegisterMsg)
      this.$axios({
        method: 'post',
        url: `${this.BaseUrL}/user/register`,
        data: RegisterMsg
      }).then((res)=>{
        switch (res.data.code) {
            case '00000':
              this.Registermsg = {
                phone: '',
                nickname: '',
                password:'',
                password_confirm: '',
                code:''
              }
              this.success('注册成功！')
              break;
            case res.data.code:
              this.openError(res.data.msg)
              break;
            default:
              this.openError('服务器错误!')
              break;
        }
        console.log(res)
        for (const item of this.Registermsg) {
          item = ''
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    findPassword(){
      this.$axios({
        method: 'post',
        url: `${this.BaseUrL}/user/find_pwd`,
        data: JSON.stringify(this.findPasswordData)
      }).then((res)=>{
        console.log(res.data.code)
        switch (res.data.code) {
          case '00000':
            this.success('找回密码成功！请登录');
            this.findPasswordData = {
              phone: '',
              code: '',
              password: '',
              password_confirm: ''
            }
            this.$router.go(0)
            break;
          case '10000':
            this.openError('请求手机号不存在或未注册！')
            break;
          case '10011':
            this.openError('验证码输入错误！')
            break;
          case '10002':
            this.openError('数据不规范，手机号11位，密码6~12位')
            break; 
          case '10001':
            this.openError('输入框不能为空')
            break;
          case '20002':
            this.openError('服务器错误，修改密码失败！')
            break;   
          default:
            break;
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  #lostpassword:hover{
    color: #1a43f3;
    cursor: pointer;
  }
  button{
    width: 5em;
    height: 3em;
    background-color: #1a43f3;
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
  #code,
  #code1{
    display: inline-block;
  }
  .get{
    display: inline-block;
    line-height: 2em;
    border-radius: 3px;
    width: 3em;
    height: 2em;
    text-align: center;
    background-color: #0528c4;
    color: #fff;
    // cursor: pointer;
    margin-left: 2em;
    border: none;
  }
  #code,
  #code1{
    width: 80%;
  }
  .mianbiao{
    height: 65px;
    background-color: #f8f8f8;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    h3{
      line-height: 65px;
      margin: 0 2em;
    }
  }
  .content{
    height: 680px;
    .main-content{
      padding-top: 35px;
      padding-bottom: 40px;
      article{
        width: 80%;
        margin-left: 10%;
        .wrapper{
          height: 600px;
          border: 1px solid #ececec;
          background: #fff;
          border-top: 4px solid #08c;
          box-shadow: 0 2px 3px rgba(0,0,0,.08);
          .login{
            // position: relative;
            top: 3em;
            .login-logo{
              color: #08c;
            }
          }
        }
      }
    }
  }
</style>