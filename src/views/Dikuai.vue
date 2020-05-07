<!--
 * @Descripttion: 地块首页
 -->
<template>
  <div class="dikuai_container">

<!--左侧主要内容-->
    <div class="left_wrapper">
      <!--地块主页-->
      <Main v-if="dikuaiShow == 'false'"></Main>
      <!--生产端主页-->
      <ShengCanCon v-if="dikuaiShow == 'ShengCan'"></ShengCanCon>
      <!--溯源端-->
      <ShuYuan v-if="dikuaiShow == 'ShuYuan'"></ShuYuan>
    </div>

<!--右侧导航内容-->
    <div class="r_nav_wrapper">
      <RightNav></RightNav>
    </div>

    <!--地块详情 新增 修改-->
    <DikuaiContent v-if="dikuaiAction != 'false'"/>
<!--    选择地图-->
    <DikuaiContentMapBig v-if="dikuaiActionMap != 'false'"/>
  </div>
</template>

<script>
import RightNav from '../components/dikuai/RightNav'
import DikuaiContent from '../components/dikuai/DikuaiContent'
import DikuaiContentMapBig from '../components/dikuai/DikuaiContentMapBig'
import Renwugl from '../components/renwu/Renwugl'
import Rncon from '../components/renwu/Rncon'
import Rnconsy from '../components/renwu/Rnconsy'
import Rnconxy from '../components/renwu/Rnconxy'
import Rndone from '../components/renwu/Rndone'
import Gantt from '../components/renwu/Gantt'
import Xunyuan from '../components/renwu/Xunyuan'
import Huibao from '../components/renwu/Huibao'
import Guanli from '../components/suyuan/Guanli'
import Rzgl from '../components/suyuan/Rzgl'
import Jcgl from '../components/suyuan/Jcgl'
import Jggl from '../components/suyuan/Jggl'
import Psgl from '../components/suyuan/Psgl'
import Smtj from '../components/suyuan/Smtj'


import ShengCanCon from '../components/dikuai/ShengCan'
import ShuYuan from "../components/suyuan/ShuYuan";

import Main from '../components/dikuai/Main'
import Rnright from '../components/dikuai/Rnright'

import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    RightNav,
    DikuaiContent,
    DikuaiContentMapBig,
    Renwugl,
    Gantt,
    Rncon,
    Rnconsy,
    Rnconxy,
    Rndone,
    Xunyuan,
    Huibao,
    Guanli,
    Rzgl,
    Jcgl,
    Jggl,
    Psgl,
    Smtj,


    ShengCanCon,
    ShuYuan,



    Main,
    Rnright
  },
  data() {
    return {
      tasks: {
        data: [
          {id: 1, text: '施肥', start_date: '01-01-2020', duration: 3, progress: 0},
        ],
      },
    }
  },
  computed: {
    ...mapState({
      hdShengchanTab: state => state.hdShengchanTab,
      hdShuyuanTab: state => state.hdShuyuanTab,
      pageShow: state => state.pageShow,
      dikuaiShow: state => state.dikuaiShow,
      headerStatus: state => state.headerStatus,
      dikuaiStatus: state => state.dikuaiStatus,
      dikuaiAction: state => state.dikuaiAction,
      dikuaiActionMap: state => state.dikuaiActionMap
    })
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
<style lang="stylus" scoped>
@import '../assets/css/global.styl'
.dikuai_container
  width 100%
  height 100%
  padding-top 81px
  display flex
  background #FFF
  .left_wrapper
    flex 1
  .guolv_wrapper
    width 260px
    height calc(100vh - 84px)
  .r_nav_wrapper
    width 100px

</style>
