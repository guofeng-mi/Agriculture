<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-11 17:14:12
 -->
<template>
  <div class="today_container">
    <div class="today_hd">
      <p>今日数据</p>
    </div>

    <div class="today_chart_wrap">
      <div id="todayChart"></div>
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
        let myChartAlert = this.$echarts.init(document.getElementById('todayChart'))
        myChartAlert.setOption({
          // tooltip: {},
          // legend: {show: false},
          // xAxis: {
          //   data: ["数据采集", "智能控制","成功控制","图片采集","智能预警","农事作业"]
          // },
          // yAxis: {

          // },


    tooltip: {
        trigger: 'axis',
        backgroundColor: '#FACB03',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle: {
            color: '#FFF',
        },
    },
    grid: {
        top: '12%',
        left: '1%',
        right: '11%',
        bottom: '2.5%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['数据采集', '智能控制', '成功控制', '图片采集', '智能预警', '农事作业'],
        inverse: true,
        
        axisTick: {
            alignWithLabel: true,
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: 'white'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#FFF'
            }
        }
    }],
    xAxis: [{
        type: 'value',
        axisLabel: {
            margin: 10,
            interval: 1, //横轴信息全部显示  
            rotate: 0, //-15度角倾斜显示  
            textStyle: {
                fontSize: 12,
                color: 'white',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#FFF'
            }
        },
        splitLine: {
          show: false
        }
    }],

          series: [
            {
              name: '数据',
              type: 'bar',
              barWidth: 10,
              emphasis: {
                  barBorderRadius: 0,
                  itemStyle: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: "#FCD204" // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: "#F2A000" // 100% 处的颜色
                      }
                    ], false)
                  }
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#3A60DF" // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: "#00C5F4" // 100% 处的颜色
                    }
                  ], false)
                }
              },
              data: [9999, 8888, 2222, 5555, 7777, 6666]
            }
        ]














          













        });
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .today_container
    padding 32px 50px


    .today_hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        color #FFF
    .today_chart_wrap
      #todayChart
        width 100%
        height 200px





</style>
<style >
  .today_container .ivu-select-selection {
    border: none;
    outline: none;
    box-shadow: none;
  }
</style>
