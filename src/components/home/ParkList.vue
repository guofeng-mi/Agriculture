<template>
  <div class="park">
    <div class="list_item" v-for="item in 2">
      <div class="top">
        <div class="title">园区1</div>
        <div class="right">
          <i-button @click="toPark(item)">园区信息</i-button>
          <i-button @click="delShow = true">删除</i-button>
          <p>下属地块</p>
          <i-button type="success" size="small">8</i-button>
        </div>
      </div>
      <div class="content">
        <div class="c_left">
          <div class="info">
            <div class="m_1">
              <p>种植面积</p>
              <div>
                <h1>293.58</h1>
                <span>亩</span>
              </div>
            </div>
            <div class="m_2">
              <p>作物</p>
              <div>
                <span>菠菜</span>
                <span>菠菜</span>
                <span>菠菜</span>
              </div>
            </div>
          </div>
          <div class="location">
            <span class="iconfont">&#xe6f4;</span>
            <p>沈阳铁西区云峰北街</p>
          </div>
        </div>
        <div class="c_right">
          <div class="item">
            <img src="@/assets/img/eq_wran.png" alt="">
            <p>传感预警</p>
            <b>0</b>
          </div>
          <div class="item">
            <img src="@/assets/img/online.png" alt="">
            <p>在线设备</p>
            <b>0</b>
          </div>
          <div class="item">
            <img src="@/assets/img/outline.png" alt="">
            <p>离线设备</p>
            <b>0</b>
          </div>
        </div>
      </div>
    </div>

    <!--删除对话框-->
    <Modal
      v-model="delShow"
      title="提示！"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>是否删除该园区？</p>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        delShow: false
      }
    },
    methods: {
      toPark(val) {
        console.log(val)
        this.$router.push({ path: '/park/' + val });
      },
      ok () {
        this.$Message.info('删除成功！');
      },
      cancel () {
        this.$Message.info('取消');
      }
    }
  }
</script>

<style scoped lang ="stylus">
  @import '../../assets/css/global.styl'
  .park
    .list_item
      width 100%
      /* height 200px */
      background #FFF
      padding 22px 32px
      border-radius 6px
      margin-bottom 16px
      .top
        width 100%
        display flex
        justify-content space-between
        align-items center
        padding-bottom 16px
        /* height 36px */
        .title
          color #222
          /* font-weight bold */
          font-size 18px
        /* padding-left 22px */
        .right
          display flex
          align-items center
          button
            margin-left 12px
            padding 0 8px
            border none
          .ivu-btn-default
            background $btnColor
            padding 0 22px
          p
            margin-left 16px
      .content
        display flex
        width 100%
        justify-content space-between
        padding-top 22px
        .c_left
          /* padding-left 22px */
          .info
            display flex
            .m_1
              text-align left
              color rgba(0,0,0,.5)
              p
                padding-bottom 12px
              div
                display flex
                align-items flex-end
                h1
                  font-weight bold
                  color #222
                  font-size 33px
            .m_2
              padding-left 40px
              p
                text-align left
                padding-left 4px
                color rgba(0,0,0,.5)
                padding-bottom 12px
              div
                span
                  border-right 1px solid #222
                  height 12px
                  display inline-block
                  line-height 12px
                  padding 0 4px
                  color #222
                  &:last-child
                    border none
          .location
            display flex
            padding-top 20px
            align-items center
            color rgba(0,0,0,.5)
        .c_right
          display flex
          /* padding-right 18px */
          .item
            padding-left 26px
            img
              height 32px
            span
              font-size 36px
              color rgba(0,0,0,.3)
            .active
              color #1FBA75
            p
              padding 16px 0 18px 0
              color rgba(0,0,0,.5)
            b
              font-weight 900
</style>
