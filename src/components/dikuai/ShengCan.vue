<!--
 * @Descripttion: 生产端主页
 -->
<template>
  <div class="shengcan_container">
    <!--任务管理-->
    <Renwugl v-if="hdShengchanTab == 'rewu'"></Renwugl>
<!--    作业流程-->
    <Gantt  v-if="hdShengchanTab == 'zuoye'"></Gantt>
<!--    巡园记录-->
    <Xunyuan v-if="hdShengchanTab == 'xunyuan'"></Xunyuan>
<!--    汇报工作-->
    <Huibao v-if="hdShengchanTab == 'huibao'"></Huibao>
  </div>
</template>

<script>
  import { mapState} from 'vuex';
  import Renwugl from '../renwu/Renwugl'
  import Gantt from '../renwu/Gantt'
  import Xunyuan from '../renwu/Xunyuan'
  import Huibao from  '../renwu/Huibao'
  export default {
    name: '',
    components: {
      Renwugl,
      Gantt,
      Xunyuan,
      Huibao
    },
    computed: {
      ...mapState({
        hdShengchanTab: state => state.hdShengchanTab
      })
    },
    methods: {

    }
  }
</script>

<style scoped lang ="stylus">
.shengcan_container
  width 100%
  height calc(100vh - 84px)
</style>
