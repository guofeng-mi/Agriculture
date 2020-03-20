<template>
  <div class="rw_con_table_container">

    <div class="rw__table__item__wrap">
      <Top @topSend="getTop" />
      <Yaoqiu @yaoqiuSend="getYaoqiu" />
      <Jiaocheng @jiaochengSend="getJiaocheng" />
    </div>


  </div>
</template>
<script>
  import Top from './Top'
  import Yaoqiu from '../Pub/Yaoqiu'
  import Jiaocheng from '../Pub/Jiaocheng'

  export default {
    components: {
      Top,
      Yaoqiu,
      Jiaocheng
    },

    data() {
      return {
        form: {
          list: [],
          yaoqiu: '', // 任务要求
          jiaocheng: '' // 教程 应该是富文本内容
        }
      }
    },

    methods: {
      //获取施肥单数据
      getTop(val) {
        console.log("获取施肥单数据", val);
        this.form.list = val;
        this.sendVal();
      },
      //获取任务要求
      getYaoqiu(val) {
        console.log("获取施肥单数据", val);
        this.form.yaoqiu = val;
        this.sendVal();
      },
      //获取获取教程
      getJiaocheng(val) {
        console.log("获取教程", val);
        this.form.jiaocheng = val;
        this.sendVal();
      },
      // 发送数据
      sendVal() {
        this.$emit('sendVal', this.form);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .rw_con_table_container
    width 100%

</style>
