<!--
 * @Descripttion: 产品库存管理
 -->
<template>
  <div class="nongzi_bg">
    <div class="nz_con">
      <div class="close">
        <span class="iconfont" @click="changeLayoutShow('false')">&#xe600;</span>
      </div>
      <div class="left">
        <div class="title">产品库存管理</div>
        <div class="nav">
          <TreeNav></TreeNav>
        </div>
      </div>
      <div class="con_wrap">
        <div class="con">
          <div class="hd_ctr">
            <p :class="nz_status == 1 ? 'active' : ''" @click="nz_status = 1">产品入库</p>
            <p :class="nz_status == 2 ? 'active' : ''" @click="nz_status = 2">产品出库</p>
            <p :class="nz_status == 3 ? 'active' : ''" @click="nz_status = 3">库存管理</p>
          </div>
          <div class="b_content">
            <!--产品入库-->
            <i-col v-if="nz_status == 1" span="8" v-for="item in 6" :key="item">
              <div class="item">
                <div class="info">
                  <div class="title">
                    <b>RVB9658736598</b>
                    <i>2019-12-12</i>
                  </div>
                  <div class="msg" style="padding-top: 20px;">
                    <div class="s">
                      <span>入库园区</span>
                      <p class="r">
                        <b>田诚慧生态产业园区</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>来源地块</span>
                      <p class="r">
                        <b>东里旺旺葡萄园</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>入库人</span>
                      <p class="r">
                        <b>张三</b>
                      </p>
                    </div>
                  </div>
                  <div class="slwer">
                    <div class="btn pre">
                      <span class="iconfont">&#xe627;</span>
                    </div>
                    <div class="scro">
                      <div class="s_item">
                        <div class="t">阳光玫瑰...</div>
                        <div class="b">
                          <b>5470</b>
                          <i>克</i>
                        </div>
                      </div>
                      <div class="s_item">
                        <div class="t">百菌清</div>
                        <div class="b">
                          <b>2000</b>
                          <i>克</i>
                        </div>
                      </div>
                    </div>
                    <div class="btn next">
                      <span class="iconfont">&#xe60f;</span>
                    </div>
                  </div>
                </div>
              </div>
            </i-col>

            <!--产品出库-->
            <i-col v-if="nz_status == 2" span="8" v-for="item in 6" :key="item">
              <div class="item">
                <div class="info">
                  <div class="title">
                    <b>RVB9658736598</b>
                    <i>2019-12-12</i>
                  </div>
                  <div class="msg" style="padding-top: 20px;">
                    <div class="s">
                      <span>出库园区</span>
                      <p class="r">
                        <b>田诚慧生态产业园区</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>来源地块</span>
                      <p class="r">
                        <b>东里旺旺葡萄园</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>出库人</span>
                      <p class="r">
                        <b>张三</b>
                      </p>
                    </div>
                  </div>
                  <div class="slwer">
                    <div class="btn pre">
                      <span class="iconfont">&#xe627;</span>
                    </div>
                    <div class="scro">
                      <div class="s_item">
                        <div class="t">阳光玫瑰...</div>
                        <div class="b">
                          <b>5470</b>
                          <i>克</i>
                        </div>
                      </div>
                      <div class="s_item">
                        <div class="t">百菌清</div>
                        <div class="b">
                          <b>2000</b>
                          <i>克</i>
                        </div>
                      </div>
                    </div>
                    <div class="btn next">
                      <span class="iconfont">&#xe60f;</span>
                    </div>
                  </div>
                </div>
              </div>
            </i-col>

            <!--库存管理-->
            <i-col v-if="nz_status == 3" span="8" v-for="item in 6" :key="item">
              <div class="item">
                <div class="info">
                  <div class="title">
                    <p>阳光玫瑰（东兰）</p>
                  </div>

                  <div class="msg" style="padding-top: 20px;">
                    <div class="s">
                      <span>作物</span>
                      <p class="r">
                        <b>葡萄</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>品种</span>
                      <p class="r">
                        <b>阳光玫瑰</b>
                      </p>
                    </div>
                  </div>
                  <div class="slwer">
                    <div class="btn pre">
                      <span class="iconfont">&#xe627;</span>
                    </div>
                    <div class="scro">
                      <div class="s_item">
                        <div class="t">一级</div>
                        <div class="b">
                          <b>122.67</b>
                          <i>千克</i>
                        </div>
                      </div>
                      <div class="s_item">
                        <div class="t">二级</div>
                        <div class="b">
                          <b>292.55</b>
                          <i>千克</i>
                        </div>
                      </div>
                    </div>
                    <div class="btn next">
                      <span class="iconfont">&#xe60f;</span>
                    </div>
                  </div>
                </div>
              </div>
            </i-col>

          </div>
        </div>
      </div>
      <div class="right">
        <div class="search_wrap">
          <div class="search">
            <input type="text" placeholder="搜索入库单">
            <span class="iconfont">&#xe63c;</span>
          </div>
        </div>
        <div v-if="nz_status == 1 || nz_status == 2">
          <div class="wllx">入库时间</div>
          <div class="radio">
            <Radio-group v-model="test">
                <Radio label="1">近7日</Radio>
                <Radio label="2">近15日</Radio>
                <Radio label="3">近30日</Radio>
                <Radio label="4">自定义</Radio>
            </Radio-group>
          </div>

          <div class="time_diy">
            <div class="time_title">
              <i class="t"></i>
              <p>至</p>
              <i class="b"></i>
            </div>
            <div class="diy_con">
              <DatePicker type="date" placeholder="Select date"></DatePicker>
              <DatePicker type="date" placeholder="Select date"></DatePicker>
            </div>
          </div>
        </div>


        <div class="bb_con">
          <div class="btn_wrap">
            <i-button type="success">导出excel</i-button>
          </div>
          <div class="add_wrap">
            <div class="item" @click="add = 'ruku'">
              <div>
                <img src="@/assets/img/add_rk.png" alt="">
                <span>创建入库单</span>
              </div>
              <b>
                <img src="@/assets/img/add.png" alt="">
              </b>
            </div>
            <div class="item" @click="add = 'chuku'">
              <div>
                <img src="@/assets/img/add_ck.png" alt="">
                <span>创建出库单</span>
              </div>
              <b>
                <img src="@/assets/img/add.png" alt="">
              </b>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- 产品入库 -->
    <ProductCk v-if="add == 'ruku'" @close="close" title="入库"></ProductCk>
    <!-- 产品出库 -->
    <ProductCk v-if="add == 'chuku'" @close="close" title="出库"></ProductCk>
  </div>
