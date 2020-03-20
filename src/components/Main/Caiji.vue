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
        <li class="caiji_list__item" v-for="(item, index) in list" :key="item">
          <i>{{index + 1}}</i>
          <p class="city">{{item.city}}</p>
          <p>{{item.num}}</p>
          <span>条</span>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            city: '北京市',
            num: '541545'
          },{
            city: '天津市',
            num: '52454'
          },{
            city: '石家庄市',
            num: '415454'
          },{
            city: '保定市',
            num: '54589452415'
          },{
            city: '太原市',
            num: '54545454'
          },{
            city: '赤峰市',
            num: '458531545'
          },{
            city: '沈阳市',
            num: '166354786'
          },{
            city: '朝阳市',
            num: '5471464845'
          },{
            city: '辽源市',
            num: '654195'
          },{
            city: '鹤岗市',
            num: '56487'
          },{
            city: '上海市',
            num: '684789896'
          },{
            city: '连云港市',
            num: '987634'
          },{
            city: '杭州市',
            num: '19872634891'
          },{
            city: '台州市',
            num: '19082491'
          },{
            city: '蚌埠市',
            num: '19847'
          },
        ]
      }
    }
  }
</script>
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
          p
            width 80px
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
