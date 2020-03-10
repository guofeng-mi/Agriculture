<!--
 * @Descripttion: 管理 系统通知
 -->
<template>
  <div class="gonggao_bg">
    <div class="gonggao_container">
      <div class="gg_hd">
        <div class="title">
          <p>平台公告</p>
        </div>
        <div class="close">
          <span class="iconfont" @click="changeGlobalStatus('false')">&#xe600;</span>
        </div>
      </div>
      <div class="choose">
        <div class="left">
          <span @click="status = 0" :class="status == 0 ? 'active' : ''">全部</span>
          <span @click="status = 1" :class="status == 1 ? 'active' : ''">近7天</span>
          <span @click="status = 2" :class="status == 2 ? 'active' : ''">近15天</span>
          <span @click="status = 3" :class="status == 3 ? 'active' : ''">近30天</span>
          <span @click="status = 4" :class="status == 4 ? 'active' : ''">未读</span>
          <span @click="status = 5" :class="status == 5 ? 'active' : ''">全部标为已读</span>
        </div>
        <div class="right">
          <div class="search">
            <input type="text">
            <span class="iconfont">&#xe63c;</span>
            <div class="btn">搜索</div>
          </div>
        </div>
      </div>
      <div class="gg_tb">
        <i-table height="600" :columns="columns1" :data="data2"></i-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  name: '',
  data () {
    return {
      status: 0,
      columns1: [
          {
              title: '状态',
              key: 'name'
          },
          {
              title: '时间',
              key: 'age'
          },
          {
              title: '来源',
              key: 'address'
          }
      ],
      data2: [
        {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
        }
      ]
    }
  },
  computed: {
      ...mapState({
          globalStatus: state => state.globalStatus
      })
  },
  methods: {
    changeGlobalStatus (status) {
        this.$store.commit('changeGlobalStatus', status);
    },
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.gonggao_bg
  width 100%
  height 100vh
  position fixed
  left 0
  top 0
  background rgba(0, 0, 0, .5)
  z-index 9
  .gonggao_container
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background #FFF
    width 90%
    height 90vh
    border-radius 2px
    padding-top 60px
    .gg_hd
      position absolute
      left 0
      top 0
      width 100%
      display flex
      justify-content space-between
      align-items center
      padding 20px 20px 20px 40px
      .title
        font-size 16px
      .close
        cursor pointer
    .choose
      padding 0 40px
      display flex
      justify-content space-between
      align-items center
      .left
        span
          display inline-block
          padding 8px 22px
          background $btnColor
          cursor pointer
          margin-right 1px
        .active
          background $minColor_b
          color #FFF
      .right
        .search
          display flex
          position relative
          align-items center
          span
            position absolute
            left 6px
            top 50%
            transform translateY(-50%)
            font-size 22px
            font-weight 600
            opacity .2
          input
            box-shadow $inp_shadow
            border none
            outline none
            padding 6px
            border-radius 2px
            width 300px
            padding-left 32px
          .btn
            background $minColor_b
            color #FFF
            margin-left 8px
            padding 0 12px
            height 30px
            line-height 30px
            cursor pointer
    .gg_tb
        padding 20px 40px 0 40px




</style>
