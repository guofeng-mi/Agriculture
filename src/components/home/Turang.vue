<template>
  <div class="turang_container">
    <div class="turang__hd">
      <p>环境监测</p>
    </div>

    <div class="visualMap">
      <p><span>无需灌溉</span></p>
      <p><span>少量灌溉</span></p>
      <p><span>适量灌溉</span></p>
      <p><span>急需灌溉</span></p>
    </div>
    <div class="turang__chart">
      <div id="chart_turang"></div>
    </div>

  </div>
</template>
<script>
  export default {
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        let myChartAlert = this.$echarts.init(document.getElementById('chart_turang'));

        let option = {
          yAxis: {
            boundaryGap : true,
            inverse: true,
            axisTick: {
              //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
              alignWithLabel: true,
            },
            splitNumber: 3
          },
          xAxis: {
            type: 'category',
            axisLabel:{
              interval: 1,
              rotate:45,  //表示逆时针旋转45度
            }
          },
          grid: {
            x: 25,
            y: 10,
            x2: 0,
            y2: 50
          },
          series: [
            {
              data: [
                ['03-16',5],
                ['03-17',2],
                ['03-18',4],
                ['03-19',2],

                ['03-16',15],
                ['03-17',11],
                ['03-18',14],
                ['03-19',15],

                ['03-16',20],
                ['03-17',22],
                ['03-18',24],
                ['03-19',21],

                ['03-16',35],
                ['03-17',35],
                ['03-18',34],
                ['03-19',32],

                ['03-16',55],
                ['03-17',55],
                ['03-18',54],
                ['03-19',52],

                ['03-16',85],
                ['03-17',85],
                ['03-18',84],
                ['03-19',82],
              ],
              itemStyle: {
                color: '#09DEAF',
              },
              symbolSize: 4,
              type: 'scatter'
            },
            {
              data: [

                ['03-20',3],
                ['03-21',3],
                ['03-22',5],
                ['03-23',5],
                ['03-24',6],
                ['03-25',2],
                ['03-26',2],
                ['03-27',1],
                ['03-28',4],
                ['03-29',4],
                ['03-30',5],
                ['03-31',4],

                ['03-20',13],
                ['03-21',13],
                ['03-22',15],
                ['03-23',15],
                ['03-24',14],
                ['03-25',12],
                ['03-26',13],
                ['03-27',13],
                ['03-28',14],
                ['03-29',16],
                ['03-30',15],
                ['03-31',14],

                ['03-20',23],
                ['03-21',23],
                ['03-22',21],
                ['03-23',25],
                ['03-24',22],
                ['03-25',22],
                ['03-26',24],
                ['03-27',23],
                ['03-28',21],
                ['03-29',26],
                ['03-30',26],
                ['03-31',24],

                ['03-20',33],
                ['03-21',33],
                ['03-22',35],
                ['03-23',35],
                ['03-24',34],
                ['03-25',32],
                ['03-26',33],
                ['03-27',33],
                ['03-28',34],
                ['03-29',36],
                ['03-30',35],
                ['03-31',34],

                ['03-16',45],
                ['03-17',45],
                ['03-18',44],
                ['03-19',42],
                ['03-20',43],
                ['03-21',43],
                ['03-22',45],
                ['03-23',45],
                ['03-24',44],
                ['03-25',42],
                ['03-26',43],
                ['03-27',43],
                ['03-28',44],
                ['03-29',46],
                ['03-30',45],
                ['03-31',44],

                ['03-20',53],
                ['03-21',53],
                ['03-22',55],
                ['03-23',55],
                ['03-24',54],
                ['03-25',52],
                ['03-26',53],
                ['03-27',53],
                ['03-28',54],
                ['03-29',56],
                ['03-30',55],
                ['03-31',54],

                ['03-16',65],
                ['03-17',66],
                ['03-18',62],
                ['03-19',67],
                ['03-20',62],
                ['03-21',68],
                ['03-22',68],
                ['03-23',64],
                ['03-24',62],
                ['03-25',65],
                ['03-26',68],
                ['03-27',63],
                ['03-28',67],
                ['03-29',63],
                ['03-30',64],
                ['03-31',64],

                ['03-20',83],
                ['03-21',83],
                ['03-22',85],
                ['03-23',85],
                ['03-24',84],
                ['03-25',82],
                ['03-26',83],
                ['03-27',83],
                ['03-28',84],
                ['03-29',86],
                ['03-30',85],
                ['03-31',84],
              ],
              symbolSize: 4,
              itemStyle: {
                color: '#FFD200',
              },
              type: 'scatter'
            }
          ]
        }
        myChartAlert.setOption(option);
      }


    }
  }
</script>
<style lang="stylus" scoped>
  .turang_container
    padding 12px
    .turang__hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        // color #46c183

    .visualMap
      display grid
      grid-template-columns 1fr 1fr
      grid-template-rows 22px
      margin 12px auto
      text-align center
      p
        &:nth-child(odd)
          text-align right
          padding-right 22px
        &:nth-child(even)
          text-align left
          padding-left 22px
        span
          position relative
          &::before
            content ''
            display block
            width 10px
            height 10px
            border-radius 50%
            position absolute
            left -16px
            top 50%
            transform translateY(-50%)
        &:nth-child(1) 
          span 
            &::before
              background #09DEAF
        &:nth-child(2) 
          span 
            &::before
              background #FFD200
        &:nth-child(3) 
          span 
            &::before
              background #F2A100
        &:nth-child(4) 
          span 
            &::before
              background #FF1E10





    .turang__chart
      #chart_turang
        width 100%
        height 500px


</style>
