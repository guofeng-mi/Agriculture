<!--
 * @Descripttion: 地块主页
 -->
<template>
  <div class="dk_main">
    <!-- <div class="main_hd">
      <div class="item">
        <img src="@/assets/img/dk_y_on.png" alt="">
        <p @click="show = 1">光照7206E：3300 lux</p>
        <EqEcharts @close="close" v-if="show == 1" class="eq_alert"></EqEcharts>
      </div>
      <div class="item">
        <img src="@/assets/img/dk_y_on.png" alt="">
        <p @click="show = 2">光照7206E：3300 lux</p>
        <EqEcharts @close="close" v-if="show == 2" class="eq_alert"></EqEcharts>
      </div>
      <div class="item">
        <img src="@/assets/img/dk_y_on.png" alt="">
        <p @click="show = 3">光照7206E：3300 lux</p>
        <EqEcharts @close="close" v-if="show == 3" class="eq_alert"></EqEcharts>
      </div>
      <div class="item">
        <img src="@/assets/img/dk_y_on.png" alt="">
        <p @click="show = 4">光照7206E：3300 lux</p>
        <EqEcharts @close="close" v-if="show == 4" class="eq_alert"></EqEcharts>
      </div>
    </div> -->



    <p style="text-align: center; padding-top: 16px;">园区XXXX</p>
    <div class="poster_wrap">
      <div class="poster_bg"></div>
      <img src="@/assets/img/dk_p_1.png" alt="">
      <div class="footer_wrap">
        <Footer></Footer>
      </div>
    </div>


    <div class="guolv_wrap">
      <RightWeather style="width: 100%;" />
      <RightWeatherInfo @changeshowWeather="changeshowWeather" />

      <EchartShiduMain></EchartShiduMain>

<!--      <Icon class="close" type="md-close" />-->
      <!-- <div class="gl_weather">
        <div class="gl_weather_title">23℃</div>
        <div class="gl_weather_info">晴 | 相对湿度：18%</div>
        <div class="gl_weather_con">
          <div class="gl_weather_con_day">
            <span>明天</span>
            <span>晴</span>
            <p>7℃<i></i>25℃</p>
          </div>
          <div class="gl_weather_con_day">
            <span>后天</span>
            <span>晴</span>
            <p>7℃<i></i>25℃</p>
          </div>
          <div class="gl_weather_btn">
            <Button @click="showWeather = true">未来24小时天气详情</Button>
          </div>
        </div>
      </div> -->

      <!--右侧echarts-->
      <!-- <div class="gl_eq_wrap">
        <div class="gl_eq_item">
          <EchartShiduMain></EchartShiduMain>
        </div>
      </div> -->
    </div>
<!-- 
    <div class="footer_wrap">
      <Footer></Footer>
    </div> -->

    <!--天气详情-->
    <Weather v-show="showWeather" @weclose="weclose"></Weather>
  </div>
</template>

<script>
  import { mapState} from 'vuex';
  import Footer from './Footer'
  import EqEcharts from "./EqEcharts";
  import EchartShiduMain from "./EchartShiduMain";
  import Weather from "./Weather";
  import RightWeather from './RightWeather'
  import RightWeatherInfo from './RightWeatherInfo'
  export default {
    name: '',
    components: {
      Footer,
      EqEcharts,
      EchartShiduMain,
      Weather,
      RightWeather,
      RightWeatherInfo
    },
    data() {
      return {
        show: false,
        showWeather: false,
        tasks: {
          data: [
            {id: 1, text: '施肥', start_date: '01-01-2020', duration: 3, progress: 0},
          ],
        },
      }
    },
    computed: {
      ...mapState({
        hdShengchanTab: state => state.hdShengchanTab,
        hdShuyuanTab: state => state.hdShuyuanTab,
        pageShow: state => state.pageShow,
        dikuaiShow: state => state.dikuaiShow,
        headerStatus: state => state.headerStatus,
        dikuaiStatus: state => state.dikuaiStatus
      })
    },
    methods: {
      changeshowWeather() {
        this.showWeather = true;
      },
      close() {
        this.show = false;
      },
      weclose(val) {
        console.log(val)
        this.showWeather = false;
      },
      changeHeaderStatus(status) {
        this.$store.commit('changeHeaderStatus', status);
      },
      changeDikuaiStatus(status) {
        this.$store.commit('changeDikuaiStatus', status);
      }
    }
  }
</script>
<style lang="stylus" scoped>
.dk_main
  height calc(100vh - 84px)
  position relative
  padding 0 316px 0 30px
  .main_hd
    display flex
    .item
      position relative
      display flex
      align-items center
      padding 12px 12px 12px 0
      p
        padding-top 2px
        padding-left 8px
      .eq_alert
        position absolute
        left 0
        top 40px

  .poster_wrap
    width 100%
    box-shadow 0 0 6px rgba(0,0,0,.14)
    border-radius 6px
    padding 22px 22px 6px 22px
    margin-top 16px
    img
      width 100%
      height 100%
      max-height calc(100vh - 170px)
    .poster_bg
      width 100%
      // height calc(100vh - 170px)
      // background-image url("../../assets/img/dk_p_1.png")
      // background-size contain
      // background-repeat no-repeat
  .guolv_wrap
    position fixed
    right 101px
    top 83px
    width 300px
    height calc(100vh - 83px)
    background #FFF
    box-sizing border-box
    padding 40px 20px 0 20px
    .close
      color #6784F1
      font-size 22px
      position absolute
      right 12px
      top 12px
      cursor pointer
    .gl_weather
      padding 0 5px
      .gl_weather_title
        font-weight 600
        color #222
        font-size 22px
      .gl_weather_info
        opacity 0.6
        padding-top 16px
      .gl_weather_con
        padding-top 12px
        .gl_weather_con_day
          padding-top 14px
          font-size 13px
          display flex
          opacity 0.9
          p
            flex 1
            text-align right
            i
              display inline-block
              border-right 2px solid rgba(0,0,0,.3)
              height 12px
              margin 0 4px
      .gl_weather_btn
        padding-top 28px
        button
          width 200px
    .gl_eq_wrap
      padding-top 22px
      .gl_eq_item
        padding-top 22px

  // .footer_wrap
    // position absolute
    // width calc(100% - 310px)
    // bottom 0
    // left 0

</style>
