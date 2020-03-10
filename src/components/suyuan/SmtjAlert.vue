<!--
 * @Descripttion: 扫码统计 弹出
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-17 15:57:31
 -->
<template>
  <div class="sm_alert_container">
    <div class="content">
      <div class="sm_hd">

        <div class="hd_left">
          <p>扫码统计</p>
          <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
          <Button type="success" size="small">查询</Button>
        </div>

        <div class="hd_right">
          <Button :type="show == '1' ? 'success' : ''" @click="show = 1">扫描数统计曲线报表</Button>
          <Button :type="show == '2' ? 'success' : ''" @click="show = 2">查看扫码区域分布图</Button>
          <Icon type="md-close" @click="close()" />
        </div>

      </div>

      <div class="map_wrap">
        <!--地图-->
        <SmtjMap v-if="show == '2'"></SmtjMap>
        <!--echarts-->
        <SmEcharts v-if="show == '1'"></SmEcharts>

      </div>

    </div>
  </div>
</template>

<script>
  import SmtjMap from "./SmtjMap";
  import SmEcharts from "./SmEcharts";
  export default {
    name: '',
    components: {
      SmtjMap,
      SmEcharts
    },
    data () {
      return {
        show: '1'
      }
    },
    methods: {
      close() {
        this.$emit('close','close')
      }
    }
  }
</script>

<style scoped lang="stylus">
.sm_alert_container
  position fixed
  left 0
  top 0
  width 100%
  height 100vh
  z-index 100
  background rgba(0,0,0,.5)
  padding 20px
  .content
    width 100%
    height calc(100vh - 40px)
    background #FFF
    .sm_hd
      display flex
      justify-content space-between
      align-items center
      padding 12px
      border-bottom 1px solid rgba(0,0,0,.1)
      .hd_left
        display flex
        align-items center
        p
          font-size 22px
          padding-right 22px
        button
          margin-left 22px
      .hd_right
        display flex
        align-items center
        button
          margin-right 12px
        i
          font-size 22px
          cursor pointer
    .map_wrap
      padding 12px
</style>
