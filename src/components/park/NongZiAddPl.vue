<!--
 * @Descripttion:
 * @version:
 * @Author: Logic
 * @Date: 2020-01-19 15:24:46
 * @LastEditors  : Logic
 * @LastEditTime : 2020-01-19 16:19:26
 -->
<template>
  <div class="nongziadd_bg">
    <div class="nongziadd">
      <div class="hd">
        <div class="title">农资信息</div>
        <div class="close">
          <span class="iconfont" @click="close()">&#xe600;</span>
        </div>
      </div>
      <div class="ctrl">
        <p :class="status == 1 ? 'active' : ''" @click="status = 1">农药</p>
        <p :class="status == 2 ? 'active' : ''" @click="status = 2">化肥</p>
        <p :class="status == 3 ? 'active' : ''" @click="status = 3">种子</p>
        <p :class="status == 4 ? 'active' : ''" @click="status = 4">饲料</p>
        <p :class="status == 5 ? 'active' : ''" @click="status = 5">疫苗</p>
        <p :class="status == 6 ? 'active' : ''" @click="status = 6">其他</p>
      </div>

      <div class="content">
        <div class="br" v-if="status == 1">
          <Radio-group v-model="test">
              <Radio label="1">1</Radio>
              <Radio label="2">2</Radio>
              <Radio label="3">3</Radio>
              <Radio label="4">4</Radio>
              <Radio label="5">5</Radio>
              <Radio label="6">6</Radio>
              <Radio label="7">7</Radio>
              <Radio label="8">8</Radio>
              <Radio label="9">9</Radio>
              <Radio label="10">10</Radio>
              <Radio label="11">11</Radio>
          </Radio-group>
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
  components: {

  },
  data () {
    return {
      test: '',
      status: 1
    }
  },
  computed: {
      ...mapState({
          globalStatus: state => state.globalStatus
      })
  },
  methods: {
    close() {
      this.$emit('close', 'close')
    },
    changeGlobalStatus (status) {
      this.$store.commit('changeGlobalStatus', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.nongziadd_bg
  position absolute
  left 0
  top 0
  width 100%
  height 100vh
  z-index 15
  background rgba(0,0,0,.5)
  .nongziadd
    width 800px
    background #FFF
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    border-radius 4px
    box-shadow $inp_shadow
    .hd
      display flex
      align-items center
      justify-content space-between
      padding 16px
      .close
        cursor pointer
        text-align right
      .title
        font-size 16px
        padding 4px 30px
    .ctrl
      margin 12px 150px
      border 1px solid rgba(0,0,0,.15)
      display flex
      align-items center
      justify-content space-between
      p
        flex 1
        padding 6px
        text-align center
        border-right 1px solid rgba(0,0,0,.15)
        cursor pointer
      .active
        background $green_1_Color
        color #FFF
    .content
      padding 26px 150px
      .br
        .ivu-radio-wrapper
          display block
          padding 8px 0
    .btn_wrap
      text-align center
      padding 50px
      button
        padding 3px 50px
        border-radius 0
        margin 0 12px
</style>
