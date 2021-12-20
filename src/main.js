import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import'vant/lib/button/style'

import VueAMap from 'vue-amap'
import Vant from'vant'
import'vant/lib/button/style'

Vue.use(Vant)

import moment from 'moment';
Vue.prototype.$moment = moment;

Vue.use(VueAMap)

Vue.config.productionTip = false

VueAMap.initAMapApiLoader({

  key: 'bab9991b72bd44254771e44b111211fe',

//插件

  plugin: ['AMap.Driving','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],

// 默认高德 sdk 版本为 1.4.4

  v: '1.4.4'

});
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')