<template>
  <div class="rw_action_container">

    <div class="action__item">
      <p>发送类型</p>
      <div class="action__choose">
        <i-select :model.sync="test">
          <i-option value="1">按事件</i-option>
        </i-select>
      </div>
    </div>

    <div class="action__item" v-if="false">
      <p>在以下任务完成后</p>
      <div class="action__choose">
        <i-select :model.sync="test">
          <i-option value="1">种苗培植</i-option>
        </i-select>
      </div>
    </div>

    <div class="action__item">
      <p>开始结束时间</p>
      <div class="action__choose">
        <Date-picker @on-change="dateChange" v-model="test" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期"></Date-picker>
      </div>
    </div>

    <div class="action__item" v-if="false">
      <p>持续天数</p>
      <div class="action__choose data">
        <Input-number :max="10" style="width: 100%" size="small" :min="1" :value="1"></Input-number>
        <span>天</span>
      </div>
    </div>

    <div class="action__item">
      <p>优先级</p>
      <div class="action__choose">
        <i-select :model.sync="test">
          <i-option value="1">高</i-option>
        </i-select>
      </div>
    </div>

    <div class="action__item">
      <p>周期</p>
      <div class="action__choose">
        <i-select :model.sync="test">
          <i-option value="1">1</i-option>
        </i-select>
      </div>
    </div>

    <div class="action__item" @click="ontest">
      TEST
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        date: '',
        test: ''
      }
    },
    methods: {
      ontest() {
        console.log(this.test)
      },
      dateChange(val) {
        console.log(val)
        this.date = val;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .rw_action_container
    padding 0 40px
    .action__item
      padding 6px 0
      p
        text-align left
        padding-top 5px
      .action__choose
        padding-left 6px
        padding-top 12px
      .data
        display flex
        align-items center
        span
          padding-left 6px





</style>
