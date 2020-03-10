<!--
 * @Descripttion: 扫码统计
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-17 15:57:31
 -->
<template>
  <div class="sm_echarts">
    <div class="title">
      <p>空湿</p>
      <Icon @click="close()" type="md-close" />
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
          ]
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
    height 160px
    background #FFF
    border-radius 4px
    box-shadow 4px 4px 4px rgba(0,0,0,.05), -4px -4px 4px rgba(0,0,0,.05)
    .title
      position absolute
      width 100%
      top 0
      display flex
      align-items center
      justify-content space-between
      padding 6px
      i
        font-size 16px
        cursor pointer
    #myChartAlert
      width 180px
      height 140px
</style>
