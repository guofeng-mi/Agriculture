<!--
 * @Descripttion: 整体框架容器
 -->
<template>
  <div class="layout">
    <div class="header_wrapper">

      <!-- 公司信息 -->
      <Info v-if="layoutShow == 'homeContent'" class="info_cntent"></Info>
      <!--考勤管理弹窗-->
      <KaoqinManage v-if="layoutShow == 'kaoqin'"></KaoqinManage>
      <!-- 农资主页 -->
      <NongZi v-if="layoutShow == 'nongzi'"></NongZi>
      <!-- 产品主页 -->
      <Product v-if="layoutShow == 'product'"></Product>

      <Header style="z-index: 5;"></Header>
      <!-- 预警信息 -->
      <Warning v-if="layoutShow == 'warning'"></Warning>
      <!-- 品种管理 -->
      <Pinzhong v-if="tableStatus == 'pzgl' || tableStatus == 'pzgl_add'"></Pinzhong>
      <!-- 基础物料管理 -->
      <Wuliao v-if="tableStatus == 'wlgl' || tableStatus == 'wlgl_add'"></Wuliao>
      <!-- 用户列表 -->
      <Usergl v-if="tableStatus == 'usergl' || tableStatus == 'usergl_add'"></Usergl>
      <!-- 预警规划 -->
      <WarnGh v-if="tableStatus == 'warngh'"></WarnGh>
      <!-- 物候期管理 -->
      <Whqgl v-if="tableStatus == 'whqgl' || tableStatus == 'whqgl_add'"></Whqgl>
      <!-- 有效成分管理 -->
      <Yxcfgl v-if="tableStatus == 'yxcfgl' || tableStatus == 'yxcfgl_add'"></Yxcfgl>
      <!-- 公司详情 -->
      <UserInfo v-if="globalStatus == 'userInfo'"></UserInfo>
      <!-- 系统通知 -->
      <Gonggao v-if="globalStatus == 'gg'"></Gonggao>
      <!-- 大数据报表 -->
      <Tablebg v-if="layoutShow == 'Report'" />
    </div>

  <router-view/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Info from '../components/park/Info'
import KaoqinManage from '../components/park/KaoqinManage'

import Warning from '../components/Warning'
import Pinzhong from '../components/table/Pinzhong'
import NongZi from '../components/park/NongZi'
import Product from '../components/park/Product'

import Wuliao from '../components/table/Wuliao'
import Usergl from '../components/table/Usergl'
import WarnGh from '../components/table/WarnGh'
import Whqgl from '../components/table/Whqgl'
import Yxcfgl from '../components/table/Yxcfgl'
import UserInfo from '../components/user/UserInfo'
import Gonggao from '../components/user/Gonggao'
import Tablebg from '../components/sjtable/Table'

import { mapState} from 'vuex';
export default {
  components: {
    Header,
    Warning,
    Info,
    KaoqinManage,
    Pinzhong,
    Wuliao,
    Usergl,
    WarnGh,
    Whqgl,
    Yxcfgl,
    UserInfo,
    Gonggao,
    NongZi,
    Product,
    Tablebg
  },
  computed: {
    ...mapState({
      globalStatus: state => state.globalStatus,
      tableStatus: state => state.tableStatus,
      homeShow: state => state.homeShow,
      layoutShow: state => state.layoutShow
    })
  },
  methods: {
    changeGlobalStatus (status) {
      this.$store.commit('changeGlobalStatus', status);
    },
    changeTableStatus (status) {
      this.$store.commit('changeTableStatus', status);
    },
    changeRightStatus (status) {
      this.$store.commit('changeHomeState', status);
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/css/global.styl'
.layout
  width 100%
  height 100%
  min-height 100vh
  background $bgColor_1
  font-size 14px
  .header_wrapper
    width 100%
    border-bottom 1px solid #EEE
</style>
