<template>
  <div class="rw_requirement_container">

    <div class="requirement__title">
      <p>任务要求</p>
    </div>

    <div class="requirement__wrap">
      <textarea v-model="yqVal" name="" placeholder="请输入" id="" cols="30" rows="4"></textarea>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        yqVal: ''
      }
    },
    watch: {
      yqVal() {
        this.$emit('yaoqiuSend', this.yqVal);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .rw_requirement_container
    .requirement__title
      background #eff3ff
      display flex
      align-items center
      justify-content space-between
      padding 0 40px
      height 40px

    .requirement__wrap
      padding 12px 40px
      textarea
        resize none
        width 100%
        border 1px solid rgba(0,0,0,.1)
        padding 12px

</style>
