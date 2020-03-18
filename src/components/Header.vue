<!--
 * @Descripttion: Header
 -->
<template>
  <div class="header">
    <div class="header_top">
      <div class="left">
          <div class="logo" @click="toHome()">
              <p>企业LOGO</p>
          </div>
      </div>
      <div class="title">{{hdTitle}}</div>
      <div class="right">
        <div class="guanli">
          <div @click="changeSow('manage')">
            <img src="@/assets/img/manage.png">
            <p>管理</p>
          </div>
        <ul class="list_wrap" v-show="myHdShow == 'manage'">
          <li class="item" @click="changeTableStatus('pzgl')">品种管理</li>
          <li class="item" @click="changeTableStatus('wlgl')">基础物料管理</li>
          <li class="item" @click="changeTableStatus('usergl')">用户管理</li>
          <li class="item" @click="changeTableStatus('warngh')">预警规划</li>
<!--          <li class="item">采集指标</li>-->
          <li class="item" @click="changeTableStatus('whqgl')">物候期管理</li>
          <li class="item" @click="changeTableStatus('yxcfgl')">有效期成分管理</li>
        </ul>
      </div>
      <div class="user">
          <img @click="changeSow('user')" src="@/assets/img/user.png">
          <ul class="list_wrap" v-show="myHdShow == 'user'">
            <li class="item" @click="changeGlobalStatus('userInfo')">账户信息</li>
<!--            <li class="item">个人中心</li>-->
            <li class="item" @click="changeGlobalStatus('gg')">系统通知</li>
            <li class="item" @click="goMain()">返回</li>
<!--            <li class="item">退出登录</li>-->
          </ul>
        </div>
      </div>
    </div>

    <div class="header_bottom">
      <div class="nav_btn">
            <div class="click" @click="changeSow('nav')">
                <img src="@/assets/img/nav.png">
                <p>导航菜单</p>
            </div>
            <div class="nav_box" v-show="myHdShow == 'nav'">
                <Nav></Nav>
            </div>
            <div class="table">
                <p @click="tableShow = !tableShow">报表</p>
                <div class="list_wrap" v-show="tableShow">
                    <p @click="showReport()">大数据报表</p>
<!--                    <p>业务报表</p>-->
                </div>
            </div>
        </div>
        <div class="center">
          <div class="search" v-if="hdShow == 'Search_1'">
            <input type="text" placeholder="搜索">
            <span class="iconfont">&#xe63c;</span>
            </div>
            <!-- 地块 -->
<!--            <div class="tab" v-if="headerStatus.show == 'dikuai'">-->
<!--              <p :class="headerStatus == 'tab_1' ? 'active' : ''" @click="changeHeaderStatus('tab_1')">环境监控</p>-->
<!--              <p :class="headerStatus == 'tab_2' ? 'active' : ''" @click="changeHeaderStatus('tab_2')">设备报表</p>-->
<!--            </div>-->

            <!-- 生产端 任务 -->
            <div class="tab" v-if="hdShow == 'tab_dikuai_shengchan'">
              <p :class="hdShengchanTab == 'rewu' ? 'active' : ''" @click="changeHdShengchanTab('rewu')">任务管理</p>
              <p :class="hdShengchanTab == 'zuoye' ? 'active' : ''" @click="changeHdShengchanTab('zuoye')">作业流程</p>
              <p :class="hdShengchanTab == 'xunyuan' ? 'active' : ''" @click="changeHdShengchanTab('xunyuan')">巡园记录</p>
              <p :class="hdShengchanTab == 'huibao' ? 'active' : ''" @click="changeHdShengchanTab('huibao')">工作汇报</p>
            </div>

            <!-- 溯源 -->
            <div class="tab" v-if="hdShow == 'tab_dikuai_shuyuan'">
              <p :class="hdShuyuanTab == 'shuyuan' ? 'active' : ''" @click="changeHdShuyuanTab('shuyuan')">溯源管理</p>
              <p :class="hdShuyuanTab == 'renzheng' ? 'active' : ''" @click="changeHdShuyuanTab('renzheng')">认证管理</p>
              <p :class="hdShuyuanTab == 'jiance' ? 'active' : ''" @click="changeHdShuyuanTab('jiance')">监测管理</p>
              <p :class="hdShuyuanTab == 'jiagong' ? 'active' : ''" @click="changeHdShuyuanTab('jiagong')">加工管理</p>
              <p :class="hdShuyuanTab == 'peisong' ? 'active' : ''" @click="changeHdShuyuanTab('peisong')">配送管理</p>
              <p :class="hdShuyuanTab == 'shaoma' ? 'active' : ''" @click="changeHdShuyuanTab('shaoma')">扫码统计</p>
            </div>
        </div>
        <div class="right" @click="changeLayoutShow('warning')">
          <img src="@/assets/img/warning.png">
          <div class="num">12</div>
        </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav'
