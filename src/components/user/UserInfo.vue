<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logic
 * @Date: 2020-01-13 11:22:03
 * @LastEditors  : Logic
 * @LastEditTime : 2020-01-17 13:52:43
 -->
<template>
  <div class="info_wrap">
    <div class="box">
      <div class="in_close">
        <span class="iconfont" @click="changeGlobalStatus('false')">&#xe600;</span>
      </div>
      <div class="title">
        <p style="font-size: 16px;">账号管理</p>
      </div>
      <div class="if_hd">
        <div class="item" :class="status == 1 ? 'active' : ''" @click="status = 1">
          <p>身份资料</p>
        </div>
        <div class="item" :class="status == 2 ? 'active' : ''" @click="status = 2">
          <p>修改密码</p>
        </div>
      </div>
      <div class="con_gs" v-if="status == 1">
        <div class="item">
          <div class="k">
            <p>用户名</p>
          </div>
          <div class="v">
            <input type="text">
          </div>
        </div>
        <div class="item">
          <div class="k">
            <p>姓名 <i>*</i></p>
          </div>
          <div class="v">
            <input type="text">
          </div>
        </div>
        <div class="item">
          <div class="k">
            <p>邮箱</p>
          </div>
          <div class="v">
            <input type="text">
          </div>
        </div>
        <div class="item">
          <div class="k">
            <p>电话 <i>*</i></p>
          </div>
          <div class="v">
            <input type="text">
          </div>
        </div>
        <div class="item textarea">
          <div class="k">
            <p>备注</p>
          </div>
          <div class="v">
            <textarea name="" cols="30" rows="4"></textarea>
          </div>
        </div>
        <div class="item head">
          <div class="k">
            <p>头像</p>
          </div>
          <div class="v">
            <div class="camera">
              <span class="iconfont">&#xe74a;</span>
            </div>
          </div>
        </div>

        <div class="if_btn_wrap">
          <i-button>取消</i-button>
          <i-button type="success">保存</i-button>
        </div>
      </div>
      <div class="con_eq" v-if="status == 2">
        <div class="item">
          <div class="k">
            <p>原密码<i>*</i></p>
          </div>
          <div class="v">
            <input type="password">
          </div>
        </div>
        <div class="item">
          <div class="k">
            <p>新密码 <i>*</i></p>
          </div>
          <div class="v">
            <input type="password">
          </div>
        </div>
        <div class="item">
          <div class="k">
            <p>新密码确认 <i>*</i></p>
          </div>
          <div class="v">
            <input type="password">
          </div>
        </div>
        <div class="if_btn_wrap">
          <i-button type="success">保存</i-button>
        </div>
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
      name: '',
      status: 1
    }
  },
  computed: {
      ...mapState({
          globalStatus: state => state.globalStatus
      })
  },
  methods: {
    changeGlobalStatus (status) {
      this.$store.commit('changeGlobalStatus', status);
    }
  }
}
</script>
 
<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.info_wrap
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  position fixed
  left 0
  top 0
  z-index 9
  .box
    background #FFF
    width 800px
    min-height 60vh
    padding 22px
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    border-radius 2px
    .in_close
      opacity .6
      position absolute
      right 16px
      top 16px
      cursor pointer
    .if_hd
      display flex
      align-items center
      justify-content center
      .item
        padding 4px 62px
        cursor pointer
        border 1px solid #EEE
      .active
        border-color $minColor
        background $minColor
        color #FFF
    .con_gs
      padding 50px 30px 30px 186px
      .item
        display flex
        align-items center
        padding-bottom 22px
        .k 
            width 80px
        .v 
          input
            border none
            outline none
            padding 4px 6px
            background $btnColor
            width 300px
          textarea
            border none
            outline none
            padding 6px
            background $btnColor
            resize none
            width 300px
          .camera
              width 60px
              height 60px
              background $btnColor
              display flex
              align-items center
              justify-content center
              cursor pointer
              color rgba(0,0,0,.2)
      .textarea
        align-items flex-start
        .k
          p
            padding-top 6px
      .head
        align-items flex-start
        .k
          p
            padding-top 6px
      .if_btn_wrap
        button 
          margin 0 12px
          padding 2px 70px
          border-radius 0
    .con_eq
      padding 50px 30px 30px 160px
      .item
        display flex
        align-items center
        padding-bottom 22px
        .k 
            width 100px
            i 
              color $green_1_Color
        .v 
          input
            border none
            outline none
            padding 4px 6px
            background $btnColor
            width 300px
      .if_btn_wrap
        padding-top 220px
        padding-left 80px
        button 
          padding 2px 60px
          border-radius 0
</style>