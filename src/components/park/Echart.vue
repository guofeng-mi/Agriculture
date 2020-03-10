<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logic
 * @Date: 2020-01-19 10:33:06
 * @LastEditors  : Logic
 * @LastEditTime : 2020-01-20 09:36:46
 -->
<template>
  <div class="echart_box">
    <div id="chart_example"></div>
  </div>
</template>
 
<script>
import echarts from 'echarts'

export default {
  name: '',
  data () {
    return {
      
    }
  },
  mounted() {
      let myChart = echarts.init(document.getElementById('chart_example'));

      let option = {
          color: ['#5BD094', '#006699'],
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              data: ['有效积温', '年度光照']
          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {show: true},
                  data: ['2018', '2019']
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name: '有效积温',
                  type: 'bar',
                  // barGap: 0,
                  data: [5705.2, 5705.2]
              },
              {
                  name: '年度光照',
                  type: 'bar',
                  data: [500, 182]
              }
          ]
      };

      myChart.setOption(option);
      window.addEventListener('resize',function() {myChart.resize()});
  }
}
</script>
 
<style scoped lang="stylus">
.echart_box
  width 100%
  #chart_example
    width 100%
    height 200px
</style>