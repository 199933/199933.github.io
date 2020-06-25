<template>
<div>
  <div class="container-fuild footercpn" style="width:90%; margin-left:5%">
    <div class="row">
      <div class="col-md-4 one">
        <img src="~@/assets/img/logo_ecommerce_black.png" alt="This is logo">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5>QUESTIONS?</h5>
              <span class="phoneNum">(123) 123456</span>
            </div>
            <div class="col-md-6">
              <h5>PAYMENT METHODS</h5>
              <span class="payment"><img src="~@/assets/img/footerImg.jpg" alt="footerImg one"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-3 two">
        <h5>类别</h5>
        <ul>
          <li><router-link tag="span" to="/category?id=1">推理悬疑</router-link></li>
          <li><router-link tag="span" to="/category?id=2">艺术摄影</router-link></li>
          <li><router-link tag="span" to="/category?id=3">科学幻想</router-link></li>
          <li><router-link tag="span" to="/category?id=4">商业与投资</router-link></li>
          <li><router-link tag="span" to="/category?id=5">文学与小说</router-link></li>
        </ul>
      </div>
      <div class="col-md-3 three">
        <h5>Whatgoingon</h5>
        <ul>
          <li><router-link tag="span" to="/about">关于我们</router-link></li>
          <li><router-link tag="span" to="/advantage">我们的优势</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="banquan">
        <span class="msg">© Whatgoingon. 2020. All Rights Reserved</span>
        <span class="shejiao">
          <span>
            <svg t="1583913095367" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7956" width="32" height="32"><path d="M767.414857 6.875429l0 150.820571-89.746286 0q-49.152 0-66.267429 20.553143t-17.115429 61.732571l0 108.032 167.424 0-22.308571 169.179429-145.115429 0 0 433.737143-174.884571 0 0-433.737143-145.700571 0 0-169.179429 145.700571 0 0-124.562286q0-106.276571 59.465143-164.864t158.281143-58.587429q83.968 0 130.267429 6.875429z" p-id="7957" fill="#515151"></path></svg>
          </span>
          <span>
            <svg t="1583913141165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8268" width="32" height="32"><path d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z" fill="#515151" p-id="8269"></path></svg>
          </span>
          <span>
            <svg t="1583913257507" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10538" width="32" height="32"><path d="M272.571429 357.142857v566.285714H84V357.142857h188.571429z m12-174.857143q0.571429 41.714286-28.857143 69.714286T178.285714 280h-1.142857q-46.857143 0-75.428571-28t-28.571429-69.714286q0-42.285714 29.428572-70T179.428571 84.571429t76 27.714285T284.571429 182.285714z m666.285714 416.571429v324.571428h-188v-302.857142q0-60-23.142857-94T667.428571 492.571429q-36 0-60.285714 19.714285T570.857143 561.142857q-6.285714 17.142857-6.285714 46.285714v316H376.571429q1.142857-228 1.142857-369.714285t-0.571429-169.142857l-0.571428-27.428572h188v82.285714h-1.142858q11.428571-18.285714 23.428572-32t32.285714-29.714285 49.714286-24.857143T734.285714 344q97.714286 0 157.142857 64.857143t59.428572 190z" p-id="10539" fill="#515151"></path></svg>
          </span>
        </span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.footercpn{
  padding-top: 3em;
  padding-bottom: 2em;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  .one{
    h5{
      font-size: 12px;
      margin-top: 3em;
    }
    .payment{
      img{
        width: 180%;
      }
    }
  }
  .two,
  .three{
    ul{
      padding: 0;
      margin: 0;
      li{
        cursor: pointer;
        color: #777;
      }
    }
  }
}
.banquan{
    height: 85px;
    .msg{
      line-height: 85px;
      color: #777;
      font-size: 14px;
    }
    .shejiao{
      position: absolute;
      right: 10%;
      line-height: 85px;
      span{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center; 
        line-height: 30px;  
        margin: 0 0.5em;     
        svg{
          width: 24px;
          cursor: pointer;
        }
      }
    }
  }
.phoneNum{
        font-size: 22px;
        font-weight: 700;
        color: #3256f4;
      }
</style>