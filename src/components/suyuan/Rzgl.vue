<!--
 * @Descripttion: 认证管理
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-17 14:28:32
 -->
<template>
  <div class="rzgl_bg">
    <div class="rzgl">
      <div class="tabl">

        <Table border :columns="columns12" :data="data6">
          <template slot-scope="{ columns1 }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>

          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" icon="ios-build" style="margin-right: 5px" @click="show = true"></Button>
            <Button type="error" size="small" icon="md-trash" @click="remove(index)"></Button>
          </template>
        </Table>

      </div>
      <div class="page">
        <Page :total="100" show-elevator />
      </div>
    </div>

    <!--过滤-->
    <div class="guolv">
      <Input suffix="ios-search" placeholder="搜索认证产品名称" style="width: auto" />
      <div class="gl_title">认证类型</div>
      <Select v-model="test" style="width:160px">
        <Option :value="1" :key="1">1</Option>
      </Select>
      <div class="btn">
        <Button type="success" @click="show = true">添加认证记录</Button>
      </div>
    </div>

    <!--认证管理修改-->
    <RzEdit v-if="show" @close="close"></RzEdit>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RzEdit from "./RzEdit";
export default {
  name: '',
  components: {
    RzEdit
  },
  data () {
    return {
      test: '',
      show: false,
      columns12: [
        {
          title: '认证类型',
          key: 'leixing'
        },
        {
          title: '认证产品',
          key: 'chanpin'
        },
        {
          title: '证书编号',
          key: 'bianhao'
        },
        {
          title: '颁证机构',
          key: 'jigou'
        },
        {
          title: '颁证日期',
          key: 'firstDate'
        },
        {
          title: '有效期',
          key: 'lastDate'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data6: [
        {
          leixing: '类型1',
          chanpin: '产品1',
          bianhao: '证书编号',
          jigou: '机构1',
          firstDate: '颁证日期',
          lastDate: '有效期'
        },{
          leixing: '类型1',
          chanpin: '产品1',
          bianhao: '证书编号',
          jigou: '机构1',
          firstDate: '颁证日期',
          lastDate: '有效期'
        }
      ],
    }
  },
  computed: {
    ...mapState({
      tableStatus: state => state.tableStatus
    })
  },
  methods: {
    close() {
      this.show = false;
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.rzgl_bg
  .rzgl
    padding-right 200px
    .page
      position fixed
      left calc(50% - 100px)
      bottom 20px
      transform translateX(-50%)
  .guolv
    position fixed
    right 101px
    top 84px
    width 200px
    height calc(100vh - 84px)
    padding 20px
    background #FFF
    .gl_title
      padding 22px 0 12px 0
    .btn
      position absolute
      bottom 20px
      left 20px
      button
        width 160px

</style>
