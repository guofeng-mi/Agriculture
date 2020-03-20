<!--采集清单-->
<template>
  <div class="rw_cj_container">

    <div class="cj__title">
      <p>采集清单</p>
    </div>

    <div class="cj__wrap">
      <div class="cj__item">
        <div class="item__title">采集点</div>
        <div class="item__choose__wrap">
          <CheckboxGroup v-model="list.spot.choose" @on-change="checkAllGroupChange">
            <Checkbox :label="item.label" v-for="item in list.spot.list" :key="item.id"></Checkbox>
          </CheckboxGroup>

        </div>
      </div>


      <div class="cj__text">
        <p>采集类型</p>
        <p>采集指标</p>
      </div>

      <div class="cj__item__type2" v-for="item in list.type" :key="item.name">
        <div class="item__title">
          <p>{{item.name}}</p>
        </div>
        <div class="item__choose__wrap">
          <CheckboxGroup v-model="item.choose" @on-change="checkAllGroupChange">
            <Checkbox :label="item_2.label" v-for="item_2 in item.list" :key="item_2.id"></Checkbox>
          </CheckboxGroup>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
        test: [],

        list: {
          spot: {
            name: '采集点',
            list: [
              {
                id: 1,
                label: '1'
              },{
                id: 2,
                label: '2'
              }
            ],
            choose: []
          },
          type: [
            {
              name: '果',
              list: [{id: 1, label: 1},{id: 2, label: 2},{id: 3, label: 3},{id: 4, label: 4},{id: 5, label: 5},{id: 6, label: 6},{id: 7, label: 8},{id: 9, label: 9},{id: 10, label: 10},{id: 11, label: 11},{id: 12, label: 12},{id: 13, label: 13},{id: 14, label: 14},{id: 15, label: 15}],
              choose: []
            },
            {
              name: '叶',
              list: [{id: 1, label: 1}],
              choose: []
            },
            {
              name: '茎',
              list: [{id: 1, label: 1}],
              choose: []
            },
            {
              name: '其他',
              list: [{id: 1, label: 1}],
              choose: []
            }
          ]
        }
      }
    },
    methods: {
      checkAllGroupChange(val) {
        console.log(val);
        console.log(this.list)
        this.$emit('topSend', this.list);
      },
    }
  }
</script>
<style lang="stylus" scoped>
  .rw_cj_container
    .cj__title
      background #eff3ff
      display flex
      align-items center
      justify-content space-between
      padding 0 40px
      height 40px

    .cj__wrap
      padding 12px 40px
      .cj__item
        display flex
        .item__title
          white-space nowrap
          width 100px
          text-align left


        .item__choose__wrap
          padding-top 22px
          flex 1
          .ivu-checkbox-group
            display flex
            flex-wrap wrap
            .ivu-checkbox-group-item
              padding 0 12px 12px 0

      .cj__text
        padding 12px 0
        text-align left
        display flex
        p
          width 100px
          text-align left
      .cj__item__type2
        display flex
        .item__title
          white-space nowrap
          width 100px
          text-align left
          padding-left 14px
          opacity 0.6

        .item__choose__wrap
          flex 1
          .ivu-checkbox-group
            display flex
            flex-wrap wrap
            .ivu-checkbox-group-item
              padding 0 12px 12px 0

</style>
