<!--施肥单table-->
<template>
  <div class="rw_con_table_container">

    <div class="rw__table__item__wrap">
      <Top />
      <Yaoqiu />
      <Jiaocheng />
    </div>


  </div>
</template>
<script>
  import Top from './Top'
  import Yaoqiu from '../Pub/Yaoqiu'
  // import Course from '../Course'
  import Jiaocheng from '../Pub/Jiaocheng'

  export default {
    components: {
      Top,
      Yaoqiu,
      Jiaocheng

    }
  }
</script>
<style lang="stylus" scoped>
  .rw_con_table_container
    width 100%

</style>
