
<template>
  <div class="home_container">
    <Row>
      <i-col span="7">
        <!--左侧信息-->
        <div class="home__left__wrap">
          <!--土壤数据灌溉指数-->
          <!-- <div class="home__left__turang"> -->
            <!-- <Turang class="turang_box" /> -->
            <!-- <Gague :data="88" /> -->

          <!-- </div> -->
          <!--气象数据/病害指数-->
          <div class="home__left__weather">
            <Weather />
          </div>
        </div>
      </i-col>


      <i-col span="10">
        <!--中间区域-->
        <div class="home__center__wrap">
          <!--园区列表展示-->
          <div class="home__center__park">
            <div class="home__center__park__scro">
              <Park /><Park /><Park /><Park /><Park />
              <Park /><Park /><Park /><Park /><Park />
              <Park /><Park /><Park /><Park /><Park />
            </div>
          </div>
          <!--地块列表展示-->
          <div class="home__center__dikuai">
            <div class="home__center__dikuai__scro">
                <Dikuai />
                <Dikuai />
                <Dikuai />
                <Dikuai />
                <Dikuai />
            </div>
          </div>

        </div>
          <!--中间地块图片展示-->
          <div class="home__center__poster">
            <Poster />
          </div>

      </i-col>


      <i-col span="7">
        <!--右侧信息-->
        <div class="home__right_wrap">
          <!--物候期-->
          <div class="home__right__wuhouqi">
            <!-- <Wuhouqi /> -->
            <Turang class="turang_box" />
          </div>
          <!--品种占比-->
          <div class="home__right__percent">
            <Percent />
          </div>
          <!--品种成熟度预测-->
          <!-- <div class="home__right__forecast">
            <Forecast />
          </div> -->

        </div>
      </i-col>
    </Row>

    <!--右侧nav-->
    <div class="home_right__nav_wrap">
      <Nav />
    </div>

    <!--园区新增-->
    <AddPark v-if="homeShow == 'Add'" />

  </div>
</template>
<script>
  import Turang from '../components/home/Turang';
  import Weather from "../components/home/Weather";
  // import Wuhouqi from "../components/home/Wuhouqi";
  import Percent from '../components/home/Percent';
  // import Forecast from '../components/home/Forecast';
  import Park from "../components/home/Park";
  // import Gague from '../components/home/Gague';
  import Poster from '../components/home/Poster';
  import Dikuai from "../components/home/Dikuai";
  import Nav from '../components/home/Nav';
  import AddPark from "../components/home/AddPark";

  import { mapState} from 'vuex';

  export default {
    components: {
      Turang,
      Weather,
      // Wuhouqi,
      Percent,
      // Forecast,
      Park,
      // Gague,
      Poster,
      Dikuai,
      Nav,
      AddPark

    },
    computed: {
      ...mapState({
        homeShow: state => state.homeShow
      })
    },

  }
</script>
<style lang="stylus" scoped>
  .home_container
    padding-top 82px
    display flex
    justify-content space-between
    background #FFF


    .home__left__wrap
      padding 0 20px 20px 20px
      /*height 100vh*/
      .home__left__turang
        border-radius 4px
        background #FFF
        height 350px
        width 100%
        // box-shadow 2px 2px 4px rgba(0,0,0,.08), -2px -2px 4px rgba(0,0,0,.08)
        display flex
        .turang_box
          flex 1
      .home__left__weather
        border-radius 4px
        background #FFF
        margin-top 20px
        // height 450px
        width 100%
        box-shadow 0 0 6px 6px rgba(0,0,0,.05)
        // box-shadow 2px 2px 4px rgba(0,0,0,.08), -2px -2px 4px rgba(0,0,0,.08)


    .home__center__wrap
      padding-bottom 20px
      .home__center__poster
        margin-bottom 20px

      .home__center__dikuai
        max-width 1000px
        height 200px
        margin-top 20px
        .home__center__dikuai__scro
          // display flex
          overflow-x scroll
          white-space nowrap
          padding 12px
          &>div
            margin-right 12px


      .home__center__park
        max-width 1000px
        overflow hidden
        margin-top 20px
        padding-bottom 6px
        .home__center__park__scro
          overflow-x scroll
          white-space nowrap
          padding 12px
          &>div
            margin-right 12px


    .home__right_wrap
      /*height 100vh*/
      padding 20px 20px 0 20px
      .home__right__wuhouqi
        background #FFF
        border-radius 4px
        // box-shadow 2px 2px 4px rgba(0,0,0,.08), -2px -2px 4px rgba(0,0,0,.08)
        box-shadow 0 0 6px 6px rgba(0,0,0,.05)
      .home__right__percent
        margin-top 20px
        background #FFF
        border-radius 4px
        // box-shadow 2px 2px 4px rgba(0,0,0,.08), -2px -2px 4px rgba(0,0,0,.08)
        box-shadow 0 0 6px 6px rgba(0,0,0,.05)
      .home__right__forecast
        background #FFF
        border-radius 4px
        margin-top 20px
        // box-shadow 2px 2px 4px rgba(0,0,0,.08), -2px -2px 4px rgba(0,0,0,.08)


    .home_right__nav_wrap
      width 100px

</style>
