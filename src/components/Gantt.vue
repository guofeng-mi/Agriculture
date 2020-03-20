<!--
 * @Descripttion: 作业流程图
 -->
<template>
  <div class="container" ref="gantt">
  </div>
</template>

<script>
import 'dhtmlx-gantt'
export default {
  name: 'gantt',
  props: {
    tasks: {
      type: Object,
      default () {
        return {data: [], links: []}
      }
    }
  },
  mounted: function () {
    gantt.init(this.$refs.gantt)
    gantt.parse(this.$props.tasks)
  }
}
</script>
<style>
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
.container {
  width: 100%;
  height: 100%;
}
</style>
