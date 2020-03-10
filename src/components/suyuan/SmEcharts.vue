<!--
 * @Descripttion: 扫码统计
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-17 15:57:31
 -->
<template>
  <div class="sm_echarts">
      <div id="myChartAlert"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: '',
    components: {

    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
        let myChartAlert = this.$echarts.init(document.getElementById('myChartAlert'))
        // 绘制图表
        myChartAlert.setOption({

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
.sm_echarts
  width 100%
  height calc(100vh - 148px)
  #myChartAlert
    width 100%
    height calc(100vh - 148px)
</style>
