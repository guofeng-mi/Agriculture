<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-04-22 15:24:12
 -->
<template>
  <div class="con-eq-container">
    <div class="bg">
      <div class="c c1"></div>
      <div class="c c2"></div>
      <div class="c c3"></div>
      <div class="c c4"></div>
      <div class="p p1">
        <p>设备总数</p>
        <span>198743</span>
      </div>
      <div class="p p2">
        <p>用户总数</p>
        <span>192847</span>
      </div>
      <div class="p p3">
        <p>采集总数</p>
        <span>123479871298</span>
      </div>
    </div>


  </div>
</template>
 
<script>
export default {
  name: '',
  
}
</script>
 
<style scoped lang="stylus">
.con-eq-container
  position relative
  height 218px
  .bg 
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    margin auto
    width 170px
    height 150px
    background-image url('../../assets/img/main/3.png')
    background-repeat no-repeat 
    background-size 100% 100%
  .c 
    position absolute
    // top 0
    // left 50%
    // transform translate(-50%, -25%)
    width 60px
    height 60px
    background-image url('../../assets/img/main/c2.png')
    background-repeat no-repeat 
    background-size 100% 100%
  .c1
    top 0
    left 50%
    transform translate(-50%, -25%)
  .c2
    bottom 0
    left 0
    transform translate(-25%, 25%)
  .c3
    bottom 0
    right 0
    transform translate(25%, 25%)
    background-image url('../../assets/img/main/c1.png')
  .c4
    left 50%
    top 60%
    transform translate(-50%, -50%)
    width 30px
    height 30px
    background-image url('../../assets/img/main/c3.png')
  .p 
    position absolute
    font-size 14px
    p 
      font-size 14px
      padding-bottom 2px
    span 
      font-size 12px
  .p1 
    left -10px
    top 50%
    transform translateY(-50%)
  .p2
    right -6px
    top 46%
    transform translateY(-50%)
  .p3
    left 50%
    bottom -20px
    transform translateX(-50%)


</style>