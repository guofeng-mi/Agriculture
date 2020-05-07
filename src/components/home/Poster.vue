<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-16 09:59:22
 -->
<template>
  <div class="poster_container">
    <img src="@/assets/img/dk_p_1.png" alt="">
    <div class="poster__btn__wrap">
      <p>地块1</p>
      <Icon type="ios-arrow-dropleft-circle" />
      <Icon type="ios-arrow-dropright-circle" />
      <!-- <Button type="primary" size="small" shape="circle" icon="md-arrow-back"></Button>
      <Button type="primary" size="small" shape="circle" icon="md-arrow-forward"></Button> -->
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        url: require('../../assets/img/dk_p_1.png'),
        index: 0
      }
    }
  }
</script>
<style lang="stylus" scoped>
.poster_container
  position relative
  padding 20px 20px 12px 20px
  box-shadow 0 0 6px 6px rgba(0,0,0,.05)
  border-radius 6px
  img
    width 100%
    height 100%
  
  .poster__btn__wrap
    display flex
    align-items center
    justify-content space-between
    padding-top 12px
    p 
      flex 1
    i
      margin-left 12px
      font-size 26px
      cursor pointer
  // .poster__btn__wrap
  //   position absolute
  //   right 6px
  //   bottom 6px
  //   button
  //     margin-left 6px
</style>
