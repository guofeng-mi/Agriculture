<template>
  <div class="zuishu_container">
    <div class="zuishu_hd_wrap">
      <p>农品追溯</p>
      <Select v-model="test" size="small" style="width:90px">
        <Option value="2019-01">2019-01</Option>
        <Option value="2019-02">2019-02</Option>
      </Select>
    </div>

    <div class="zuishu_chart_wrap">
      <div id="myChartAlert"></div>
    </div>


  </div>
</template>
<script>
  export default {
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
              color: '#BDC8F7',
              areaStyle: {color: ['#f5f8ff']},
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
  width 100%
  padding 12px
  .zuishu_hd_wrap
    display flex
    align-items center
    justify-content space-between
    p
      color #46c183
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
