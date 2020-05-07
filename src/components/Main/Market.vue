<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-11 17:14:12
 -->
<template>
  <div class="today_container">
    <div class="today_hd">
      <p>市场动态</p>
      <mySelect style="margin-right: 12px;" />
      <mySelect />
    </div>

    <div class="today_chart_wrap">
      <div id="market"></div>
    </div>


  </div>
</template>
<script>
  import mySelect from '../Public/Select'
  export default {
    components: {
      mySelect
    },
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
        let myChartAlert = this.$echarts.init(document.getElementById('market'))
        myChartAlert.setOption({
          legend: {show: false},
          xAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#FFF'
                  }
              },
            data: ["1", "2","3","4","5","6","7"]
          },
          yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#FFF'
                }
            }
          },
          tooltip: {
              trigger: 'axis',
              backgroundColor: '#FACB03',
              extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
              textStyle: {
                  color: '#FFF',
              },
          },
          grid: {
              top: '15%',
              left: '1%',
              right: '11%',
              bottom: '2.5%',
              containLabel: true
          },
          series: [
            {
              // name: '数据',
              type: 'bar',
              barWidth: 10,
              emphasis: {
                  barBorderRadius: 0,
                  itemStyle: {
                    color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
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
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
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
              data: [9999, 8888, 2222, 5555, 7777, 6666,9999]
            }
        ]














          













        });
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .today_container
    padding 32px 24px


    .today_hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        color #FFF
    .today_chart_wrap
      #market
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
