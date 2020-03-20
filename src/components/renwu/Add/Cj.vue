<!--采集任务添加与修改-->
<template>

  <div id="ElementWind"
     class="renwu_drag_wrap"
     ref="origin"
     :class="windowStatus == 'small' ? 'renwu_sy_drag_wrap_small' : 'renwu_sy_drag_wrap_big'">

    <div class="renwu_drag_hd" @mousedown="drag">
      <P>采集任务</P>
      <!--关闭与窗口控制-->
      <div class="right">
        <Icon type="md-contract" v-show="windowStatus == 'big'" id="small" @click="windowCtr('small')" title="还原" />
        <Icon type="md-qr-scanner" v-show="windowStatus == 'small'" id="big" @click="windowCtr('big')" title="最大化" />
        <Icon type="md-close" id="close" @click="close" title="关闭" />
      </div>

    </div>

    <div class="renwu_drag_body" :class="windowStatus == 'small' ? 'renwu_sy_drag_body_small' : 'renwu_sy_drag_body_big'">
      <div class="name_wrap">
        <Name @sendName="getName"/>
      </div>

      <Row>
        <i-col span="6">
          <LeftInfo
            @sendVal="getLeftInfo"
            s_type="true"
            s_start_date="true"
            s_duration="true"
            s_grade="true"
            s_cycle="true" />
        </i-col>

        <i-col span="18">
          <TableCj />
        </i-col>
      </Row>


      <div class="btn_wrap">
        <i-button @click="close">取消</i-button>
        <i-button type="success" @click="submit">提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
  import Name from './Pub/Name'
  import LeftInfo from "./Pub/LeftInfo";
  import TableCj from './Cj/TableCj'

  export default {
    components: {
      Name,
      LeftInfo,
      TableCj
    },
    data() {
      return {
        windowStatus: 'small', // big 窗口大小
        form: {
          data: {
            id: new Date().getTime(),
            text: '', // 任务标题
            type: '', // 发送类型
            start_date: '', // 开始时间
            end_date: '', // 结束时间
            duration: '', // 持续时间
            progress: '0%', // 完成度
            parent: 4, // 任务分类 采集4
            grade: '', // 优先级
            cycle: '', // 周期
          },
          table: {
            list: [ // 施药单
              {
                id: '', // id
                yp_id: '', // 药品id
                name: '', // 药品名称
                num: '', // 计量
                count: '', // 总用量
                xishi: '', // 稀释倍数
                isdel: '', // 是否被删除了
              }
            ],
            yaoqiu: '', // 任务要求
            jiaocheng: '' // 教程 应该是富文本内容
          }
        }
      }
    },
    methods:{

      // 提交信息
      submit() {
        console.log("提交信息");
        this.$emit('sendVal', this.form);
        this.close();
      },
      // 获取左侧信息
      getLeftInfo(val) {
        console.log("获取 leftInfo 值",val)
        this.form.data.type = val.type;
        this.form.data.start_date = val.start_date;
        this.form.data.end_date = val.end_date;
        this.form.data.grade = val.grade;
        this.form.data.cycle = val.cycle;
        this.form.data.duration = val.duration;
      },
      // 获取右侧信息
      getTableVal(val) {
        console.log("获取 右侧数据",val)
        this.form.table = val;
      },

      //获取name值
      getName(val) {
        console.log("获取name值：", val);
        this.form.data.text = val;
      },

      // 关闭弹窗页面
      close() {
        this.$emit('close', 'close')
      },
      windowCtr(val) {
        console.log(val)
        this.windowStatus = val;
        console.log(this.windowStatus)
        console.log(this.$refs.origin)
        if(val == 'small') {
          this.$refs.origin.style.left = "50%";
          this.$refs.origin.style.top = "50%";
        }
      },
      //鼠标按下拖拽
      drag(e){
        console.log(e)
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
  .renwu_sy_drag_wrap_small
    width 900px
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%) !important
  .renwu_sy_drag_wrap_big
    width 100%
    height 100vh
    position fixed
    left 0 !important
    top 0 !important
    transform translate(0)
  .renwu_drag_wrap
    text-align center
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
      #small
        cursor pointer
        font-size 18px
        margin-right 12px
      #big
        cursor pointer
        font-size 18px
        margin-right 12px
      #close
        cursor pointer
        font-size 22px
      p
        cursor text


    .renwu_sy_drag_body_small
      width 900px
      height 80vh
      overflow-y scroll
    .renwu_sy_drag_body_big
      width 100%
      height calc(100vh - 40px)
      overflow-y scroll
    .renwu_drag_body
      padding-top 32px



      .btn_wrap
        display flex
        width 100%
        justify-content center
        padding 60px 100px 30px 100px
        button
          padding 3px 0
          width 135px
          border-radius 2px
          border none
          margin 0 12px
          &:first-child
            border 1px solid #EEE


</style>

