<template>
  <div class="addBtn_container">
    <div class="con" @click="changeParkShow('add')">
      <img src="@/assets/img/add_on.png" alt="">
      <p>新建地块</p>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      changeParkShow(status) {
        this.$store.commit('changeParkShow', status)
      }
    }
  }
</script>
<style lang="stylus" scoped>
.addBtn_container
  margin-top 22px
  padding 32px
  background #FFF
  border-radius 6px
  .con
    display flex
    flex-direction column
    align-items center
    justify-content center
    width 100%
    height 100px
    border 2px dashed rgba(0,0,0,.05)
    border-radius 6px
    p
      padding-top 6px
      cursor pointer
    img
      padding-top 6px
      cursor pointer
</style>
