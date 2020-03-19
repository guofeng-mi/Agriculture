<template>
  <div class="rw_sytable_container">

    <div class="sytable__title">
      <p>施肥单</p>
      <div class="sytable__add">
        <Icon type="ios-plus-outline"></Icon>
        <span @click="add">添加</span>
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
      <Row class="sytable__table__item" v-for="(item, index) in list" :key="item.id">

        <i-col span="4">
          <i-select v-model="item.yp_id" style="width: 90%" @on-change="changeValue">
            <i-option v-model="yp.id" v-for="yp in name_list" :key="yp.id">{{yp.label}}</i-option>
          </i-select>
        </i-col>

        <i-col span="6">
          <Input-number size="small" @on-change="changeValue" v-model="item.num"></Input-number>
          <span>克/亩</span>
        </i-col>

        <i-col span="6">
          <Input-number :max="10" :min="1" size="small" @on-change="changeValue" v-model="item.count"></Input-number>
          <span>克</span>
        </i-col>

        <i-col span="6">
          <span style="padding-right: 4px;">稀释</span>
          <Input-number :max="10" :min="1" size="small" @on-change="changeValue" v-model="item.xishi"></Input-number>
          <span>倍</span>
        </i-col>

        <i-col span="2">
          <img src="@/assets/img/del.png" alt="" @click="del(item, index)">
        </i-col>
      </Row>

    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        test: '',
        list_option: {
          yp_id: '', // 药品id
          name: '', // 药品名称
          num: null, // 计量
          count: null, // 总用量
          xishi: null, // 稀释倍数
          isdel: false // 是否被删除了
        },
        list: [
          {
            id: new Date().getTime(), // id
            yp_id: '', // 药品id
            name: '', // 药品名称
            num: null, // 计量
            count: null, // 总用量
            xishi: null, // 稀释倍数
            isdel: false // 是否被删除了
          }
        ],
        name_list: [
          {
            id: '1',
            label: '药品1'
          },{
            id: '2',
            label: '药品2'
          },
        ]

      }
    },
    methods: {
      changeValue() {
        console.log('change')
        this.topSend();
      },
      topSend() {
        this.$emit('topSend', this.list);
      },
      // 添加一行
      add() {
        this.list.push({...this.list_option, id: new Date().getTime()});
        this.topSend();
      },
      del(val, index) {
        if(this.list.length == 1) {
          this.list = [{...this.list_option, id: new Date().getTime()}]
        } else {
          this.list.splice(index,1)
        }
        this.topSend();
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
      .sytable__add
        span
          cursor pointer

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
