<template>
  <div class="rw_action_container">

    <div class="action__item" v-if="s_type">
      <p>发送类型</p>
      <div class="action__choose">
        <i-select v-model="type">
          <i-option v-for="item in type_list" :value="item.id" :key="item.id">{{item.label }}</i-option>
        </i-select>
      </div>
    </div>

    <div class="action__item" v-if="s_after">
      <p>在以下任务完成后</p>
      <div class="action__choose">
        <i-select v-model="after">
          <i-option v-for="item in after_list" :key="item.id" :value="1">{{item.label}}</i-option>
        </i-select>
      </div>
    </div>

    <div class="action__item" v-if="s_start_date">
      <p>开始时间</p>
      <div class="action__choose">
        <DatePicker type="date" style="width: 100%" v-model="start_date" placeholder="选择日期"></DatePicker>
      </div>
    </div>

    <div class="action__item" v-if="s_end_date">
      <p>结束时间</p>
      <div class="action__choose">
        <DatePicker type="date" style="width: 100%" v-model="end_date" placeholder="选择日期"></DatePicker>
      </div>
    </div>

    <div class="action__item" v-if="s_duration">
      <p>持续天数</p>
      <div class="action__choose data">
        <Input-number :max="1000" style="width: 100%" v-model="duration" size="small" :min="0"></Input-number>
        <span>天</span>
      </div>
    </div>

    <div class="action__item" v-if="s_grade">
      <p>优先级</p>
      <div class="action__choose">
        <i-select v-model="grade">
          <i-option v-for="item in grade_list" :value="item.id" :key="item.id">{{item.lable}}</i-option>
        </i-select>
      </div>
    </div>

    <div class="action__item" v-if="s_cycle">
      <p>周期</p>
      <div class="action__choose">
        <i-select v-model="cycle">
          <i-option v-for="item in cycle_list" :key="item.id" :value="item.id">{{item.lable}}</i-option>
        </i-select>
      </div>
    </div>


  </div>
</template>
<script>
  export default {
    props: ['s_type', 's_after', 's_start_date', 's_end_date', 's_duration', 's_grade', 's_cycle'],
    data() {
      return {
        date: '',
        test: '',

        // 类型数据
        type: '',
        type_list: [
          {
            id: '11',
            label: '类型1'
          },{
            id: '12',
            label: '类型2'
          }
        ],
        // 在以下任务完成后
        after: '',
        after_list: [
          {
            id: '1',
            label: '种苗培植'
          }
        ],
        // 开始时间
        start_date: '',
        // 结束时间
        end_date: '',
        // 持续时间
        duration: 0,
        // 优先级
        grade: '',
        grade_list: [
          {
            id: '21',
            lable: '高'
          },{
            id: '22',
            lable: '中'
          },{
            id: '23',
            lable: '低'
          }
        ],
        // 周期
        cycle: '',
        cycle_list: [
          {
            id: '31',
            lable: '1天'
          },{
            id: '32',
            lable: '3天'
          },{
            id: '33',
            lable: '3天'
          },{
            id: '34',
            lable: '周'
          },{
            id: '35',
            lable: '月'
          }
        ]
      }
    },
    created() {
      console.log(this.s_type)
    },
    methods: {
      sendVal() {
        let obj = {
          type: this.type,
          after: this.after,
          start_date: this.start_date,
          end_date: this.end_date,
          duration: this.duration,
          grade: this.grade,
          cycle: this.cycle
        }
        this.$emit('sendVal', obj)
      }
    },
    watch: {
      // 类型数据
      type(val) {
        console.log(val)
        this.sendVal();
      },
      // 在以下任务完成后
      after(val) {
        console.log(val)
        this.sendVal();
      },
      // 开始时间
      start_date(val) {
        console.log(val)
        this.sendVal();
      },
      // 结束时间
      end_date(val) {
        console.log(val)
        this.sendVal();
      },
      // 持续时间
      duration(val) {
        console.log(val)
        this.sendVal();
      },
      // 优先级
      grade(val) {
        console.log(val)
        this.sendVal();
      },
      // 周期
      cycle(val) {
        console.log(val)
        this.sendVal();
      },


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
