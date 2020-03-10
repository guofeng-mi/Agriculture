<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-01-22 14:19:26
 * @LastEditTime : 2020-01-22 17:03:08
 -->

<template>
  <div class="rnright">
    <div class="search_wrap">
      <input type="text" />
      <span class="iconfont">&#xe63c;</span>
    </div>

    <div class="wrap">
      <div class="item">
        <p>显示未完成任务</p>
        <i-switch size="small" v-model="test" :true-value="1" :false-value="0"></i-switch>
      </div>
      <div class="item">
        <p>显示已完成任务</p>
        <i-switch size="small" v-model="test" :true-value="1" :false-value="0"></i-switch>
      </div>
      <div class="item">
        <p>显示已忽略任务</p>
        <i-switch size="small" v-model="test" :true-value="1" :false-value="0"></i-switch>
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
  data() {
    return {
      test: '',
      test2: ''
    }
  },
  computed: {
    ...mapState({
        headerStatus: state => state.headerStatus,
        dikuaiStatus: state => state.dikuaiStatus
    })
  },
  created() {
    // this.changeHeaderStatus('tab_1');
  },
  methods: {
    changeHeaderStatus(status) {
      this.$store.commit('changeHeaderStatus', status);
    },
    changeDikuaiStatus(status) {
      this.$store.commit('changeDikuaiStatus', status);
    }
  }
}
</script>
<style lang="stylus" scope>
@import '../../assets/css/global.styl'
.rnright
  width 100%
  height 100%
  background #FFF
  padding 40px 20px
  .search_wrap
    position relative
    input
      width 100%
      border-radius 4px
      border none
      box-shadow $inp_shadow
      outline none
      padding 4px 6px
    span
      position absolute
      right 6px
      top 50%
      transform translateY(-50%)
  .wrap
    padding-top 40px
    .item
      display flex
      align-items center
      justify-content space-between
      padding 12px 0


















</style>