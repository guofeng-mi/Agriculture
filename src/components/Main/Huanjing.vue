<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-11 15:01:34
 -->
<template>
  <div class="huanjing_container">
    <div class="title">
      <p>环境监测</p>
      <span>01-13</span>
      <span>11:20</span>
    </div>
    <div class="choose">
      <img src="@/assets/img/location.png" alt="">
      <p>123456</p>
      <Select v-model="test" size="small" style="width:100px;border-radius: 30px">
          <Option v-for="item in choose"  :value="item" :key="item">{{ item }}</Option>
      </Select>
    </div>
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
              <div v-if="index == 1 || index == 3">
                <img v-show="!item.active" class="static" src="@/assets/img/main/2_s5.png" alt="">
              </div>
              <div v-if="index == 2 || index == 5">
                <img v-show="!item.active" class="static" src="@/assets/img/main/2_s6.png" alt="">
              </div>

              <div v-if="index == 0 || index == 4">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b1.png" alt="">
              </div>
              <div v-if="index == 1 || index == 5">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b2.png" alt="">
              </div>
              <div v-if="index == 2">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b3.png" alt="">
              </div>
              <div v-if="index == 3">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b2.png" alt="">
              </div>
              <div v-if="index == 5">
                <img v-show="item.active" class="bg" src="@/assets/img/main/b4.png" alt="">
              </div>
            </div>
            <div v-show="item.active">
              <div class="float_block"  v-if="index == 0 || index == 4">
                <div style="background:linear-gradient(to right, rgba(9,224,173,1), rgba(9,150,247,1))"></div>
                <div style="background:linear-gradient(to right, rgba(9,150,247,1), rgba(9,224,173,1))"></div>
              </div>
              <div class="float_block"  v-if="index == 1">
                <div style="background:linear-gradient(to right, rgba(197,19,241,1), rgba(101,186,242,1))"></div>
                <div style="background:linear-gradient(to right, rgba(161,73,255,1), rgba(64,103,255))"></div>
              </div>
              <div class="float_block"  v-if="index == 2">
                <div style="background:linear-gradient(to right, rgba(242,160,0,1), rgba(252,211,4,1))"></div>
                <div style="background:linear-gradient(to right, rgba(252,211,4,1), rgba(242,160,0,1))"></div>
              </div>
              <div class="float_block"  v-if="index == 3">
                <div style="background:linear-gradient(to right, rgba(101,187,242,1), rgba(197,19,241,1))"></div>
                <div style="background:linear-gradient(to right, rgba(197,19,241,1), rgba(101,187,242,1))"></div>
              </div>
              <div class="float_block"  v-if="index == 5">
                <div style="background:linear-gradient(to right, rgba(255,183,11,1), rgba(255,127,73,1))"></div>
                <div style="background:linear-gradient(to right, rgba(255,127,73,1), rgba(255,183,11,1))"></div>
              </div>
              <!-- <div class="float_block"  v-if="index == 2">
                <div style="background:linear-gradient(to right, rgba(247,160,0,1), rgba(252,211,4,1))"></div>
                <div style="background:linear-gradient(to right, rgba(247,207,3,1), rgba(242,161,0,1))"></div>
              </div> -->
            </div>
        </i-circle>
        </div>
        <div>
          <!-- <img src="@/assets/img/main/2_kq.png" alt=""> -->
          <img src="@/assets/img/main/i1.png" v-if="index == 0" alt="">
          <img src="@/assets/img/main/i2.png" v-if="index == 1" alt="">
          <img src="@/assets/img/main/i3.png" v-if="index == 2" alt="">
          <img src="@/assets/img/main/i4.png" v-if="index == 3" alt="">
          <img src="@/assets/img/main/i5.png" v-if="index == 4" alt="">
          <img src="@/assets/img/main/i6.png" v-if="index == 5" alt="">
          <p>{{item.title}}</p>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        test: '',
        choose: [1,2,3],
        color: [
          ['#1986D8','#18CBA3'],
          ['#4067FF','#a249ff'],
          ['#FDA801','#FBD004'],
          ['#019BFD','#CB03FC'],
          ['#0A9DF9','#03FBBE'],
          ['#FD4B04','#FDAE04']
        ],
        list: [
          {active: false, value: '24℃', title: '空气温度'},
          {active: false, value: '15℃', title: '空气湿度'},
          {active: false, value: '24℃', title: '光照强度'},
          {active: false, value: '西南', title: '风向'},
          {active: false, value: '0', title: '风速'},
          {active: false, value: '0', title: '降雨量'}
        ]
      }
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
</style>
<style lang="stylus" scoped>
.huanjing_container
  padding 24px 52px

  .title 
    display flex
    justify-content space-between
    align-items center
    p 
      flex 1
      font-size 16px
    span 
      font-size 8px
      margin-left 38px


  .choose
    display flex
    align-items center
    justify-content space-between
    padding-top 12px
    p 
      flex 1
      margin-left 6px

  ul 
    padding-top 16px
    display grid
    grid-template-columns 1fr 1fr 1fr 1fr 1fr 1fr
    li 
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
