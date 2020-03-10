<!--
 * @Descripttion: 地块首页
 * @version:
 * @Date: 2020-01-09 13:20:14
 * @LastEditTime : 2020-02-24 15:16:17
 -->
<template>
  <div class="dikuai_container">
    <div class="left_wrap">

      <!-- 地块主页 -->
      <div class="dk" style="padding: 0 30px;" v-if="dikuaiShow == false">
        <div class="dk_hd">
          <div class="item">
            <img src="@/assets/img/dk_y_on.png" alt="">
            <p>光照7206E：3300 lux</p>
          </div>
          <div class="item">
            <img src="@/assets/img/dk_y_on.png" alt="">
            <p>光照7206E：3300 lux</p>
          </div>
          <div class="item">
            <img src="@/assets/img/dk_y_on.png" alt="">
            <p>光照7206E：3300 lux</p>
          </div>
          <div class="item">
            <img src="@/assets/img/dk_y_on.png" alt="">
            <p>光照7206E：3300 lux</p>
          </div>
        </div>
        <div class="poster_wrap">
          <img src="@/assets/img/dk_p_1.png" alt="">
        </div>
        <div class="dk_footer">
          <div class="item">
            <i></i>
            <p>正常连接（1）</p>
          </div>
          <div class="item">
            <i></i>
            <p>传感预警（2）</p>
          </div>
          <div class="item">
            <i></i>
            <p>正常运行（3）</p>
          </div>
          <div class="item">
            <i></i>
            <p>设备离线（4）</p>
          </div>
        </div>
      </div>



      <div class="sc_wrapper">
        <ShengCanCon></ShengCanCon>
      </div>
      <div class="r_nav_wrapper">

      </div>


      <!-- 任务 生产端主页 -->
      <div class="renwu_box" >
        <!-- 任务管理 -->
        <Renwugl v-if="dikuaiShow == 'ShengCan' && hdShengchanTab == 'rewu'"></Renwugl>
        <!-- 作业流程 -->
        <Gantt :tasks="tasks" v-if="dikuaiShow == 'ShengCan' && hdShengchanTab == 'zuoye'"></Gantt>
      </div>

      <!-- 溯源端 -->
      <div class="renwu_box" v-if="dikuaiShow == 'ShuYuan'">
        <!-- 溯源管理 -->
        <Guanli v-if="hdShuyuanTab == 'shuyuan'"></Guanli>
        <!-- 认证管理 -->
        <Rzgl v-if="hdShuyuanTab == 'renzheng'"></Rzgl>
        <!-- 检测管理 -->
        <Jcgl v-if="hdShuyuanTab == 'jiance'"></Jcgl>
        <!-- 检测管理 -->
        <Jggl v-if="hdShuyuanTab == 'jiagong'"></Jggl>
        <!-- 配送管理 -->
        <Psgl v-if="hdShuyuanTab == 'peisong'"></Psgl>
        <!-- 扫码统计 -->
        <Smtj v-if="hdShuyuanTab == 'shaoma'"></Smtj>
      </div>



    </div>

    <!-- 任务 生产端主页 -->
    <div class="renwu_box">
      <!-- 巡院记录 -->
      <Xunyuan style="width: 100%" v-if="dikuaiShow == 'ShengCan' && hdShengchanTab == 'xunyuan'"></Xunyuan>
      <!-- 汇报工作 -->
      <Huibao style="z-index: 20;" v-if="dikuaiShow == 'ShengCan' && hdShengchanTab == 'huibao'"></Huibao>
    </div>


    <div class="right_nav">
      <!--右侧 nav-->
      <RightNav></RightNav>
    </div>


    <!-- 地块详情 -->
    <DikuaiContent v-if="dikuaiShow == 'DikuaiContent'"></DikuaiContent>

    <!-- 地块详情 选择地块形状 -->
    <DikuaiContentMapBig v-if="dikuaiStatus == 'dik_map_big'"></DikuaiContentMapBig>

    <!-- TODO: 以下 -->
    <!-- 任务详情 采集-->
    <Rncon v-if="dikuaiStatus == 'rn_con_cj' || dikuaiStatus == 'cone_cj_done'"></Rncon>

    <!-- 任务详情 施药 -->
    <Rnconsy v-if="dikuaiStatus == 'rn_con_sy' || dikuaiStatus == 'cone_sy_done'"></Rnconsy>

    <!-- 任务详情 临时 -->
    <Rnconxy v-if="dikuaiStatus == 'rn_con_xy' || dikuaiStatus == 'cone_xy_done'"></Rnconxy>

    <!-- 完成任务 -->
    <Rndone v-if="dikuaiStatus == 'cone_xy_done'
        || dikuaiStatus == 'cone_cj_done'
        || dikuaiStatus == 'cone_sy_done'">
    </Rndone>

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


      ShengCanCon
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
        dikuaiStatus: state => state.dikuaiStatus
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
  .dikuai_container
    width 100%
    height 100%
    padding-top 80px





</style>
<!--<style lang="stylus" scope>-->
<!--@import '../assets/css/global.styl'-->
<!--.dikuai_container-->
<!--  position relative-->
<!--  padding-top 83px-->

<!--  .left_wrap-->
<!--    width calc(100% - 300px)-->
<!--    // padding 0 60px-->
<!--    .dk_hd-->
<!--      display flex-->
<!--      align-items center-->
<!--      .item-->
<!--        display flex-->
<!--        align-items center-->
<!--        padding 12px 42px 12px 0-->
<!--        cursor pointer-->
<!--        p-->
<!--          padding-left 6px-->
<!--    .poster_wrap-->
<!--      padding 0-->
<!--      margin 0-->
<!--      font-size 0-->
<!--      img-->
<!--        width 100%-->
<!--        height 100%-->
<!--        max-height calc(100vh - 200px)-->
<!--    .dk_footer-->
<!--      position fixed-->
<!--      bottom 0-->
<!--      left 0-->
<!--      background #FFF-->
<!--      width calc(100% - 300px)-->
<!--      padding 12px 0-->
<!--      display flex-->
<!--      align-items center-->
<!--      justify-content center-->
<!--      .item-->
<!--        padding 0 18px-->
<!--        display flex-->
<!--        align-items center-->
<!--        i-->
<!--          display block-->
<!--          width 12px-->
<!--          height 12px-->
<!--          border-radius 50%-->
<!--          background red-->
<!--          margin-right 8px-->
<!--        &:nth-child(1)-->
<!--          i-->
<!--            background #56D497-->
<!--        &:nth-child(2)-->
<!--          i-->
<!--            background #FB835A-->
<!--        &:nth-child(3)-->
<!--          i-->
<!--            background #8AC7ED-->
<!--        &:nth-child(4)-->
<!--          i-->
<!--            background #BFBFBF-->

<!--  .right_nav-->
<!--    position fixed-->
<!--    right 0-->
<!--    top 83px-->
<!--    width 300px-->
<!--    height calc(100vh - 83px)-->

<!--</style>-->
