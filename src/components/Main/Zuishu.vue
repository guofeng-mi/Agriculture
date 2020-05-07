<template>
  <div class="zuishu_container">
    <div class="zuishu_hd_wrap">
      <p>农品追溯</p>
      <mySelect />
    </div>

    <div class="zuishu_chart_wrap">
      <div id="myChartAlert"></div>
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
        test: '2019-01'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        let myChartAlert = this.$echarts.init(document.getElementById('myChartAlert'))
        myChartAlert.setOption({
          title: {
            text: ''
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
            x: 30,
            y: 20,
            x2: 10,
            y2: 20
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLine: {
                  lineStyle: {
                      color: '#FFF'
                  }
              },
              data: ['1', '2', '3', '4', '5', '6', '7']
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                  lineStyle: {
                      color: '#FFF'
                  }
              }
            }
          ],
          series: [
            {
              name: '1',
              type: 'line',
              stack: '总量',
              color: '#EFBD09',
              // areaStyle: {color: ['#f5f8ff']},
              data: [120, 132, 101, 134, 90, 230, 210],
              // smooth: true
            }
          ]
        });
      }
    }
  }
</script>
<style lang="stylus" scoped>
.zuishu_container
  padding 30px 35px

  .zuishu_hd_wrap
    display flex
    align-items center
    justify-content space-between
    p
      color #FFF
      font-size 16px
  .zuishu_chart_wrap
    #myChartAlert
      width 100%
      height 180px


</style>
<style >
.zuishu_hd_wrap .ivu-select-selection {
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
