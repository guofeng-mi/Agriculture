<!--
 * @Descripttion: 园区界面
 -->
<template>
  <div class="park_container">
    <div class="park_con">
      <div class="title">田诚慧生态产业园区</div>
      <div class="map_wrap">
        <!--地图部分-->
        <Map></Map>

        <div class="big">
          <img @click="changeParkShow('content')" src="@/assets/img/big.png" alt="">
        </div>
      </div>


      <!--中间地块部分-->
      <template>
        <Dikuai />
      </template>

      <!--新增地块按钮-->
      <AddBtn />
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
import ParkCon from '../components/park/ParkCon'
import NongZi from '../components/park/NongZi'
import Product from '../components/park/Product'
import Dikuai from "../components/park/Dikuai";
import AddBtn from '../components/park/AddBtn'

import { mapState} from 'vuex';
export default {
  components: {
    RightNav,
    Map,
    ParkCon,
    NongZi,
    Product,
    Dikuai,
    AddBtn

  },
  created() {
    console.log( this.$route.params );
  },
  computed: {
    ...mapState({
      parkShow: state => state.parkShow
    })
  },
  methods: {
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
</style>
