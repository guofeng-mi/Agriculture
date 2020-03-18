<template>
  <div class="scene_container">
    <div class="scene_hd">
      <p>生产现场</p>
    </div>

    <div class="scene_poster_wrap">
      <div class="item" v-for="item in 6" :key="item">
        <img src="@/assets/img/dk_p_1.png" alt="">
      </div>
    </div>

  </div>
</template>
<style lang="stylus" scoped>
  .scene_container
    padding 12px
    .scene_hd
      p
        color #46c183
        font-size 16px
    .scene_poster_wrap
      padding-top 12px
      display grid
      grid-template-columns 1fr 1fr 1fr
      grid-column-gap 12px
      grid-row-gap 12px
      .item
        height 88px
        img
          max-width 100%
          max-height 100%
          width 100%
          height 100%



</style>
