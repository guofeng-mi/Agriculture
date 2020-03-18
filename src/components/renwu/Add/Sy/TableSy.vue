<!--施药单table-->
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
  // import SyTable from './SyTable'
  // import Requirement from './Requirement'
  import Top from './Top'
  import Yaoqiu from '../Pub/Yaoqiu'
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
