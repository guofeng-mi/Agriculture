<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-04-24 14:00:15
 -->
<template>
  <div class="comp-rightweather--container">
    <div class="wrapper">
      <div class="gl_weather_title">23℃</div>
      <div class="gl_weather_info">晴 | 相对湿度：18%</div>
      <div class="gl_weather_con">
        <div class="gl_weather_con_day">
          <span>明天</span>
          <span>晴</span>
          <p>7℃<i>|</i>25℃</p>
        </div>
        <div class="gl_weather_con_day">
          <span>后天</span>
          <span>晴</span>
          <p>7℃<i>|</i>25℃</p>
        </div>
        <div class="gl_weather_btn" @click="openWearth">
          未来24小时天气详情
        </div>
        <div class="gl_weather_con_day" style="padding: 16px 0 0 0">
          <span>空湿</span>
          <span>21</span>
        </div>
      </div>


    </div>
  </div>
</template>
 
<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods: {
    openWearth() {
      this.$emit('changeshowWeather', true)
    }
  }
}
</script>
 
<style scoped lang="stylus">
.comp-rightweather--container
  .wrapper
    position relative
    margin-top 16px
    // box-shadow 0 0 8px rgba(0,0,0,.08)
    box-shadow:  0px 2px 11px 0px rgba(0,0,0,0.14);
    padding 22px
    border-radius 6px
    &:hover
      box-shadow:  0px 0px 8px 0px rgba(0,0,0,0.25);


    .gl_weather_title
      font-weight 600
      font-size 22px
      padding-bottom 16px


    .gl_weather_info
      padding-bottom 16px
    .gl_weather_con
      .gl_weather_con_day
        font-size 14px
        display flex
        justify-content space-between
        padding 4px 0
        p 
          flex 1
          text-align right
          i 
            margin 0 4px

      .gl_weather_btn
        box-shadow:  0px 2px 11px 0px rgba(0,0,0,0.14);
        border-radius 4px
        text-align center
        line-height 32px
        margin-top 16px
        cursor pointer
        &:hover
          box-shadow:  0px 0px 8px 0px rgba(0,0,0,0.25);

</style>