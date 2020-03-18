<template>
  <div class="rw_ready_container">

    <div class="ready__title">
      <p>准备工作</p>
      <div class="ready__add">
        <Icon type="ios-plus-outline"></Icon>
        <span>添加</span>
      </div>
    </div>

    <div class="ready__table__wrap">
      <div class="ready__table__item" v-for="item in 4" :key="item">
        <div class="ready__table__inp">
          <i-input :value.sync="value" placeholder="请输入..."></i-input>
        </div>
        <img src="@/assets/img/del.png" alt="">
      </div>


    </div>


  </div>
</template>
<style lang="stylus" scoped>
  .rw_ready_container
    .ready__title
      background #eff3ff
      display flex
      align-items center
      justify-content space-between
      padding 0 40px
      height 40px

    .ready__table__wrap
      .ready__table__item
        display flex
        align-items center
        justify-content space-between
        height 45px
        padding 0 40px
        .ready__table__inp
          width 100%
          padding-right 12px
        img
          cursor pointer





</style>
