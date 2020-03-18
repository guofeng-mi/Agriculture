<template>
  <div class="market_container">
    <div class="market_hd">
      <p>市场动态</p>
      <Select v-model="time" size="small" style="width:90px">
        <Option value="2019-01">2019-01</Option>
        <Option value="2019-02">2019-02</Option>
      </Select>
      <Select v-model="zuowu" size="small" style="width:80px;margin-left: 20px">
        <Option value="白菜">白菜</Option>
        <Option value="玉米">玉米</Option>
      </Select>
    </div>

    <div class="market_chart_wrap">
      <div id="marketChart"></div>
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
        let myChartAlert = this.$echarts.init(document.getElementById('marketChart'))
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
              color: '#5dd095',
              areaStyle: {color: ['#EEFAF4']},
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
.market_container
  padding 12px
  .market_hd
    display flex
    align-items center
    justify-content space-between
    p
      flex 1
      font-size 16px
      color #46c183
  .market_chart_wrap
    #marketChart
      width 100%
      height 200px





</style>
<style >
  .market_container .ivu-select-selection {
    border: none;
    outline: none;
    box-shadow: none;
  }
</style>
