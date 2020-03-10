<!--
 * @Descripttion: 考勤右侧弹出
 -->
<template>
  <div class="kaoqin_content">
    <div class="kq_hd">
      <h3>考勤管理</h3>
      <Icon type="md-close" @click="kqClose()" style="font-size: 22px;cursor: pointer" />
    </div>
    <p class="s1">今日出勤率</p>
    <div class="per">
      <p>0</p>
      <span>%</span>
    </div>
    <div class="item s2">
      <span>今日迟到</span>
      <span>0</span>
    </div>
    <div class="item">
      <span>今日请假</span>
      <span>0</span>
    </div>
    <div class="item">
      <span>今日出差</span>
      <span>0</span>
    </div>

    <div class="more">
      <p @click="changeLayoutShow('kaoqin')">更多管理</p>
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
          homeState: state => state.homeState
      })
  },
  methods: {
    kqClose() {
      console.log("test")
      this.$emit('kqClose', 'close')
    },
    changeHomeShow(state) {
      this.$store.commit('changeHomeShow', status)
    },
    changeLayoutShow (status) {
      this.$store.commit('changeLayoutShow', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.kaoqin_content
  position relative
  width 100%
  height 100%
  background #FFF
  .kq_hd
    display flex
    align-items center
    justify-content space-between
    padding 12px
    h3
      font-weight 600
      font-size 15px
    span
      color $minColor
  .s1
    padding 10px
    color rgba(0,0,0,.5)
  .per
    display flex
    align-items flex-end
    padding 0 12px
    color #222
    font-weight 900
    p
      font-size 40px
  .item
    display flex
    justify-content space-between
    margin 0 12px
    padding 6px 0
    border-bottom 1px solid #EEE
    font-size 13px
    color rgba(0,0,0,.5)
  .s2
    padding-top 30px
  .more
    position absolute
    left 0
    bottom 0
    padding 12px
    width 100%
    p
      border 1px solid #eee
      color rgba(0,0,0,.5)
      text-align center
      padding 6px 0
      border-radius 4px
      cursor pointer

</style>
