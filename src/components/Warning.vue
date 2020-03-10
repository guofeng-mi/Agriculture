<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logic
 * @Date: 2020-01-15 04:15:31
 * @LastEditors  : Logic
 * @LastEditTime : 2020-02-24 11:51:49
 -->
<template>
  <div class="warning">
    <div class="wraning_content">
      <div class="left">
          <div class="lt">
            <p>预警中心</p>
          </div>
          <div class="lc">
            <div class="content">
                <div class="scro">
                  <div class="item" v-for="item in 5">
                    <div class="title">
                      <i></i>
                      <p>传感器预警</p>
                      <span>2019-12-11 23:51</span>
                    </div>
                    <p class="con">内容详情 内容详情 内容详情 内容详情 内容详情 内容详情 内容详情</p>
                  </div>
                </div>

                <div class="pageControl">
                  <template>
                      <Page :total="100" show-elevator></Page>
                  </template>
                </div>
            </div>
          </div>
      </div>
      <div class="right">
        <div class="close">
          <span class="iconfont" @click="changeLayoutShow('false')">&#xe600;</span>
        </div>
        <div class="search_wrap">
          <div class="search">
            <input type="text" placeholder="搜索">
            <span class="iconfont">&#xe63c;</span>
          </div>
        </div>
        <div class="fanwei">
          <p class="title">时间范围</p>
          <div class="choose">
            <Radio-group v-model="time">
                <Radio label="1">
                  <span>近7日</span>
                </Radio>
                <Radio label="2">
                  <span>近15日</span>
                </Radio>
                <Radio label="3">
                  <span>近30日</span>
                </Radio>
            </Radio-group>
          </div>
        </div>

        <div class="type">
          <p class="title">类型</p>
          <div class="choose">
              <Dropdown style="margin-left: 20px">
                <i-button>
                    <i class="left">下拉菜单</i>
                    <i class="iconfont">&#xe642;</i>
                </i-button>
                <Dropdown-menu slot="list">
                    <Dropdown-item>现场设备预警</Dropdown-item>
                    <Dropdown-item>天气预报预警</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
          </div>
        </div>

        <div class="bot_sub">
          <i-button type="success">全部已读</i-button>
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
      time: ''
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
 
<style scoped lang ="stylus">
@import '../assets/css/global.styl'
.warning
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  position fixed
  left 0
  top 0
  z-index 10
  .wraning_content
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background $bgColor_1
    z-index 20
    width 90%
    height 90vh
    .left 
      .lt 
        padding-left 55px
        line-height 60px
        background #FFF
        position absolute
        left 0
        width 100%
        p 
          font-size 16px
      .lc 
        padding-left 55px
        padding-top 60px
        padding-right 255px
        .content
          width 100%
          height calc(90vh - 120px)
          position relative
          .scro
            .item 
              margin-top 22px
              background #FFF
              padding 22px
              border-radius 6px
              .title
                display flex
                align-items center
                justify-content space-between
                p   
                  flex 1
                i 
                  display inline-block
                  width 8px
                  height 8px
                  background red
                  margin-right 8px
                  border-radius 50%
                span 
                  color rgba(0,0,0,.5)
                  font-size 13px
              .con
                padding-left 16px
                padding-top 14px
                color rgba(0,0,0,.5)
                font-size 13px
          .pageControl
            position absolute
            bottom 0px
            left 50%
            transform translateX(-50%)
            width 100%
            text-align center
    .right 
      width 200px
      position absolute
      right 0
      top 0
      height 90vh
      background #FFF
      box-shadow -2px 0 5px rgba(0,0,0,.05)
      .close 
        position absolute
        right 18px
        top 14px
        font-size 22px
        cursor pointer
      .search_wrap
        padding 80px 20px 0
        .search
          position relative
          input 
            border none
            width 160px
            border-bottom 2px solid rgba(0,0,0,.05)
            outline none
            padding 3px 0
          span 
            position absolute
            right 2px
            top 50%
            transform translateY(-50%)
            font-size 22px
            font-weight 600
            color rgba(0,0,0,.2)
            cursor pointer
      .fanwei
        padding 20px
        .title 
          color rgba(0,0,0,.5)
          padding-bottom 18px
        .choose
          .ivu-radio-wrapper
            display block
            padding 3px 0
      .type
        padding 20px 20px 20px 0
        .title 
          padding-left 20px
          color rgba(0,0,0,.5)
          padding-bottom 18px
        .choose
          .ivu-btn
            width 160px
            position relative
            background #FFF
            color rgba(0,0,0,.6)
            border none
            padding 12px
            .left 
              position absolute
              left 0px
              top 50%
              transform translateY(-50%)
            .iconfont 
              position absolute
              right 0px
              top 50%
              transform translateY(-50%)
      .bot_sub
        position absolute
        padding 20px
        bottom 0
        left 0
        button 
         width 160px
</style>