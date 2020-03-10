<!--
 * @Descripttion: 溯源报表
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-19 16:59:36
 -->
<template>
  <div class="eq_container">
    <div class="eq_top_wrap">
      <!-- 左侧设备占比 -->
      <div class="eq_choose_wrap">

        <p class="eq_tj">溯源扫码统计</p>
        <div class="count">
          <p>1928471</p>
          <span>次</span>
        </div>
        <div class="t_head">
          <p>地区</p>
          <p>扫码次数</p>
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
        <!-- 选择 年 月 -->
        <div class="time_wrap">
          <div class="change_tab">
            <p class="active">按年</p>
            <p>按月</p>
          </div>

          <div class="time_choose">
            <div class="time_item">
              <Icon type="md-radio-button-on" />
              <p>2019</p>
            </div>
            <div class="time_item">
              <Icon type="md-radio-button-on" />
              <p>2020</p>
            </div>
          </div>
        </div>

      </div>
      <!-- 中间地图区域 -->
      <div class="eq_map">
        <SyMap></SyMap>
      </div>

      <!-- 右侧导航 -->
      <div class="eq_right_nav">
        <div class="nav_title">溯源作物扫码分析</div>
        <div class="jd_item" v-for="item in list" :key="item">
          <div class="jd_title">
            <p>稻谷</p>
            <p> 128379 次</p>
          </div>
          <div class="jd">
            <Progress style="width: 100%" :percent="25" :stroke-color="['#5DD095']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import eqMap from './eqMap'
import SyMap from "./SyMap";

export default {
  name: '',
  components: {
    SyMap
  },
  data () {
    return {
      list: [1,2,3],
      list2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      footerList: [1,2,3,4,5,6],
      rightNavStatus: 0,

    }
  },
  computed: {
      ...mapState({
          tableStatus: state => state.tableStatus
      })
  },
  methods: {

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
      width 300px
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
          height calc(100vh - 450px)
          overflow-y scroll
          width calc(100% + 50px)
          padding-right 50px
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
        .jd_title
          width 100%
          display flex
          justify-content space-between
          padding 12px 0
        .jd
          width 100%

</style>
<style>
.ivu-progress-text {
  margin-left: 25px;
}
.ivu-progress-show-info .ivu-progress-outer {
  padding-right: 30px;
}
</style>
