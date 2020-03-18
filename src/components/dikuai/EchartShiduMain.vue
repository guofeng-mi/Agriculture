<!--
 * @Descripttion: 扫码统计
 -->
<template>
  <div class="sm_echarts">
    <div class="title">
      <p>空湿</p>
      <p>21℃</p>
    </div>
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
              areaStyle: {color: ['#DFF6EA']},
              data: [120, 132, 101, 134, 90, 230, 210],
              smooth: true
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
    width 200px
    background #FFF
    border-radius 4px
    .title
      display flex
      align-items center
      justify-content space-between
      padding-bottom 20px
    #myChartAlert
      width 200px
      height 100px
</style>
