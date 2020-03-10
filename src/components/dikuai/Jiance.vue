<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-01-21 13:18:42
 * @LastEditTime : 2020-01-21 13:26:15
 -->
<template>
  <div class="jiance_container">
    <div class="close">
      <span class="iconfont">&#xe600;</span>
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
    
  }
}
</script>
<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.jiance_container
  position relative
  background #FFF
  height calc(100vh - 83px)
  .close
    position fixed
    right 76px
    top 96px
    span 
      color $minColor_b
      cursor pointer















</style>