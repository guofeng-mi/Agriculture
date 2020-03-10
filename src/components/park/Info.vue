<!--
 * @Descripttion: 公司信息 设备列表
 -->
<template>
  <div class="info_wrap">
    <div class="box">
      <div class="in_close">
        <Icon type="md-close" @click="changeLayoutShow('false')" />
<!--        <span class="iconfont" @click="changeLayoutShow('false')">&#xe62c;</span>-->
      </div>
      <div class="if_hd">
        <div class="item" :class="status == 1 ? 'active' : ''" @click="status = 1">
          <p>公司信息</p>
        </div>
        <div class="item" :class="status == 2 ? 'active' : ''" @click="status = 2">
          <p>设备列表</p>
        </div>
      </div>
      <div class="con_gs" v-if="status == 1">
        <div class="item">
          <div class="s1">
            <p class="t1">基本资料</p>
            <div class="c1">
              <p>公司名称<i>*</i></p>
              <i-input :value.sync="name" placeholder="请输入..." style="width: 300px"></i-input>
            </div>
          </div>
          <div class="s1">
            <p class="t1"></p>
            <div class="c1">
              <p>公司Logo<i>*</i></p>

              <div class="logo_wrapper">

              </div>
            </div>
          </div>
        </div>


        <div class="item">
          <div class="s1">
            <p class="t1">联系方式</p>
            <div class="c1">
              <p>联系人</p>
              <i-input :value.sync="name" placeholder="请输入..." style="width: 300px"></i-input>
            </div>
          </div>
          <div class="s1">
            <p class="t1"></p>
            <div class="c1">
              <p>联系电话</p>
              <i-input :value.sync="name" placeholder="请输入..." style="width: 300px"></i-input>
            </div>
          </div>
          <div class="s1">
            <p class="t1"></p>
            <div class="c1">
              <p>联系人邮件</p>
              <i-input :value.sync="name" placeholder="请输入..." style="width: 300px"></i-input>
            </div>
          </div>
          <div class="s1">
            <p class="t1"></p>
            <div class="c1">
              <p>公司地址<i>*</i></p>
              <i-input :value.sync="name" placeholder="请输入..." style="width: 300px"></i-input>
            </div>
          </div>
        </div>

        <div class="if_btn_wrap">
          <i-button>取消</i-button>
          <i-button type="success">确定</i-button>
        </div>
      </div>
      <div class="con_eq" v-if="status == 2">
        <div class="item" v-for="item in 60" :key="item">
          <div class="left">
            <span class="iconfont">&#xe62c;</span>
            <p>设备 {{item}}</p>
          </div>
          <div class="right">
            <p>{{item}}</p>
          </div>
        </div>
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
      name: '',
      status: 1
    }
  },
  computed: {
      ...mapState({
          globalStatus: state => state.globalStatus
      })
  },
  methods: {
    changeLayoutShow (status) {
      this.$store.commit('changeLayoutShow', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.info_wrap
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  position fixed
  left 0
  top 0
  z-index 9
  .box
    background #FFF
    width 900px
    min-height 60vh
    padding 22px
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    border-radius 2px
    .in_close
      font-size 22px
      color rgba(0,0,0,.5)
      position absolute
      right 16px
      top 16px
      cursor pointer
    .if_hd
      display flex
      align-items center
      justify-content center
      .item
        padding 12px
        cursor pointer
        margin 0 12px
        border-bottom 2px solid rgba(0,0,0,0)
      .active
        border-color $minColor
    .con_gs
      padding 50px 30px 30px 100px
      .item
        .s1
          display flex
          align-items center
          padding-bottom 22px
          .t1
            font-size 16px
            color #222
            width 120px
          .c1
            display flex
            align-items center
            p
              width 100px
              i
                color red
      .if_btn_wrap
        display flex
        align-items center
        justify-content center
        button
          margin 0 12px
          width 80px
          padding 4px 0
    .con_eq
      max-height 50vh
      overflow-y scroll
      .item
        display flex
        margin 0 120px
        border-bottom 1px solid #EEE
        justify-content space-between
        padding 16px 0
        .left
          display flex
          align-items center
          p
            padding-left 12px
        &:first-child
          padding-top 60px
</style>
