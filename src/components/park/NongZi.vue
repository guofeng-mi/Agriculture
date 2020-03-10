<!--
 * @Descripttion: 农资
 -->
<template>
  <div class="nongzi_bg">
    <div class="nz_con">
      <div class="close">
        <span class="iconfont" @click="changeLayoutShow('false')">&#xe600;</span>
      </div>
      <div class="left">
        <div class="title">农资管理</div>
        <div class="nav">
          <TreeNav></TreeNav>
        </div>
      </div>
      <div class="con_wrap">
        <div class="con">
          <div class="hd_ctr">
            <p :class="nz_tab_status == 1 ? 'active' : ''" @click="nz_tab_status = 1">库存管理</p>
            <p :class="nz_tab_status == 2 ? 'active' : ''" @click="nz_tab_status = 2">出库单</p>
            <p :class="nz_tab_status == 3 ? 'active' : ''" @click="nz_tab_status = 3">入库单</p>
            <p :class="nz_tab_status == 4 ? 'active' : ''" @click="nz_tab_status = 4">退料单</p>
            <p :class="nz_tab_status == 5 ? 'active' : ''" @click="nz_tab_status = 5">使用说明</p>
          </div>

          <!-- 中间详情 -->
          <div class="b_content">
            <i-col v-if="nz_tab_status == 1" span="8" v-for="item in 12" :key="item">
              <div class="item" @click="showCon = true">
                <div class="info">
                  <div class="title">
                    <p>羊粪</p>
                    <span>库存</span>
                  </div>
                  <div class="tag_wrap">
                    <span>肥料</span>
                    <p>
                      <b>200000</b>
                      <i>克</i>
                    </p>
                  </div>
                  <div class="msg">
                    <div class="s">
                      <span>建议库存</span>
                      <p class="r">
                        <b>0克</b>
                        <img src="@/assets/img/info.png" alt="">
                      </p>
                    </div>
                    <div class="s">
                      <span>最小预警值</span>
                      <p class="r">
                        <b>0克</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>最大预警值</span>
                      <p class="r">
                        <b>10000克</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </i-col>

            <i-col v-if="nz_tab_status == 2" span="8" v-for="item in 6" :key="item">
              <div class="item">
                <div class="info">
                  <div class="title">
                    <b>RVB9658736598</b>
                    <i>2019-12-12</i>
                  </div>

                  <div class="msg" style="padding-top: 20px;">
                    <div class="s">
                      <span>建议库存</span>
                      <p class="r">
                        <b>0克</b>
                        <img src="@/assets/img/info.png" alt="">
                      </p>
                    </div>
                    <div class="s">
                      <span>最小预警值</span>
                      <p class="r">
                        <b>0克</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>最大预警值</span>
                      <p class="r">
                        <b>10000克</b>
                      </p>
                    </div>
                  </div>
                  <div class="slwer">
                    <div class="btn pre">
                      <span class="iconfont">&#xe627;</span>
                    </div>
                    <div class="scro">
                      <div class="s_item">
                        <div class="t">百菌清</div>
                        <div class="b">
                          <b>2000</b>
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

            <i-col v-if="nz_tab_status == 3" span="8" v-for="item in 6" :key="item">
              <div class="item">
                <div class="info">
                  <div class="title">
                    <b>RVB9658736598</b>
                    <i>2019-12-12</i>
                  </div>

                  <div class="msg" style="padding-top: 20px;">
                    <div class="s">
                      <span>建议库存</span>
                      <p class="r">
                        <b>0克</b>
                        <img src="@/assets/img/info.png" alt="">
                      </p>
                    </div>
                    <div class="s">
                      <span>最小预警值</span>
                      <p class="r">
                        <b>0克</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>最大预警值</span>
                      <p class="r">
                        <b>10000克</b>
                      </p>
                    </div>
                  </div>
                  <div class="slwer">
                    <div class="btn pre">
                      <span class="iconfont">&#xe627;</span>
                    </div>
                    <div class="scro">
                      <div class="s_item">
                        <div class="t">百菌清</div>
                        <div class="b">
                          <b>2000</b>
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

            <i-col v-if="nz_tab_status == 4" span="8" v-for="item in 6" :key="item">
              <div class="item">
                <div class="info">
                  <div class="title">
                    <b>RVB9658736598</b>
                    <i>2019-12-12</i>
                  </div>

                  <div class="msg" style="padding-top: 20px;">
                    <div class="s">
                      <span>建议库存</span>
                      <p class="r">
                        <b>0克</b>
                        <img src="@/assets/img/info.png" alt="">
                      </p>
                    </div>
                    <div class="s">
                      <span>最小预警值</span>
                      <p class="r">
                        <b>0克</b>
                      </p>
                    </div>
                    <div class="s">
                      <span>最大预警值</span>
                      <p class="r">
                        <b>10000克</b>
                      </p>
                    </div>
                  </div>
                  <div class="slwer">
                    <div class="btn pre">
                      <span class="iconfont">&#xe627;</span>
                    </div>
                    <div class="scro">
                      <div class="s_item">
                        <div class="t">百菌清</div>
                        <div class="b">
                          <b>2000</b>
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

            <div v-if="nz_tab_status == 5" class="shuoming">
              <i-table :columns="tableHd" :data="tableData"></i-table>
              <div class="page_control">
                <Page :total="100" show-elevator></Page>
              </div>
            </div>

          </div>


        </div>
      </div>

      <!-- 右侧nav -->
      <div class="right" style="background: #FFF">
        <div class="search_wrap">
          <div class="search">
            <input type="text" placeholder="搜索物料">
            <span class="iconfont">&#xe63c;</span>
          </div>
        </div>
        <div class="wllx">物料类型</div>
        <div style="padding: 20px 30px">
          <i-select v-model="test">
              <i-option value="1">123</i-option>
          </i-select>
        </div>

        <div class="sw">
          <p>只显示库存预警物料</p>
          <i-switch v-model="switchShow" true-value="true" false-value="false"></i-switch>
        </div>
        <div class="time" v-if="nz_tab_status == 2 || nz_tab_status == 3 || nz_tab_status == 4 || nz_tab_status == 5">
          <div class="title">时间范围</div>
          <RadioGroup v-model="test">
            <Radio label="近7日"></Radio>
            <Radio label="近15日"></Radio>
            <Radio label="近30日"></Radio>
            <Radio label="自定义"></Radio>
          </RadioGroup>
          <div class="diy">
            <div class="zhi">
              <i class="t"></i>
              <p>至</p>
              <i class="b"></i>
            </div>
            <div class="rtim">
              <DatePicker type="date" placeholder="Select date"></DatePicker>
              <DatePicker type="date" placeholder="Select date"></DatePicker>
            </div>
          </div>
        </div>

        <div class="bb_con">
          <div class="btn_wrap">
            <i-button type="success" v-if="nz_tab_status == 1" @click="nz_add = 1">添加农资</i-button>
            <i-button type="success" v-if="nz_tab_status == 1" @click="nz_add = 2">批量添加农资</i-button>
            <i-button type="success">导出excel</i-button>
          </div>
          <div class="add_wrap">
            <div class="item" v-if="nz_tab_status == 1 || nz_tab_status == 5" @click="nz_add = 4">
              <div>
                <img src="@/assets/img/add_rk.png" alt="">
                <span>创建入库单</span>
              </div>
              <b>
                <img src="@/assets/img/add.png" alt="">
              </b>
            </div>
            <div class="item" v-if="nz_tab_status == 1 || nz_tab_status == 5" @click="nz_add = 6">
              <div>
                <img src="@/assets/img/add_ck.png" alt="">
                <span>创建出库单</span>
              </div>
              <b>
                <img src="@/assets/img/add.png" alt="">
              </b>
            </div>
            <div class="item" v-if="nz_tab_status == 1 || nz_tab_status == 5" @click="nz_add = 5">
              <div>
                <img src="@/assets/img/add_tl.png" alt="">
                <span>创建退料单</span>
              </div>
              <b>
                <img src="@/assets/img/add.png" alt="">
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 农资添加 -->
    <NongZiAdd v-if="nz_add == '1'" @close="close"></NongZiAdd>
    <!-- 批量添加农资 -->
    <NongZiAddPl v-if="nz_add == '2'" @close="close"></NongZiAddPl>
    <!-- 农资详情 -->
    <NongZiCon v-if="showCon" @closeCon="closeCon"></NongZiCon>

    <!-- 新增入库 -->
    <NzRuku v-if="nz_add == '4'" @close="close"></NzRuku>
    <!-- 退料 -->
    <NzTl v-if="nz_add == '5'" title="退料" @close="close"></NzTl>
    <!-- 出库 -->
    <NzTl v-if="nz_add == '6'" title="出库" @close="close"></NzTl>

  </div>
