<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-17 16:46:00
 * @LastEditTime : 2020-02-24 15:27:35
 -->
<template>
  <div class="right_nav_wrap">
      <div class="right_wrap">
        <div class="content">
          <!-- 设备 -->
          <ShebeiRight v-if="homeState.rightNavStatus == 'eq'"></ShebeiRight>
          <!-- 监测 -->
          <Jiance v-if="dikuaiStatus == 'jc'"></Jiance>
        </div>

        <div class="nav">
          <div class="top">
<!--            <div class="item">-->
<!--              <img src="@/assets/img/info.png" alt="">-->
<!--              <p>设备</p>-->
<!--            </div>-->
<!--            <div class="item">-->
<!--              <img v-if="homeState.rightNavStatus == 'eq'" src="@/assets/img/nav_eq_on.png" alt="">-->
<!--              <img v-else src="@/assets/img/nav_eq.png" alt="">-->
<!--              <p>监测</p>-->
<!--            </div>-->
            <div class="item">
              <img  src="@/assets/img/gl.png" alt="">
              <p>过滤</p>
            </div>
          </div>

          <div class="bottom">
<!--            <div class="item">-->
<!--              <img src="@/assets/img/dk_jc.png" alt="">-->
<!--              <p>监测端</p>-->
<!--            </div>-->
            <div class="item" @click="openShengchan()" :class="hdShow == 'tab_dikuai_shengchan' ? 'active' : ''">
              <img v-if="hdShow == 'tab_dikuai_shengchan'" src="@/assets/img/nav_3_2_on.png" alt="">
              <img v-else src="@/assets/img/nav_3_2.png" alt="">
              <p>生产端</p>
            </div>
            <div class="item" @click="openSuyuan('ShuYuan')" :class="hdShow == 'tab_dikuai_shuyuan' ? 'active' : ''">
              <img v-if="hdShow == 'tab_dikuai_shuyuan'" src="@/assets/img/nav_3_3_on.png" alt="">
              <img v-else src="@/assets/img/nav_3_3.png" alt="">
              <p>溯源端</p>
            </div>
            <div class="bottom">
              <div class="item" @click="changeDikuaiAction('add')">
                <span class="iconfont">&#xe631;</span>
                <p>详情</p>
              </div>
              <div class="item">
                <span class="iconfont" @click="changeDikuaiAction('add')" style="font-size: 32px; color: #1FBA75;">&#xe62d;</span>
              </div>
            </div>
          </div>

        </div>
      </div>


  </div>
</template>

<script>
import Jiance from './Jiance'
import ShebeiRight from '../../components/park/ShebeiRight'
import Rnright from './Rnright'
import Ganttright from './Ganttright'

import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    Jiance,
    ShebeiRight,
    Rnright,
    Ganttright
  },
  props: ['con_status'],
  computed: {
      ...mapState({
        dikuaiShow: state => state.dikuaiShow,
        hdShow: state => state.hdShow,
          homeState: state => state.homeState,
          dikuaiStatus: state => state.dikuaiStatus,
          headerStatus: state => state.headerStatus
      })
  },
  methods: {
    changeDikuaiAction(status) {
      this.$store.commit('changeDikuaiAction', status)
    },
    openShengchan() {
      this.changeDikuaiShow('ShengCan');
      this.changeHdShow('tab_dikuai_shengchan');
    },
    openSuyuan() {
      this.changeDikuaiShow('ShuYuan');
      this.changeHdShow('tab_dikuai_shuyuan');
    },
    changeHdShow(status) {
      this.$store.commit('changeHdShow', status);
    },
    changeDikuaiShow(status) {
      this.$store.commit('changeDikuaiShow', status);
    },
    changeRightStatus (status) {
      this.$store.commit('changeHomeState', status);
    },
    changeGlobalStatus(status) {
      this.$store.commit('changeGlobalStatus', status);
    },
    changeDikuaiStatus(status) {
      this.$store.commit('changeDikuaiStatus', status);
    },
    changeHeaderStatus(show, status) {
      let obj = {
        show: show,
        status: status
      }
      this.$store.commit('changeHeaderStatus', obj);
    }
  }
}
</script>

<style scoped lang ="stylus">
.right_wrap
  position relative
  .content
    position fixed
    right 61px
    top 83px
    width 239px
    height calc(100vh - 83px)
    display none
  .nav
    position fixed
    right 0
    top 83px
    height calc(100vh - 83px)
    width 100px
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    background $bgColor_2
    .top
      .item
        display flex
        flex-direction column
        align-items center
        justify-content center
        width 60px
        height 80px
        cursor pointer
        p
          padding-top 8px
      .active
        background #FFF
        color $minColor_b
    .bottom
      .item
        display flex
        flex-direction column
        align-items center
        justify-content center
        width 60px
        height 80px
        cursor pointer
        p
          padding-top 8px
      .active
        p
          color #6687F2

</style>
