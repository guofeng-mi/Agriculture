<!--
 * @Descripttion: 扫码统计
 -->
<template>
  <div class="sm_echarts">
    <div id="myChartAlert"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: '',
    components: {

    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.drawLine();
    },
    computed: {
      ...mapState({
        tableStatus: state => state.tableStatus
      })
    },
    methods: {
      close() {
        this.$emit('close', 'close');
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChartAlert = this.$echarts.init(document.getElementById('myChartAlert'))
        // 绘制图表
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
          toolbox: {
            feature: {

            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['1', '2', '3', '4', '5', '6', '7']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '1',
              type: 'line',
              stack: '总量',
              color: '#B0E8CB',
              // areaStyle: {color: ['#DFF6EA']},
              data: [120, 132, 101, 134, 90, 230, 210],
              // smooth: true,
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#F7D941" // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: "#F3A307" // 100% 处的颜色
                    }
                  ], false)
                }
              },
            }
          ],
          grid: {
            x: 30,
            y: 10,
            x2: 5,
            y2: 20
          },
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/css/global.styl'
  .sm_echarts
    position relative
    width 100%
    background #FFF
    border-radius 4px
    margin-top 16px
    box-shadow:  0px 2px 11px 0px rgba(0,0,0,0.14)
    padding 20px
    &:hover 
      box-shadow:  0px 0px 8px 0px rgba(0,0,0,0.25);
    #myChartAlert
      width 200px
      height 200px
</style>
