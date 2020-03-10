<!--
 * @Descripttion: 设备报表
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-19 14:56:44
 -->
<template>
  <div class="eq_container">
    <div class="eq_top_wrap">
      <!-- 左侧设备占比 -->
      <div class="eq_circel">
        <div class="eq_c_item">
          <i-circle
              :size="110"
              :trail-width="10"
              :stroke-width="10"
              :percent="75"
              stroke-linecap="square"
              stroke-color="#5DD095">
              <div class="demo-Circle-custom">
                  <p>正常连接</p>
                  <h1>6074</h1>
              </div>
          </i-circle>
        </div>
        <div class="eq_c_item">
          <i-circle
              :size="110"
              :trail-width="10"
              :stroke-width="10"
              :percent="25"
              stroke-linecap="square"
              stroke-color="#FF7B3A">
              <div class="demo-Circle-custom">
                  <p>传感预警</p>
                  <h1>6074</h1>
              </div>
          </i-circle>
        </div>
        <div class="eq_c_item">
          <i-circle
              :size="110"
              :trail-width="10"
              :stroke-width="10"
              :percent="45"
              stroke-linecap="square"
              stroke-color="#6885F2">
              <div class="demo-Circle-custom">
                  <p>采集器占比</p>
                  <h1>6074</h1>
              </div>
          </i-circle>
        </div>
      </div>
      <!-- 中间地图区域 -->
      <div class="eq_map">
        <eqMap></eqMap>
      </div>
      <!-- 右侧导航 -->
      <div class="eq_right_nav">
        <div class="eq_choose_wrap">
          <div class="eq_choose_item" :class="rightNavStatus == 0 ? 'active' : ''" @click="rightNavStatus = 0">
            <Icon type="md-radio-button-on" />
            <p>查看采集设备</p>
          </div>
          <div class="eq_choose_item" :class="rightNavStatus == 1 ? 'active' : ''" @click="rightNavStatus = 1">
            <Icon type="md-radio-button-on" />
            <p>查看控制设备</p>
          </div>
        </div>
        <p class="eq_tj" v-if="rightNavStatus == 0">采集数据统计</p>
        <p class="eq_tj" v-else>控制数据统计</p>
        <div class="count">
          <p>20987491</p>
          <span>条数据</span>
        </div>
        <div class="t_head">
          <p>地区</p>
          <p>数据量</p>
        </div>
        <div class="eq_list_wrap">
          <div class="eq_list_con">
            <div class="eq_list_item" v-for="item in list2" :key="item">
              <i>{{item}}</i>
              <p>广西</p>
              <p>192834791</p>
              <span>条</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="eq_footer_table">
      <div class="eq_chart">
        <div id="leftChart"></div>
      </div>
      <div class="eq_chart">
        <div id="rightChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import eqMap from './eqMap'

export default {
  name: '',
  components: {
    eqMap
  },
  data () {
    return {
      list: [1,2,3],
      list2: [1,2,3,4,5,6,7,8,9,10],
      rightNavStatus: 0,
      leftOption: {
        title:{
          text:'各类采集器占比分析',
          left:'16px',
          top: '12px',
          textStyle:{
            color:'#333',
            fontStyle:'normal',
            fontWeight:'200',
            fontFamily:'sans-serif',
    　　　　 fontSize: '16'
          }
        },
        color: ['#5DD095'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
      },


      rightOption: {
        title:{
          text:'各类采集器排名',
          left:'16px',
          top: '12px',
          textStyle:{
            color:'#333',
            fontStyle:'normal',
            fontWeight:'200',
            fontFamily:'sans-serif',
    　　　　 fontSize: '16'
          }
        },
        color: ['#5DD095'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
      }

    }
  },
  mounted(){
    this.drawLine();
  },
  computed: {
      ...mapState({
          tableStatus: state => state.tableStatus
      })
  },
  methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let leftChart = this.$echarts.init(document.getElementById('leftChart'))
        // 绘制图表
        leftChart.setOption(this.leftOption);


        // 基于准备好的dom，初始化echarts实例
        let rightChart = this.$echarts.init(document.getElementById('rightChart'))
        // 绘制图表
        rightChart.setOption(this.rightOption);


    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.eq_container
  width 100%
  height calc(100vh - 40px)
  .eq_top_wrap
    width 100%
    height calc(100vh - 240px)
    display flex
    .eq_circel
      padding-top 50px
      width 300px
      .eq_c_item
        padding-top 20px
        padding-left 60px
        p
          font-size 14px
        h1
          font-size 16px
          font-weight 600
          padding-top 6px
    .eq_map
      padding-top 50px
      flex 1
    .eq_right_nav
      padding-top 50px
      width 250px
      box-shadow -1px 0 3px rgba(0,0,0,.1)
      .eq_choose_wrap
        .eq_choose_item
          display flex
          padding 6px 12px
          align-items center
          cursor pointer
          p
            padding-left 6px
            opacity 0.6
            font-size 13px
          .ivu-icon
            font-size 18px
            opacity 0.6
        .active
          .ivu-icon
            color #5DD095
            opacity 1
      .eq_tj
        padding 12px
        font-size 13px
      .count
        display flex
        justify-content space-between
        padding 2px 12px
        align-items center
        p
          font-weight 600
          line-height 16px
          font-size 16px
        span
          font-size 14px
          line-height 16px
      .t_head
        display flex
        justify-content space-around
        padding 8px 0
        align-items center
        border-top 1px solid #EEE
        border-bottom 1px solid #EEE
        font-size 13px
        margin 22px 12px 6px 12px
      .eq_list_wrap
        .eq_list_con
          height calc(100vh - 265px)
          overflow-y scroll
          width 120%
          padding-right 20%
          .eq_list_item
            display flex
            justify-content space-between
            font-size 13px
            padding 4px 12px
            i
              display block
              width 16px
              height 16px
              background #72D6A3
              color #FFF
              text-align center
              line-height 16px
              border-radius 2px
              font-size 8px
            &:hover
              background #EEE

  .eq_footer_table
    width 100%
    height 200px
    box-shadow 0 -1px 3px rgba(0,0,0,.1)
    .eq_chart
      display inline-block
      width 50%
      padding 0 40px
      box-sizing border-box
      #leftChart
        width 100%
        height 200px
      #rightChart
        width 100%
        height 200px



</style>
