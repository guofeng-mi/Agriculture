<template>
  <div class="nav_container">
    <!--考勤按钮-->
    <div class="nav__top__wrap">
      <div class="nav__item__kq" :class="kqShow ? 'nav__item__kq_on' : ''" @click="kqShow = true">
        <img v-if="kqShow" src="@/assets/img/nav_kq_on.png">
        <img v-else src="@/assets/img/nav_kq.png">
        <p>考勤</p>
      </div>
    </div>


    <div class="nav__bottom__wrap">
      <!--详情按钮-->
      <div class="nav__item__con" @click="changeLayoutShow('homeContent')">
        <Icon type="ios-alert" />
        <p>详情</p>
      </div>
      <!--新增按钮-->
      <div class="nav__item__add" @click="changeHomeShow('Add')">
        <img style="width: 35px" src="@/assets/img/park/add.png" alt="">
        <!-- <Button size="large" type="success" shape="circle" icon="md-add"></Button> -->
      </div>
    </div>

    <!--考勤右侧弹窗-->
    <div class="kaoqin_container" v-if="kqShow">
      <Kaoqin @close="close" />
    </div>

  </div>
</template>
<script>
  import Kaoqin from "./Kaoqin";

  // import { mapState} from 'vuex';
  export default {
    components: {
      Kaoqin
    },
    data() {
      return {
        kqShow: false
      }
    },
    methods: {
      // 新增
      changeHomeShow(status) {
        this.$store.commit('changeHomeShow', status)
      },
      // 详情
      changeLayoutShow(status) {
        this.$store.commit('changeLayoutShow', status)
      },

      // 考勤右侧关闭
      close() {
        this.kqShow = false;
      }
    }


  }
</script>
<style lang="stylus" scoped>
.nav_container
  position relative
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  background rgba(0,0,0,.02)
  height calc(100vh - 85px)
  .nav__top__wrap
    .nav__item__kq
      width 100px
      height 100px
      /*background #FFF*/
      display flex
      flex-direction column
      align-items center
      justify-content center
      cursor pointer
      p
        padding-top 8px
    .nav__item__kq_on
      background #FFF
      p
        color #38f


  .nav__bottom__wrap
    display flex
    flex-direction column
    &>div
      width 100px
      height 100px
      display flex
      flex-direction column
      align-items center
      justify-content center
      cursor pointer
      p
        padding-top 6px
      img
        width 40px
    .nav__item__con
      i
        font-size 28px
    .nav__item__add
      i
        font-size 32px


  .kaoqin_container
    position absolute
    right 100px
    width 200px
    height calc(100vh - 85px)
    box-shadow -2px 0px 4px rgba(0,0,0,.1)


</style>
