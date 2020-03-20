<template>
  <div class="rw_ready_container">

    <div class="ready__title">
      <p>准备工作</p>
      <div class="ready__add">
        <Icon type="ios-plus-outline"></Icon>
        <span @click="add">添加</span>
      </div>
    </div>

    <div class="ready__table__wrap">

      <div class="ready__table__item" v-for="(item, index) in list" :key="index">
        <p>{{index + 1}}</p>
        <div class="ready__table__inp">
          <i-input @on-change="chengVal" v-model="item.content" placeholder="请输入..."></i-input>
        </div>
        <img @click="del(index)" src="@/assets/img/del.png" alt="">
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            content: ''
          }
        ]
      }
    },
    methods: {
      add() {
        this.list.push({content: ''})
      },

      del(index) {
        if(this.list.length == 1) {
          this.list = [{content: ''}]
        } else {
          this.list.splice(index,1)
        }
      },

      chengVal() {
        // console.log(this.list);
        this.list = this.list.map((item, index) => {
          return {
            index: index,
            content: item.content
          }
        })
        this.$emit('topSend', this.list);
      }

    }
  }
</script>
<style lang="stylus" scoped>
  .rw_ready_container
    .ready__title
      background #eff3ff
      display flex
      align-items center
      justify-content space-between
      padding 0 40px
      height 40px

    .ready__table__wrap
      .ready__table__item
        display flex
        align-items center
        justify-content space-between
        height 45px
        padding 0 40px
        .ready__table__inp
          width 100%
          padding-right 12px
        img
          cursor pointer
        p
          padding-right 12px





</style>
