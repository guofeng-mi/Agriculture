<!--
 * @Descripttion:
 -->
<template>
  <div class="rn_con">
    <div class="content">
      <div class="close" @click="close()">
        <span class="iconfont">&#xe600;</span>
      </div>
      <div class="title">
        <div>
          <span>巡园</span>
          <b>临时任务</b>
        </div>
        <p>
          优先级：高 <i>!</i>
        </p>
      </div>
      <p class="tips">寻园 - <span>A 点 B 点拍照</span></p>
      <div class="title2">
        <p>东丽旺旺葡萄园</p>
        <p>
          <i>用工量：2人</i>
          <span>!!任务未开始</span>
        </p>
      </div>
      <div class="bg">
        <div class="item">
          <img src="@/assets/img/clock.png" alt="">
          <p>计划完成时间</p>
          <span>2019-06-04</span>
        </div>
        <div class="item">
          <img src="@/assets/img/todo.png" alt="">
          <p>上次任务</p>
          <span>--</span>
        </div>
        <div class="item">
          <img src="@/assets/img/todo.png" alt="">
          <p>后续任务</p>
          <span>--</span>
        </div>
      </div>
      <p style="padding: 16px 12px">巡园记录</p>
      <div class="post_wrap">
        <img src="@/assets/img/map_1.jpg" alt="">
      </div>
      <div class="btn_wrap">
        <i-button>忽略任务</i-button>
        <i-button type="success" @click="changeDikuaiStatus('cone_xy_done')">确认完成任务</i-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  name: '',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
        headerStatus: state => state.headerStatus,
        dikuaiStatus: state => state.dikuaiStatus
    })
  },
  methods: {
    close() {
      this.$emit('close','close')
    },
    changeHeaderStatus(status) {
      this.$store.commit('changeHeaderStatus', status);
    },
    changeDikuaiStatus(status) {
      this.$store.commit('changeDikuaiStatus', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.rn_con
  position fixed
  left 0
  top 0
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  z-index 10
  .content
    width 600px
    background #FFF
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    .close
      position absolute
      right 16px
      top 16px
      cursor pointer
    .title
      display flex
      align-items center
      justify-content space-between
      padding 50px 12px 12px 12px
      span
        background $green_1_Color
        color #FFF
        padding 2px 12px
        font-size 12px
        margin-right 6px
      p
        color rgba(0,0,0,.6)
        i
          color red
          font-weight 600
    .tips
      padding 12px
      span
        opacity .6
    .title2
      display flex
      justify-content space-between
      padding 22px 12px
      i
        font-size 13px
        opacity .5
        padding-right 12px
        display inline-block
      span
        background #EEE
        font-size 12px
        padding 5px 8px
    .bg
      background $btnColor
      padding 16px 40px
      .item
        display flex
        align-items center
        padding 4px 0
        img
          width 16px
          height 16px
        p
          padding-left 8px
          width 200px
    .syd
      overflow hidden
      .sro
        padding-left 50px
        display flex
        overflow-x scroll
        .list
          background $btnColor
          padding 12px
          border-radius 6px
          margin-right 12px
          div
            width 120px
            padding-top 12px
            display flex
            justify-content space-between
            align-items center
            white-space nowrap
            b
              font-weight 600
    .post_wrap
      padding 0 30px
      img
        width 100%
        height 100%
        max-width 500px
    .btn_wrap
      text-align center
      padding 40px
      button
        padding 2px 0
        border-radius 0
        width 150px
        margin 0 22px





</style>
