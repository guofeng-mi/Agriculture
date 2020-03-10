<!--
 * @Descripttion: 扫码统计
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-17 15:57:31
 -->
<template>
  <div class="rzgl_bg">
    <div class="rzgl">
      <div id="myChart"></div>

      <!--过滤-->
      <div class="guolv">
        <div class="gl_title">时间范围</div>

        <div class="choose_wrap">
          <RadioGroup v-model="test">
            <Radio label="近1日"></Radio>
            <Radio label="近7日"></Radio>
            <Radio label="近30日"></Radio>
            <Radio label="自定义"></Radio>
          </RadioGroup>
        </div>

        <div class="diy_wrap">
          <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 160px"></DatePicker>
        </div>

        <div class="btn_wrap">
          <Button type="success">扫描数统计曲线报表</Button>
          <Button>查看扫码区域分布图</Button>
        </div>
        <div class="cx">
          <Button type="success" @click="show = true">查询</Button>
        </div>

      </div>

      <SmtjAlert @close="close" v-if="show"></SmtjAlert>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SmtjAlert from "./SmtjAlert";
export default {
  name: '',
  components: {
    SmtjAlert
  },
  data () {
    return {
      show: false
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
    close() {
      this.show = false;
    },
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({

        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          orient: 'vertical',
          x:'center',      //可设定图例在左、右、居中
          y:'bottom',     //可设定图例在上、下、居中
          padding:[100,0,0,0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方
          data: ['邮件营销']
        },
        toolbox: {
          feature: {

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
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
              type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true
          }
        ]
      });
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.rzgl_bg
  .rzgl
    padding-right 200px
    #myChart
      width 100%
      height 70vh
  .guolv
    position fixed
    right 101px
    top 84px
    width 200px
    height calc(100vh - 84px)
    background #FFF
    padding 20px
    .gl_title
      padding-bottom 12px
    .ivu-radio-wrapper
      display block
      padding 4px 0
    .diy_wrap
      padding-top 12px
    .btn_wrap
      padding-top 22px
      button
        width 140px
        margin-left 10px
        margin-bottom 20px
    .cx
      padding-top 12px
      button
        width 160px

</style>
