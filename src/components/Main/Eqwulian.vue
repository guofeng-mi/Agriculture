<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-11 17:19:33
 -->
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
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                  show: true,
                    textStyle: {
                      color: '#c3dbff',  //更改坐标轴文字颜色
                      fontSize : 10      //更改坐标轴文字大小
                    }
                },
                axisTick: {
                      show: false
                  },
                  axisLine:{
                      lineStyle:{
                          color:'#FFF' //更改坐标轴颜色
                      }
                },
                data: ['设备一', '设备二', '设备三', '设备四', '设备五', '设备六']
            },
            grid: {
              top: '30px',
              bottom: '30px',
              left: '30px',
              right: '30px'
            },
            yAxis: {
                type: 'value',
                splitLine :{    //网格线
                  lineStyle:{
                    type:'solid'    //设置网格线类型 dotted：虚线   solid:实线
                  },
                  show:true //隐藏或显示
                },
                axisLabel: {
                  show: true,
                    textStyle: {
                      color: '#c3dbff',  //更改坐标轴文字颜色
                      fontSize : 10      //更改坐标轴文字大小
                    }
                },
                axisTick: {
                      show: false
                  },
                  axisLine:{
                      lineStyle:{
                          color:'#FFF' //更改坐标轴颜色
                      }
                },
            },
            series: [{
                data: [0, 102, 350, 250, 550, 530, 500],
                type: 'line',
                smooth: true,
                symbol:'none',
                lineStyle: {
                  normal: {
                    color: 'transparent',
                     type:'dotted'  //'dotted'虚线 'solid'实线
                  },
                },
                areaStyle: {         // 颜色自上而下渐变
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
                        offset: 0,
                        color: 'rgba(6,125,177,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(6,125,177,0)'
                    }]),
                    opacity: 1    // 填充区域透明度
                }
            }]
          });
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .eqwuliu_container
    padding 24px 56px
    .eqwuliu_hd
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        font-size 16px
        color #FFF
        font-size 16px
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
