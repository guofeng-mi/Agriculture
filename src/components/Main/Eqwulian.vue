<template>
  <div class="eqwuliu_container">
    <div class="eqwuliu_hd">
      <p>物联储备</p>
    </div>

    <div class="eqwuliu_chart_wrap">
      <div id="eqwuliuChart"></div>
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
        let myChartAlert = this.$echarts.init(document.getElementById('eqwuliuChart'))
        myChartAlert.setOption({
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                data: ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '提示',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                  normal: {
                    //这里是重点
                    color: function(params) {
                      //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                      var colorList = ['#059FD5','#E1812A', '#124A9D', '#D61776', '#43B89B','#6CADBF'];
                      return colorList[params.dataIndex]
                    }
                  }
                }
              }
            ]
          });
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .eqwuliu_container
    padding 12px
    .eqwuliu_hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        color #46c183
    .eqwuliu_chart_wrap
      #eqwuliuChart
        width 100%
        height 200px





</style>
<style >
  .eqwuliu_container .ivu-select-selection {
    border: none;
    outline: none;
    box-shadow: none;
  }
</style>
