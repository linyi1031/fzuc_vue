<template>
  <section>
    <!-- <link rel="stylesheet" href="https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css" /> -->
    <div class="container01">
      <van-row>
        <el-button type="primary" @click="back" style="margin-left: 4%;margin-top: 2%">Back</el-button>
        <div class="amap-wrapper">
          <div class="text">
            <h2>Daily Sign_in</h2>
            <p style="text-align: center;color: white;margin-top: -0.625rem;">study hard, improve every day</p>
          </div>
          <div id='container'></div>
<!--          <div class="info">-->
<!--            <h4 id='status'></h4><hr>-->
<!--            <p id='result'></p><hr>-->
<!--          </div>-->
          <el-input placeholder="Please enter your health status today" v-model="description" clearable>
          </el-input>
          <div class="siginBox">
            <div v-if="isSignFlag" class="PositioningBack">
              <div @click="clickGcFn">
                <p style="font-size:0.42rem;margin-top:0.7rem;">{{nowTime}}</p>
                <p style="font-size:0.26rem;">Today<br>sign in</p>
              </div>
            </div>
            <div v-else class="PositioningBack01">
              <div>
                <p style="font-size:0.42rem;margin-top:1.25rem;">{{nowTime}}</p>
                <p style="font-size:0.26rem; ">Already<br>signed in</p>
              </div>
            </div>
          </div>
          <div class="Positioningtips">
            <p class="isshow_Singn" v-if="isSignFlag"><i></i>已进入签到范围</p>
            <!-- 						<p class="notshow_Singn" v-else style="color:#E85656"><i></i>不在签到范围内</p>
             -->					</div>
        </div>
        <div class="sing_in">
        </div>
      </van-row>
      <van-dialog v-model="isshow_Singn_diglog" confirmButtonText="I get it" confirmButtonColor="#5F6FAB"
                  @confirm="confirm">
        <van-row>
          {{sigNinTime}}<p id="text">Sign in successfully</p>
        </van-row>
      </van-dialog>
    </div>
  </section>

</template>

<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=bab9991b72bd44254771e44b111211fe">
</script>
<script type="text/javascript">
import axios from "axios"
// import 'vant/lib/button/style'

export default {


  data() {
    return {
      mymap:'',
      input: '',
      msg: '',
      description: '',
      location: '',
      status: '',
      isSignFlag: true,
      nowTime: '',
      sigNinTime: '',
      isshow_Singn_diglog: false
    }

  },
  mounted() {

    this.getlocation()
    this.Issignin()
  },
  methods: {
    back(){
      this.$router.push('/Off-Topic')
    },
    Issignin() {
      let that = this
      this.data = {
        code: "",
        msg: "",
        success:"" ,

      }
      this.config = {
        method: 'get',
        url: 'http://47.96.236.167:8080/sign/ifSignToday',
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.data
      }
      axios(this.config).then(function(response) {
        console.log(response);
        console.log(response.data.msg);
        if (response.data.success == 1) {
          that.isSignFlag = false;
        }

      }).catch(function(error) {
        console.log(error)
      });

    },
    getlocation() {
      let that=this
      this.mymap= new AMap.Map('container', {
        resizeEnble: true
      });
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          buttonPosition: 'RB',
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true
        });
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete(data) {

          that.location = data.position;
          console.log(data.position)

        }

        function onError(data) {
          console.log(data)
        }
        function onComplete(data) {
          // document.getElementById('status').innerHTML='定位成功'
          var str = [];
          str.push('定位结果：' + data.position);
          str.push('定位类别：' + data.location_type);
          if(data.accuracy){
            str.push('精度：' + data.accuracy + ' 米');
          }//如为IP精确定位结果则没有精度信息
          str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
          document.getElementById('result').innerHTML = str.join('<br>');
        }
        //解析定位错误信息
        function onError(data) {
          document.getElementById('status').innerHTML='定位失败'
          document.getElementById('result').innerHTML = '失败原因排查信息:'+data.message;
        }
      });




    },

    setNowTimes() {
      this.nowTime = this.$moment().format('HH:mm:ss')
    },
    clickGcFn() {
      let that = this
      if (this.isSignFlag) {
        this.sigNinTime = this.nowTime
        this.isshow_Singn_diglog = true
        this.data = {
          description: this.description,
          location: this.location,

        }
        this.config = {
          method: 'post',
          url: 'http://47.96.236.167:8080/sign/signToday',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token

          },
          data: this.data
        }
        axios(this.config).then(function(response) {
          console.log(response)
        }).catch(function(error) {
          console.log(error)
        });

      }
    },
    confirm() {
      this.isSignFlag = false;
    }
  }

}
</script>

<style scoped>
section {
  position: relative;
  min-height: 90vh;
  background-color: #182a38;
  /* background: url(../assets/BG2.jpg); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
section .container01 {
  position: relative;
  border-radius:0.9375rem;
  /* background-color: white; */

  width: 31.25rem;
  height: 95%;
  background: lightgray;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
h2 {
  text-align: center;
  color: lightcoral;
}
.text {
  background-color: lightgray;
  height:4.0625rem;
  margin-top:-1.125rem
}
#container {

  width: 31.25rem;

  height: 500px;

}

.sinbox {
  font-size: 0.29rem;
  color: #333333;
  font-weight: 800;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
}

.sinbox p {
  margin: 0.1rem 0rem;
}

.sinbox span {
  color: #5F6FAB;
}

.sinbox p:last-child {
  color: #E5B03C;
  font-weight: 400;
}

.siginBox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.625rem;
  width: 31.25rem;
}

.PositioningBack p {
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  line-height: 1.5rem;
}

.PositioningBack {
  width: 6.25rem;
  height: 6.25rem;
  border: 1px solid #5683E8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.PositioningBack div {
  width: 5.9375rem;
  height: 5.625rem;
  background: linear-gradient(0deg, #5683E8, #56B6E8);
  box-shadow: 0px 11px 21px 0px rgba(86, 133, 232, 0.39);
  border-radius: 50%;
}

.PositioningBack01 p {
  color: #aa0002;
  font-weight: bold;
  text-align: center;
  line-height: 1.5rem;
}

.PositioningBack01 {
  width: 6.25rem;
  height: 6.25rem;
  border: 1px solid #5683E8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.PositioningBack01 div {
  width: 5.9375rem;
  height: 5.625rem;
  background: linear-gradient(0deg, #e6e8e5, #e6e8e5);
  box-shadow: 0px 11px 21px 0px rgba(86, 133, 232, 0.39);
  border-radius: 50%;
}

.Positioningtips i {

  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 0.24rem;
  height: 0.24rem;
  display: block;
  float: left;
  margin-left: 2.2rem;
  margin-right: 0.1rem;
  margin-top: 0.1rem;
}

.Positioningtips {
  margin-top: 0.2rem;
}

.Positioningtips p {
  font-size: 0.26rem;
  color: #999999;
}

.notshow_Singn i {

  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.isSignFlag {
  background: #9f9f9f !important;
}

.positioncls_img {
  width: 1.32rem;
  height: 1.36rem;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
}

.positioncls_img img {
  width: 100%;
  height: 100%;
}

.position_text {
  color: #333333;
  font-size: 0.56rem;
  font-weight: bold;
}

.position_text p {
  margin: 0.1rem 0 0.9rem 0.5rem;
  font-size: 0.29rem;
  font-weight: 400;
}
#text {

}


.info {
  width: 26rem;
}
</style>
