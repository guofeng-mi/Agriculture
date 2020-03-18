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
        myChartAlert.setOption(


          {
            dataset: {
              source: [
                ['score', 'amount', 'product'],
                [89.3, 58212, '农事作业'],
                [57.1, 78254, '智能预警'],
                [74.4, 41032, '图片采集'],
                [50.1, 12755, '成功控制'],
                [68.1, 79146, '智能控制'],
                [19.6, 91852, '数据采集']
              ]
            },
            grid: {
              x: 60,
              y: 20,
              x2: 10,
              y2: 20
            },
            xAxis: {name: 'amount'},
            yAxis: {type: 'category'},
            series: [
              {
                type: 'bar',
                encode: {
                  x: 'amount',
                  y: 'product'
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                animation: false,
                itemStyle: {
                  normal: {
                    //这里是重点
                    color: function(params) {
                      //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                      var colorList = ['#00A2CE','#6B1EA8', '#45B897', '#EC7E1F', '#123DA6','#C5237C'];
                      return colorList[params.dataIndex]
                    }
                  }
                }
              }
            ]
          }


        );
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .today_container
    padding 12px
    .today_hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        color #46c183
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
