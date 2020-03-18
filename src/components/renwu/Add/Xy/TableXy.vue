<!--巡园table-->
<template>
  <div class="rw_con_table_container">

    <div class="rw__table__item__wrap">
      <Yaoqiu />
      <Jiaocheng />
    </div>


  </div>
</template>
<script>
  import Yaoqiu from '../Pub/Yaoqiu'
  import Jiaocheng from '../Pub/Jiaocheng'

  export default {
    components: {
      Yaoqiu,
      Jiaocheng

    }
  }
</script>
<style lang="stylus" scoped>
  .rw_con_table_container
    width 100%

</style>
