<!--
 * @Descripttion:
 * @version:
 * @Author: Logic
 * @Date: 2020-01-13 12:46:28
 * @LastEditors  : Logic
 * @LastEditTime : 2020-02-24 12:14:25
 -->
<template>
  <div class="kaoqinmanage">
    <div class="kq_con">
      <div class="close">
        <span class="iconfont" @click="changeLayoutShow('false')">&#xe600;</span>
      </div>
      <div class="content">
        <div class="left_nav">
          <div class="title">考勤管理 </div>
          <div class="nav_list">
            <div class="item" :class="title == '考勤统计' ? 'active' : ''" @click="title = '考勤统计'">考勤统计</div>
            <div class="item" :class="title == '签到记录' ? 'active' : ''" @click="title = '签到记录'">签到记录</div>
            <div class="item" :class="title == '出差请假统计' ? 'active' : ''" @click="title = '出差请假统计'">出差请假统计</div>
            <div class="item" :class="title == '员工管理' ? 'active' : ''" @click="title = '员工管理'">员工管理</div>
          </div>
        </div>

        <div class="table_content">
          <div class="title">{{title}}</div>

          <!-- 表格部分 -->
          <div class="table">
            <template v-if="title == '考勤统计'">
              <i-table border :content="self" :columns="kqtable" :data="kqList"></i-table>
            </template>
            <template v-if="title == '签到记录'">
              <i-table border :content="self" :columns="qdtable" :data="qdList"></i-table>
            </template>
            <template v-if="title == '出差请假统计'">
              <i-table border :content="self" :columns="qingjiatable" :data="qingjiaList"></i-table>
            </template>
            <template v-if="title == '员工管理'">
              <i-table border :stripe="true" :content="self" :columns="yuangongTable" :data="yuangongList"></i-table>
            </template>

          </div>

          <div class="page_wrap">
            <Page :total="100" show-elevator />
          </div>
        </div>

        <div class="right">
          <div class="search">
            <i-input icon="ios-search" placeholder="请输入..."></i-input>
          </div>

          <div class="bm">
            <p>部门</p>
            <template>
              <i-select :model.sync="department">
                  <i-option v-for="item in departmentList" :value="item.id" :key="item.id">{{ item.key }}</i-option>
              </i-select>
            </template>
          </div>

          <div class="bm">
            <p>岗位</p>
            <template>
              <i-select :model.sync="post">
                  <i-option v-for="item in postList" :value="item.id" :key="item.id">{{ item.name }}</i-option>
              </i-select>
            </template>
          </div>

          <div class="add_wrap">
            <i-button type="success" @click="addPersonShow = 'true'">添加员工</i-button>
          </div>
        </div>
      </div>

    </div>

    <!-- 添加员工 -->
    <AddPerson v-if="addPersonShow == 'true'" @addPersonClose="isClose"></AddPerson>
  </div>
</template>

