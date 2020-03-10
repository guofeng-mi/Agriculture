<!--
 * @Descripttion: 地块生产端
 * @version:
 * @Date: 2020-01-21 13:36:53
 * @LastEditTime : 2020-02-24 13:51:59
 -->
<template>
  <div class="shengcan_container">
    <div class="sc_wrap">
      <div class="close" @click="changeDikuaiAction('false')">
        <span class="iconfont">&#xe600;</span>
      </div>
      <div class="nav">
        <div class="item" :class="tabStatus == 1 ? 'active' : ''" @click="tabStatus = 1">
          <p>地块资料</p>
        </div>
        <div class="item" :class="tabStatus == 2 ? 'active' : ''" @click="tabStatus = 2">
          <p>物候期</p>
        </div>
        <div class="item" :class="tabStatus == 3 ? 'active' : ''" @click="tabStatus = 3">
          <p>地块形状</p>
        </div>
        <div class="item" :class="tabStatus == 4 ? 'active' : ''" @click="tabStatus = 4">
          <p>地块平面图</p>
        </div>
      </div>

      <div v-if="tabStatus == 1">
        <div class="zl">
          <div class="line">
            基本信息
          </div>
          <div class="item i1">
            <p>地块名称 <i>*</i></p>
            <input type="text">
          </div>
          <div class="item i2">
            <p>地块名称 <i>*</i></p>
            <input type="text">
            <input type="text">
          </div>
          <div class="item i2">
            <p>种植面积 <i>*</i></p>
            <Input-number :max="10" :min="1" :value="1"></Input-number>
            <span>亩</span>
          </div>
          <div class="item i3">
            <p>联系人姓名</p>
            <input type="text">
          </div>
          <div class="item i3">
            <p>联系电话</p>
            <input type="text">
          </div>
          <div class="item i3">
            <p>活动积温统计基准值</p>
            <input type="text">
            <span>℃</span>
          </div>
          <div class="line">
            土肥情况
          </div>
          <div class="thd">
            <p>名称</p>
            <p>数量</p>
            <p>单位</p>
            <p>操作</p>
          </div>
          <div class="td">
            <div class="t">
              <i-input :value.sync="value" placeholder="请输入..." style="width: 150px;"></i-input>
            </div>
            <div class="t">
              <Input-number :max="10" :min="1" :value="1" style="width: 80px;"></Input-number>
            </div>
            <div class="t">
              <i-select :model.sync="model1" style="width:100px">
                  <i-option label="1">kg</i-option>
                  <i-option label="2">g</i-option>
              </i-select>
            </div>
            <div class="t">
              <span class="iconfont" style="cursor: pointer;">&#xe601;</span>
            </div>
          </div>
          <div class="add">
              <span class="iconfont" style="cursor: pointer;">&#xe609;</span>
              <p>添加成分</p>
          </div>
        </div>
      </div>

      <!-- 物候期 -->
      <div v-if="tabStatus == 2">
        <div class="sc_choose">
          <p>物候期</p>
          <i-select v-model="test">
              <i-option label="1">123</i-option>
          </i-select>
        </div>
        <ul class="sc_list_wrap">
          <div class="scro">
            <li v-for="item in 12" :key="item">
              <i>{{item}}</i>
              <div class="l">
                <p>育苗期</p>
                <span>2019/05/01--2019/05/03</span>
              </div>
              <div class="r">
                <p>3</p>
                <p>天</p>
              </div>
            </li>
          </div>
        </ul>
      </div>

      <!-- 地块形状 -->
      <div v-if="tabStatus == 3" style="padding-top: 20px;">
        <ShengcanMap></ShengcanMap>
      </div>

      <!-- 地块平面图 -->
      <div v-if="tabStatus == 4">
        <div class="choose_bg">
          <div class="tip">
            <p>选择平面图</p>
            <span>平面图将在您的【地块详情】页面中显示</span>
          </div>
          <div class="item" :class="pmStatus == 1 ? 'active' : ''">
            <img src="@/assets/img/dk_c1.png" alt="">
            <p>大棚</p>
          </div>
          <div class="item" :class="pmStatus == 2 ? 'active' : ''">
            <img src="@/assets/img/dk_c1.png" alt="">
            <p>温室</p>
          </div>
          <div class="item" :class="pmStatus == 3 ? 'active' : ''">
            <img src="@/assets/img/dk_c1.png" alt="">
            <p>地块</p>
          </div>
          <div class="item" :class="pmStatus == 4 ? 'active' : ''">
            <img src="@/assets/img/dk_diy.png" alt="">
            <p>自定义</p>
          </div>
        </div>
        <div class="pm_choose">
          <img src="@/assets/img/dk_c1.png" alt="">
        </div>
      </div>



      <div class="btn_wrap">
        <i-button @click="changeDikuaiAction('false')">取消</i-button>
        <i-button type="success" @click="changeDikuaiAction('false')">保存地块</i-button>
      </div>
    </div>
  </div>
