<template>
  <div class="chart_weather_container">
    <div class="chart_weather_chart_wrap">
      <div id="chart_weatherChart_1"></div>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        time: '2019-01',
        zuowu: '白菜',
        dataArr: [],
        WS_airTemp_arr: [], // 气温，单位℃
        WS_airHum_arr: [], // 湿度，单位%
      }
    },
    props: ['WS_airTemp', 'WS_airHum'],
    mounted(){
      setTimeout(() => {
        // console.log('=>>>> 接受数据 ',this.WS_airTemp, this.WS_airHum)
        let dataArr = [];
  
        this.WS_airTemp_arr = this.WS_airTemp.map(item => {
          dataArr.push(item.at);
          return item.value
        })
        this.dataArr = dataArr;
        this.WS_airHum_arr = this.WS_airHum.map(item => {
          return item.value
        })
        // console.log(this.WS_airTemp_arr)
        // console.log(this.WS_airHum_arr)
        // console.log(this.dataArr)
        this.drawLine();
      }, 500)
    },
    methods: {
      drawLine(){
        let myChartAlert = this.$echarts.init(document.getElementById('chart_weatherChart_1'))
        myChartAlert.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            position: function (point) {
              return [point[0] + 20, point[1] - 50];
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
              data: this.dataArr, // ['1', '2', '3', '4', '5', '6', '7'],
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
              name: '气温',
              type: 'line',
              color: '#fead52',
              data: this.WS_airTemp_arr //[120, 132, 101, 134, 90, 230, 210]
            },{
              name: '湿度',
              type: 'line',
              color: '#ffe002',
              data: this.WS_airHum_arr, //[150, 32, 11, 234, 200, 30, 250]
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
      #chart_weatherChart_1
        width 100%
        height 130px





</style>
