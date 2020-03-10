<!--
 * @Descripttion: 用户管理
 * @version: 
 * @Date: 2020-01-16 11:35:06
 * @LastEditTime : 2020-01-16 18:01:12
 -->
<template>
  <div class="wuliao_container">
    <div class="user_table">
      <div class="left_box">
        <div class="content">
          <div class="user_hd">
            <p>用户列表</p>
            <div class="add" @click="changeTableStatus('usergl_add')">
              <img src="@/assets/img/add_2.png" alt="">
              <p>添加</p>
            </div>
          </div>
          <div class="search_wrap">
            <div class="search">
              <input type="text" placeholder="搜索">
              <span class="iconfont">&#xe63c;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="close" @click="changeTableStatus('false')">
          <span class="iconfont" @click="changeTableStatus('false')">&#xe600;</span>
        </div>
        <div class="r_con">
          <div class="lin">
            <p>基本信息</p>
            
            <div class="ctr">
              <div class="c" @click="disabled1 = false">
                <img src="@/assets/img/edit.png" alt="">
                <p>编辑</p>
              </div>
              <div class="c" style="padding-left: 44px;">
                <img src="@/assets/img/del.png" alt="">
                <p>删除</p>
              </div>
            </div>
          </div>

          <div class="info">
            <div class="head">
              <span class="iconfont">&#xe74a;</span>
            </div>
            <div class="list">
              <div class="item">
                <p class="k">姓名</p>
                <input v-model="name" :class="!disabled1 ? 'edit_1' : ''" :disabled="disabled1" type="text">
              </div>
              <div class="item">
                <p class="k">性别</p>
                <input v-model="name" :class="!disabled1 ? 'edit_1' : ''" :disabled="disabled1" type="text">
              </div>
              <div class="item">
                <p class="k">登录账号</p>
                <input v-model="name" :class="!disabled1 ? 'edit_1' : ''" :disabled="disabled1" type="text">
              </div>
              <div class="item">
                <p class="k">所属组织</p>
                <input v-model="name" :class="!disabled1 ? 'edit_1' : ''" :disabled="disabled1" type="text">
              </div>
              <div class="item">
                <p class="k">联系方式</p>
                <input v-model="name" :class="!disabled1 ? 'edit_1' : ''" :disabled="disabled1" type="text">
              </div>
              <div class="item">
                <p class="k">邮编</p>
                <input v-model="name" :class="!disabled1 ? 'edit_1' : ''" :disabled="disabled1" type="text">
              </div>
              <div class="item">
                <p class="k">备注</p>
                <textarea v-model="bz" :class="!disabled1 ? 'edit_1_t' : ''" :disabled="disabled1" cols="30" rows="4"></textarea>
              </div>
            </div>
          </div>
          <div class="lin">
            <p>用户权限</p>
            <div class="ctr">
              <div class="c">
                <img src="@/assets/img/edit.png" alt="">
                <p>编辑</p>
              </div>
            </div>
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
      disabled1: true
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
      width 260px
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
        .add 
          display flex
          align-items center
          font-size 12px
          cursor pointer
          img 
            width 12px
            margin-right 4px
      .search_wrap
        position relative
        display flex
        margin-left 40px
        width 180px
        input 
          border none
          border-bottom 2px solid rgba(0,0,0,.05)
          padding 5px 0
          outline none
          width 180px
        span 
          position absolute
          right 6px
          top 50%
          transform translateY(-50%)
          font-weight 600
          font-size 22px
          opacity 0.3
          cursor pointer
    .right
      position relative
      padding-left 260px
      .close 
        position absolute
        right 16px
        top 16px
        cursor pointer
      .r_con
        height 90vh
        padding-top 60px
        .lin 
          background $bgColor_1
          padding 6px 60px
          display flex
          align-items center
          justify-content space-between
          color #222
          .ctr
            display flex
            .c
              display flex
              align-items center
              cursor pointer
              img 
                height 16px
                margin-right 4px
              p 
                opacity .6
                font-size 13px
        .info
          padding-left 60px
          padding-top 20px
          display flex
          .head
            width 70px
            height 70px
            border 1px dashed rgba(0,0,0,.3)
            cursor pointer
            display flex
            align-items center
            justify-content center
          .list 
            padding-left 30px
            .item 
              display flex
              align-items flex-start
              padding-bottom 22px
              .k 
                width 100px
              input 
                border none
                outline none
                background #FFF
                color #666
                width 500px
              .edit_1
                border-bottom 1px solid #EEE
              .edit_1_t
                background rgba(0,0,0,.05)
              textarea
                width 500px
                background #FFF
                border none
                outline none
                padding 12px
                resize none
                color #666












    
</style>