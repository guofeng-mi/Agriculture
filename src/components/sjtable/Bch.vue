<!--
 * @Descripttion: 病虫害报表
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-19 17:40:02
 -->
<template>
  <div class="eq_container">
    <div class="eq_top_wrap">
      <!-- 左侧设备占比 -->
      <div class="eq_choose_wrap">

        <div class="t_head">
          <p>地区</p>
          <p>次数</p>
        </div>
        <div class="eq_list_wrap">
          <div class="eq_list_con">
            <div class="eq_list_item" :class="item == 1 ? 'active' : ''" v-for="item in list2" :key="item">
              <p>广西</p>
              <p>192834791</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间地图区域 -->
      <div class="eq_map">
        <eqMap></eqMap>
        <div class="eq_chart">
          <div id="mychart"></div>
        </div>
      </div>

      <!-- 右侧导航 -->
      <div class="eq_right_nav">





        <RadioGroup v-model="vertical" vertical>
          <Radio label="all">
            <Icon type="social-apple"></Icon>
            <span>所有作物病虫害类型</span>
          </Radio>
          <div style="display: flex;justify-content: space-between;padding-left:20px;padding-top: 6px;width: 180px;">
            <span style="font-weight: 600;">198419283</span>
            <span>次</span>
          </div>

          <div class="n_jd_item">
            <Radio label="1">
              <Icon type="social-android"></Icon>
              <div class="name_count">
                <span>稻谷</span>
                <span>12378次</span>
              </div>
            </Radio>
            <Progress style="width: 100%;height: 6px;" :percent="25" :stroke-color="['#5DD095']" />
          </div>


          <div class="n_jd_item">
            <Radio label="2">
              <Icon type="social-android"></Icon>
              <div class="name_count">
                <span>稻谷</span>
                <span>12378次</span>
              </div>
            </Radio>
            <Progress style="width: 100%;height: 6px;" :percent="25" :stroke-color="['#5DD095']" />
          </div>



        </RadioGroup>
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
      vertical: 'all',
      list: [1,2,3],
      list2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      footerList: [1,2,3,4,5,6],
      rightNavStatus: 0,


      option: {
        title:{
          text:'病虫害地区分布统计  Top10',
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
        let mychart = this.$echarts.init(document.getElementById('mychart'))
        mychart.setOption(this.option);
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
    height calc(100vh - 40px)
    display flex
    .eq_choose_wrap
      padding-top 50px
      width 200px
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
        width 100%
        overflow hidden
        .eq_list_con
          height calc(100vh - 160px)
          overflow-y scroll
          width calc(100% + 50px)
          padding-right 50px
          .eq_list_item
            display flex
            justify-content space-between
            font-size 13px
            padding 4px 12px
            cursor pointer
            p
              text-align center
              flex 1
          .active
            background #5DD095
            color #FFF
      .time_wrap
        padding 22px
        .change_tab
          border 1px solid #5DD095
          border-radius 3px
          display flex
          width 120px
          p
            color #5DD095
            width 60px
            line-height 25px
            text-align center
            cursor pointer
          .active
            background #5DD095
            color #FFF
        .time_choose
          padding-top 12px
          .time_item
            display flex
            padding 6px 22px
            align-items center
            cursor pointer
            i
              font-size 18px
            p
              padding-left 6px
    .eq_map
      padding-top 50px
      flex 1
      .eq_chart
        display inline-block
        width 100%
        padding 0 40px
        box-sizing border-box
        #mychart
          width 100%
          height 200px
    .eq_right_nav
      padding 0 20px
      padding-top 50px
      width 220px
      box-shadow -1px 0 3px rgba(0,0,0,.1)
      .nav_title
        padding 12px 22px
      .jd_item
        width 100%
        padding-bottom 6px
        cursor pointer
        .jd_title
          width 100%
          display flex
          justify-content space-between
          padding 12px 0
          p
            flex 1
            padding-left 12px
        .jd
          width 100%
      .all
        border-bottom 1px solid #333
        .jd_title
          padding 6px 0
      .n_jd_item
        width 100%
        padding-top 18px
        .ivu-radio-wrapper
          display flex
          align-items center
          .name_count
            display flex
            width 100%
            flex 1
            justify-content space-between
            span
              display flex
              &:first-child()
                flex 1


</style>
<style>
.ivu-progress-text {
  margin-left: 25px;
}
.ivu-progress-show-info .ivu-progress-outer {
  padding-right: 30px;
}
</style>
