<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-19 16:49:08
 * @LastEditTime : 2020-01-19 17:49:12
 -->
<template>
  <div class="nongzicon_bg">
    <div class="nongzicon_con">
      <div class="nz_hd">
        <span class="iconfont">&#xe601;</span>
        <span class="iconfont" @click="close()">&#xe600;</span>
      </div>
      <div class="content">
        <div class="left box">
          <div class="title">
            <p>羊粪</p>
            <span>剩余库存</span>
          </div>
          <div class="btn_wrap">
            <span>肥料</span>
            <p>
              <b>200000</b>
              <i>克</i>
            </p>
          </div>
          <div class="info">
            <span>建议库存</span>
            <p>
              <b>0克</b>
              <img src="@/assets/img/info.png" alt="">
            </p>
          </div>
          <div class="item">
            <p>最小库存提醒</p>
            <div class="inp">
              <Input-number :max="10" :min="1" :value="1"></Input-number>
              <span>克</span>
            </div>
          </div>
          <div class="item">
            <p>最大库存提醒</p>
            <div class="inp">
              <Input-number :max="10" :min="1" :value="1"></Input-number>
              <span>克</span>
            </div>
          </div>
        </div>
        <div class="right box">
          <div class="title">使用明细</div>
          <div class="con">
            <div class="tip">
              <div class="s s1">出库</div>
              <div class="s s2">入库</div>
            </div>
            <div class="scr">
              <div class="l">
                <div class="title">
                  <span>7400000克</span>
                  <i>2019-12-12</i>
                </div>
                <p>CRD89651299774145</p>
                <div class="info">
                  <span>田诚慧生态产业园区</span>
                  <span>云管家</span>
                </div>
              </div>
              <div class="l" style="padding-top: 50px;">
                <div class="title">
                  <span class="g">7400000克</span>
                  <i>2019-12-12</i>
                </div>
                <p>CRD89651299774145</p>
                <div class="info">
                  <span>田诚慧生态产业园区</span>
                  <span>云管家</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_wrap">
        <i-button>取消</i-button>
        <i-button type="success">确定</i-button>
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
      globalStatus: state => state.globalStatus
    })
  },
  methods: {
    close () {
      this.$emit('closeCon', 'close');
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.nongzicon_bg
  .nongzicon_con
    width 700px
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background #FFF
    box-shadow $inp_shadow
    border-radius 4px
    .nz_hd
      display flex
      justify-content space-between
      align-items center
      padding 12px 12px 32px 32px
      span
        font-weight 600
        opacity .5
        cursor pointer
    .content
      display flex
      padding 0 50px
      .left
        width 45%
        padding-right 12%
        .title
          display flex
          align-items center
          justify-content space-between
          span
            opacity .6
            font-size 13px
        .btn_wrap
          display flex
          align-items center
          justify-content space-between
          padding 12px 0
          span
            color #FFF
            background $green_1_Color
            padding 4px 12px
            font-size 12px
          b
            font-weight 600
        .info
          display flex
          align-items center
          justify-content space-between
          padding-top 16px
          p
            display flex
            align-items center
            img
              width 16px
              height 16px
              margin-left 4px
        .item
          padding-top 18px
          p
            padding-bottom 12px
          .inp
            display flex
            align-items center
            justify-content space-between
            .ivu-input-number
              width 100%
            span
              padding-left 12px
      .right
        width 50%
        position relative
        margin-left 5%
        .con
          padding-top 22px
          display flex
          width 100%
          .tip
            height 180px
            position absolute
            left 0
            .s
              position absolute
              width 50px
              height 50px
              line-height 50px
              text-align center
              color #FFF
              border-radius 50%
            .s1
              background $red_1
              top 0
              left 0
            .s2
              background $green_1_Color
              bottom 0
              left 0
          .scr
            padding-left 70px
            width 100%
            box-sizing border-box
            .l
              .title
                display flex
                align-items center
                justify-content space-between
                padding-bottom 16px
                span
                  color $red_1
                .g
                  color $green_1_Color
                i
                  opacity .6
                  font-size 12px
            p
              opacity .6
            .info
                display flex
                justify-content space-between
                padding-top 16px
                span:first-child
                  opacity .8
                  font-size 13px
    .btn_wrap
      text-align center
      padding 60px 0
      button
        padding 4px 50px
        border-radius 0
        margin 0 12px






</style>
