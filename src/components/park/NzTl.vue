// 退料 出料
<template>
  <div id="ElementWind" class="dragWrap"  >
    <div class="hd_drag" @mousedown="drag">
      <P>{{title}}</P>
      <span class="iconfont" @click="close()">&#xe600;</span>
    </div>
    <div class="dragBody">
      <div class="hd">
        <strong>PKD986621595268</strong>
      </div>
      <div class="time">
        <div class="l">
          <span>{{title}}日期 <i>*</i></span>
          <Date-picker type="date" placeholder="选择日期" size="small" style="width: 150px"></Date-picker>
        </div>
        <div class="r">
          <span>入库园区：</span>
          <span>田诚慧生态产业园区</span>
        </div>
      </div>
      <div class="time lin">
        <div class="l">
          <span>{{title}}日期 <i>*</i></span>
          <Date-picker type="date" placeholder="选择日期" size="small" style="width: 150px"></Date-picker>
        </div>
        <div class="r">
          <span>收货人：</span>
          <span>云立方试用</span>
        </div>
      </div>

      <div class="rk_wrap">
        <div class="title">{{title}}明细 <i>*</i></div>
        <div class="table">
          <div class="table_hd">
            <p>物料类型</p>
            <p>物料名称</p>
            <p>数量</p>
            <p>删除</p>
          </div>
          <div class="table_body">
            <div class="scr">
                <div class="item" v-for="item in tableData" :key="item">
                  <div class="l1">
                    <i-select v-model="test" style="width:100%" size="small">
                        <i-option label="1">1</i-option>
                    </i-select>
                  </div>
                  <div class="l2">
                    <i-select v-model="test" style="width:100%" size="small">
                        <i-option label="1">1</i-option>
                    </i-select>
                  </div>
                  <div class="l3">
                    <Input-number :max="10" :min="1" :value="test" size="small"></Input-number>
                    <span>毫克</span>
                  </div>
                  <div class="l4">
                    <img src="@/assets/img/del.png" alt="">
                  </div>
                </div>
            </div>
          </div>
          <div class="add" @click="add">
            <span class="iconfont">&#xe609;</span>
            <p>添加物料</p>
          </div>
        </div>
      </div>

      <div class="bz">
        <p>备注</p>
        <textarea name="" id="" cols="30" rows="4"></textarea>
      </div>

      <div class="btn_wrap">
        <i-button @click="changeGlobalStatus('nzgl')">取消</i-button>
        <i-button type="success" @click="changeGlobalStatus('nzgl')">提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
export default {
   data(){
      return {
        test: '',
        tableData: [{}]
      }
   },
  props: ['title'],
    computed: {
        ...mapState({
            tableStatus: state => state.tableStatus
        })
    },
   methods:{
     close() {
       this.$emit('close', 'close');
     },
     add() {
       this.tableData.push({})
     },
      changeGlobalStatus (status) {
          this.$store.commit('changeGlobalStatus', status);
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
  width 700px
  position absolute
  left 50%
  top 50%
  padding-bottom 40px
  transform translate(-50%, -50%)
  background #fff
  box-shadow 2px 2px 6px rgba(0,0,0,.1), -2px -2px 6px rgba(0,0,0,.1)
  background #FFF
  z-index 20
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
    width 700px
    .hd
      display flex
      align-items center
      justify-content space-between
      padding 16px 60px
      strong
        font-weight 600
      p
        display flex
        justify-content space-between
        width 230px
        span
          opacity .7
          font-size 13px
    .time
      display flex
      align-items center
      justify-content space-between
      padding 0 60px
      padding-bottom 12px
      .l
        display flex
        align-items center
        justify-content space-between
        span
          padding-top 2px
          padding-right 12px
          i
            color $green_1_Color
      .r
        opacity .6
        font-size 13px
        display flex
        justify-content space-between
        width 230px
    .lin
      box-shadow $border_b
    .rk_wrap
      padding 22px 60px
      text-align left
      .title
        i
          color $green_1_Color
      .table
        padding-top 32px
        .table_hd
          width 100%
          display flex
          justify-content space-between
          background rgba(0,0,0,.01)
          p
            padding 6px 12px
          p:nth-child(1)
            flex 3
          p:nth-child(2)
            flex 5
          p:nth-child(3)
            flex 3
          p:nth-child(4)
            flex 1
        .table_body
          width 100%
          overflow hidden
          .scr
            width 120%
            padding-right 20%
            overflow-y scroll
            height 100%
            max-height 150px
            .item
              display flex
              justify-content space-between
              align-items center
              padding 12px 0
              &>div
                padding-left 12px
                box-sizing border-box
              .l1
                flex 3
                padding-right 16px
              .l2
                flex 5
                padding-right 16px
              .l3
                flex 3
                display flex
                align-items center
                padding-right 16px
                span
                  padding-left 4px
              .l4
                flex 1
        .add
          display flex
          align-items center
          justify-content center
          background $btnColor
          color $minColor_b
          padding 22px 0
          border-radius 2px
          cursor pointer
          margin-top 12px
          p
            padding-left 6px
    .bz
      padding 0 60px
      p
        text-align left
        padding 12px 0
      textarea
        box-shadow $inp_shadow
        border none
        width 100%
        border-radius 4px
        padding 6px
        outline none
        resize none
    .tex
      align-items flex-start
    .btn_wrap
      display flex
      justify-content center
      padding 60px 100px 0 100px
      button
        padding 3px 0
        width 135px
        border-radius 2px
        margin 0 22px
</style>
