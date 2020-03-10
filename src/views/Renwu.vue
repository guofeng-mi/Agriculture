<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-01-22 10:47:44
 * @LastEditTime: 2020-02-17 17:32:09
 -->
<template>
  <div class="renwu_container">
    <div class="left">

    </div>
    <div class="content_wrap">
      <div class="con">
        <div class="rn_1">
          <i-col span="8" v-for="item in 9">
            <div class="item">
                <div class="con">
                  <div class="title">
                    <p>
                      <i>肥料</i>
                      <b>羊粪</b>
                    </p>
                    <p>
                      <span>优先级：高</span>
                      <span class="iconfont">&#xe7f7;</span>
                    </p>
                  </div>
                  <p class="t1">天气晴朗施药,稀释50倍,发芽前全面喷布枝干</p>
                  <div class="t2">
                    <p>东丽旺旺葡萄园</p>
                    <span>!! 任务未开始</span>
                  </div>
                  <p class="time">2019-11-02 至 2019-11-10</p>
                </div>
            </div>
          </i-col>
        </div>



      </div>
    </div>
    <div class="right_nav">
      right
    </div>
  </div>
</template>
 
<script>
import { mapState} from 'vuex';
export default {
  name: '',
  data () {
    return {
      
    }
  },
  computed: {
      ...mapState({
          headerStatus: state => state.headerStatus
      })
  },
  methods: {
    
  }
}
</script>
 
<style scoped lang="stylus">
@import '../assets/css/global.styl'
.renwu_container
  padding-top 83px
  .left 
    position fixed
    left 0
    top 84px
    width 200px
    height calc(100vh - 84px)
    background $minColor_b
    color #FFF
  .content_wrap
    height calc(100vh - 84px)
    padding 0 200px
    .con
      width 100%
      height 100%
      padding 12px 0 12px 12px
      .rn_1
        .item
          padding 0 12px 12px 0
          .con
            background #FFF
            padding 12px
            .title 
              display flex
              justify-content space-between
              align-items center
              p 
                i 
                  background $green_1_Color
                  color #FFF
                  font-size 12px
                  padding 2px 6px
                  margin-right 6px
                span 
                  font-size 12px
                  color rgba(0,0,0,.5)
                .iconfont
                  color red
                  font-weight 600
            .t1
              padding 16px 0
              opacity .5
            .t2
              display flex
              align-items center
              justify-content space-between
              padding 22px 0 12px 0
              border-bottom 1px solid rgba(0,0,0,.1)
            .time
              padding-top 12px
              font-size 12px
              opacity .5
              
  .right_nav
    position fixed
    right 0
    top 84px
    width 200px
    height calc(100vh - 84px)
    

</style>