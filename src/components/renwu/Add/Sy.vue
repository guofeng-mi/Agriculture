<!--施药任务添加与修改-->
<template>
  <div id="ElementWind" class="renwu_drag_wrap"  >
    <div class="renwu_drag_hd" @mousedown="drag">
      <P>施药任务</P>
      <span class="iconfont" @click="close">&#xe600;</span>
    </div>
    <div class="renwu_drag_body">
      <div class="name_wrap">
        <Name />
      </div>

      <Row>
        <i-col span="6">
          <LeftInfo />
        </i-col>
        <i-col span="18">
          <TableSy />
        </i-col>
      </Row>


      <div class="btn_wrap">
        <i-button>取消</i-button>
        <i-button type="success" >提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
  import Name from './Pub/Name';
  import LeftInfo from "./Pub/LeftInfo";
  import TableSy from "./Sy/TableSy";

  export default {
    components: {
      Name,
      LeftInfo,
      TableSy
    },
    methods:{
      // 关闭弹窗页面
      close() {
        this.$emit('close', 'close')
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
  @import '../../../assets/css/global.styl'
  .renwu_drag_wrap
    text-align center
    width 900px
    padding-bottom 30px
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    box-shadow 2px 2px 6px rgba(0,0,0,.1), -2px -2px 6px rgba(0,0,0,.1)
    /*background #EFF3FF*/
    background #FFF

    .renwu_drag_hd
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


    .renwu_drag_body
      padding-top 32px
      width 900px



      .btn_wrap
        display flex
        width 100%
        justify-content center
        padding 60px 100px 0 100px
        button
          padding 3px 0
          width 135px
          border-radius 2px
          border none
          margin 0 12px
          &:first-child
            border 1px solid #EEE


</style>