<script>
import AddPerson from './AddPerson'
import { mapState} from 'vuex';
export default {
  name: '',
  components: {
    AddPerson
  },
  data () {
    return {
      father: 'msg',
      addPersonShow: true,
      title: '考勤统计',
      //部门数据
      department: '',
      departmentList: [
        {
          id: '1',
          key: '部门1'
        },{
          id: '2',
          key: '部门2'
        },{
          id: '2',
          key: '部门2'
        },{
          id: '3',
          key: '部门3'
        }
      ],

      // 岗位
      post: '',
      postList: [
        {
          id: '1',
          name: '岗位1'
        },{
          id: '2',
          name: '岗位2'
        },{
          id: '3',
          name: '岗位3'
        },{
          id: '4',
          name: '岗位4'
        },{
          id: '5',
          name: '岗位5'
        }
      ],
      self: this,
      //考勤数据
      kqList: [
        {
          id: '1',
          date: '2020-02-25',
          depa: 'mal',
          department: '研发部',
          beftime: '2019-01-01',
          local: '沈阳',
          lasttime: '2020-01-01',
          worktime: '1年',
          state: '在职'
        }
      ],
      kqtable: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '部门',
          key: 'department'
        },
        {
          title: '最早时间',
          key: 'beftime'
        },
        {
          title: '签到地点',
          key: 'local'
        },
        {
          title: '最晚时间',
          key: 'lasttime'
        },
        {
          title: '工作时长',
          key: 'worktime'
        },
        {
          title: '状态',
          key: 'state'
        }
        // {
        //   title: '操作',
        //   key: 'id',
        //   width: 150,
        //   align: 'center',
        //   render (row, column, id) {
        //       return `<i-button type="error" size="small" @click="remove(${id})">删除</i-button>`;
        //   }
        // }
      ],

      //签到数据
      qdList: [
        {
          id: '1',
          date: '2020-02-25',
          depa: 'mal',
          department: '研发部',
          beftime: '2019-01-01',
          local: '沈阳',
          lasttime: '2020-01-01',
          worktime: '1年',
          state: '在职'
        }
      ],
      qdtable: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '部门',
          key: 'department'
        },
        {
          title: '最早时间',
          key: 'beftime'
        },
        {
          title: '签到地点',
          key: 'local'
        },
        {
          title: '最晚时间',
          key: 'lasttime'
        },
        {
          title: '工作时长',
          key: 'worktime'
        },
        {
          title: '状态',
          key: 'state'
        }
        // {
        //   title: '操作',
        //   key: 'id',
        //   width: 150,
        //   align: 'center',
        //   render (row, column, id) {
        //       return `<i-button type="error" size="small" @click="remove(${id})">删除</i-button>`;
        //   }
        // }
      ],

      //出差请假统计
      qingjiaList: [
        {
          id: '1',
          date: '2020-02-25',
          depa: 'mal',
          department: '研发部',
          beftime: '2019-01-01',
          local: '沈阳',
          lasttime: '2020-01-01',
          worktime: '1年',
          state: '在职'
        }
      ],
      qingjiatable: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '部门',
          key: 'department'
        },
        {
          title: '最早时间',
          key: 'beftime'
        },
        {
          title: '签到地点',
          key: 'local'
        },
        {
          title: '最晚时间',
          key: 'lasttime'
        },
        {
          title: '工作时长',
          key: 'worktime'
        },
        {
          title: '状态',
          key: 'state'
        }
        // {
        //   title: '操作',
        //   key: 'id',
        //   width: 150,
        //   align: 'center',
        //   render (row, column, id) {
        //       return `<i-button type="error" size="small" @click="remove(${id})">删除</i-button>`;
        //   }
        // }
      ],


      //员工数据
      yuangongList: [
        {
          id: '1',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '2',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '3',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '4',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '5',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '6',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '7',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '8',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '9',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        },{
          id: '10',
          name: 'Test',
          sex: '男',
          department: '设计部',
          post: '设计师',
          firsttime: '2019-01-01',
          phone: '17666666666',
          action: '删除'

        }
      ],
      yuangongTable: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '部门',
          key: 'department'
        },
        {
          title: '岗位',
          key: 'post'
        },
        {
          title: '入职时间',
          key: 'firsttime'
        },
        {
          title: '手机号码',
          key: 'phone'
        },
        {
          title: '操作',
          key: 'action',
          width: 120,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '删除')
            ]);
          }
        }
      ]
    }
  },
  computed: {
    ...mapState({
        layoutShow: state => state.layoutShow
    })
  },
  methods: {

    test (index) {
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1);
    },
    isClose(val) {
      console.log(val)
      this.addPersonShow = val;
    },
    changeLayoutShow (status) {
      this.$store.commit('changeLayoutShow', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.kaoqinmanage
  position fixed
  left 0
  top 0
  overflow hidden
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  z-index 10
  .kq_con
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    width 90%
    height 90vh
    background #FFF
    border-radius 2px
    .close
      position absolute
      right 12px
      top 12px
      cursor pointer
      z-index 21
      span
        color #666
    .content
      .left_nav
        width 160px
        height 90vh
        background $minColor_b
        color #FFF
        position absolute
        left 0
        top 0
        z-index 10
        .title
          padding 22px
          font-size 16px
        .item
          padding 12px 26px
          color rgba(255,255,255,.6)
          cursor pointer
        .active
          color #FFF
          background $minColor
      .table_content
        padding 0 200px 0 160px
        .title
          padding 22px 0 12px 22px
          font-size 16px
        .table
          padding-top 12px
        .page_wrap
          text-align center
          padding-top 20px


      .right
        width 200px
        box-sizing border-box
        border-left 1px solid #EEE
        height 90vh
        padding 50px 12px 12px 12px
        position absolute
        top 0
        right 0
        z-index 10
        .bm
          padding-top 26px
          p
            padding-bottom 6px
            opacity .6
        .add_wrap
          position absolute
          left 0
          bottom 0
          padding 22px
          display flex
          justify-content center
          width 100%
          button
            padding 4px 32px









</style>
