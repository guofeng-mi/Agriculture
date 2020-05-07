<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-13 11:11:43
 -->
<template>
  <div class="percent_container">
    <div class="percent_hd">
      <p>葡萄品种占比</p>
    </div>


    <Row class="percent_list_wrap">
      <i-col span="8" class="percent_list_item">
        <i-circle :percent="80" :stroke-color="['#4468FF', '#A350FE']" trail-color="#F6F6F6" :stroke-width="6" :trail-width="4" stroke-linecap="square" >80%</i-circle>
        <p>葡萄品种</p>
      </i-col>

      <i-col span="8" class="percent_list_item">
        <i-circle :percent="80" :stroke-color="['#09DEAE', '#4468FF']" trail-color="#F6F6F6" :stroke-width="6" :trail-width="4" stroke-linecap="square" >80%</i-circle>
        <p>红葡萄品种</p>
      </i-col>

      <i-col span="8" class="percent_list_item">
        <i-circle :percent="80" :stroke-color="['#F2A100', '#FBD003']" trail-color="#FFFEE6" :stroke-width="6" :trail-width="4" stroke-linecap="square" >80%</i-circle>
        <p>白葡萄品种</p>
      </i-col>
    </Row>
  </div>
</template>
<style lang="stylus" scoped>
.percent_container
  padding 12px
  .percent_hd
    p
      font-size 16px
      // color #46c183

  .percent_list_wrap
    display flex
    justify-content space-between
    margin-top 12px
    .percent_list_item
      flex 1
      display flex
      flex-direction column
      align-items center
      padding 12px 0 16px 0
      p
        padding 12px 0
        text-align center
        font-size 16px

</style>
