<template>
  <div class="caiji_container">
    <div class="caiji_hd_wrap">
      <div class="caiji_hd_title">采集数据统计</div>
      <div class="caiji_hd_count">
        <p>554489846</p>
        <span>条数据</span>
      </div>
    </div>

    <div class="caiji_line">
      <p>地区</p>
      <p>数据量</p>
    </div>

    <div class="caiji_scro_box">
      <ul class="caiji_list">
        <li class="caiji_list__item" v-for="(item, index) in 22" :key="item">
          <i>{{index + 1}}</i>
          <p>广西</p>
          <p>465161565</p>
          <span>条</span>
        </li>
      </ul>
    </div>

  </div>
</template>
<style lang="stylus" scoped>
  .caiji_container
    padding 22px 40px
    .caiji_hd_count
      display flex
      align-items center
      justify-content space-between
      padding-top 18px
      p
        font-weight 600
        opacity 0.9
      span
        font-size 13px

    .caiji_line
      display flex
      justify-content space-around
      border-top 1px solid #EEE
      border-bottom 1px solid #EEE
      margin 32px 0 12px 0
      padding 12px 20px
    .caiji_scro_box
      width 100%
      overflow-x hidden
      .caiji_list
        width calc(100% + 115px)
        padding-right 100px
        height 466px
        overflow-y scroll
        .caiji_list__item
          display flex
          padding 6px 0
          justify-content space-between
          i
            display block
            font-style normal
            background #5DD095
            color #FFF
            width 18px
            line-height 18px
            text-align center
            font-size 12px
            border-radius 2px





</style>
