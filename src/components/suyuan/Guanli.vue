<!--
 * @Descripttion: 溯源管理
 -->
<template>
  <div class="gl_container">
    <div class="list">
      <Col span="6" v-for="item in 7">
        <div class="item">
          <div class="top">
            <div class="left">
              <p class="title">阳光玫瑰</p>
              <div class="num">
                <div>12</div>
                <span>已有批次</span>
              </div>
            </div>
            <div class="right">
              <img src="@/assets/img/map_2.jpg" />
            </div>
          </div>
          <div class="s" style="padding-top: 32px;">
            <p class="l">种样产品</p>
            <p class="r">葡萄</p>
          </div>
          <div class="s">
            <p class="l">品种</p>
            <p class="r">阳光玫瑰</p>
          </div>
          <div class="s">
            <p class="l">种植时间</p>
            <p class="r">2018-4-12</p>
          </div>
        </div>
      </Col>
    </div>

    <div class="guollv">
      <Input v-model="test" icon="md-search" placeholder="搜索" />
      <div class="time">
        <div class="title">日期</div>
        <div class="diy">
          <div class="diy_left">
            <i class="t"></i>
            <p>至</p>
            <i class="b"></i>
          </div>
          <div class="diy_right">
            <DatePicker type="date" placeholder="Select date"></DatePicker>
            <DatePicker type="date" placeholder="Select date"></DatePicker>
          </div>
        </div>
      </div>

      <div class="btn">
        <Button type="success" @click="show = true">创建出园商品</Button>
      </div>
    </div>

    <!--创建出园商品-->
    <GlAdd @close="close" v-show="show"></GlAdd>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import GlAdd from './GlAdd'
export default {
  name: '',
  components: {
      GlAdd
  },
  data () {
    return {
      show: false,
      test: ''
    }
  },
  computed: {
    ...mapState({
      tableStatus: state => state.tableStatus
    })
  },
  methods: {
    close(val) {
      console.log(val)
      this.show = false;
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.gl_container
  display flex
  .list
    padding 20px 250px 20px 50px
    .item
      background #FFF
      padding 12px
      border-radius 4px
      margin 0 6px 12px 6px
      .top
        display flex
        justify-content space-between
        align-items center
        img
          height 60px
          width 60px
        .title
          font-size 16px
        .num
          display flex
          align-item center
          padding-top 12px
          div
            width 30px
            height 30px
            background $green_1_Color
            text-align center
            line-height 30px
            color #FFF
            font-weight 600
            border-radius 50%
            margin-right 12px
          span
            line-height 30px
      .s
        display flex
        justify-content space-between
        align-items center
        border-bottom 1px solid rgba(0,0,0,.1)
        padding 12px 0
  .guollv
    width 200px
    background #FFF
    padding 20px
    height calc(100vh - 84px)
    position fixed
    right 101px
    top 84px
    .time
      padding-top 30px
      .diy
        padding-top 20px
        display flex
        align-items center
        .diy_left
          padding-right 12px
          p
            padding 4px 0
            opacity 0.6
          i
            display block
            padding 8px 3px
            border 1px solid rgba(0,0,0,.1)
            margin-left 5px
            border-right-color transparent
          .t
            border-bottom-color transparent
          .b
            border-top-color transparent

        .diy_right
          .ivu-date-picker
            padding 6px 0
    .btn
      position absolute
      bottom 20px
      button
        width 160px

</style>
