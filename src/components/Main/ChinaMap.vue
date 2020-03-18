<template>
  <div class="map_container">
    <div id="mapChart"></div>
  </div>
</template>
<script>
  export default {
    mounted(){
      this.drawLine(this.mapList);
    },
    props: ['mapList'],
    methods: {
      drawLine(list){
        // 基于准备好的dom，初始化echarts实例
        var myChartContainer = document.getElementById('mapChart');
        var resizeMyChartContainer = function(){
          myChartContainer.style.width=(document.body.offsetWidth/2)+'px'//页面一半的大小
        }
        resizeMyChartContainer();
        var myChartChina = this.$echarts.init(myChartContainer);

        // 绘制图表
        var optionMap = {
          tooltip: {},
          legend: {
            orient: 'vertical',
            left: 'left',
            data:['']
          },
          series : [
            {
              name: '',
              type: 'map',
              mapType: 'china',
              itemStyle: {
                normal:{
                  areaColor: "#6985F2",
                  borderColor: "#6985F2"
                },
                emphasis:{
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                  shadowColor: '#6985F2'
                }
              },
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: false
                }
              }
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: [
              {name: "公司1", value: [112.43, 36.87, 70], id: 1},
              {name: "公司2", value: [113.3, 40.12, 58], id: 2}
              ],
              // 控制小点大小
              symbolSize: function (val) {
                return val[2] / 2;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}:{@2}',
                  position: 'right',
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        }

        myChartChina.setOption(optionMap);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .map_container
    width 100%
    height 620px
    #mapChart
      width 100%
      height 620px
</style>
