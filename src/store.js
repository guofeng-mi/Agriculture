/*
 * @Descripttion:
 * @version:
 * @Date: 2020-01-08 12:53:11
 * @LastEditTime : 2020-02-24 15:09:00
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * Report // 大数据报表
     * Dikuai_Home // 地块主页
     * */
    pageShow: 'Dikuai_Home',

    /** 控制搜索栏 是否切换tab 以及tab详情
     * Search_1 首页搜索
     * tab_dikuai_shengchan 生产端 任务
     * tab_dikuai_shuyuan 溯源端
     * */
    hdShow: 'tab_dikuai_shengchan',

    /**生产端tab控制 通过tab控制组件切换
     * rewu 任务管理
     * zuoye 作业流程
     * xunyuan 巡园记录
     * huibao 工作汇报
     */
    hdShengchanTab: 'zuoye',

    /**溯源端tab控制 通过tab控制组件切换
     * shuyuan 溯源管理
     * renzheng 认证管理
     * jiance 监测管理
     * jiagong 加工管理
     * peisong 配送管理
     * shaoma 扫码统计
     */
    hdShuyuanTab: 'shuyuan',

    /** 全局展示弹窗组件 默认 false
     * warning 预警中心
     * Report 大数据报表
     *
     * kaoqin 考勤管理
     * nongzi 农资
     * product 产品
     * homeContent 公司详情
     *
    */
    layoutShow: '',

    /** 首页展示的弹窗级组件 默认 false
     * Shebei 设备nav显示
     * Add 新增园区
     */
    homeShow: 'false',

    /**园区状态及弹窗控制
     * nongzhi 农资
     * chanpin  产品
     * content 园区详情
     * add 新增
     * */
    parkShow: 'false',


    /**控制地块部分
     * JianCe 监测端
     * ShengCan  生产端
     * ShuYuan 溯源端
     * DikuaiContent 地块详情
     * */
    dikuaiShow: 'ShengCan',

    /**控制地块详情与新增地块显示
     * see 查看地块详情
     * add 新增地块
     * */
    dikuaiAction: 'false',

    /**地块详情 --> 选择形状
     * see 查看时选择
     * add 添加时选择
     * */
    dikuaiActionMap: 'false',

    /**
     * 公司名称
     * */
    hdTitle: '公司名称',



    /*以下变量没有考虑好，需要重新规划************************************ */
    /**
     * kq 考勤
     * eq 设备
     * nz 农资
     * pd 产品
     * xq_gs 公司详情
     * xq_kq 考勤详情
     * xq_kq_addperson 考勤 添加员工
     */
    homeState: {
      rightNavStatus: ''
    },


    /**
     * @warning 预警信息,
     * @userInfo 公司详情
     * @gg 平台公告
     * @park_info 园区信息
     *
     * @nzgl 农资管理
     * @nzgl_add_1 农资添加
     * @nzgl_add_2 农资批量添加
     * @nzgl_con 农资详情
     * @nzgl_rk 农资入库
     * @nzgl_tl 农资退料
     *
     * @pd 产品库存管理
     * @pd_ck 产品库存管理 出库
     */
    globalStatus: '',


    /**
     * @pzgl 品种管理
     * @pzgl_add 品种管理添加
     * @wlgl 物料管理
     * @wlgl_add 添加物料
     * @usergl 用户管理
     * @usergl_add 用户添加
     * @warngh 预警规划
     * @whqgl 物候期管理
     * @whqgl_add 添加物候期
     * @yxcfgl 有效成分管理
     * @yxcfgl_add 添加有效成分
     */
    tableStatus: '',

    /**
     * @search 搜索
     * @dikuai 地块
     * @renwu 任务
     * @shuyuan 溯源
     */
    headerStatus: {
      show: 'false', // search dikuai renwu shuyuan
      status: '0',
      add: ''
    },
    /**
     * @dk 地块主页
     * @rn 生产端
     * @dik_sc 地块 生产端
     * @dik_map_big 选择地块形状
     * @jc
     * @rn_con_cj  任务管理 任务详情_采集
     * @rn-cone_cj_done 任务完成
     * @rn_con_sy  任务管理 任务详情_施药
     * @rn-cone_sy_done 任务完成
     * @rn_con_xy  任务管理 任务详情_巡园
     * @rn-cone_xy_done 任务完成
     */
    dikuaiStatus: 'false',
  },
  mutations: {
    changePageShow (state, payload) {
      state.pageShow = payload;
    },
    changeHomeState (state, payload) {
      state.homeState.rightNavStatus = payload;
    },
    changeGlobalStatus(state, payload) {
      state.globalStatus = payload;
    },
    changeTableStatus(state, payload) {
      state.tableStatus = payload;
    },
    changeHeaderStatus(state, payload) {
      state.headerStatus = payload;
    },
    changeDikuaiStatus(state, payload) {
      state.dikuaiStatus = payload;
    },



    changeHdShow(state, payload) {
      state.hdShow = payload;
    },
    changeHdShengchanTab(state, payload) {
      state.hdShengchanTab = payload;
    },
    changeHdShuyuanTab(state, payload) {
      state.hdShuyuanTab = payload;
    },
    changeLayoutShow(state, payload) {
      state.layoutShow = payload;
    },
    changeHomeShow(state, payload) {
      state.homeShow = payload;
    },
    changeParkShow(state, payload) {
      state.parkShow = payload;
    },
    changeDikuaiShow(state, payload) {
      state.dikuaiShow = payload;
    },
    changeDikuaiAction(state, payload) {
      state.dikuaiAction = payload;
    },
    changeDikuaiActionMap(state, payload) {
      state.dikuaiActionMap = payload;
    }



  },
  actions: {

  }
})
