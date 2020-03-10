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
          <span>采集</span>
          <b>标准任务</b>
        </div>
        <p>
          优先级：高 <i>!</i>
        </p>
      </div>
      <p class="tips">采集任务三 - <span>1.天气晴朗施药,稀释50倍,发芽前全面喷布枝干   2.发芽前全面喷布枝干</span></p>
      <div class="title2">
        <p>东丽旺旺葡萄园</p>
        <span>!!任务未开始</span>
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
      <p style="padding: 16px 12px">采集数据</p>
      <div class="tb_hd">
        <p>采集点</p>
        <p>指标</p>
        <p>数据</p>
        <p>采集部位</p>
      </div>
      <div class="scr_wrap">
        <div class="scr_con">
          <div class="item" v-for="item in 5">
            <div class="td">
              <p>{{item}}</p>
            </div>
            <div class="td">
              <p>枝长总长</p>
            </div>
            <div class="td">
              <Input-number :max="10" :min="1" style="width: 100px" :value="1" size="small"></Input-number>
              <span>厘米</span>
            </div>
            <div class="td">
              <p>其他</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_wrap">
        <i-button>忽略任务</i-button>
        <i-button type="success">确认完成任务</i-button>
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
    .tb_hd
      padding 12px
      background $btnColor
      display flex
      justify-content space-between
      p
        flex 1
        text-align left
        &:nth-child(4)
          text-align right
    .scr_wrap
      overflow hidden
      .scr_con
        height 100%
        max-height 150px
        overflow-y scroll
        width 120%
        padding-right 17%
        .item
          display flex
          align-items center
          justify-content space-between
          padding 8px 12px
          .td
            flex 1
            text-align left
            span
              padding-left 8px
            &:nth-child(4)
              text-align right
          &:nth-child(even)
            background $btnColor
    .btn_wrap
      text-align center
      padding 40px
      button
        padding 2px 0
        border-radius 0
        width 150px
        margin 0 22px






</style>
