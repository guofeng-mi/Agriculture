<!--
 * @Descripttion: 设备列表
 -->
<template>
  <div class="shebei_content">
    <div class="kq_hd">
      <h3>设备列表</h3>
      <Icon type="md-close" style="font-size: 18px;" @click="eqClose()" />
<!--      <span class="iconfont" @click="eqClose()">&#xe62c;</span>-->
    </div>
    <div class="item" v-for="item in 6" :key="item">
      <div class="left">
        <span class="iconfont">&#xe62c;</span>
        <p>设备</p>
      </div>
      <div class="right">
        <p>1</p>
      </div>
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
    eqClose() {
      this.$emit('eqClose', 'close')
    },
    changeRightStatus (status) {
      this.$store.commit('changeHomeState', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.shebei_content
  position relative
  width 100%
  height 100%
  background #FFF
  .kq_hd
    display flex
    align-items center
    justify-content space-between
    padding 12px
    h3
      font-weight 600
      font-size 15px
    span
      color $minColor
      cursor pointer
  .item
    display flex
    align-items center
    justify-content space-between
    margin 0 12px
    border-bottom 1px solid #EEE
    padding 22px 0
    color rgba(0,0,0,.5)
    .left
      display flex
      align-items center
      p
        padding-left 6px
    .right
      font-weight 600

</style>
