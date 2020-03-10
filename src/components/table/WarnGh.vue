<!--
 * @Descripttion: 预警规划
 * @version: 
 * @Date: 2020-01-16 11:35:06
 * @LastEditTime : 2020-01-17 11:33:18
 -->
<template>
  <div class="wuliao_container">
    <div class="user_table">
      <div class="left_box">
        <div class="content">
          <div class="user_hd">
            <p>预警规划</p>
          </div>
          <div class="table_wrap">
            <i-table stripe :columns="columns1" :data="data1"></i-table>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="close" @click="changeTableStatus('false')">
          <span class="iconfont" @click="changeTableStatus('false')">&#xe600;</span>
        </div>
        <div class="r_con">
          <div class="item">
            <div class="k">
              <p>所属地块</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>预警类型</p>
            </div>
            <div class="v">
              <i-select v-model="test1">
                  <i-option value="1">123</i-option>
              </i-select>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>类型明细</p>
            </div>
            <div class="v">
              <Radio-group v-model="test1">
                  <Radio lable="1">123</Radio>
                  <Radio lable="2">234</Radio>
              </Radio-group>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>预警名称</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item wraning">
            <div class="k">
              <p>预警逻辑</p>
            </div>
            <div class="v">
              <div class="wraning_box">
                <div class="_row">
                  <span>当</span>
                  <i-select v-model="test1" style="width:100px;margin-right: 12px;">
                      <i-option value="1">XX</i-option>
                  </i-select>
                  <i-select v-model="test1" style="width:100px;margin-right: 12px;">
                      <i-option value="1">>=</i-option>
                  </i-select>
                  <i-input v-model="test1" placeholder="" style="width: 50px"></i-input>
                  <span>天</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item textarea">
            <div class="k">
              <p>提示信息</p>
            </div>
            <div class="v">
              <textarea name="" id="" cols="30" rows="6"></textarea>
              <p>0/100 字</p>
            </div>
          </div>
          <div class="item time">
            <div class="k">
              <p>时间计划</p>
            </div>
            <div class="v">
              <div class="timePlan">
                <div class="_row">
                  <span>从</span>
                  <Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
                  <span>至</span>
                  <Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
                  <span>时段</span>
                </div>
                <div class="_row">
                  <span>每间隔</span>
                  <i-select v-model="test1" style="width:100px; margin-right: 12px;">
                      <i-option value="1">1</i-option>
                  </i-select>
                  <i-select v-model="test1" style="width:100px">
                      <i-option value="1">分钟</i-option>
                  </i-select>
                  <span>检测一次</span>
                </div>
                <div class="_row">
                  <span>每间隔</span>
                  <i-select v-model="test1" style="width:100px; margin-right: 12px;">
                      <i-option value="1">1</i-option>
                  </i-select>
                  <i-select v-model="test1" style="width:100px">
                      <i-option value="1">分钟</i-option>
                  </i-select>
                  <span>发送一次提示</span>
                </div>
                <div class="_row">
                  <span>下次在</span>
                  <Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
                  <span>执行</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>是否启用</p>
            </div>
            <div class="v">
              <Radio-group v-model="test1">
                  <Radio lable="1">启用</Radio>
                  <Radio lable="2">禁止</Radio>
              </Radio-group>
            </div>
          </div>
          <div class="btn">
              <i-button type="success">保存</i-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增弹窗 -->
      <UserglAdd v-if="tableStatus == 'usergl_add'"></UserglAdd>
  </div>
</template>
 
<script>
import UserglAdd from './UserglAdd'
import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    UserglAdd
  },
  data () {
    return {
      name: '张三',
      bz: '备注',
      disabled1: true,
      test1: '',
      columns1: [
                    {
                        title: '规则名称',
                        key: 'name'
                    },
                    {
                        title: '所属地块',
                        key: 'location'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '操作',
                        key: 'age'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        location: 18,
                        status: '正常'
                    }
                ]
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
  .user_table
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
      width 400px
      height 90vh
      box-shadow 2px 0 6px rgba(0,0,0,.1)
      z-index 1
      .user_hd
        display flex
        align-items center
        justify-content space-between
        padding 20px 12px 40px 60px
        font-size 16px
        color #222
      .table_wrap
        width 401px
    .right
      position relative
      padding-left 400px
      .close 
        position absolute
        right 16px
        top 16px
        cursor pointer
      .r_con
        height 90vh
        padding 60px 60px 60px 60px
        .item 
          display flex
          align-items center
          padding-bottom 22px
          .k
            width 100px
          .v 
            flex 1
            input 
              width 100%
              border none
              box-shadow $inp_shadow
              outline none
              padding 4px
              border-radius 4px
            textarea 
              width 100%
              border none
              box-shadow $inp_shadow
              outline none
              padding 4px
              border-radius 4px
              resize none
            .timePlan
              padding 12px 22px
              border-radius 4px
              box-shadow $inp_shadow
              ._row 
                  display flex
                  align-items center
                  padding 6px 0
                  span 
                    padding 0 12px
                    opacity .6
                    &:first-child 
                        padding-left 0
            .wraning_box
              padding 12px 22px
              border-radius 4px
              box-shadow $inp_shadow
              ._row 
                  display flex
                  align-items center
                  padding 6px 0
                  span 
                    padding 0 12px
                    opacity .6
                    &:first-child 
                        padding-left 0
        .btn
          text-align center
          button 
            padding 4px 66px
            border none
            border-radius 2px
        .textarea
          align-items flex-start
          .k
            p 
              padding-top 6px
          .v 
            p
              font-size 12px
              opacity .5
              padding-top 6px
        .time
          align-items flex-start
          align-items flex-start
          .k
            p 
              padding-top 6px
        .wraning
          align-items flex-start
          align-items flex-start
          .k
            p 
              padding-top 6px









    
</style>