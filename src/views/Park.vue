<!--
 * @Descripttion: 园区界面
 -->
<template>
  <div class="park_container">
    <div class="park_con">
      <div class="title">{{ title }}</div>
      <div class="map_wrap">
        <!--地图部分-->
        <Map></Map>

        <div class="big">
          <img @click="changeParkShow('content')" src="@/assets/img/big.png" alt="">
        </div>
      </div>

      <div class="content">
        <div class="hd">
          <div class="left">
            <p>{{ title }}</p>
            <div class="zs">
              <img src="@/assets/img/zs.png" alt="">
              <span>追溯</span>
            </div>
          </div>
          <div class="right">
            <div class="dk" @click="toDikuai(1)">
              <img src="@/assets/img/info.png" alt="">
              <span>地块信息</span>
            </div>
            <p class="del">删除</p>
          </div>
        </div>

        <div class="jiance">
          <div class="item">
            <span>施药</span>
            <p>2</p>
          </div>
          <div class="item">
            <span>农事</span>
            <p>2</p>
          </div>
          <div class="item">
            <span>施肥</span>
            <p>2</p>
          </div>
          <div class="item">
            <span>采集</span>
            <p>2</p>
          </div>
          <div class="item">
            <span>巡园</span>
            <p>2</p>
          </div>
        </div>

        <div class="b_wrap">
          <div class="left_eq">
            <div class="item">
              <p>预警</p>
              <span>0</span>
            </div>
            <div class="item">
              <p>在线设备</p>
              <span>5</span>
            </div>
            <div class="item">
              <p>离线</p>
              <span>0</span>
            </div>
            <div class="item">
              <p>作物</p>
              <span>葡萄</span>
            </div>
            <div class="item">
              <p>品种</p>
              <span>阳光玫瑰</span>
            </div>
          </div>
          <div class="echart">
            <Echart></Echart>
          </div>
        </div>
      </div>

      <div class="add">
        <div class="con" @click="changeParkShow('add')">
            <img src="@/assets/img/add_on.png" alt="">
            <p>新建地块</p>
        </div>
      </div>
    </div>

    <!-- 右侧 nav -->
    <RightNav :con_status="'park_info'"></RightNav>

    <!-- 园区详情 -->
    <ParkCon v-if="parkShow != 'false'"></ParkCon>

    <!-- 农资管理 -->
    <NongZi v-if="parkShow == 'nongzhi'"></NongZi>
    <!-- 产品管理 -->
    <Product v-if="parkShow == 'chanpin'"></Product>


  </div>
</template>
<script>
import RightNav from '../components/park/RightNav'
import Map from '../components/park/Map'
import Echart from '../components/park/Echart'
import ParkCon from '../components/park/ParkCon'
import NongZi from '../components/park/NongZi'
// import NzRuku from '../components/park/NzRuku'
import NzTl from '../components/park/NzTl'
import Product from '../components/park/Product'

import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    RightNav,
    Map,
    Echart,
    ParkCon,
    NongZi,
    // NzRuku,
    NzTl,
    Product
  },
  data () {
    return {
      title: '田诚慧生态产业园区'
    }
  },
  created() {
    console.log( this.$route.params );
  },
  computed: {
    ...mapState({
      globalStatus: state => state.globalStatus,
      parkShow: state => state.parkShow
    })
  },
  methods: {
    changeGlobalStatus (status) {
      this.$store.commit('changeGlobalStatus', status);
    },
    toDikuai(id) {
      console.log(id)
      this.$store.commit('changePageShow', 'Dikuai_Home');
      this.$router.push({path: '/dikuai/' + id})
    },
    changeParkShow(status) {
      this.$store.commit('changeParkShow', status)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/css/global.styl'
.park_container
  padding 83px 300px 0 300px
  .park_con
    padding 0 100px
    .title
      text-align center
      padding 12px 0
      font-size 18px
      color #222
    .map_wrap
      height 250px
      overflow hidden
      position relative
      .big
        position absolute
        bottom 6px
        right 6px
        cursor pointer
    .content
      padding 12px 22px
      background #FFF
      margin-top 22px
      .hd
        display flex
        align-items center
        justify-content space-between
        .left
          display flex
          align-items center
          .zs
            display flex
            align-items center
            color $green_1_Color
            cursor pointer
            img
              height 14px
              margin-left 22px
              margin-right 4px
        .right
          display flex
          align-items center
          img
            height 19px
            margin-right 4px
          .dk
            display flex
            align-items center
            padding-right 12px
          .del
            background $btnColor
            padding 6px 12px
            margin-left 12px
            cursor pointer
            font-size 13px
      .jiance
        margin-top 22px
        display flex
        justify-content space-between
        box-shadow $inp_shadow
        border-radius 2px
        .item
          height 62px
          display flex
          align-items center
          justify-content center
          flex-direction column
          flex 1
          position relative
          p
            padding-top 6px
            font-weight 600
          span
            opacity .7
          &::before
            display block
            content ''
            width 1px
            height 28px
            background rgba(0,0,0,.3)
            position absolute
            right 0
            top 50%
            transform translateY(-50%)
          &:last-child::before
            display none
      .b_wrap
        margin-top 20px
        display flex
        align-items flex-start
        .left_eq
          width 45%
          padding-right 5%
          .item
            display flex
            align-items center
            justify-content space-between
            border-bottom 1px solid #EEE
            padding 12px 0
        .echart
          width 55%
          padding-left 5%
          // border 1px solid red
    .add
      margin-top 22px
      padding 32px
      background #FFF
      border-radius 6px
      .con
        display flex
        flex-direction column
        align-items center
        justify-content center
        width 100%
        height 100px
        border 2px dashed rgba(0,0,0,.05)
        border-radius 6px
        p
          padding-top 6px
          cursor pointer
        img
          padding-top 6px
          cursor pointer
</style>
