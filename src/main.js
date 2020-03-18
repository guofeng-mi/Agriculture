/*
 * @Descripttion:
 * @version:
 * @Author: Logic
 * @Date: 2019-12-26 14:01:06
 * @LastEditors  : Logic
 * @LastEditTime : 2020-01-19 10:34:15
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

// 初始化
import './assets/iconfont/iconfont.css'
import './assets/css/reset.css'

// gantt
import 'dhtmlx-gantt/codebase/dhtmlxgantt.js'
import 'dhtmlx-gantt/codebase/locale/locale_cn.js'


// echarts
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)
Vue.prototype.$echarts = echarts;


// 百度地图
import BaiduMap from 'vue-baidu-map'
import {BmlMarkerClusterer} from 'vue-baidu-map'
Vue.component('bml-marker-cluster', BmlMarkerClusterer)
Vue.use(BaiduMap, {
  ak: 'Qcvz52y3AwTYbRcRevrvqwwia0d6O9YL'
})




Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
