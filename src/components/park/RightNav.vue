<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-17 16:46:00
 * @LastEditTime : 2020-02-24 13:19:16
 -->
<template>
  <div class="right_nav_wrap">
    <div class="right_wrap">
      <div class="content">
        <!-- 考勤右侧 list_nav  -->
        <KaoqinRight v-if="navState == '1'" @kqClose="kqClose"></KaoqinRight>
        <!-- 设备右侧 list_nav -->
        <ShebeiRight v-if="navState == '2'" @eqClose="eqClose"></ShebeiRight>
      </div>

      <div class="nav">
        <div class="top">
<!--          <div class="item" :class="navState == '1' ? 'active' : ''" @click="navState = 1">-->
<!--            <img v-if="navState == '1'" src="@/assets/img/nav_kq_on.png" alt="">-->
<!--            <img v-else src="@/assets/img/nav_kq.png" alt="">-->
<!--            <p>考勤</p>-->
<!--          </div>-->
          <div class="item" :class="navState == '2' ? 'active' : ''" @click="navState = 2">
            <img v-if="navState == '2'" src="@/assets/img/nav_eq_on.png" alt="">
            <img v-else src="@/assets/img/nav_eq.png" alt="">
            <p>设备</p>
          </div>
          <div class="item" @click="changeLayoutShow('nongzi')">
            <img src="@/assets/img/nav_nongzi.png" alt="">
            <p>农资</p>
          </div>
          <div class="item" @click="changeLayoutShow('product')">
            <img src="@/assets/img/nav_product.png" alt="">
            <p>产品</p>
          </div>
        </div>
        <div class="bottom">
          <div class="item" @click="changeParkShow('content')">
            <span class="iconfont">&#xe631;</span>
            <p>详情</p>
          </div>
          <div class="item">
            <span class="iconfont" @click="changeParkShow('add')" style="font-size: 32px; color: #1FBA75;">&#xe62d;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import KaoqinRight from '../park/KaoqinRight'
  import ShebeiRight from '../park/ShebeiRight'
  import { mapState} from 'vuex';
  export default {
    name: '',
    components: {
      KaoqinRight,
      ShebeiRight,
    },
    data() {
      return {
        navState: null
      }
    },
    props: ['con_status'],
    computed: {
      ...mapState({
        homeState: state => state.homeState,
        homeShow: state => state.homeShow
      })
    },
    methods: {
      kqClose(val) {
        this.navState = null;
      },
      eqClose(val) {
        this.navState = null;
      },
      changeRightStatus (status) {
        this.$store.commit('changeHomeState', status);
      },
      changeLayoutShow(status) {
        this.$store.commit('changeLayoutShow', status)
      },
      changeHomeShow(status) {
        this.$store.commit('changeHomeShow', status)
      },
      changeParkShow(status) {
        this.$store.commit('changeParkShow', status)
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
    /* background #FFF */
    .nav
      position fixed
      right 0
      top 83px
      height calc(100vh - 83px)
      width 60px
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
</style>
