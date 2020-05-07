<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-11 15:59:01
 -->
<template>
  <div class="scene_container">
    <div class="scene_hd">
      <p>葡萄当前物候期</p>
      <mySelect />

    </div>

    <!-- <ul>
      <li v-for="(item, index) in 6" :key="index">
        <div class="tips">摄像机{{index + 1}}</div>
        <img src="@/assets/img/main/sc1.png" alt="">
      </li>
    </ul> -->


    <ul class="list__wrap">
      <li>
        <p class="title">白葡萄</p>
        <ul>
          <li><img src="@/assets/img/wuhouqi/_0000_1-1.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0001_1-2.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0002_1-3.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0003_1-4.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0004_1-5.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0005_1-6.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0006_1-7.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0007_1-8.png" alt=""></li>
          <li><div>休眠期</div></li>
        </ul>
      </li>
      <li>
        <p class="title">红葡萄</p>
        <ul>
          <li><img src="@/assets/img/wuhouqi/_0008_2-1.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0009_2-2.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0010_2-3.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0011_2-4.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0012_2-5.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0013_2-6.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0014_2-7.png" alt=""></li>
          <li><img src="@/assets/img/wuhouqi/_0015_2-8.png" alt=""></li>
          <li><div>休眠期</div></li>
        </ul>
      </li>
    </ul>



  </div>
</template>
<script>
  import mySelect from '../Public/Select'
  export default {
    components: {
      mySelect
    },




  }


</script>
<style lang="stylus" scoped>
.scene_container
  padding 35px
  .scene_hd
    display flex
    align-items center
    justify-content space-between
    p
      color #FFF
      font-size 16px
        
  .list__wrap
    li 
      position relative
      padding-top 22px
      ul 
        display flex
        align-items center
        justify-content space-between
        padding-left 12%
        li 
          img 
            max-width 80px
            max-height 80px












    // ul 
    //   padding-top 16px
    //   display grid
    //   grid-template-columns 1fr 1fr
    //   grid-column-gap 12px
    //   grid-row-gap 12px
    //   li 
    //     position relative
    //     .tips 
    //       position absolute
    //       left 0
    //       top 0
    //       background-image url('../../assets/img/main/line.png')
    //       width 100%
    //       height 30px
    //       line-height 30px
    //       font-size 12px
    //       background-size 100% 100%
    //       padding-left 12px
    //       box-sizing border-box

</style>
