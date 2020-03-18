<!--
 * @Descripttion:
 -->
<template>
  <div class="container">
    <div class="home">
      <div class="left">
        <div class="name">{{hdTitle}}</div>
        <div class="list_wrap">
          <!-- 园区列表 -->
          <ParkList></ParkList>
        </div>
        <div class="add">
          <div class="con" @click="changeHomeShow('Add')">
            <img src="@/assets/img/add_on.png" alt="">
            <p>新建园区</p>
          </div>
        </div>
      </div>
      <!-- 右侧 nav -->
      <HomeRightNav></HomeRightNav>
    </div>


    <!-- 新增园区 -->
    <AddPark v-if="homeShow == 'Add'"></AddPark>

  </div>
</template>
<script>
  import Park from '../components/park/Park'
  import ParkList from "../components/home/ParkList";
  import HomeRightNav from '../components/home/HomeRightNav'
  import AddPark from '../components/home/AddPark'

  import { mapState} from 'vuex';
  export default {
    name: 'home',
    components: {
      Park,
      AddPark,
      ParkList,
      HomeRightNav
    },
    data() {
      return {
        infoShow: false,
        addPersonShow: false
      }
    },
    computed: {
      ...mapState({
        homeState: state => state.homeState,
        homeShow: state => state.homeShow,
        hdTitle: state => state.hdTitle
      })
    },
    methods: {
      changeRightStatus (status) {
        this.$store.commit('changeHomeState', status);
      },
      changeHomeShow (status) {
        this.$store.commit('changeHomeShow', status);
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../assets/css/global.styl'
  .container
    padding 0 300px 0 300px
    box-sizing border-box
    .home
      padding 70px
      display flex
      width 100%
      justify-content space-between
      .left
        flex 1
        text-align center
        .name
          font-weight bold
          font-size 22px
          padding 18px 0
        .list_wrap
          width 100%
          padding 0 32px
        .add
          margin 0 32px
          padding 32px
          background #FFF
          border-radius 6px
          .con
            display flex
            flex-direction column
            align-items center
            justify-content center
            width 100%
            height 140px
            border 2px dashed rgba(0,0,0,.05)
            border-radius 6px
            p
              padding-top 6px
              cursor pointer
            img
              padding-top 6px
              cursor pointer
</style>
