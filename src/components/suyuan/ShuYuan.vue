<!--
 * @Descripttion: 溯源主页
 * @version:
 * @Date: 2020-01-17 16:46:00
 * @LastEditTime : 2020-02-24 15:27:35
 -->
<template>
  <div class="right_nav_wrap">

    <!--溯源管理-->
    <Guanli v-if="hdShuyuanTab == 'shuyuan'"></Guanli>
    <!--溯源认证页面-->
    <Rzgl v-if="hdShuyuanTab == 'renzheng'"/>
    <!--检测管理-->
    <Jcgl v-if="hdShuyuanTab == 'jiance'"/>
    <!--加工管理-->
    <Jggl v-if="hdShuyuanTab == 'jiagong'"/>
    <!--配送管理-->
    <Psgl v-if="hdShuyuanTab == 'peisong'"/>
    <!--扫码统计-->
    <Smtj v-if="hdShuyuanTab == 'shaoma'"/>





  </div>
</template>

<script>

  import Guanli from './Guanli'
  import Rzgl from './Rzgl'
  import Jcgl from './Jcgl'
  import Jggl from './Jggl'
  import Psgl from './Psgl'
  import Smtj from './Smtj'
  import { mapState} from 'vuex';
  export default {
    name: '',
    components: {
      Guanli,
      Rzgl,
      Jcgl,
      Jggl,
      Psgl,
      Smtj,

    },
    computed: {
      ...mapState({
        hdShuyuanTab: state => state.hdShuyuanTab
      })
    },
    methods: {

    }
  }
</script>

<style scoped lang ="stylus">


</style>
