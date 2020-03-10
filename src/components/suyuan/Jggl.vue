<!--
 * @Descripttion: 加工管理
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
      <Input suffix="ios-search" placeholder="搜索产品名称" style="width: auto" />
      <div class="btn">
        <Button type="success" @click="show = true">添加加工记录</Button>
      </div>
    </div>

    <!--认证管理修改-->
    <JgglEdit v-if="show" @close="close"></JgglEdit>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import JgglEdit from "./JgglEdit";
  export default {
    name: '',
    components: {
      JgglEdit
    },
    data () {
      return {
        test: '',
        show: false,
        columns12: [
          {
            title: '产品名称',
            key: 'name'
          },
          {
            title: '产品批次',
            key: 'pici'
          },
          {
            title: '加工内容',
            key: 'con'
          },
          {
            title: '操作员',
            key: 'person'
          },
          {
            title: '加工时间',
            key: 'date'
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
            name: '产品名称',
            pici: '产品批次',
            con: '加工内容',
            person: '操作员',
            date: '加工时间'
          },
          {
            name: '产品名称',
            pici: '产品批次',
            con: '加工内容',
            person: '操作员',
            date: '加工时间'
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
