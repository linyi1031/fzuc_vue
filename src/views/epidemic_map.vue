<template>
  <div class="hello" >
    <el-button type="primary" @click="back"style="margin-left: 1%;margin-top: 1%">Back</el-button>
    <span style="padding-left: 42%;color: white">Epidemic Map</span>
    <div ref="mapbox" style="width:1400px;height:780px;margin:0 auto;" v-loading="loading"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/map/js/china.js'
import axios from "axios";
const option = {
  title: {
    // 标题内容
  },
  series: [{
    name: 'diagnosis',
    type: 'map',
    // 告诉echarts渲染一个地图
    map: 'china',
    // 告诉echarts渲染中国地图
    label: {
      // 设置地区汉字
      show: true,
      color: '#333',
      fontSize: 10
    },
    itemStyle: {
      // 地图区域样式
      areaColor: '#eee'
    },
    roam: true,
    // 鼠标滚轮效果
    zoom: 1.2,
    // 地图放大缩小
    emphasis: {
      // 鼠标经过地图和字体样式
      label: {
        color: '#fff',
        fontSize: 12
      },
      itemStyle: {
        areaColor: '#ccc'
      }
    },
    nameMap : {
      "甘肃":"Gansu",
      "香港":"Hong Kong",
      "安徽":"Anhui",
      "江西":"Jiangxi",
      "澳门":"Macau",
      "陕西":"Shaanxi",
      "西藏":"Tibet",
      "福建":"Fujian",
      "海南":"Hainan",
      "天津":"Tianjin",
      "新疆":"Xinjiang",
      "四川":"Sichuan",
      "湖北":"Hubei",
      "吉林":"Jilin",
      "浙江":"Zhejiang",
      "重庆":"Chongqing",
      "黑龙江":"Heilongjiang",
      "山西":"Shanxi",
      "广东":"Guangdong",
      "辽宁":"Liaoning",
      "湖南":"Hunan",
      "内蒙古":"Inner Mongolia",
      "上海":"Shanghai",
      "山东":"Shandong",
      "云南":"Yunnan",
      "贵州":"Guizhou",
      "宁夏":"Ningxia",
      "河北":"Hebei",
      "北京":"Beijing",
      "广西":"Guangxi",
      "河南":"Henan",
      "江苏":"Jiangsu",
      "青海":"Qinghai",
      "台湾":"Taiwan",
      "南海诸岛":"South China Sea Islands"
    },
    data:[],
    // 展示后台给的数据，必须格式（name:xxx;value:xxx）
  }],
  visualMap: [{
    // 区域显示颜色
    type: 'piecewise',
    show: false,
    // splitNumber: 4
    pieces: [
      {min: 10000},
      {min: 1000, max: 9999},
      {min: 100, max: 999},
      {min: 10, max: 99},
      {min: 1, max: 9},
      {max: 0}
    ],
  }],
  tooltip: {
    // 鼠标放上去显示内容
    trigger: 'item'
  },
  toolbox: {
    // 下载
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readyOnly: false},
      restore: {},
      saveAsImage: {}
    }
  },
}

export default {
  name: 'HelloWorld',
  data(){
    return{
      loading:true,
    }
  },
  mounted () {
    const _this = this;
    this.config={
      method:'get',
      url:'http://47.96.236.167:8080/user/map',
      headers:{
        'Content-Type':'application/json',
      },
    }
    axios(this.config).then(function(response){
      console.log(response)
      _this.data=response.data.cityList
      console.log(_this.data)
    }).catch(function (error){
      console.log(error)
    });
    this.getData()
    console.log(this.data)
    this.mycharts = echarts.init(this.$refs.mapbox)
    // 初始化echarts
    this.mycharts.setOption(option)
  },
  methods: {
    back(){
      this.$router.push('/Off-Topic')
    },
    getData () {
      const _this = this;
      this.config={
        method:'get',
        url:'http://47.96.236.167:8080/user/map',
        headers:{
          'Content-Type':'application/json',
        },
      }
      axios(this.config).then(function(response){
        console.log(response)
        option.series[0].data = response.data.cityList
        option.series[0].data.push({
          name:'Taiwan',
          value:response.data.allList[171].confirmed,
        }
        )
        option.series[0].data.push({
              name:'South China Sea Islands',
              value:response.data.cityList[8].value,
            }
        )
        _this.mycharts.setOption(option)
        _this.loading=false
      }).catch(function (error){
        console.log(error)
      });
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>