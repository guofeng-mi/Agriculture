<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-19 15:24:46
 * @LastEditTime : 2020-01-19 16:00:40
 -->
<template>
  <div class="nongziadd_bg">
    <div class="nongziadd">
      <div class="close">
        <span class="iconfont" @click="close('close')">&#xe600;</span>
      </div>
      <div class="line">
        <p>农资信息</p>
      </div>
      <div class="nz_con">
        <div class="item">
          <div class="k">物料类型</div>
            <Radio-group v-model="test">
                <Radio label="1">农药</Radio>
                <Radio label="2">肥料</Radio>
                <Radio label="3">叶面肥</Radio>
                <Radio label="4">种子</Radio>
            </Radio-group>
          </div>
          <div class="item item_s">
            <div class="k">物料名称</div>
            <div class="v">
              <i-select v-model="test" style="width:100%">
                  <i-option label="1">123</i-option>
              </i-select>
              <p class="tips">没有？联系管理员在  管理-物料管理  添加</p>
            </div>
          </div>
        </div>
        <div class="line">
          <p>库存管理</p>
        </div>

      <div class="nz_con">
        <div class="item">
          <div class="k">最小库存提醒</div>
          <div class="v">
            <Input-number max="10" min="1" :value="1"></Input-number>
            <span style="padding-left: 12px;">千克</span>
          </div>
          </div>
        <div class="item">
          <div class="k">最大库存提醒</div>
          <div class="v">
            <Input-number max="10" min="1" :value="1"></Input-number>
            <span style="padding-left: 12px;">千克</span>
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
  components: {

  },
  data () {
    return {
      test: ''
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
  .nongziadd
    width 800px
    background #FFF
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    border-radius 4px
    box-shadow 50px 50px 100px rgba(0,0,0,.05), -50px -50px 100px rgba(0,0,0,.05)
    .close
      cursor pointer
      text-align right
      padding 16px
    .line
      background $btnColor
      padding 8px 60px
    .nz_con
      padding-top 12px
      .item
        padding 12px 160px
        display flex
        align-items center
        .k
          width 120px
        .ivu-radio-wrapper
          padding-right 30px
        .v
          width 100%
          .tips
            padding-top 12px
            opacity .8
            font-size 13px
      .item_s
        align-items flex-start
        .k
          padding-top 10px
    .btn_wrap
      text-align center
      padding 50px
      button
        padding 3px 50px
        border-radius 0
        margin 0 12px
</style>
