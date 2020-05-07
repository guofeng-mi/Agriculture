<template>
  <div class="weather_container">
    <div class="weather__hd">
      <p>气象数据 / 病害指数</p>
    </div>

    <!--气温等信息-->
    <!-- <ul class="weather__info">
      <li class="item">
        <img src="@/assets/img/weather/turangwendu.png" alt="">
        <p>气温</p>
        <span>{{WS_airTemp[0].value}}℃</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/fengsu.png" alt="">
        <p>风速</p>
        <span>{{WS_windSpd[0].value}}m/s</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/sun.png" alt="">
        <p>日照</p>
        <span>{{WS_lightInt[0].value}}Lux</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/weatherpouring.png" alt="">
        <p>降水</p>
        <span>{{WS_rainVol[0].value}}mm</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/shidu.png" alt="">
        <p>湿度</p>
        <span>{{WS_airHum[0].value}}%</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/fengxiang.png" alt="">
        <p>风向</p>
        <span>{{WS_windDir[0].value}}°</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/ziwaixian.png" alt="">
        <p>紫外</p>
        <span>{{WS_UVI[0].value}}</span>
      </li>
      <li class="item">
        <img src="@/assets/img/weather/daqiyali.png" alt="">
        <p>气压</p>
        <span>{{WS_airPres[0].value}}pa</span>
      </li>
    </ul> -->






    
    <ul>
      <li v-for="(item, index) in list" :key="index" @mouseover="myHover(item, index)" @mouseleave="myOut(item, index)" :class="'shadow_' + index">
        <div style="cursor: pointer">
          <i-circle
            :size="60"
            :trail-width="item.active ? '8' : '2'"
            :stroke-width="item.active ? '8' : '2'"
            :percent="75"
            stroke-linecap="square"
            :stroke-color="item.active ? '#EEE' : color[index]">
            <div class="jd__wrap" :style="{
              width:item.active ? '50px' : '60px',
              height:item.active ? '50px' : '60px'}">
              <span>{{item.value}}</span>
              <div v-if="index == 0 || index == 4">
                <img v-show="!item.active" class="static" src="@/assets/img/main/2_s1.png" alt="">
              </div>
              <div v-if="index == 1 || index == 5">
                <img v-show="!item.active" class="static" src="@/assets/img/main/2_s5.png" alt="">
              </div>
              <div v-if="index == 2 || index == 6">
                <img v-show="!item.active" class="static" src="@/assets/img/main/2_s6.png" alt="">
              </div>
              <div v-if="index == 3 || index == 7">
                <img v-show="!item.active" class="static" src="@/assets/img/main/2_s6.png" alt="">
              </div>

              <div v-if="index == 0 || index == 4">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b1.png" alt="">
              </div>
              <div v-if="index == 1 || index == 5">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b2.png" alt="">
              </div>
              <div v-if="index == 2 || index == 6">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b3.png" alt="">
              </div>
              <div v-if="index == 3 || index == 7">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b2.png" alt="">
              </div>
              <!-- <div v-if="index == 5">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b4.png" alt="">
              </div> -->
            </div>
            <div v-show="item.active">
              <div class="float_block"  v-if="index == 0 || index == 4">
                <div style="background:linear-gradient(to right, rgba(9,224,173,1), rgba(9,150,247,1))"></div>
                <div style="background:linear-gradient(to right, rgba(9,150,247,1), rgba(9,224,173,1))"></div>
              </div>
              <div class="float_block"  v-if="index == 1 || index == 5">
                <div style="background:linear-gradient(to right, rgba(197,19,241,1), rgba(101,186,242,1))"></div>
                <div style="background:linear-gradient(to right, rgba(161,73,255,1), rgba(64,103,255))"></div>
              </div>
              <div class="float_block"  v-if="index == 2 || index == 6">
                <div style="background:linear-gradient(to right, rgba(242,160,0,1), rgba(252,211,4,1))"></div>
                <div style="background:linear-gradient(to right, rgba(252,211,4,1), rgba(242,160,0,1))"></div>
              </div>
              <div class="float_block"  v-if="index == 3 || index == 7">
                <div style="background:linear-gradient(to right, rgba(101,187,242,1), rgba(197,19,241,1))"></div>
                <div style="background:linear-gradient(to right, rgba(197,19,241,1), rgba(101,187,242,1))"></div>
              </div>
              <!-- <div class="float_block"  v-if="index == 5">
                <div style="background:linear-gradient(to right, rgba(255,183,11,1), rgba(255,127,73,1))"></div>
                <div style="background:linear-gradient(to right, rgba(255,127,73,1), rgba(255,183,11,1))"></div>
              </div> -->
              <!-- <div class="float_block"  v-if="index == 2">
                <div style="background:linear-gradient(to right, rgba(247,160,0,1), rgba(252,211,4,1))"></div>
                <div style="background:linear-gradient(to right, rgba(247,207,3,1), rgba(242,161,0,1))"></div>
              </div> -->
            </div>
        </i-circle>
        </div>
        <div>
          <img src="@/assets/img/home/1.png" v-if="index == 0" alt="">
          <img src="@/assets/img/home/2.png" v-if="index == 1" alt="">
          <img src="@/assets/img/home/3.png" v-if="index == 2" alt="">
          <img src="@/assets/img/home/4.png" v-if="index == 3" alt="">
          <img src="@/assets/img/home/5.png" v-if="index == 4" alt="">
          <img src="@/assets/img/home/6.png" v-if="index == 5" alt="">
          <img src="@/assets/img/home/7.png" v-if="index == 6" alt="">
          <img src="@/assets/img/home/8.png" v-if="index == 7" alt="">
          <p>{{item.title}}</p>
        </div>
      </li>
    </ul>


    <!--chart-->
    <div class="weather__chart__wrap">
      <div class="item">
        <ChartWeather1 :WS_airTemp='WS_airTemp' :WS_airHum='WS_airHum' />
      </div>
      <div class="item">
        <ChartWeather2 />
      </div>
      <div class="item">
        <ChartWeather3 :WS_lightInt='WS_lightInt' :WS_UVI='WS_UVI' />
      </div>
      <div class="item">
        <ChartWeather4 :WS_airPres='WS_airPres' :WS_rainVol='WS_rainVol' />
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
  // import mainApi from '../api/main'
  import weatherApi from '../../api/weather'

  export default {
    components: {
      ChartWeather1,
      ChartWeather2,
      ChartWeather3,
      ChartWeather4
    },
    data() {
      return {
        WS_airTemp: [{}], // 气温，单位℃
        WS_airHum: [{}], // 湿度，单位%
        WS_windDir: [{}], // 风向，单位°
        WS_windSpd: [{}], // 风速，单位m/s
        WS_lightInt: [{}], // 光照，单位Lux
        WS_UVI: [{}], // 紫外线，无单位
        WS_airPres: [{}], // 气压，单位pa
        WS_rainVol: [{}], // 雨量，单位mm


        
        choose: [1,2,3],
        color: [
          ['#FDA801','#FBD004'],
          ['#019BFD','#CB03FC'],
          ['#1986D8','#18CBA3'],
          ['#FD4B04','#FDAE04'],
          ['#FDA801','#FBD004'],
          ['#019BFD','#CB03FC'],
          ['#1986D8','#18CBA3'],
          ['#FD4B04','#FDAE04']
        ],
        list: [
          {active: false, value: '24℃', title: '气温'},
          {active: false, value: '8.1m/s', title: '风速'},
          {active: false, value: '3300lux', title: '日照'},
          {active: false, value: '94.5mm', title: '降水'},
          {active: false, value: '58%', title: '湿度'},
          {active: false, value: '85°', title: '风向'},
          {active: false, value: '49961', title: '紫外'},
          {active: false, value: '3300', title: '气压'},
        ]
      }
    },
    created() {
      weatherApi.test({id: 123}).then(res => {
        let data = res.data.data.datastreams
        // console.log(data)

        /**
         * 气温，单位℃
         */
        let WS_airTemp = data.filter(item => {
          return item.id == 'WS_airTemp'
        })
        WS_airTemp = WS_airTemp[0].datapoints;
        console.log('【气温，单位℃】',WS_airTemp)
        this.WS_airTemp = WS_airTemp;

        /**
         * 湿度，单位%
         */
        let WS_airHum = data.filter(item => {
          return item.id == 'WS_airHum'
        })
        WS_airHum = WS_airHum[0].datapoints;
        console.log('【湿度，单位%】',WS_airHum)
        this.WS_airHum = WS_airHum;

        /**
         * 风向，单位°
         */
        let WS_windDir = data.filter(item => {
          return item.id == 'WS_windDir'
        })
        WS_windDir = WS_windDir[0].datapoints;
        console.log('【风向，单位°】',WS_windDir)
        this.WS_windDir = WS_windDir;

        /**
         * 风速，单位m/s
         */
        let WS_windSpd = data.filter(item => {
          return item.id == 'WS_windSpd'
        })
        WS_windSpd = WS_windSpd[0].datapoints;
        console.log('【风速，单位m/s】',WS_windSpd)
        this.WS_windSpd = WS_windSpd;

        /**
         * 光照，单位Lux
         */
        let WS_lightInt = data.filter(item => {
          return item.id == 'WS_lightInt'
        })
        WS_lightInt = WS_lightInt[0].datapoints;
        console.log('【光照，单位Lux】',WS_lightInt)
        this.WS_lightInt = WS_lightInt;

        /**
         * 紫外线，无单位
         */
        let WS_UVI = data.filter(item => {
          return item.id == 'WS_UVI'
        })
        WS_UVI = WS_UVI[0].datapoints;
        console.log('【紫外线，无单位】',WS_UVI)
        this.WS_UVI = WS_UVI;

        /**
         * 气压，单位pa
         */
        let WS_airPres = data.filter(item => {
          return item.id == 'WS_airPres'
        })
        WS_airPres = WS_airPres[0].datapoints;
        console.log('【气压，单位pa】',WS_airPres)
        this.WS_airPres = WS_airPres;

        /**
         * 雨量，单位mm
         */
        let WS_rainVol = data.filter(item => {
          return item.id == 'WS_rainVol'
        })
        WS_rainVol = WS_rainVol[0].datapoints;
        console.log('【雨量，单位mm】',WS_rainVol)
        this.WS_rainVol = WS_rainVol;

        






      }).catch(err => {
        console.log(err)
      })
    },

    methods: {
      
      myHover(val, index) {
        console.log(val, index)
        // this.list[index].active = true;
        this.$set(this.list,index,{...val, active: true})
      },
      myOut(val, index) {
        console.log(val, index)
        this.$set(this.list,index,{...val, active: false})
        // this.list[index].active = false;
        console.log(this.list)
      },
    }
  }
