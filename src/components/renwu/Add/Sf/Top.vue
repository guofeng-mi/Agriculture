<template>
  <div class="rw_sytable_container">

    <div class="sytable__title">
      <p>施肥单</p>
      <div class="sytable__add">
        <Icon type="ios-plus-outline"></Icon>
        <span>添加</span>
      </div>
    </div>


    <Row class="sytable__table__hd">
      <i-col span="4">名称</i-col>
      <i-col span="6">计量</i-col>
      <i-col span="6">总用量</i-col>
      <i-col span="6">备注</i-col>
      <i-col span="2">删除</i-col>
    </Row>


    <div class="sytable__table__wrap">
      <Row class="sytable__table__item">
        <i-col span="4">
          <i-select :model.sync="test" style="width: 90%">
            <i-option value="1">多不乐</i-option>
          </i-select>
        </i-col>
        <i-col span="6">
          <Input-number :max="10" :min="1" size="small" :value="1"></Input-number>
          <span>克/亩</span>
        </i-col>
        <i-col span="6">
          <Input-number :max="10" :min="1" size="small" :value="1"></Input-number>
          <span>克</span>
        </i-col>
        <i-col span="6">
          <span style="padding-right: 4px;">稀释</span>
          <Input-number :max="10" :min="1" size="small" :value="1"></Input-number>
          <span>倍</span>
        </i-col>
        <i-col span="2">
          <img src="@/assets/img/del.png" alt="">
        </i-col>
      </Row>

    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        test: ''
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .rw_sytable_container
    .sytable__title
      background #eff3ff
      display flex
      align-items center
      justify-content space-between
      padding 0 40px
      height 40px

    .sytable__table__hd
      padding 12px 40px
      &>div
        text-align left

    .sytable__table__wrap
      padding 0 40px
      .sytable__table__item
        display flex
        align-items center
        height 46px
        &>div
          text-align left
          display flex
          align-items center
          span
            &:last-child
              padding-left 4px





</style>