</template>

<script>
import ProductCk from './ProductCk'
import TreeNav from '../TreeNav'

import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    ProductCk,
    TreeNav
  },
  data () {
    return {
      add: false,
      nz_status: 1,
      switchShow: false,
      test: '',
      tableHd: [
        {
            title: '物料',
            key: 'name'
        },{
            title: '类型',
            key: 'name'
        },{
            title: '操作',
            key: 'name'
        },{
            title: '数量',
            key: 'name'
        },{
            title: '使用地块',
            key: 'name'
        }
      ],
      tableData: [
        {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
        },
        {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
        },
        {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
        },
        {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
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
    close() {
      this.add = false;
    },
    changeLayoutShow(status) {
      this.$store.commit('changeLayoutShow', status);
    },
    changeGlobalStatus (status) {
      this.$store.commit('changeGlobalStatus', status);
    }
  }
}
</script>

<style lang="stylus">
.ivu-menu-light
  background transparent
  color #FFF
.ivu-menu-item
  color #FFF
.ivu-menu-item:hover
  color #FFF
</style>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.nongzi_bg
  position fixed
  left 0
  top 0
  z-index 9
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  .nz_con
    width 90%
    height 90vh
    position absolute
    left 5%
    top 5vh
    background #FFF
    .close
      position absolute
      right 12px
      top 12px
      cursor pointer
      z-index 10
    .left
      position absolute
      left 0
      top 0
      height 90vh
      width 240px
      background $minColor_b
      color #FFF
      box-shadow 2px 0 6px rgba(0,0,0,.01)
      .title
        font-size 16px
        padding 22px 32px
    .con_wrap
      padding 0 240px
      .con
        position relative
        background $bgColor_1
        height 90vh
        padding 24px
        .hd_ctr
          display flex
          align-items center
          justify-content space-between
          p
            flex 1
            text-align center
            background #FFF
            color rgba(0,0,0,.6)
            padding 6px 0
            cursor pointer
            border-right 1px solid rgba(0,0,0,.05)
            &:last-child
              border none
          .active
              background $green_1_Color
              color #FFF
        .b_content
          padding 22px 0
          .item
            padding 12px
            .info
              background #FFF
              padding 16px
              border-radius 2px
              .title
                display flex
                justify-content space-between
                align-items center
                span
                  opacity .5
                  font-size 12px
                b
                  font-weight 600
                i
                  font-size 10px
                  opacity .6
              .tag_wrap
                display flex
                justify-content space-between
                align-items center
                padding 12px 0
                span
                  background $green_1_Color
                  color #FFF
                  padding 3px 8px
                  font-size 12px
                p
                  b
                    font-weight 600
                    color $red_1
                  i
                    padding-left 4px
                    opacity .5
                    font-size 13px
              .msg
                .s
                  display flex
                  justify-content space-between
                  border-bottom 1px solid #EEE
                  padding 6px 0
                  span
                    font-size 13px
                  p
                    font-size 12px
                    display flex
                    align-items center
                    img
                      width 14px
                      height 14px
                      margin-left 4px
              .slwer
                display flex
                align-items center
                justify-content space-between
                padding-top 20px
                .btn
                  span
                    font-size 22px
                    opacity .5
                    cursor pointer
                .scro
                  width 100%
                  display flex
                  align-items center
                  justify-content space-between
                  .s_item
                    flex 1
                    background $btnColor
                    margin 0 6px
                    padding 8px
                    .t
                      color $minColor_b
                    .b
                      display flex
                      align-items center
                      justify-content space-between
                      padding-top 8px
                      b
                        font-weight 600
          .shuoming
            .page_control
              position absolute
              bottom 20px
              right 20px
    .right
      position absolute
      right 0
      top 0
      height 90vh
      width 240px
      box-shadow -2px 0 6px rgba(0,0,0,.01)
      .search_wrap
        padding 80px 30px 20px 30px
        .search
          position relative
          input
            border none
            border-bottom 2px solid rgba(0,0,0,.1)
            width 100%
            padding 4px 0
            outline none
          span
            position absolute
            right 6px
            top 50%
            transform translateY(-50%)
      .wllx
        padding 0 30px
      .radio
        padding: 20px 30px
        .ivu-radio-wrapper
          display block
          padding 6px 0
      .time_diy
        display flex
        align-items center
        padding 12px 30px
        .time_title
          padding-right 12px
          p
            padding 4px 0
            opacity 0.6
          i
            display block
            padding 5px 3px
            border 1px solid rgba(0,0,0,.1)
            margin-left 5px
            border-right-color transparent
          .t
            border-bottom-color transparent
          .b
            border-top-color transparent
        .ivu-date-picker
          padding 4px 0
      .sw
        padding 12px 30px
        display flex
        align-items center
        justify-content space-between
        white-space nowrap
        font-size 13px
        span
          font-size 10px
      .bb_con
        position absolute
        left 0
        bottom 0
        width 100%
        padding 20px 30px
        .btn_wrap
          display flex
          flex-direction column
          align-items center
          button
            padding 6px 12px
            width 120px
            border none
            border-radius 0
            margin-bottom 14px
        .add_wrap
          padding 20px 0 20px 0
          .item
            display flex
            align-items center
            justify-content space-between
            padding 8px 0
            div
              display flex
              align-items center
              img
                height 14px
              span
                line-height 14px
                padding-left 6px
            b
              border-left 1px solid rgba(0,0,0,.3)
              padding-left 10px
              cursor pointer
              img
                height 16px







</style>
