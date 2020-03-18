<template>
  <div class="poster_container">
    <img src="@/assets/img/dk_p_1.png" alt="">
    <div class="poster__btn__wrap">
      <Button type="primary" size="small" shape="circle" icon="md-arrow-back"></Button>
      <Button type="primary" size="small" shape="circle" icon="md-arrow-forward"></Button>
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
  width 100%
  height 100%
  img
    width 100%
    height 100%
  .poster__btn__wrap
    position absolute
    right 6px
    bottom 6px
    button
      margin-left 6px
</style>
