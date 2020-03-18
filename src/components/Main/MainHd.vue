<template>
  <div class="main__hd">
    <div class="main__logo">平台LOGO</div>
    <div class="main__title">平台名称</div>
    <div class="main__ctrl">
      <img src="@/assets/img/manage.png" alt="">
      <p>管理</p>
      <img src="@/assets/img/user.png" alt="">
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.main__hd
  display flex
  align-items center
  justify-content space-between
  padding 0 20px
  height 60px
  box-shadow 0 2px 4px rgba(0,0,0,.03)
  background #FFF
  .main__logo
    font-size 26px
  .main__title
    font-size 18px
  .main__ctrl
    display flex
    align-items center
    img
      cursor pointer
      &:first-child
        height 18px
      &:last-child
        height 22px
    p
      margin-left 12px
      margin-right 50px
      cursor pointer
</style>
