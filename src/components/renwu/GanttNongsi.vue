<!--
 * @Descripttion: 农事任务添加
 -->
<template>
  <div class="ns_container">
    <div class="wrap">
      <div class="close">
        <Icon type="md-close" @click="close()"/>
      </div>

      <div class="name">
        <p>任务标题</p>
        <div class="con">
          <Input v-model="value" placeholder="Enter something..."  />
        </div>
      </div>

      <div class="content">
        <div class="left">
          <p>发送类型</p>
          <div class="sel_item">
            <Select v-model="model1">
              <Option value="1">按事件</Option>
            </Select>
          </div>

          <p>在以下任务完成后</p>
          <div class="sel_item">
            <Select v-model="model1">
              <Option value="1">种苗培植</Option>
            </Select>
          </div>

          <p>持续天数</p>
          <div class="sel_item">
            <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
          </div>

          <p>优先级</p>
          <div class="sel_item">
            <Select v-model="model1">
              <Option value="1">高</Option>
            </Select>
          </div>


        </div>


        <!--右侧-->
        <div class="right">
          <div class="title">
            <span>准备工作</span>
            <div>
              <Icon type="ios-add-circle-outline" />
              <p>添加</p>
            </div>
          </div>
          <div class="con">
            <div class="hd">
              <p>序号</p>
              <p>内容</p>
            </div>

            <div class="tr_item">
              <span>1</span>
              <Input v-model="value" placeholder="Enter something..." />
              <Icon type="ios-trash-outline" />
            </div>
          </div>


          <div class="title">
            <span>任务要求</span>
          </div>
          <div class="con" style="padding-right: 65px;padding-top: 22px">
            <Input v-model="value" type="textarea" rows="4" placeholder="任务要求" />
          </div>


          <div class="title">
            <span>任务教程</span>
          </div>
          <div class="con" style="padding-right: 65px;padding-top: 22px">

          </div>



        </div>
      </div>


      <div class="btn_wrap">
        <Button>取消</Button>
        <Button type="success">确定</Button>
      </div>




    </div>
  </div>
</template>

<script>
  export default {
    name: 'gantt',
    value: '',
    methods: {
      close() {
        this.$emit('close', 'close')
      }
    }

  }
</script>
<style lang="stylus">
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css"
.ns_container
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  z-index 100
  position fixed
  left 0
  top 0
  .wrap
    width 900px
    background #FFF
    padding 20px 0 30px 20px
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    .close
      text-align right
      padding-right 20px
      font-size 22px
      i
        cursor pointer
    .name
      display flex
      align-items center
      padding 12px 30px
      p
        width 100px
      .con
        flex 1
    .content
      display flex
      padding 12px 0 12px 30px
      .left
        width 200px
        padding-right 30px
        .sel_item
          padding 12px 0
      .right
        flex 1
        box-shadow 3px 3px 3px rgba(0,0,0,.05),-3px -3px 3px rgba(0,0,0,.05)
        border-radius 2px
        .title
          display flex
          justify-content space-between
          background #F6F8FF
          padding 8px 40px
          div
            display flex
            color #5DD095
            cursor pointer
            p
              padding-left 4px
              font-size 13px
        .con
          padding-left 80px
          padding-bottom 22px
          .hd
            display flex
            padding 12px 0
            p
              padding-right 32px
          .tr_item
            display flex
            align-items center
            padding-right 64px
            span
              display inline-block
              width 60px
              padding-left 6px
            i
              font-size 26px
              margin-left 12px
    .btn_wrap
      text-align center
      padding-top 60px
      button
        border-radius 0
        padding 4px
        width 160px
        margin 0 22px

</style>
