<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-01-08 13:10:55
 * @LastEditTime: 2020-01-22 17:34:42
 -->
<template>
  <div class="container">
    <gantt class="left-container" aria-label="20 4月"  :tasks="tasks"></gantt>
  </div>
</template>

<script>
import Gantt from '../components/Gantt.vue';


export default {
  name: 'app',
  components: {Gantt},
  data () {
    return {
      tasks: {
        data: [
      //   {
      //     text: 'Test001-001',//任务名
      //     start_date: '19-12-2019',//开始时间
      //     id: 1,//任务id
      //     duration: 13,//任务时长，从start_date开始计算
      //     progress: 0.6,//任务完成情况，进度
      //     // parent: 2,//父任务ID
      //     user: "李四",//成员
      //     // planned_end:'19-12-2019', //计划开始时间
      //     // planned_start:'10-12-2019',//计划结束时间
      //     show:false,
      //     duration: 3,
      //     open: true,//默认是否打开
      //     type: 'project'// gantt.config.types.milestone为里程碑类型
			//         // project为项目任务类型，也就是摘要任务，
			//         // task为普通任务类型
			// },
          {id: 2, text: 'Task #1', start_date: '15-12-2019', duration: 3, progress: 0.6},
          {id: 3, text: 'Task #2', start_date: '18-12-2019', duration: 3, progress: 0.4}
        ],
        // links: [// links为任务之间连接的线
        //   {id: 1, source: 1, target: 2, type: '0'}//source根源 target目标 也就是从id为1的指向id为2的
        //   //type:'0'是从1任务完成到2任务开始，type:'1'是1任务开始到2任务开始，
        //   //type:'2'是从1任务完成到2任务完成，type:'3'是从1任务开始到2任务完成
        // ]
      },
    }
  }
}
</script>
<style lang="stylus" scoped>
.left-container
  width 100%
  height calc(100vh - 80px)
</style>