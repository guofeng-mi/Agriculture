<!--
 * @Descripttion: 天气详情
 -->
<template>
  <div class="weather_container">
    <div class="we_close">
      <Icon type="md-close" @click="close()" />
    </div>
    <div class="we_tab">
      <p :class="tabStatus == 0 ? 'active' : ''" @click="tabStatus = 0">近3日趋势预报</p>
      <p :class="tabStatus == 1 ? 'active' : ''" @click="tabStatus = 1">24小时天气详情</p>
    </div>

    <ul class="we_list_wrap">
      <li class="we_list_item" v-for="item in 3" :key="item">
        <div class="_item_hd">
          <span>今天</span>
          <span>12:10</span>
        </div>
        <p class="_item_we">晴</p>
        <div class="_item_f">
          <span>东南风1-2级</span>
          <Icon type="ios-water-outline" />
          <span>5.2%</span>
        </div>
        <div class="_item_hot">
          <span>最高温度</span>
          <span>22℃</span>
        </div>
        <div class="_item_low">
          <span>最高温度</span>
          <span>22℃</span>
        </div>
        <div class="_item_eq">
          <div>
            <img src="@/assets/img/weather_01.png" alt="">
            <p>降水概率</p>
            <span>0<i>%</i></span>
          </div>
          <div>
            <img src="@/assets/img/weather_02.png" alt="">
            <p>大气压力</p>
            <span>997<i>hpa</i></span>
          </div>
        </div>
      </li>
    </ul>

    <div class="we_btn_wrap">
      <Button type="success">关闭</Button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: '',
    components: {

    },
    data () {
      return {
        test: '',
        tabStatus: 0
      }
    },
    mounted(){

    },
    computed: {
      ...mapState({
        tableStatus: state => state.tableStatus
      })
    },
    methods: {
      close() {
        console.log("weclose")
        this.$emit('weclose', 'weclose')
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.weather_container
  width 900px
  padding 50px
  background #FFF
  position fixed
  left 50%
  top 50%
  transform translate(-50%, -50%)
  box-shadow 3px 3px 6px rgba(0,0,0,.1), -3px -3px 6px rgba(0,0,0,.1)
  border-radius 3px
  .we_close
    position absolute
    top 16px
    right 16px
    font-size 24px
    cursor pointer
  .we_tab
    display flex
    justify-content center
    p
      border 1px solid rgba(0,0,0,.3)
      padding 4px 32px
      cursor pointer
    .active
      color #FFF
      background #1FBA75
      border-color #1FBA75
  .we_list_wrap
    display flex
    justify-content space-between
    padding-top 30px
    .we_list_item
      background #EFF3FF
      padding 20px 30px
      flex 1
      border-radius 3px
      ._item_hd
        display flex
        justify-content space-between
      ._item_we
        font-size 18px
        padding-top 16px
        color #1FBA75
        font-width 600
      ._item_f
        display flex
        justify-content space-between
        padding-top 6px
        font-size 13px
        opacity 0.9
      ._item_hot
        padding-top 46px
        display flex
        justify-content space-between
        font-size 13px
      ._item_low
        padding-top 6px
        display flex
        justify-content space-between
        border-top 1px solid rgba(0,0,0,.1)
        margin-top 6px
        font-size 13px
      &:nth-child(2)
        margin 0 30px
      ._item_eq
        display flex
        justify-content center
        padding-top 50px
        div
          display flex
          flex-direction column
          align-items center
          p
            font-size 12px
            padding-top 8px
            opacity 0.9
          span
            font-size 18px
            color #222
            padding-top 12px
            font-weight bold
            i
              font-size 13px
              opacity 0.8
              font-weight 400
          &:first-child
            padding-right 22px
            border-right 1px solid rgba(0,0,0,.1)
            margin-right 22px
  .we_btn_wrap
    font-size 14px
    text-align center
    padding-top 50px
    button
      border-radius 0
      padding 4px 0
      width 160px



</style>
