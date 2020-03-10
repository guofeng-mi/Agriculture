<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-22 16:28:11
 * @LastEditTime : 2020-01-22 17:31:35
 -->
<template>
  <div class="gantright">
    <p class="title">任务统计</p>
    <div style="padding-left: 20px;">
      <div id="myChart" :style="{width: '200px', height: '200px'}"></div>
    </div>
    <div class="tips_wrrap">
      <div class="item">
        <i></i>
        <p>标准任务</p>
      </div>
      <div class="item">
        <i></i>
        <p>临时任务</p>
      </div>
      <div class="item">
        <i></i>
        <p>忽略任务</p>
      </div>
    </div>


    <div class="sw_wrap">
      <div class="item">
        <p>显示未完成任务</p>
        <i-switch size="small" v-model="test" :true-value="1" :false-value="0"></i-switch>
      </div>
      <div class="item">
        <p>显示已完成任务</p>
        <i-switch size="small" v-model="test" :true-value="1" :false-value="0"></i-switch>
      </div>
      <div class="item">
        <p>显示已忽略任务</p>
        <i-switch size="small" v-model="test" :true-value="1" :false-value="0"></i-switch>
      </div>
    </div>

    <div class="add">
      <div class="choose" v-show="show">
        <div class="item" @click="choose(1)">
          <img src="@/assets/img/dk_sf.png" alt="">
          <p>施肥</p>
        </div>
        <div class="item" @click="choose(2)">
          <img src="@/assets/img/dk_y.png" alt="">
          <p>施药</p>
        </div>
        <div class="item" @click="choose(3)">
          <img src="@/assets/img/dk_ns.png" alt="">
          <p>农事</p>
        </div>
        <div class="item" @click="choose(4)">
          <img src="@/assets/img/dk_cj.png" alt="">
          <p>采集</p>
        </div>
        <div class="item" @click="choose(5)">
          <img src="@/assets/img/dk_xy.png" alt="">
          <p>巡园</p>
        </div>
      </div>

      <Button type="success" @click="show = !show">添加任务</Button>
      <div class="gt_ft">
        <img src="@/assets/img/eq_wran_on.png" alt="">
        <p>2020阳光玫瑰</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      show: false,
      test: ''
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    choose(status) {
      console.log(status)
      this.show = false;
      this.$emit('changeStatus', status)
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        var option = {
            color: ['#5DD095', '#6885F2', '#E2E2E2'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '90%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 150, name: '标准任务'},
                        {value: 50, name: '临时任务'},
                        {value: 15, name: '忽略任务'}
                    ],

                    label: {
                      normal: {
                        position: 'inner',
                        formatter: '{c}'
                      }
                    }
                }
            ]
        };

        myChart.setOption(option)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.gantright
  width 100%
  height 100%
  background #FFF
  .title
    padding 20px 0 0 20px
  .tips_wrrap
    padding 20px
    display flex
    flex-direction column
    align-items center
    .item
      display flex
      align-items center
      padding-bottom 12px
      i
        display block
        width 10px
        height 10px
        border-radius 50%
        background red
        margin-right 6px
      &:nth-child(1)
        i
          background #5DD095
      &:nth-child(2)
        i
          background #6885F2
      &:nth-child(3)
        i
          background #E2E2E2
  .sw_wrap
    padding-top 20px
    .item
      display flex
      justify-content space-between
      padding 8px 20px
  .add
    padding 20px 40px
    position absolute
    bottom 0
    display flex
    flex-direction column
    width 240px
    button
      padding 3px 0
      border-radius 0
      flex 1
    .gt_ft
      display flex
      align-items center
      padding-top 16px
      img
        width 16px
        height 16px
        margin-right 6px
    .choose
      position absolute
      background #FFF
      box-shadow $inp_shadow
      top -140px
      width 158px
      .item
        display flex
        align-items center
        justify-content center
        padding 6px 12px
        cursor pointer
        p
          padding-left 8px

</style>
