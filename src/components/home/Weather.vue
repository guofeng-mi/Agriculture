<template>
  <div class="weather_container">
    <div class="weather__hd">
      <p>气象数据 / 病害指数</p>
    </div>

    <!--气温等信息-->
    <ul class="weather__info">
      <li class="item">
        <img src="@/assets/img/weather/turangwendu.png" alt="">
        <p>气温</p>
        <span>-3.8℃</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/fengsu.png" alt="">
        <p>风速</p>
        <span>0.4m/s</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/sun.png" alt="">
        <p>日照</p>
        <span>0.4m/s</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/weatherpouring.png" alt="">
        <p>降水</p>
        <span>0.4m/s</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/shidu.png" alt="">
        <p>湿度</p>
        <span>0.4m/s</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/fengxiang.png" alt="">
        <p>风向</p>
        <span>0.4m/s</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/ziwaixian.png" alt="">
        <p>紫外</p>
        <span>0.4m/s</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/daqiyali.png" alt="">
        <p>气压</p>
        <span>0.4m/s</span>
      </li>
    </ul>

    <!--chart-->
    <div class="weather__chart__wrap">
      <div class="item">
        <ChartWeather1 />
      </div>
      <div class="item">
        <ChartWeather2 />
      </div>
      <div class="item">
        <ChartWeather3 />
      </div>
      <div class="item">
        <ChartWeather4 />
      </div>
    </div>

    <div class="weather__footer">
      <Icon type="ios-alert-outline" />
      <span>病害压力</span>
      <p>低温低湿，病害压力小</p>
    </div>


  </div>
</template>
<script>
  import ChartWeather1 from "./Weather/ChartWeather1";
  import ChartWeather2 from "./Weather/ChartWeather2";
  import ChartWeather3 from "./Weather/ChartWeather3";
  import ChartWeather4 from "./Weather/ChartWeather4";

  export default {
    components: {
      ChartWeather1,
      ChartWeather2,
      ChartWeather3,
      ChartWeather4
    }
  }
</script>
<style lang="stylus" scoped>
.weather_container
  padding 12px
  .weather__hd
    p
      font-size 16px
      color #46c183
  .weather__info
    display flex
    flex-wrap wrap
    color #000
    .item
      height 50px
      display flex
      align-items center
      width 25%
      i
        font-size 42px
      p
        width 16px
        fon-size 13px
        opacity 0.7
      span
        display block
        padding-left 4px
        font-size 12px
        opacity 0.7
      img
        width 26px
        height 26px
        margin-right 6px

  .weather__chart__wrap
    padding-top 12px
    display grid
    grid-template-columns 1fr 1fr
    grid-row-gap 8px
    grid-column-gap 8px
    .item
      border 1px dotted #108825

  .weather__footer
    display flex
    align-items center
    padding 12px 0
    i
      display block
      padding-right 6px
      font-size 18px
    p
      flex 1
      text-align center



</style>
