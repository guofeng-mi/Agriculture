<!--
 * @Descripttion: dhtmlx-gantt
 -->
<template>
  <div class="container">
    <div class="test">
      <Button type="success" @click="test">Success</Button>
    </div>
    <div class="gantt" ref="gantt"></div>

    <!--右侧过滤-->
    <div class="guolv_right">
      <Ganttright @changeStatus="changeStatus"></Ganttright>
    </div>

    <!--施肥任务-->
    <Sf @sendVal="getVal" style="z-index: 900"  @close="close" v-if="addShow == 'sf'"/>

    <!--农事任务-->
    <Ns style="z-index: 900" @close="close" v-if="addShow == 'ns'" />

    <!--施药任务-->
    <Sy style="z-index: 900" @close="close" v-if="addShow == 'sy'" />


    <!--巡园任务-->
    <Xy style="z-index: 900" @close="close" v-if="addShow == 'xy'" />

    <!--采集任务-->
    <Cj style="z-index: 900" @close="close" v-if="addShow == 'cj'"/>


  </div>
</template>

<script>
import 'dhtmlx-gantt'
import Ganttright from '../dikuai/Ganttright'

import Ns from './Add/Ns'
import Sy from "./Add/Sy";
import Sf from "./Add/Sf";
import Xy from "./Add/Xy";
import Cj from './Add/Cj'

export default {
  name: 'gantt',
  components: {
    Ganttright,
    Sf,
    Ns,
    Sy,
    Xy,
    Cj

  },
  data() {
    return {
      addShow: false,
      tasks: {
        data: [
          /*
          * 施肥任务 1
          * 农事任务 2
          * 施药任务 3
          * 采集任务 4
          * 巡园任务 5
          {
            id: 1, text: "施肥任务", start_date: "01-01-2020", duration: 18, order: 10,
            progress: 0.4, open: true
          },
          {
            id: '1_1', text: "施肥1", start_date: "01-01-2020", duration: 8, order: 10,
            progress: 0.6, parent: 1
          },
          {
            id: '1_2', text: "施肥2", start_date: "05-01-2020", duration: 8, order: 20,
            progress: 0.6, parent: 1
          },
          * */
          {
            id: 1, text: "施肥任务", start_date: "01-01-2020", duration: 18, order: 10,
            progress: 0.4, open: true
          },
          {
            id: 2, text: "农事任务"
          },
          {
            id: 3, text: "施药任务"
          },
          {
            id: 4, text: "采集任务"
          },
          {
            id: 5, text: "巡园任务"
          }
        ]
      }
    }
  },
  mounted: function () {
    this.ganttInit()
  },
  methods: {
    // 获取新增或修改的信息
    getVal(val) {
      console.log("获取信息",val)
      this.tasks.data.push({...val, text: val.data.text, id: val.data.id, parent: val.data.parent, start_date: val.data.start_date, duration: 30});
      this.ganttInit();
    },
    ganttInit() {
      const that = this;

      // 初始化时间
      gantt.config.subscales = [
        {
          unit: 'year',
          step: 1,
          date: '%Y'
        }
      ]

      gantt.config.scale_unit = "month";	//按月显示 //时间坐标轴单位“minute”, “hour”, “day”, “week”, “quarter”, “month”, “year”
      gantt.config.date_scale = "%F, %Y";		//设置时间刻度的格式（X轴） 多个尺度

      gantt.config.row_height = 30; //甘特图的行高
      gantt.config.scale_height = 20;//甘特图的表头高度

      gantt.config.drag_resize = false;//两边不可拖动
      gantt.config.readonly = true;//只读模式
      gantt.config.scale_height = 50; //设置时间刻度的高度和网格的标题

      gantt.config.subscales = [
        {unit: "day", step: 1, date: "%j, %D"}
      ];			//指定第二个时间刻度


      gantt.config.columns = [
        {name:"text", label:"计划名称", align: "left",  width:"*", tree:true },
        {name:"start_date", label:"开始时间", align:"center" },
        {name:"duration",   label:"持续时间",   align:"center" },
      ];

      //显示到进度条上的文本   计划名称和任务进度百分比
      gantt.templates.task_text = function (start, end, task) {
        return "<b style='text-align:left;'>计划名称:</b> " + task.text +"    <span style='text-align:left;'>" +"完成计划："+ Math.round(task.progress * 100) + "% </span>";
      };
      gantt.attachEvent("onTaskClick", function(id, e) {
        that.handleClick(id)
      });

      // 初始化
      gantt.init(this.$refs.gantt)
      gantt.parse(this.tasks)
    },
    close() {
      this.addShow = false;
    },
    changeStatus(val) {
      console.log(val);
      this.addShow = val;
    },
    handleClick(id) {
      console.log(id)
      this.tasks.data.push({
        id: '1_2', text: "施肥2", start_date: "05-01-2020", duration: 8,
        progress: 0.6, parent: 1
      });
      // gantt.addTask({
      //   id:'1_1',
      //   text:"施肥1",
      //   start_date:"01-01-2020",
      //   duration:28
      // }, "施肥任务", 1);
    },
    test() {
      console.log(this.tasks.data);
      // this.ganttInit()
    }
  }
}
</script>
<style lang="stylus">
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css"
.container
  display flex
  .gantt
    width 100%
    height calc(100vh - 84px)
  .test
    position fixed
    right 200px
    top 20px
    z-index 20
</style>
