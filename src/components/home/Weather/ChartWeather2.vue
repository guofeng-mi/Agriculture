<template>
  <div class="chart_weather_container">
    <div class="chart_weather_chart_wrap">
      <div id="chart_weatherChart_2"></div>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        time: '2019-01',
        zuowu: '白菜'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        let myChartAlert = this.$echarts.init(document.getElementById('chart_weatherChart_2'))
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
          grid: {
            x: 6,
            y: 0,
            x2: 6,
            y2: 0
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['1', '2', '3', '4', '5', '6', '7'],
              splitLine:{
                show:false     //去掉网格线
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              axisLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine:{
                show:false    //去掉网格线
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              axisLine: {
                show: false
              }
            }
          ],
          series: [
            {
              type: 'line',
              color: '#5dd095',
              data: [120, 132, 101, 134, 90, 230, 210]
            },{
              type: 'line',
              color: '#5dd095',
              data: [150, 32, 11, 234, 200, 30, 250]
            }
          ]
        });
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .chart_weather_container
    .chart_weather_hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        color #46c183
    .chart_weather_chart_wrap
      #chart_weatherChart_2
        width 100%
        height 130px





</style>
