<!--
 * @Descripttion: 地块底部设备
 * @version:
 * @Date: 2020-01-09 13:20:14
 * @LastEditTime : 2020-02-24 15:16:17
 -->
<template>
    <div class="dk_footer">
      <div class="item">
        <i></i>
        <p>正常连接（1）</p>
      </div>
      <div class="item">
        <i></i>
        <p>传感预警（2）</p>
      </div>
      <div class="item">
        <i></i>
        <p>正常运行（3）</p>
      </div>
      <div class="item">
        <i></i>
        <p>设备离线（4）</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: '',
  }
</script>
<style lang="stylus" scoped>
.dk_footer
  display flex
  align-items center
  justify-content center
  width 100%
  .item
    display flex
    align-items center
    padding 12px 22px
    i
      display block
      width 16px
      height 16px
      border-radius 50%
      background red
      margin-right 6px
    &:nth-child(1)
      i
        background #56D497
    &:nth-child(2)
      i
        background #FB835A
    &:nth-child(3)
      i
        background #8AC7ED
    &:nth-child(4)
      i
        background #BFBFBF

</style>
