<!--
 * @Descripttion: 生产端 汇报工作
 * @version:
 * @Date: 2020-01-16 11:35:06
 * @LastEditTime : 2020-02-07 15:31:37
 -->
<template>
  <div class="pinzhong_container">
    <div class="pz_table">
      <div class="left_box">
        <div class="content">
          <div class="pz_con">
<!--            <template>-->
<!--                <i-table stripe :columns="tableHeader" :data="tableData"></i-table>-->
<!--            </template>-->


            <Table border :columns="tableHeader" :data="tableData">
              <template slot-scope="{ columns1 }" slot="name">
                <strong>{{ row.name }}</strong>
              </template>

              <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" icon="ios-build" style="margin-right: 5px" @click="hbShow = true"></Button>
                <Button type="error" size="small" icon="md-trash" @click="delShow = true"></Button>
              </template>
            </Table>


          </div>
          <div class="pz_pagecontrol">
            <Page :total="100" show-elevator></Page>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="search_wrap">
          <div class="search">
            <input type="text" placeholder="搜索工作汇报">
            <span class="iconfont">&#xe63c;</span>
          </div>
        </div>

        <div class="type">
          <p class="title">汇报类型</p>
          <div class="choose">
              <Dropdown style="margin-left: 20px">
                <i-button>
                    <i class="left">请选择汇报类型</i>
                    <i class="iconfont">&#xe642;</i>
                </i-button>
                <Dropdown-menu slot="list">
                    <Dropdown-item>类型1</Dropdown-item>
                    <Dropdown-item>类型2</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
          </div>
        </div>

        <div class="bot_sub">
            <i-button type="success" @click="hbShow = true">汇报农事记录</i-button>
<!--            <i-button type="success">工作汇报统计报表</i-button>-->
            <i-button type="success">导出excel</i-button>
<!--            <div class="r_footer">-->
<!--                <p>当前地块</p>-->
<!--            </div>-->
        </div>
      </div>
    </div>

    <!--汇报农事-->
    <Hb-add @close='close' v-if="hbShow"></Hb-add>


    <!--删除对话框-->
    <Modal
      v-model="delShow"
      title="提示！"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>是否删除该项？</p>
    </Modal>
  </div>
</template>

<script>
import { mapState} from 'vuex';

import HbAdd from './HbAdd'
export default {
  name: '',
  components: {
    HbAdd
  },
  data () {
    return {
      hbShow: false,
      delShow: false,
      tableHeader:[
        {
          title: '农事类型',
          key: 'lx'
        },
        {
          title: '组织',
          key: 'zz'
        },
        {
          title: '农事时间',
          key: 'time'
        },
        {
          title: '用工量',
          key: 'num'
        },
        {
          title: '内容',
          key: 'con'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      tableData: [
        {
          lx: 'name',
          zz: 'zw',
          time: 'time',
          num: 'num',
          con: 'con'
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
    close() {
      this.hbShow = false;
    },
    changeTableStatus (status) {
      this.$store.commit('changeTableStatus', status);
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

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.pinzhong_container
  height 100%
  box-sizing border-box
  .pz_table
    position relative
    width 100%
    background red
    .left_box
      position absolute
      left 0
      top 0
      width 100%
      padding-right 200px
      .content
        height calc(100vh - 86px)
        position relative
        background $bgColor_1
        .pz_hd
          height 60px
          line-height 60px
          background #FFF
          font-size 16px
          padding-left 60px
        .pz_pagecontrol
          position absolute
          bottom 20px
          text-align center
          width 100%
    .right
      position absolute
      right 0
      width 200px
      box-shadow -2px 0 6px rgba(0,0,0,.05)
      height calc(100vh - 86px)
      background #FFF
      z-index 1
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
         margin-bottom 16px
        .r_footer
            text-align center

</style>