</script>


<style lang="stylus">
.huanjing_container
  .choose
    div
      background transparent !important
      background linear-gradient(90deg, #002D64, #005CCD) !important
      border none
      outline none
      border-radius 10px !important

@keyframes move {
  from {
    left: 0;
  }
  to {
    left: -287%;
  }
}
@keyframes move1 {
  from {
    transform translateX(-50%) rotate(35deg)
  }
  to {
    transform translateX(-50%) rotate(395deg)
  }
}
@keyframes move2 {
  from {
    transform translateX(-50%) rotate(65deg)
  }
  to {
    transform translateX(-50%) rotate(425deg)
  }
}
</style>
<style scoped>
.shadow_0:hover > div:first-child{
  box-shadow: 0 0 6px 3px rgba(9,224,173,.5)
}
.shadow_1:hover > div:first-child{
  box-shadow: 0 0 6px 4px rgba(162,73,255,.8)
}
.shadow_2:hover > div:first-child{
  box-shadow: 0 0 6px 4px rgba(252,211,4,.5)
}
.shadow_3:hover > div:first-child{
  box-shadow: 0 0 6px 4px rgba(197,19,241,.5)
}
.shadow_4:hover > div:first-child{
  box-shadow: 0 0 6px 3px rgba(9,224,173,.5)
}
.shadow_5:hover > div:first-child{
  box-shadow: 0 0 6px 4px rgba(255,183,11,.5)
}
.shadow_6:hover > div:first-child{
  box-shadow: 0 0 6px 3px rgba(9,224,173,.5)
}
.shadow_7:hover > div:first-child{
  box-shadow: 0 0 6px 4px rgba(255,183,11,.5)
}
</style>
<style lang="stylus" scoped>
.weather_container
  ul 
    padding-top 16px
    display grid
    grid-template-columns 1fr 1fr 1fr 1fr
    grid-template-rows 100px
    li 
      // border 1px solid red
      display flex
      flex-direction column
      align-items center
      & > div
        &:first-child
          position relative
          width 60px
          height 60px
          border-radius 50%
          .jd__wrap
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            overflow hidden
            height 60px
            width 60px
            border-radius 50%
            span 
              position absolute
              top 35%
              left 50%
              transform translate(-50%, -50%)
              white-space nowrap
            .bg
              position absolute
              left 50%
              top 50%
              transform translate(-50%, -50%)
              z-index -1

            .static
              position absolute
              left 0
              top 32px
              width 60px
          .float
            width 40px
            height 40px
            border-radius 50%
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            overflow hidden
            .active1
              position absolute
              bottom 0
              left 0
              height 20px
              // animation: move 5s 0.2s linear infinite
            .active2
              position absolute
              bottom 0
              left 0%
              animation: move 2s 0.2s linear infinite;
          .float_block
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            width 45px
            height 45px
            // border 1px solid red
            border-radius 50%
            overflow hidden
            div
              &:first-child
                width 90px
                height 90px
                position absolute
                left 50%
                top 60%
                transform translateX(-50%) rotate(35deg)
                border-radius 30px
                animation: move1 4s 0.2s linear infinite
                opacity 0.8
              &:last-child
                width 90px
                height 90px
                position absolute
                left 50%
                top 60%
                transform translateX(-50%) rotate(65deg)
                border-radius 25px
                animation: move2 4s 0.2s linear infinite
                opacity 0.8

            


        &:last-child
          display flex
          padding-top 12px
          p 
            padding-left 6px
          img 
            width 14px
            height 14px


</style>

<style lang="stylus" scoped>
.weather_container
  padding 12px
  .weather__hd
    p
      font-size 16px
      // color #46c183
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
    // display grid
    // grid-template-columns 1fr 1fr
    // grid-row-gap 8px
    // grid-column-gap 8px
    .item
      // border 1px dotted #108825
      border 1px solid #F1F1F1
      margin-top 12px

  .weather__footer
    display flex
    align-items center
    justify-content center
    padding 12px 0
    p
      padding-left 4 0px
    // i
    //   display block
    //   padding-right 6px
    //   font-size 18px
    // p
    //   flex 1
    //   text-align center



</style>
