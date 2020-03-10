<!--
 * @Descripttion:
 * @version:
 * @Date: 2019-12-26 14:01:06
 * @LastEditTime : 2020-02-03 14:01:49
 -->
<template>
  <div id="app">
    <!-- <Layout> -->
    <router-view/>
    <!-- </Layout> -->
  </div>
</template>
<script>
// import Layout from './components/Layout.vue'
export default {
  components: {
    // Layout
  }
}
</script>
<style>
body {
  font-size: 14px
}
.BMap_cpyCtrl {
  display: none
}
.anchorBL {
  display: none
}
.gantt_link_point {
  display: none
}

.ivu-radio-checked .ivu-radio-inner {
  border-color: #19be6b !important
}
.ivu-radio-inner:after {
  background-color: #19be6b !important
}
.ivu-switch-checked {
  border-color: #19be6b !important;
  background-color: #19be6b !important
}
.ivu-progress-bg {

  background-color: #19be6b !important
}
</style>
