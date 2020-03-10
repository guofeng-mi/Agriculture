<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logic
 * @Date: 2020-01-08 13:40:38
 * @LastEditors  : Logic
 * @LastEditTime : 2020-01-08 13:48:43
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