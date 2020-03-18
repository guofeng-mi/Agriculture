// 环境监测仪表盘
// 参数 data number 类型
<template>
  <div class="gague_container">
    <div class="gague_chart_wrap">
      <div id="gagueChart_1"></div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted(){
      this.drawLine();
    },
    props: ['data'],
    created() {
      console.log(this.data)
    },
    methods: {
      drawLine(){
        const that = this;
        let myChartAlert = this.$echarts.init(document.getElementById('gagueChart_1'))
        myChartAlert.setOption({
            backgroundColor: '#FFF',
            series: [
              {
                radius: '75%', // 半径
                type: 'gauge',
                endAngle: -75,
                startAngle: 75, //开始角度 左侧角度
                splitNumber: 4,
                center: ['5%', '50%'], //**调整仪表盘的位置**
                axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.25, '#4ecf7a'], [0.5, '#cfc028'], [0.75, '#d77d1a'], [1, '#ff1e10']],
                    width: 8,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10,
                    length: 1
                  }
                },
                axisLabel: {
                  show: true,
                  formatter: function (value) {
                    // console.log('value ', value)
                    switch (value) {
                      case 0:
                        return '无需灌溉';
                      case 25:
                        return '少量灌溉';
                      case 50:
                        return '适量灌溉';
                      case 75:
                        return '急需灌溉';
                    }
                  }
                },
                detail: {formatter: ' '},
                data: [{value: that.data, show: false}]
              }
            ]
          }
          );
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .gague_container
    width 155px
    overflow-x hidden
    .gague_hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        color #46c183
    .gague_chart_wrap
      #gagueChart_1
        width 350px
        height 350px





</style>
