<!--
 * @Descripttion:
 -->
<template>
  <div class="gl_add_bg">
    <div class="gl_add_pc">
      <div class="ad_pc_scro">
        <div class="hd">
            <p>添加批次</p>
            <Icon  type="md-close" @click="selfClose()"/>
        </div>

        <div class="line">基本信息</div>
        <div class="item_pc">
            <p class="k">上市时间</p>
            <div class="v">
                <Input v-model="test" placeholder="Enter something..." style="width: 100%" />
            </div>
        </div>
        <div class="item_pc">
          <p class="k">上市时间</p>
          <div class="v">
            <Input v-model="test" maxlength="100" show-word-limit type="textarea" placeholder="Enter something..." style="width: 100%" />
          </div>
        </div>

        <div class="line">
          <p>监测记录</p>
          <div class="add" @click="show = 'jc'">
            <Icon type="md-add" />
            <p>添加记录</p>
          </div>
        </div>

        <div class="jl jl_1">
          <div class="item">
            <div class="top">
              <p>农残监测</p>
              <p>2020-02-11</p>
            </div>
            <div class="con">
              <div class="c_ left">
                <p>监测明细</p>
                <span>2</span>
              </div>
              <i></i>
              <div class="c_ right">
                <p>监测图片</p>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>

        <div class="line">
          <p>加工记录</p>
          <div class="add" @click="show = 'jg'">
            <Icon type="md-add"/>
            <p>添加记录</p>
          </div>
        </div>

        <div class="jl jl_2">
          <div class="item">
            <div class="top">
              <p>2020-02-11</p>
              <p>XX操作员</p>
            </div>
            <p class="con">文字文字文字文字文字</p>
          </div>
        </div>


        <div class="line">
          <p>配送记录</p>
          <div class="add" @click="show = 'ps'">
            <Icon type="md-add"/>
            <p>添加记录</p>
          </div>
        </div>

        <div class="jl jl_2">
          <div class="item">
            <div class="top">
              <p>2020-02-11</p>
              <p>XX操作员</p>
            </div>
            <p class="con">文字文字文字文字文字</p>
          </div>
        </div>

        <div class="btn">
          <Button>取消</Button>
          <Button type="success">提交</Button>
        </div>
      </div>
    </div>

    <!-- 检测记录 -->
    <Jl-Jc @close="close" v-if="show == 'jc'"></Jl-Jc>
    <!-- 加工记录 -->
    <Jl-Jg @close="close" v-if="show == 'jg'"></Jl-Jg>
    <!-- 配送记录 -->
    <Jl-Ps @close="close" v-if="show == 'ps'"></Jl-Ps>

  </div>
</template>

<script>
import { mapState } from 'vuex';

import JlJc from './JlJc'
import JlJg from './JlJg'
import JlPs from './JlPs'

export default {
  name: '',
  components: {
      JlJc,
      JlJg,
      JlPs
  },
  data () {
    return {
      test: '',
      show: false, //
    }
  },
  computed: {
    ...mapState({
      tableStatus: state => state.tableStatus
    })
  },
  methods: {
    selfClose() {
      console.log('selfClose')
      this.$emit('close', 'close')
    },
    close(val) {
      console.log(val)
      this.show = false;
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.gl_add_bg
    width 100%
    height 100vh
    position fixed
    left 0
    top 0
    padding 20px
    .gl_add_pc
        width 100%
        height calc(100vh - 40px)
        border-radius 4px
        background #FFF
        z-index 99
        position relative
        .hd
            width 100%
            padding 20px
            display flex
            justify-content space-between
        .ad_pc_scro
            height calc(100vh - 40px)
            overflow-y scroll
            width 100%
            .item_pc
                display flex
                align-items center
                padding 12px 0
                .k
                    width 250px
                    padding-left 100px
                .v
                    flex 1
                    padding-right 200px
            .line
                padding 12px 60px
                background $btnColor
                display flex
                justify-content space-between
                .add
                    display flex
                    align-item center
                    cursor pointer
            .jl
                padding 20px 60px
                display flex
                .item
                    padding 12px
                    border-radius 6px
                    box-shadow $inp_shadow
                    width 220px
                    cursor pointer
                    .top
                        display flex
                        justify-content space-between
                        p
                            &:last-child
                                font-size 13px
                    .con
                        display flex
                        justify-content space-between
                        padding-top 12px
                        i
                            display block
                            width 1px
                            background rgba(0,0,0,.5)
                        .c_
                            text-align center
                            p
                                padding-bottom 8px
                                font-size 13px
                            span
                                font-size 12px
            .btn
                position absolute
                bottom 22px
                display flex
                justify-content center
                width 100%
                button
                    margin 0 20px
                    border-radius 0
                    padding 2px 0
                    width 100px







</style>