import { mapState} from 'vuex';
export default {
  components: {
      Nav
  },
  data() {
    return {
      myHdShow: false,
      tableShow: false,
      manageShow: false,
      userShow: false,
      navShow: false
    }
  },
  computed: {
      ...mapState({
        hdTitle: state => state.hdTitle,
        hdShow: state => state.hdShow,
        hdShengchanTab: state => state.hdShengchanTab,
        hdShuyuanTab: state => state.hdShuyuanTab,
          globalStatus: state => state.globalStatus,
          tableStatus: state => state.tableStatus,
          headerStatus: state => state.headerStatus,
          headTitle: state => state.headTitle
      })
  },
  methods: {
    // 系统返回主页
    goMain() {
      this.$router.push({path: '/'})
    },
    changeSow(val) {
      console.log(val)



      if(this.myHdShow == false) {
        this.myHdShow = val;
      } else if(this.myHdShow != val) {
        this.myHdShow = val;
      } else if(this.myHdShow == val) {
        this.myHdShow = false;
      }


    },
    showReport() {
      this.changeLayoutShow('Report');
    },
      toHome() {
        this.changeHdShow('Search_1')
        this.$router.push({path: '/home'})
      },
      changeGlobalStatus (status) {
        this.$store.commit('changeGlobalStatus', status);
      },
      changeTableStatus (status) {
        this.$store.commit('changeTableStatus', status);
      },
      changeHeaderStatus (status) {
        let obj = {
          show: this.headerStatus.show,
          status: status
        }
        this.$store.commit('changeHeaderStatus', obj);
      },

      changeLayoutShow(status) {
        this.$store.commit('changeLayoutShow', status)
      },
      changeHdShengchanTab(status) {
        this.$store.commit('changeHdShengchanTab', status)
      },
      changeHdShuyuanTab(status) {
        this.$store.commit('changeHdShuyuanTab', status)
      },

    changeHdShow(status) {
      this.$store.commit('changeHdShow', status)
    }
  }
}
</script>
<style lang="stylus">
@import '../assets/css/global.styl'
.header
    position fixed
    top 0
    left 0
    width 100%
    background #FFF
    padding 4px 12px 6px 12px
    .header_top
        position relative
        padding 8px 12px 6px
        box-sizing border-box
        display flex
        justify-content space-between
        align-items center
        .left
            display flex
            align-items center
            .logo
                padding-right 32px
                cursor pointer
                p
                    font-size 22px
                    opacity .7
        .title
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            color #222
            font-size 16px
        .right
            display flex
            align-items center
            div
                display flex
                align-items center
                padding-left 22px
            .guanli
                position relative
                cursor pointer
                img
                    width 16px
                    height 16px
                p
                    padding-left 6px
                .list_wrap
                    position fixed
                    right 65px
                    top 40px
                    border 1px solid #EEE
                    font-size 12px
                    background #FFF
                    z-index 10
                    border-radius 3px
                    .item
                        cursor pointer
                        white-space nowrap
                        width 100px
                        text-align center
                        padding 12px
                        border-bottom 1px solid #EEE
                        &:last-child
                            border none
            .user
                position relative
                cursor pointer
                img
                    width 16px
                    heigtht 16px
                .list_wrap
                    position absolute
                    right 16px
                    top 20px
                    border 1px solid #EEE
                    font-size 12px
                    background #FFF
                    z-index 10
                    border-radius 3px
                    .item
                        white-space nowrap
                        width 100px
                        text-align center
                        padding 12px
                        border-bottom 1px solid #EEE
                        cursor pointer
                        &:last-child
                            border none
    .header_bottom
        position relative
        height 36px
        box-sizing border-box
        display flex
        align-items center
        justify-content space-between
        padding 0 12px
        .nav_btn
            position relative
            display flex
            align-items center
            .click
                display flex
                align-items center
                cursor pointer
                img
                    width 16px
                    height 16px
            p
                padding-left 8px
                padding-right 80px
            .nav_box
                position absolute
                left -24px
                top 33px
                background #FFF
                box-shadow 3px 0 5px rgba(0,0,0,.1)
            .table
                position relative
                padding-left 4px
                border-left 1px solid #EEE
                cursor pointer
                .list_wrap
                    position absolute
                    border 1px solid #EEE
                    background #FFF
                    border-radius 3px
                    z-index 10
                    margin-top 6px
                    p
                        white-space nowrap
                        text-align center
                        font-size 12px
                        padding 12px
                        &:first-child
                            border-bottom 1px solid #EEE
        .center
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
            img
                cursor pointer
            input
                width 300px
                height 26px
                border none
                background #FFF
                text-align center
                font-size 13px
                border-radius 4px
                outline none
                box-shadow 2px 2px 4px rgba(0,0,0,.05), -2px -2px 4px rgba(0,0,0,.05)
            span
                position absolute
                right 6px
                top 50%
                font-size 20px
                transform translateY(-50%)
                color rgba(0,0,0,.15)
                font-weight 600
            .tab
                display flex
                p
                    padding 0 22px
                    cursor pointer
                .active
                    color $minColor_b
        .right
            position relative
            margin-right 20px
            img
                width 16px
                height 20px
            span
                font-size 18px
            .num
                position absolute
                left 60%
                bottom -6px
                width 20px
                height 16px
                text-align center
                line-height 15px
                border-radius 6px
                background $minColor
                color #FFF
                font-size 8px
</style>