</template>

<script>
import ShengcanMap from './ShengcanMap'

import { mapState} from 'vuex'
export default {
  name: '',
  components: {
    ShengcanMap
  },
  data () {
    return {
      test: '',
      tabStatus: '1',
      pmStatus: '1'
    }
  },
  computed: {
    ...mapState({
        headerStatus: state => state.headerStatus,
        dikuaiStatus: state => state.dikuaiStatus
    })
  },
  methods: {
    changeDikuaiAction(status) {
      this.$store.commit('changeDikuaiAction', status);
    },
    changeDikuaiActionMap(status) {
      this.$store.commit('changeDikuaiActionMap', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.shengcan_container
  position fixed
  left 0
  top 0
  z-index 20
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  .sc_wrap
    background #FFF
    width 800px
    height 650px
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    .close
      position absolute
      right 16px
      top 16px
      cursor pointer
    .nav
      display flex
      justify-content center
      margin-top 16px
      padding 0 100px
      .item
        flex 1
        border-right 1px solid #d5d5d5
        border-bottom 1px solid #d5d5d5
        border-top 1px solid #d5d5d5
        text-align center
        cursor pointer
        padding 4px 0
        &:first-child
          border-left 1px solid #d5d5d5
      .active
        background $green_1_Color
        color #FFF
    .zl
      padding-top 20px
      .line
        background $btnColor
        padding 12px 100px
      .item
        padding 8px 100px
        display flex
        align-items center
        justify-content flex-start
        p
          width 150px
          i
            color $green_1_Color
        input
          border none
          box-shadow $inp_shadow
          border-radius 4px
          padding 4px
          outline none
      .i1
        input
          flex 1
      .i2
        input
          width 120px
          margin-right 22px
        span
          padding-left 12px
      .i3
        input
          width 150px
        span
          padding-left 12px
      .thd
        display flex
        padding 12px 100px
        justify-content space-between
        p
          &:nth-child(1)
            width 100px
      .td
        padding 6px 100px
        display flex
        justify-content space-between
        align-items center
      .add
        display flex
        align-items center
        padding 12px 100px
        color $green_1_Color
        p
          padding-left 6px
          cursor pointer
    .sc_choose
      display flex
      align-items center
      padding 22px 100px
      p
        width 80px
    .sc_list_wrap
      margin 12px 100px
      height 400px
      overflow hidden
      .scro
        width 120%
        padding-right 20%
        height 400px
        overflow-y scroll
        li
          position relative
          display flex
          justify-content space-between
          align-items center
          margin-bottom 20px
          &:before
            content ''
            width 2px
            height 20px
            background $btnColor
            position absolute
            left 19px
            top 39px
          &:last-child
            &:before
              display none
          .l
            flex 1
            height 38px
            display flex
            flex-direction column
            justify-content space-between
            span
              opacity .6
              font-size 13px
          i
            display block
            width 40px
            height 40px
            background $btnColor
            color $minColor_b
            text-align center
            line-height 40px
            border-radius 50%
            margin-right 22px
          .r
            border-left 1px solid #b5b5b5
            padding-left 26px
            p
              text-align center
              padding 2px 0
              &:first-child
                font-weight 600
    .btn_wrap
      text-align center
      padding-top 50px
      button
        border-radius 0
        padding 3px 0
        width 150px
    .choose_bg
      display flex
      align-items center
      padding 22px 100px
      .tip
        span
          font-size 13px
          opacity .6
          padding-top 12px
          display block
          width 165px
          line-height 18px
      .item
        position relative
        border 1px solid #CCC
        margin-left 12px
        width 100px
        height 78px
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        font-size 0
        border-radius 2px
        cursor pointer
        img
          width 80px
          margin 4px 0
        p
          background #CCC
          text-align center
          line-height 22px
          color #FFF
          font-size 13px
          width 100%
        &:last-child
          img
            width 30px
            margin-top 12px
      .active
        border-color #5D7CF1
        p
          background #5D7CF1
        &:before
          display block
          content ''
          width 96px
          height 55px
          background rgba(93, 124, 241, .15)
          position absolute
          left 0
          top 0
          border-radius 2px
    .pm_choose
      width 100%
      img
        width 100%
        height 100%
        max-height 370px


</style>
