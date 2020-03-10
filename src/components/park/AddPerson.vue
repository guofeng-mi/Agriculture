<template>
  <div id="ElementWind" class="dragWrap"  >
    <div class="hd_drag" @mousedown="drag">
      <P>添加员工</P>
      <span class="iconfont" @click="close()">&#xe600;</span>
    </div>
    <div class="dragBody">
      <div class="table_wrap">
        <div class="box left">
          <div class="item">
            <div class="k">
              <p>账号 <i>*</i></p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>是否需要考勤 <i>*</i></p>
            </div>
            <div class="v">
              <Radio-group v-model="test">
                  <Radio value="1">是</Radio>
                  <Radio value="0">否</Radio>
              </Radio-group>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>Sim账号</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>入职时间 <i>*</i></p>
            </div>
            <div class="v">
              <Date-picker type="date" placeholder="选择日期" style="width: 220px"></Date-picker>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>专业</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>生日</p>
            </div>
            <div class="v">
              <Date-picker type="date" placeholder="选择日期" style="width: 220px"></Date-picker>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>籍贯</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>职称</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item head">
            <div class="k">
              <p>员工头像</p>
            </div>
            <div class="v">
              <div class="camera">
                <span class="iconfont">&#xe74a;</span>
              </div>
            </div>
          </div>
        </div>


        <div class="box right">
          <div class="item">
            <div class="k">
              <p>姓名 <i>*</i></p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>手机号码<i>*</i></p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>部门 <i>*</i></p>
            </div>
            <div class="v">
              <i-select v-model="test" style="width:220px;border:none;">
                  <i-option value="1">123</i-option>
              </i-select>
            </div>
            </div>
          <div class="item">
            <div class="k">
              <p>岗位 <i>*</i></p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>最高学历</p>
            </div>
            <div class="v">
              <i-select v-model="test" style="width:220px;border:none;">
                  <i-option value="1">123</i-option>
              </i-select>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>毕业院校</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>民族</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>婚姻状况</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>政治面貌</p>
            </div>
            <div class="v">
              <i-select v-model="test" style="width:220px;border:none;">
                  <i-option value="1">123</i-option>
              </i-select>
            </div>
          </div>
          <div class="item">
            <div class="k">
              <p>参加工作时间</p>
            </div>
            <div class="v">
              <Date-picker type="date" placeholder="选择日期" style="width: 220px"></Date-picker>
            </div>
          </div>
        </div>
      </div>

      <div class="btn_wrap">
        <i-button type="success" @click="changeHomeState('xq_kq')">提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
export default {
   data(){
      return {
        isOpenWind :true,  //点击X关闭窗口
        test: ''
      }
   },
    computed: {
      ...mapState({
        tableStatus: state => state.tableStatus
      })
    },
    methods:{
      close() {
        this.$emit('addPersonClose', 'close') 
      },
      changeHomeState (status) {
          this.$store.commit('changeHomeState', status);
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
<style lang="stylus">
.ivu-select-selection
  border none
  height 26px !important
  line-height 26px
  border-radius 0
  .ivu-select-placeholder
    line-height 26px !important
.ivu-input
  border none
  height 26px !important
  line-height 26px
  border-radius 0
.ivu-input-suffix 
  i
    line-height 26px
</style>
<style lang="stylus" scoped>
@import '../../assets/css/global.styl'
.dragWrap
  text-align center
  width 900px
  position absolute
  left 50%
  top 50%
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
    padding-top 32px
    width 900px
    .table_wrap
      padding 0 30px 40px 30px
      display flex
      .box
        padding 0 35px
        .item
          height 46px
          display flex
          align-items center
          .k 
            width 120px
            text-align left
            i 
              color $green_1_Color = #5DD095
          .v 
            input 
              border none
              width 220px
              outline none
              padding 3px 6px
            .camera
              width 70px
              height 70px
              background #FFF
              border-radius 3px
              display flex
              justify-content center
              align-items center
              cursor pointer
              span 
                opacity .5
        .head 
          align-items flex-start
          p 
            padding-top 6px
    .btn_wrap
      padding-bottom 40px
      button 
        padding 3px 60px
        border none
        border-radius 0
</style>
 