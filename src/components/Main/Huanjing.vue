<template>
  <div class="huanjing_container">

    <div class="huanjing_hd_wrap">
      <p>环境监测</p>
      <span>01-21</span>
      <span>11:15</span>
    </div>

    <!--选择气象站-->
    <div class="huanjing_location_wrap">
      <img src="@/assets/img/location.png" alt="">
      <p>12356</p>
      <Select v-model="test" size="small" style="width:80px">
        <Option value="1">气象站</Option>
      </Select>
    </div>

    <ul class="huanjing_list_wrap">
        <Col span="6" class="huanjing_list__item" v-for="item in list" :key="item.name">
          <div>
            <p>{{item.num}}</p>
          </div>
          <span>{{item.name}}</span>
        </Col>
    </ul>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        test: '',
        list: [
          {
            name: '空气温度',
            num: 23.8
          },{
            name: '空气湿度',
            num: 35
          },{
            name: '光照强度',
            num: 128
          },{
            name: '风向',
            num: '西南'
          },{
            name: '风速',
            num: 0
          },{
            name: '降雨量',
            num: 0
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
.huanjing_container
  padding 12px
  .huanjing_hd_wrap
    display flex
    align-items center
    justify-content space-between
    p
      flex 1
      font-size 16px
      color #46C183
    span
      padding-left 12px
      font-size 13px
  .huanjing_location_wrap
    display flex
    align-items center
    justify-content space-between
    padding 12px 0
    p
     flex 1
     padding-left 6px
  .huanjing_list_wrap
    display flex
    flex-wrap wrap
    .huanjing_list__item
      display flex
      flex-direction column
      align-items center
      padding-bottom 20px
      div
        color #FFF
        border-radius 50%
        padding 3px
        width 42px
        height 42px
        background rgba(92, 208, 149, .5)
        p
          width 36px
          height 36px
          border-radius 50%
          background #46C183
          line-height 36px
          text-align center
          font-size 12px
          overflow hidden
      span
        font-size 12px
        display block
        padding 6px 0









</style>
