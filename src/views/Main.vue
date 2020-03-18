<template>
  <div class="main_container">

    <!--顶部-->
    <MainHd style="position: fixed;left: 0;top: 0;width: 100%;" />

    <div class="main_content">

      <div class="main_content_top_wrap">
        <!--左侧信息-->
        <div class="main_content_top_left_wrap">
          <!--基本信息-->
          <div class="item">
            <div class="con">
              <BaseInfo />
            </div>
          </div>
          <!--环境监测-->
          <div class="item">
            <div class="con">
              <Huanjing />
            </div>
          </div>
          <!--农品追溯-->
          <div class="item">
            <div class="con">
              <Zuishu/>
            </div>
          </div>
        </div>
        <!--地图区域-->
        <div class="main_content_top_map_wrap">
          <div class="main_content_top_map_con">
            <Map @retMap="retMap" :mapList="mapList" />
<!--            <ChinaMap @retMap="retMap" :mapList="mapList"/>-->
          </div>
        </div>
        <!--右侧采集-->
        <div class="main_content_top_caiji_wrap">
          <div class="main_content_top_caiji_list">
            <Caiji />
          </div>
        </div>

      </div>

      <!--底部信息-->
      <div class="main_content_footer_wrap">
        <!--生产现场-->
        <div class="item">
          <div class="item__con">
            <Scene />
          </div>
        </div>
        <!--今日数据-->
        <div class="item">
          <div class="item__con">
            <Today />
          </div>
        </div>
        <!--市场动态-->
        <div class="item">
          <div class="item__con">
            <Market />
          </div>
        </div>
        <!--物联储备-->
        <div class="item">
          <div class="item__con">
            <Eqwulian />
          </div>
        </div>
      </div>


    </div>


  </div>
</template>

<script>
  import MainHd from '../components/Main/MainHd'
  import BaseInfo from '../components/Main/BaseInfo'
  import Huanjing from '../components/Main/Huanjing'
  import Zuishu from '../components/Main/Zuishu'
  import Scene from '../components/Main/Scene'
  import Caiji from '../components/Main/Caiji'
  import Market from '../components/Main/Market'
  import Today from "../components/Main/Today";
  import Eqwulian from "../components/Main/Eqwulian";
  import Map from '../components/Main/Map'
  import ChinaMap from "../components/Main/ChinaMap";

  export default {
    components: {
      MainHd,
      BaseInfo,
      Huanjing,
      Zuishu,
      Scene,
      Caiji,
      Market,
      Today,
      Eqwulian,
      Map,
      ChinaMap
    },
    data() {
      return {
        mapList: [
          {name: "公司1", value: [112.43, 36.87, 70], id: 1},
          {name: "公司2", value: [113.3, 40.12, 58], id: 2}
        ]
      }
    },

    methods: {
      retMap(val) {
        console.log('获取到 map 组件传入的数据 ：',val);
        // this.$router.push({name: 'home'})
        this.$Modal.confirm({
          title: '提示',
          content: `<p>您将要跳转到${val.name}，是否继续？</p>`,
          okText: '跳转',
          cancelText: '取消',
          onOk: () => {
            this.$router.push({name: 'home'})
          },
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
.main_container
  width 100%
  background #F5F8FF
  .main_content
    width 100%
    padding-top 80px


    .main_content_top_wrap
      width 100%
      display flex
      justify-content space-between

      .main_content_top_left_wrap
        width 420px
        .item
          width 100%
          padding 35px 20px 0 20px
          box-sizing border-box
          .con
            width 100%
            height 234px
            background #FFF
            box-sizing border-box
            box-shadow 2px 2px 4px rgba(0,0,0,.05), -2px -2px 4px rgba(0,0,0,.05)
            border-radius 4px
          &:first-child
            padding-top 24px
            .con
              background transparent
              box-shadow none
              height 80px

      .main_content_top_map_wrap
        flex 1
        padding 20px
        box-sizing border-box
        .main_content_top_map_con
          width 100%
          height 620px
          background #FFF

      .main_content_top_caiji_wrap
        width 360px
        padding 20px
        .main_content_top_caiji_list
          height 620px
          width 100%
          background #FFF
          box-shadow 2px 2px 4px rgba(0,0,0,.05), -2px -2px 4px rgba(0,0,0,.05)


    .main_content_footer_wrap
      width 100%
      display flex
      justify-content space-between
      padding 0 20px
      .item
        flex 1
        padding 0 12px 12px 12px
        .item__con
          height 240px
          border-radius 4px
          background #FFF
          box-shadow 2px 2px 4px rgba(0,0,0,.05), -2px -2px 4px rgba(0,0,0,.05)
        &:first-child
          padding-left 0
        &:last-child
          padding-right 0

</style>
