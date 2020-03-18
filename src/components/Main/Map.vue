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
        const that = this;
        var myChartContainer = document.getElementById('mapChart');

        var myChartChina = this.$echarts.init(myChartContainer);

        // 绘制图表
        var optionMap = {
          backgroundColor: '#FFF',
          tooltip: {
            trigger: 'item',
            formatter:'{b} <br/> ',
            show: true
          },

          geo: {
            map: "china",
            label: {
              normal: {
                show: true,
                color: '#123DA6'
              },
              emphasis: {
                show: true,
                color: '#123DA6'
              }
            },
            roam: true,
            center:[112.38,37.67],
            zoom:1,
            itemStyle: {
              normal: {
                areaColor: "#6985F2",
                borderColor: "#6985F2"
              },
              emphasis: {
                areaColor: "#6985F2"
              }
            }
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: list,
                // [
                // {name: "公司1", value: [112.43, 36.87, 70], id: 1},
                // {name: "公司2", value: [113.3, 40.12, 58], id: 2}
              // ],
              // 控制小点大小
              symbolSize: 20,
              // symbolSize: function (val) {
              //   return val[2] / 2;
              // },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              // label: {
              //   normal: {
              //     formatter: '{b}:{@2}',
              //     position: 'right',
              //     show: false
              //   },
              //   emphasis: {
              //     show: true
              //   }
              // },
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

        // 点击事件
        myChartChina.on('click', function (params) {
          that.judge(params);
        });
      },
      judge(params) {
        if(params.data) {
          this.$emit('retMap', params.data);
        }
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
