<!--
 * @Descripttion: 品种管理
 * @version:
 * @Date: 2020-01-16 11:35:06
 * @LastEditTime : 2020-02-05 13:53:24
 -->
<template>
  <div class="pinzhong_container">
    <div class="pz_table">
      <div class="left_box">
        <div class="content">
          <div class="pz_hd">
            <p>品种管理</p>
          </div>
          <div class="pz_con">
            <Table border :columns="tableHeader" :data="tableData">
              <template slot-scope="{ columns1 }" slot="name">
                <strong>{{ row.name }}</strong>
              </template>

              <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" icon="ios-build" style="margin-right: 5px" @click="changeTableStatus('pzgl_add')"></Button>
                <Button type="error" size="small" icon="md-trash" @click="alertDel = true"></Button>
              </template>
            </Table>
          </div>
          <div class="pz_pagecontrol">
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

        <div class="type">
          <p class="title">作物类型</p>
          <div class="choose">
              <Dropdown style="margin-left: 20px">
                <i-button>
                    <i class="left">请选择作物类型</i>
                    <i class="iconfont">&#xe642;</i>
                </i-button>
                <Dropdown-menu slot="list">
                    <Dropdown-item>类型1</Dropdown-item>
                    <Dropdown-item>类型2</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
          </div>
        </div>
        <div class="type">
          <p class="title">公司</p>
          <div class="choose">
              <Dropdown style="margin-left: 20px">
                <i-button>
                    <i class="left">请选择公司</i>
                    <i class="iconfont">&#xe642;</i>
                </i-button>
                <Dropdown-menu slot="list">
                    <Dropdown-item>公司1</Dropdown-item>
                    <Dropdown-item>公司2</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
          </div>
        </div>

        <div class="bot_sub">
          <i-button type="success" @click="changeTableStatus('pzgl_add')">新增品种</i-button>
        </div>
      </div>
    </div>
    <!-- 新增弹窗 -->
      <PinzhongAdd v-if="tableStatus == 'pzgl_add'"></PinzhongAdd>


    <Modal
      v-model="alertDel"
      title="提示！"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>是否删除该项？</p>
    </Modal>
  </div>
</template>

<script>
import PinzhongAdd from './PinzhongAdd'
import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    PinzhongAdd
  },
  data () {
    return {
      loading: true,
      alertDel: false,
      tableHeader:[
        {
            title: '品种名称',
            key: 'name'
        },
        {
          title: '所属作物',
          key: 'zw'
        },
        {
          title: '所属公司',
          key: 'gs'
        },
        {
          title: '排序',
          key: 'px'
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
          name: '品种',
          zw: '作物',
          px: '1',
          gs: '公司'
        },
      ]
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  },
  computed: {
    ...mapState({
        tableStatus: state => state.tableStatus
    })
  },
  methods: {
    changeTableStatus (status) {
        this.$store.commit('changeTableStatus', status);
    },
    remove(index) {
      console.log(index)
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
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  position fixed
  left 0
  top 0
  z-index 9
  .pz_table
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
