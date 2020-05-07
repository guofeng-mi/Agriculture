<!--
 * @Descripttion: 右侧天气方块 4
 * @version: 
 * @Date: 2020-04-24 13:33:25
 -->
<template>
  <div class="com-rightweather--container">
    <div class="wrapper">
      <!-- <div v-for="item in 4" :key="item">
        <i-circle
          :size="60"
          :trail-width="3"
          :stroke-width="3"
          :percent="75"
          stroke-linecap="square"
          stroke-color="#43a3fb">
          <div class="con">
            <p>skjf</p>
            <img class="s" src="@/assets/img/main/2_s1.png" alt="">
          </div>
        </i-circle>

        <div class="info">
          <img src="@/assets/img/dikuai/1.png" alt="">
          <p>光照29</p>
        </div>
      </div> -->




      
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
          <img src="@/assets/img/dikuai/1.png" alt="">
          <p>{{item.title}}</p>
        </div>
      </li>
    </ul>

    </div>


  </div>
</template>
 
<script>
export default {
  name: '',
  data () {
    return {
      
        test: '',
        choose: [1,2,3],
        color: [
          ['#1986D8','#18CBA3'],
          ['#4067FF','#a249ff'],
          ['#FDA801','#FBD004'],
          ['#019BFD','#CB03FC'],
        ],
        list: [
          {active: false, value: '24℃', title: '空气温度'},
          {active: false, value: '15℃', title: '空气湿度'},
          {active: false, value: '24℃', title: '光照强度'},
          {active: false, value: '西南', title: '风向'},
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
<style scoped lang="stylus">

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

.wrapper
  display grid
  grid-template-columns 60px 60px
  grid-column-gap 60px
  grid-row-gap 30px
  box-shadow:  0px 2px 11px 0px rgba(0,0,0,0.14);
  padding 20px 35px
  border-radius 6px
  &:hover
    box-shadow:  0px 0px 8px 0px rgba(0,0,0,0.25);
  .con
    position relative
    overflow hidden
    // border 1px solid red
    width 56px
    height 56px
    box-sizing border-box
    border-radius 50%
    margin 0 auto
    p 
      position absolute
      top 16%
      left 50%
      transform translateX(-50%)
    .s 
      width 100%
      position absolute
      left 0
      top 50%
  .info
    display flex
    padding-top 12px
    img 
      height 12px
    p 
      padding-left 2px
      font-size 12px

  ul 
    display grid
    grid-template-columns 60px 60px
    grid-column-gap 60px
    grid-row-gap 30px
    li 
      display flex
      flex-direction column
      align-items center
      & > div
        &:first-child
          position relative
          // border 1px solid red
          width 60px
          height 60px
          border-radius 50%
          .jd__wrap
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            overflow hidden
            // position relative
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
                border-radius 30px
                animation: move2 4s 0.2s linear infinite
                opacity 0.8

            


        &:last-child
          display flex
          padding-top 12px
          p 
            padding-left 6px
            white-space nowrap
          img 
            width 14px
            height 14px



</style>