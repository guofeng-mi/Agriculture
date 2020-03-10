<template>
  <div id="ElementWind" class="dragWrap"  >
    <div class="hd_drag" @mousedown="drag">
      <P>新增用户</P>
      <span class="iconfont" @click="changeTableStatus('usergl')">&#xe600;</span>
    </div>
    <div class="dragBody">
      <div class="change_tab">
        <p :class="index == 1 ? 'active' : ''" @click="index = 1">填写用户信息</p>
        <p :class="index == 2 ? 'active' : ''" @click="index = 2">设置功能权限</p>
      </div>

      <div class="box" v-if="index == 1">
            <div class="item">
              <p class="l">登录账号 <i>*</i> </p>
              <div class="r">
                <input type="text">
              </div>
            </div>

            <div class="item">
              <p class="l">密码 <i>*</i> </p>
              <div class="r">
                <input type="password">
              </div>
            </div>
            
            <div class="item">
              <p class="l">姓名 <i>*</i> </p>
              <div class="r">
                <input type="text">
              </div>
            </div>
            
            <div class="item">
              <p class="l">所属组织 <i>*</i> </p>
              <div class="r">
                <input type="text">
              </div>
            </div>
          
            <div class="item">
              <p class="l">手机号 <i>*</i> </p>
              <div class="r">
                <input type="text">
              </div>
            </div>

            <div class="item">
              <p class="l">信箱</p>
              <div class="r">
                <input type="text">
              </div>
            </div>

            <div class="item tex">
              <p class="l">备注</p>
              <div class="r">
                <textarea name="" id="" cols="30" rows="3"></textarea>
              </div>
            </div>

            <div class="item tex">
              <p class="l">备注</p>
              <div class="r">
                <div class="choose">
                  <Radio-group v-model="sex">
                      <Radio lable="1">男</Radio>
                      <Radio lable="2">女</Radio>
                  </Radio-group>
                </div>
              </div>
            </div>

            <div class="item tex">
              <p class="l">头像</p>
              <div class="r">
                <div class="head">
                    <div class="add">
                      <span class="iconfont">&#xe74a;</span>
                    </div>
                </div>
              </div>
            </div>
      </div>

      <div class="btn_wrap">
        <i-button @click="changeTableStatus('usergl')">取消</i-button>
        <i-button type="success" @click="changeTableStatus('usergl')">提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
export default {
   data(){
      return {
        index: 1,
        sex: ''
      }
   },
    computed: {
        ...mapState({
            tableStatus: state => state.tableStatus
        })
    },
   methods:{
      changeTableStatus (status) {
          this.$store.commit('changeTableStatus', status);
      },
     //鼠标按下拖拽
     drag(e){
        // console.log(e)
        var oDiv = e.path[1];
        var disX = e.clientX - oDiv.offsetLeft;
        var disY = e.clientY - oDiv.offsetTop;
        document.onmousemove = function(e){
            e.preventDefault();
            var l = e.clientX - disX;
            var t = e.clientY - disY;
            oDiv.style.left = l + "px"
            oDiv.style.top = t + "px"
        } 
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        }
     }
   }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/global.styl'
.dragWrap
  text-align center
  width 600px
  position absolute
  left 50%
  top 50%
  padding-bottom 40px
  transform translate(-50%, -50%)
  background #fff
  box-shadow 2px 2px 6px rgba(0,0,0,.1), -2px -2px 6px rgba(0,0,0,.1)
  background #EFF3FF
  .hd_drag
    background #5D7CF1
    cursor move
    display flex
    color #FFF
    justify-content space-between
    align-items center
    padding 12px
    font-size 14px
    .iconfont
      cursor pointer
    p 
      cursor text
  .dragBody
    padding-top 22px
    width 600px
    .change_tab
      display flex
      justify-content center
      padding-bottom 16px
      p 
        border 1px solid rgba(0,0,0,.2)
        padding 5px 58px
        cursor pointer
      .active 
        background $green_1_Color
        color #FFF
        border-color $green_1_Color
    .item 
      display flex
      align-items center
      justify-content center
      padding 8px 0
      .l 
        display flex
        width 100px
        align-content center
        i 
          color $minColor
          padding-left 2px
      .r 
        .choose
          width 300px
          display flex
          align-items center
          justify-content space-between
          padding 6px 12px
          color rgba(0,0,0,.6)
          border-radius 3px
          cursor pointer
          span 
            font-size 8px
        input 
          width 300px
          background #FFF
          border none
          line-height 16px
          outline none
          padding 4px
        textarea 
          width 300px
          background #FFF
          border none
          line-height 16px
          outline none
          padding 4px
          resize none
        .head
          width 300px
          .add 
            width 60px
            height 60px
            background #FFF
            display flex
            align-items center
            justify-content center
            cursor pointer
    .tex
      align-items flex-start
    .btn_wrap
      display flex
      justify-content space-between
      padding 60px 100px 0 100px
      button 
        padding 3px 0
        width 135px
        border-radius 2px
        border none
</style>
 