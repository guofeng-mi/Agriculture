<!--
 * @Descripttion: 大数据报表
 -->
<template>
  <div class="table_bg">
    <div class="table_container">
      <div  class="tb_header">
        <div class="tab">
<!--          <p @click="tabStatus = 0" :class="tabStatus == 0 ? 'active' : ''">总览</p>-->
<!--          <p @click="tabStatus = 1" :class="tabStatus == 1 ? 'active' : ''">基地报表</p>-->
          <p @click="tabStatus = 2" :class="tabStatus == 2 ? 'active' : ''">设备报表</p>
          <p @click="tabStatus = 3" :class="tabStatus == 3 ? 'active' : ''">环境报表</p>
          <p @click="tabStatus = 4" :class="tabStatus == 4 ? 'active' : ''">溯源报表</p>
          <p @click="tabStatus = 5" :class="tabStatus == 5 ? 'active' : ''">病虫害报表</p>
        </div>
        <div class="close">
          <Icon type="md-close" @click="changeLayoutShow('false')"/>
        </div>
      </div>
      <div class="tb_content">
        <!-- 设备报表 -->
        <Eq v-if="tabStatus == 2"></Eq>
        <!-- 环境报表 -->
        <Hj v-if="tabStatus == 3"></Hj>
        <!-- 溯源报表 -->
        <Sy v-if="tabStatus == 4"></Sy>
        <!-- 病虫害报表 -->
        <Bch v-if="tabStatus == 5"></Bch>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Eq from './Eq'
import Hj from './Hj'
import Sy from './Sy'
import Bch from './Bch'
export default {
  name: '',
  components: {
    Eq,
    Hj,
    Sy,
    Bch
  },
  data () {
    return {
        tabStatus: 2
    }
  },
  computed: {
      ...mapState({
          tableStatus: state => state.tableStatus
      })
  },
  methods: {
    changeLayoutShow(status) {
      this.$store.commit('changeLayoutShow', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.table_bg
  width 100%
  height 100vh
  position fixed
  left 0
  top 0
  background rgba(0,0,0,.5)
  z-index 10
  padding 20px
  .table_container
    position relative
    width 100%
    height calc(100vh - 40px)
    background #FFF
    border-radius 4px
    .tb_header
      position absolute
      top 0
      width 100%
      // border 1px solid red
      .tab
        position absolute
        left 50%
        20px
        transform translateX(-50%)
        display flex
        p
          padding 16px 20px
          cursor pointer
        .active
          color #38f
      .close
        position absolute
        right 16px
        top 16px
        font-size 22px


</style>
