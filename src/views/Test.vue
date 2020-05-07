<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-04-28 15:04:19
 -->
<template>
  <div class="test">
    <div id="chart_weatherChart_1"></div>
  </div>
</template>
 
<script>
import weatherApi from '../api/weather'

import 'echarts-gl'
export default {
  name: '',
  data () {
    return {
      dataArr: [],
      WS_windDir_arr: [], // 风向，单位°
      WS_windSpd_arr: [], // 风速，单位m/s
      glData: [], // 矢量场数据
    }
  },
  mounted() {

    this.getList().then(() => {
      setTimeout(() => {
        this.drawLine()
      }, 1000)
    })
  },

  methods: {

    async getList() {

      weatherApi.test({id: 123}).then(res => {

        let data = res.data.data.datastreams;
        // console.log(data)

        let WS_windDir = [];
        let WS_windSpd = [];
        let TIME_arr = [];

        data.forEach(item => {
          if(item.id === 'WS_windDir') {
            // 处理时间
            TIME_arr = item.datapoints.map(item => {
              return new Date(item.at).getTime();
            })
            // 处理风向
            WS_windDir = item.datapoints.map(item => {
              return item.value;
            })
          }
          if(item.id === 'WS_windSpd') {
            // 处理风速
            WS_windSpd = item.datapoints.map(item => {
              return item.value;
            })
          }
        })

        // 时间排序
        TIME_arr = TIME_arr.sort((a, b) => {
          return a - b
        })

        // 统一处理数据
        let glData = [];
        for(let i = 0; i < 10; i++) {
          glData.push([
            TIME_arr[i],
            WS_windSpd[i],
            WS_windDir[i]
          ])
        }
        this.glData = glData;
        // console.log(this.glData)
      })
    },


      drawLine(){
        // console.log(this.glData)
        const that = this;
        let myChartAlert = this.$echarts.init(document.getElementById('chart_weatherChart_1'))

        // var directionMap = {};
        // this.$echarts.util.each(
        //     ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'],
        //     function (name, index) {
        //       directionMap[name] = Math.PI / 8 * index;
        //     }
        // );

        var dims = {
            time: 0,
            windSpeed: 1,
            R: 2,
            waveHeight: 3,
            weatherIcon: 2,
            minTemp: 3,
            maxTemp: 4
        };
        var arrowSize = 18;
        // var weatherIconSize = 45;


        // console.table(data)
        let option = {

          tooltip: {
            trigger: 'axis',
            position: function (point) {
              return [point[0] + 20, point[1] - 50];
            },
            // formatter(params){
            //   // console.log(params)
            //   return `时间: ${that.$Tool.formatDate(new Date(params[0].axisValue))} <br> ${params[0].seriesName}`
            // }
          },
          visualMap: {
              show: false,
              min: Infinity,
              max: -Infinity,
              dimension: 4,
              inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              }
          },
          xAxis: [
            {
              type: 'time',
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
              name: '风向',
              type: 'custom',
              renderItem: function (params, api) {
                var point = api.coord([
                    api.value(dims.time),
                    api.value(dims.windSpeed)
                ]);
                
                let res = {
                    type: 'path',
                    shape: {
                        pathData: 'M31 16l-15-15v9h-26v12h26v9z',
                        x: -arrowSize / 2,
                        y: (-arrowSize / 2),
                        width: arrowSize,
                        height: arrowSize
                    },
                    rotation: that.glData.filter(item => item[0] === api.value())[0][2],
                    position: point,
                    style: api.style({
                        stroke: '#555',
                        lineWidth: 1
                    })
                }
                return res;
              },
              data: this.glData,
              color: '#DB82F5'
            },
            {
              name: '风速',
              data: this.glData,
              color: '#ADD7F7',
              type: 'line'
            }
          ]
        }
        myChartAlert.setOption(option);
      },

      // 计算角度
      hypotenuse(long,angle){
        //获得弧度
        var radian = 2*Math.PI/360*angle;
        let result = {
          a:Math.sin(radian) * long,//邻边
          b:Math.cos(radian) * long//对边
        }
        // console.log(result)
        return result;
      }
  }
}
</script>
 
<style scoped lang="stylus">
.test
  padding-top 100px
  #chart_weatherChart_1
    width 100%
    height calc(100vh - 100px)

</style>