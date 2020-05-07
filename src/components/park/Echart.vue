<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-10 16:54:48
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
        //   color: ['#5BD094', '#006699'],
          color: [
                new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#3A60DF" // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: "#00C5F4" // 100% 处的颜色
                    }
                ], false),
                new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#FFB70B" // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: "#FFE034" // 100% 处的颜色
                    }
                ], false)
            ],
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                //   type: 'shadow'
              }
          },
          grid: {
            left: '10%',
            right: '10%',
            top: '20%',
            bottom: '10%'
          },
          legend: {
              right: '0',
              data: ['有效积温', '年度光照'],
                textStyle: {
                    // color: 'red'
                }
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
                data: [2000, 1082]
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
  box-shadow 0 0 6px rgba(0,0,0,.14)
  border-radius 6px
  padding 22px
  height 240px  
  #chart_example
    width 100%
    height 200px
</style>