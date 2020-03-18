<template>
  <div class="dikuai_container">
    <div class="content">
      <div class="hd">
        <div class="left">
          <p>{{ title }}</p>
          <div class="zs">
            <img src="@/assets/img/zs.png" alt="">
            <span>追溯</span>
          </div>
        </div>
        <div class="right">
          <div class="dk" @click="toDikuai(1)">
            <img src="@/assets/img/info.png" alt="">
            <span>地块信息</span>
          </div>
          <p class="del" @click="del(1)">删除</p>
        </div>
      </div>

      <div class="jiance">
        <div class="item">
          <span>施药</span>
          <p>2</p>
        </div>
        <div class="item">
          <span>农事</span>
          <p>2</p>
        </div>
        <div class="item">
          <span>施肥</span>
          <p>2</p>
        </div>
        <div class="item">
          <span>采集</span>
          <p>2</p>
        </div>
        <div class="item">
          <span>巡园</span>
          <p>2</p>
        </div>
      </div>

      <div class="b_wrap">
        <div class="left_eq">
          <div class="item">
            <p>预警</p>
            <span>0</span>
          </div>
          <div class="item">
            <p>在线设备</p>
            <span>5</span>
          </div>
          <div class="item">
            <p>离线</p>
            <span>0</span>
          </div>
          <div class="item">
            <p>作物</p>
            <span>葡萄</span>
          </div>
          <div class="item">
            <p>品种</p>
            <span>阳光玫瑰</span>
          </div>
        </div>
        <div class="echart">
          <Echart></Echart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Echart from "./Echart";
  export default {
    components: {
      Echart
    },
    methods: {
      // 跳转到地块
      toDikuai(id) {
        this.$Modal.confirm({
          title: '提示',
          content: `<p>将要跳转到地块${id}，是否继续？</p>`,
          onOk: () => {
            this.$store.commit('changePageShow', 'Dikuai_Home');
            this.$router.push({path: '/dikuai/' + id})
          },
          onCancel: () => {
          }
        });
      },

      del(id) {
        this.$Modal.confirm({
          title: '警告',
          content: `<p>将要删除地块${id}，是否继续？</p>`,
          onOk: () => {
            this.$Message.success('删除成功');
          },
          onCancel: () => {
            this.$Message.info('删除已取消');
          }
        });
      }
    }
  }
</script>
<style lang="stylus" scoped>
.dikuai_container
  .content
    padding 12px 22px
    background #FFF
    margin-top 22px
    .hd
      display flex
      align-items center
      justify-content space-between
      .left
        display flex
        align-items center
        .zs
          display flex
          align-items center
          color $green_1_Color
          cursor pointer
          img
            height 14px
            margin-left 22px
            margin-right 4px
      .right
        display flex
        align-items center
        img
          height 19px
          margin-right 4px
        .dk
          display flex
          align-items center
          padding-right 12px
          cursor pointer
        .del
          background $btnColor
          padding 6px 12px
          margin-left 12px
          cursor pointer
          font-size 13px
    .jiance
      margin-top 22px
      display flex
      justify-content space-between
      box-shadow $inp_shadow
      border-radius 2px
      .item
        height 62px
        display flex
        align-items center
        justify-content center
        flex-direction column
        flex 1
        position relative
        p
          padding-top 6px
          font-weight 600
        span
          opacity .7
        &::before
          display block
          content ''
          width 1px
          height 28px
          background rgba(0,0,0,.3)
          position absolute
          right 0
          top 50%
          transform translateY(-50%)
        &:last-child::before
          display none
    .b_wrap
      margin-top 20px
      display flex
      align-items flex-start
      .left_eq
        width 45%
        padding-right 5%
        .item
          display flex
          align-items center
          justify-content space-between
          border-bottom 1px solid #EEE
          padding 12px 0
      .echart
        width 55%
        padding-left 5%
  // border 1px solid red
  .add
    margin-top 22px
    padding 32px
    background #FFF
    border-radius 6px
    .con
      display flex
      flex-direction column
      align-items center
      justify-content center
      width 100%
      height 100px
      border 2px dashed rgba(0,0,0,.05)
      border-radius 6px
      p
        padding-top 6px
        cursor pointer
      img
        padding-top 6px
        cursor pointer
</style>
