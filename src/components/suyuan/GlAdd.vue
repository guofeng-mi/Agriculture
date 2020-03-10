<!--
 * @Descripttion: 创建出园商品
 -->
<template>
  <div class="gl_ad_bg">
    <div class="gl_add">
      <div class="close">
        <Icon type="md-close" @click="selfClose()"/>
      </div>
        <div class="ad_wrap">
            <div class="ad_header">
                <div class="ad_h_left">
                    <p class="ad_h_title">阳光玫瑰</p>
                    <div class="ii">
                        <p>作物</p>
                        <p>品种</p>
                        <p>种植时间</p>
                        <p>已有批次</p>
                    </div>
                    <div class="ii">
                        <p>葡萄</p>
                        <p>阳光玫瑰</p>
                        <p>2018-04-12</p>
                        <p>葡萄</p>
                    </div>
                </div>
                <div class="ad_h_right">
                    <img src="@/assets/img/map_2.jpg" alt="">
                </div>
            </div>

          <div class="scro_box" >
            <div class="scro">
                <div class="item" v-for="item in 20">
                    <div class="left">
                        <Icon type="md-checkbox" />
                    </div>
                    <div class="right">
                        <div class="title">
                            <p>上市时间：<b>2019-11-13</b></p>
                            <div class="t_r">
                                <i>审核通过</i>
                                <span>已下架</span>
                            </div>
                        </div>
                        <div class="img_bt">
                            <img src="@/assets/img/code_1.png" alt="">
                            <img src="@/assets/img/code_2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
          </div>


            <div class="footer_box">
                <div class="page">
                    <Page :total="100" show-elevator />
                </div>

                <div class="footer">
                    <div class="left">
                        <Icon type="md-checkbox" />
                        <p>全选</p>
                        <Button size="mini">上架</Button>
                        <Button size="mini">下架</Button>
                        <Icon type="ios-trash-outline" />
                    </div>
                    <div class="btn">
                        <Button type="success" @click="show = true">添加批次</Button>
                    </div>
                </div>
            </div>
        </div>

        <!--添加批次-->
        <Gl-add-pc @close="close" v-show="show"></Gl-add-pc>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import GlAddPc from './GlAddPc'
export default {
  name: '',
  components: {
      GlAddPc
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapState({
      tableStatus: state => state.tableStatus
    })
  },
  methods: {
    selfClose() {
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
.gl_ad_bg
    width 100%
    height 100vh
    background rgba(0,0,0,.5)
    position fixed
    left 0
    top 0
    z-index 10
    padding 22px
    .gl_add
        width 100%
        height calc(100vh - 40px)
        // position fixed
        // left 50%
        // top 50%
        // transform translate(-50%, -50%)
        // box-shadow $inp_shadow
        background $btnColor
        padding 20px 40px
        border-radius 4px
        .close
          text-align end
          padding-bottom 20px
          font-size 22px
        .ad_wrap
            .ad_header
                display flex
                width 100%
                justify-content space-between
                .ad_h_title
                    padding-bottom 6px
                .ii
                    display flex
                    justify-content space-between
                    width 400px
                    padding-top 8px
                    p
                        flex 1
                        font-size 14px
                        color #222
                    &:last-child
                        p
                            font-size 12px
                            opacity .6
                img
                    width 60px
                    height 60px
            .scro_box
                margin-top 20px
                height calc(100vh - 310px)
                overflow-y scroll
                .scro
                    width 100%
                    .item
                        background #FFF
                        margin-top 20px
                        display flex
                        .left
                            padding 12px
                            border-right 1px solid #EEE
                        .right
                            flex 1
                            padding 12px
                            .title
                                display flex
                                justify-content space-between
                                b
                                    font-size 13px
                                span
                                    background #EEE
                                    font-size 12px
                                    padding 3px 6px
                                    border-radius 4px
                                    margin-left 6px
                                i
                                    color $xxColor
                                    font-size 13px
                            .img_bt
                                display flex
                                justify-content space-between
                                padding-top 32px
                                img
                                    height 50px
            .footer_box
                position absolute
                bottom 40px
                width calc(100% - 140px)
                .page
                    padding 20px 0
                    text-align center
                .footer
                    width 100%
                    display flex
                    align-items center
                    justify-content space-between
                    .left
                        display flex
                        align-items center
                        i
                            font-size 22px
                            margin-left 12px
                        button
                            padding 2px 22px
                            border-radius 0
                            margin-left 12px



</style>
