<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-04-23 11:15:35
 -->
<template>
  <div class="com-pub-select__wrap">
    <div class="select" :style="{width: width}" @click="show = !show">
      <p>{{placeholder}}</p>
      <Icon type="ios-arrow-down" />
    </div>
    <ul v-show="show">
      <li v-for="item in 5" :key="item" @click="show = false">{{item}}</li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: '',
  data () {
    return {
      placeholder: '请选择',
      width: '100px',
      show: false

    }
  },
}
</script>
 
<style scoped lang="stylus">
.com-pub-select__wrap
  position relative


  .select
    position relative
    display flex
    align-items center
    justify-content space-between
    background linear-gradient(to right, #002D64, #005CCD)
    min-width 50px
    padding 6px
    box-sizing border-box
    border-radius 10px
    cursor pointer
    p
      white-space nowrap
      overflow hidden
      text-overflow ellipsis

  
  ul
    position absolute
    left 0
    top 30px
    width 100%
    border-radius 4px
    overflow hidden
    z-index 10
    li
      text-align center
      background #FFF
      line-height 22px
      margin-bottom 1px
      cursor pointer
      color #333
      &:hover
        background #EEE
        color #034693


</style>