</template>

<script>
import NongZiAdd from './NongZiAdd'
import NongZiAddPl from './NongZiAddPl'
import NongZiCon from './NongZiCon'
import TreeNav from '../TreeNav'
import NzRuku from './NzRuku'
import NzTl from './NzTl'

import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    NongZiAdd,
    NongZiAddPl,
    NongZiCon,
    TreeNav,
    NzRuku,
    NzTl
  },
  data () {
    return {
      nz_tab_status: 1,
      nz_add: 0, // 控制添加组件显示
      showCon: '', // 控制详情组件显示
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
      ],
      titles:[
          {name:"用户管理"},
          {name:"订单管理"},
          {
              name:"商品管理",
              subTree:[
                  {name:"添加商品"},
                  {name:"查看商品"}
              ]
          },
          {
              name:"个人信息",
              subTree:[
                  {name:"修改信息"},
                  {name:"添加信息"},
                  {
                      name:"聊天记录",
                      subTree:[
                          {name:"聊天"},
                          {name:"删除好友"},
                          {name:"添加好友"}
                      ]
                  }
              ]
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
    closeCon() {
      this.showCon = false;
    },
    close(val) {
      this.nz_add = val;
    },
    changeGlobalStatus (status) {
      this.$store.commit('changeGlobalStatus', status);
    },
    changeLayoutShow (status) {
      this.$store.commit('changeLayoutShow', status);
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
      .sw
        padding 12px 30px
        display flex
        align-items center
        justify-content space-between
        white-space nowrap
        font-size 13px
        span
          font-size 10px
      .time
        padding 12px 30px
        .title
          padding-bottom 6px
        .ivu-radio-wrapper
          display block
          padding 6px 4px
        .diy
          display flex
          align-items center
          padding-top 12px
          .zhi
            padding-right 12px
            color #999
            p
              position relative
              padding 4px 0
            i
              display block
              width 8px
              height 12px
              margin-left 6px
            .t
              border-top 1px solid rgba(0,0,0,.1)
              border-left 1px solid rgba(0,0,0,.1)
            .b
              border-bottom 1px solid rgba(0,0,0,.1)
              border-left 1px solid rgba(0,0,0,.1)
          .ivu-date-picker
            padding 6px 0


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
          padding 20px 0 30px 0
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
