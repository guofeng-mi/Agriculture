<template>
  <div class="main_container">

    <!--顶部-->
    <MainHd style="box-shadow: none; position: fixed;left: 0;top: 0;width: 100%;z-index: 10;" />



    <div class="wrapper__box">

      <!--top-->
      <div class="top__wrap">
        <div class="t__left__wrap pub-shadow">
          <Eq />
        </div>

        <div class="t__center__wrap pub-shadow">
          <Huanjing />
        </div>

        <div class="t__right__wrap pub-shadow">
          <Eqwulian />
        </div>
      </div>

      <div class="bottom__wrap">
        <div class="l__box__wrap">
          <div class="l-t__wrap">
            <div class="data__wrap pub-shadow">
              <Caiji />
            </div>

            <div class="map__wrap">
              <!-- <Map />  -->
              <Map3d />
            </div>
          </div>
          
          <div class="l-b__wrap">
            <div class="market__wrap pub-shadow">
              <Market />
            </div>

            <div class="origin__wrap pub-shadow">
              <Zuishu />
            </div>
          </div>
        </div>

        <div class="r__box__wrap">
          <div class="today__data pub-shadow">
            <Today />
          </div>
          <div class="pd__wrap pub-shadow">
            <Scene />
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import MainHd from '../components/Main/MainHd'
  // import BaseInfo from '../components/Main/BaseInfo'
  import Huanjing from '../components/Main/Huanjing'
  import Zuishu from '../components/Main/Zuishu'
  import Scene from '../components/Main/Scene'
  import Caiji from '../components/Main/Caiji'
  import Market from '../components/Main/Market'
  import Today from "../components/Main/Today";
  import Eqwulian from "../components/Main/Eqwulian";
  // import Map from '../components/Main/Map'
  // import ChinaMap from "../components/Main/ChinaMap";


// .....
  import Eq from '../components/Main/Eq'
  import Map3d from '../components/Main/Map3d'

  export default {
    components: {
      MainHd,
      // BaseInfo,
      Huanjing,
      Zuishu,
      Scene,
      Caiji,
      Market,
      Today,
      Eqwulian,
      // Map,
      // ChinaMap,


      Eq,
      Map3d
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
<style scoped>
.pub-shadow {
  background-image: url('../assets/img/main/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
<style lang="stylus" scoped>
.main_container
  width 100%
  box-sizing border-box
  background radial-gradient(rgb(4,104,214), rgb(1, 45, 99))
  padding-bottom 12px


  .wrapper__box
    padding 0 16px
    color #FFF
    padding-top 60px
    .top__wrap
      display grid
      grid-template-columns 254px 4fr 4fr
      grid-column-gap 43px

    .bottom__wrap
      display grid
      grid-template-columns 2fr 525px
      grid-column-gap 40px
      .l-t__wrap
        display grid
        grid-template-columns 247px 1fr
      .l-b__wrap
        display grid
        grid-template-columns 1fr 1fr
        grid-column-gap 48px


    .r__box__wrap
      .pd__wrap
        position relative

</style>
