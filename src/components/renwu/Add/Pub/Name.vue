<!--任务标题-->
<template>
  <div class="rw_name_container">
    <p>任务标题</p>
    <i-input v-model="text" placeholder="请输入..."></i-input>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    watch: {
      text(val) {
        this.$emit('sendName', val)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .rw_name_container
    display flex
    align-items center
    padding 12px 40px
    p
      white-space nowrap
      padding-right 40px



</style>
