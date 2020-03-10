<!--
 * @Descripttion: 基础物料管理
 * @version: 
 * @Date: 2020-01-16 11:35:06
 * @LastEditTime : 2020-01-16 14:47:27
 -->
<template>
  <div class="wuliao_container">
    <div class="wl_table">
      <div class="left_box">
        <div class="content">
          <div class="wl_hd">
            <p>物料管理</p>
          </div>
          <div class="wl_con">
              <div class="list_wrap">
                <div v-for="item in tableData" :key="item">
                  <i-col span="6">
                    <div class="item">
                      <div class="t">
                        <p>物料1</p>
                        <span>单位</span>
                      </div>
                      <div class="b">
                        <div class="btn">
                          <i-button type="success">肥料</i-button>
                        </div>
                        <span>kg</span>
                      </div>
                    </div>
                  </i-col>
                </div>
              </div>
          </div>
          <div class="wl_pagecontrol">
            <Page :total="100" show-elevator></Page>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="close">
          <span class="iconfont" @click="changeTableStatus('false')">&#xe600;</span>
        </div>
        
        <div class="search_wrap">
          <div class="search">
            <input type="text" placeholder="搜索">
            <span class="iconfont">&#xe63c;</span>
          </div>
        </div>
        
        <div class="fanwei">
          <p class="title">物料类型</p>
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
          <p class="title">园区</p>
          <div class="choose">
              <Dropdown style="margin-left: 20px">
                <i-button>
                    <i class="left">请选择园区</i>
                    <i class="iconfont">&#xe642;</i>
                </i-button>
                <Dropdown-menu slot="list">
                    <Dropdown-item>园区1</Dropdown-item>
                    <Dropdown-item>园区2</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
          </div>
        </div>
        
        <div class="bot_sub">
          <i-button type="success" @click="changeTableStatus('wlgl_add')">添加物料</i-button>
        </div>
      </div>
    </div>
    <!-- 新增弹窗 -->
      <WuliaoAdd v-if="tableStatus == 'wlgl_add'"></WuliaoAdd>
  </div>
</template>
 
<script>
import WuliaoAdd from './WuliaoAdd'
import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    WuliaoAdd
  },
  data () {
    return {
      tableData: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  computed: {
      ...mapState({
          tableStatus: state => state.tableStatus
      })
  },
  methods: {
      changeTableStatus (status) {
          this.$store.commit('changeTableStatus', status);
      }
  }
}
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/global.styl'
.wuliao_container
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  position fixed
  left 0
  top 0
  z-index 9
  .wl_table
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    width 90%
    height 90vh
    background #FFF
    .left_box
      position absolute
      left 0
      top 0
      width 100%
      padding-right 200px
      .content
        height 90vh
        position relative
        background $bgColor_1
        .wl_hd
          height 60px
          line-height 60px
          background #FFF
          font-size 16px
          padding-left 60px
        .wl_con
          padding 20px 60px
          .list_wrap
            width 100%
            .ivu-col-span-6
              padding 12px
              .item
                background #FFF
                padding 12px
                border-radius 4px
                .t 
                  display flex
                  align-items center
                  justify-content space-between
                  p 
                    font-size 15px
                  span 
                    font-size 13px
                    color rgba(0,0,0,.5)
                .b 
                  display flex
                  align-items center
                  justify-content space-between
                  padding-top 22px
                  button 
                    padding 0 8px

        .wl_pagecontrol
          position absolute
          bottom 20px
          text-align center
          width 100%
    .right
      position absolute
      right 0
      width 200px
      box-shadow -2px 0 6px rgba(0,0,0,.05)
      height 90vh
      background #FFF
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
        padding 30px 20px 0px 0
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