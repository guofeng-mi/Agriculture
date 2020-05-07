<!--
 * @Descripttion: 园区右侧nav
 -->
<template>
  <div class="right_nav_wrap">
    <div class="right_wrap">
      <div class="content">
        <!-- 设备右侧 list_nav -->
        <ShebeiRight v-if="navState == '2'" @eqClose="eqClose"></ShebeiRight>
      </div>

      <div class="nav">
        <div class="top">
          <div class="item" :class="navState == '2' ? 'active' : ''" @click="navState = 2">
            <!-- <img v-if="navState == '2'" src="@/assets/img/nav_eq_on.png" alt="">
            <img v-else src="@/assets/img/nav_eq.png" alt=""> -->
            <img src="@/assets/img/park/r1.png" alt="">
            <p :style="{color: navState == '2' ? '#38f' : '#222'}">设备</p>
          </div>
          <div class="item" @click="changeLayoutShow('nongzi')">
            <!-- <img src="@/assets/img/nav_nongzi.png" alt=""> -->
            <img src="@/assets/img/park/r2.png" alt="">
            <p>农资</p>
          </div>
          <div class="item" @click="changeLayoutShow('product')">
            <!-- <img src="@/assets/img/nav_product.png" alt=""> -->
            <img src="@/assets/img/park/r3.png" alt="">
            <p>产品</p>
          </div>
        </div>
        <div class="bottom">
          <div class="item" @click="changeParkShow('content')">
            <!-- <Icon style="font-size: 28px" type="ios-alert" /> -->
            <img src="@/assets/img/park/7.png" alt="">
            <p>详情</p>
          </div>

          <!--新增按钮-->
          <div class="item" @click="changeParkShow('add')">
            <img src="@/assets/img/park/add.png" alt="" style="width: 35px">
            <!-- <Button size="large"  type="success" shape="circle" icon="md-add"></Button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ShebeiRight from '../park/ShebeiRight'
  import { mapState} from 'vuex';
  export default {
    name: '',
    components: {
      ShebeiRight
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
      right 101px
      top 83px
      width 239px
      height calc(100vh - 83px)
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
          width 100px
          height 100px
          cursor pointer
          p
            padding-top 8px
          img
            width 30px
            /* height 30px */
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
