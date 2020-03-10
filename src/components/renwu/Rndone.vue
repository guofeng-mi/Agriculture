<template>
  <div id="ElementWind" class="dragWrap"  >
    <div class="hd_drag" @mousedown="drag">
      <P>确认完成任务</P>
      <span class="iconfont" @click="close()">&#xe600;</span>
    </div>
    <div class="dragBody">
      <div class="item">
        <p class="l">任务完成时间</p>
        <div class="r">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </div>
      </div>
      <div class="item">
        <p class="l">用工量</p>
        <div class="r">
          <Input-number :max="10" style="width: 200px" :min="1" :value="1"></Input-number>
        </div>
      </div>
      <div class="item">
        <p class="l">物料使用明细</p>
        <div class="r">
          <img src="@/assets/img/add_2.png" alt="">
          <p>添加明细</p>
        </div>
      </div>

      <div class="btn_wrap">
        <i-button>取消</i-button>
        <i-button type="success" @click="changeDikuaiStatus('rn')">提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
export default {
   data(){
      return {
        isOpenWind :true  //点击X关闭窗口
      }
   },
    computed: {
        ...mapState({
            tableStatus: state => state.tableStatus
        })
    },
   methods:{
     close() {
       this.$emit('close', 'close')
     },
      changeDikuaiStatus (status) {
          this.$store.commit('changeDikuaiStatus', status);
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
  width 500px
  height 377px
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  background #fff
  box-shadow 2px 2px 6px rgba(0,0,0,.1), -2px -2px 6px rgba(0,0,0,.1)
  background #EFF3FF
  z-index 100
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
    width 500px
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
        display flex
        width 200px
        align-items center
        justify-content flex-end
        color $green_1_Color
        p
          padding-left 6px
        img
          width 16px
          height 16px
        input
          width 200px
          background #FFF
          border none
          line-height 16px
          outline none
          padding 4px
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
