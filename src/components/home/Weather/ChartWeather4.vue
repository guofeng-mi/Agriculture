<template>
  <div class="chart_weather_container">
    <div class="chart_weather_chart_wrap">
      <div id="chart_weatherChart_4"></div>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        time: '2019-01',
        zuowu: '白菜',

        WS_airPres_arr: [],
        WS_rainVol_arr: [],
        dataArr: []
      }
    },
    props: ['WS_airPres', 'WS_rainVol'],
    mounted(){

      setTimeout(() => {
        // console.log('=>>>> 接受数据 ',this.WS_airPres, this.WS_rainVol)
        let dataArr = [];
  
        this.WS_airPres_arr = this.WS_airPres.map(item => {
          dataArr.push(item.at);
          return item.value
        })
        this.dataArr = dataArr;
        this.WS_rainVol_arr = this.WS_rainVol.map(item => {
          return item.value
        })
        // console.log(this.WS_airPres_arr)
        // console.log(this.WS_rainVol_arr)
        // console.log(this.dataArr)
        this.drawLine();
      }, 500)
    },
    methods: {
      drawLine(){
        // const that = this;
        let myChartAlert = this.$echarts.init(document.getElementById('chart_weatherChart_4'))
        myChartAlert.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            position: function (point) {
              console.log(point)
              return [point[0] + 20, point[1] - 50];
            }
            // axisPointer: {
            //   type: 'cross',
            //   label: {
            //     backgroundColor: '#6a7985'
            //   }
            // },
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
              name: '气压',
              type: 'line',
              color: '#fead52',
              data: this.WS_airPres_arr, // [120, 132, 101, 134, 90, 230, 210]
            },{
              name: '雨量',
              type: 'line',
              color: '#ffe002',
              data: this.WS_rainVol_arr, // [150, 32, 11, 234, 200, 30, 250]
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
      #chart_weatherChart_4
        width 100%
        height 130px





</style>
