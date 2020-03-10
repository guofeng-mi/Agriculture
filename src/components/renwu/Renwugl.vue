<!--
 * @Descripttion: 任务管理
 -->
<template>
  <div class="renwu_container">

    <!--左侧任务完成率-->
    <div class="rn_left">
      <div class="title">
        <div>任务完成率</div>
        <p>
          <span>21</span>
          <i>%</i>
        </p>
      </div>
      <div class="item" :class="status == 0 ? 'active' : ''" @click="status = 0">
        <img src="@/assets/img/dk_rn_0.png" alt="">
        <p>全部任务</p>
        <span>19</span>
      </div>
      <div class="item" :class="status == 1 ? 'active' : ''" @click="status = 1">
        <img src="@/assets/img/dk_rn_5.png" alt="">
        <p>施肥</p>
        <span>19</span>
      </div>
      <div class="item" :class="status == 2 ? 'active' : ''" @click="status = 2">
        <img src="@/assets/img/dk_rn_1.png" alt="">
        <p>施药</p>
        <span>19</span>
      </div>
      <div class="item" :class="status == 3 ? 'active' : ''" @click="status = 3">
        <img src="@/assets/img/dk_rn_4.png" alt="">
        <p>农事</p>
        <span>19</span>
      </div>
      <div class="item" :class="status == 4 ? 'active' : ''" @click="status = 4">
        <img src="@/assets/img/dk_rn_2.png" alt="">
        <p>采集</p>
        <span>19</span>
      </div>
      <div class="item" :class="status == 5 ? 'active' : ''" @click="status = 5">
        <img src="@/assets/img/dk_rn_3.png" alt="">
        <p>巡园</p>
        <span>19</span>
      </div>

      <div class="jd">
        <div class="l">
          <p>剩余施肥任务</p>
          <span style="padding-top: 16px;">6</span>
        </div>
        <div class="r">
          <i-circle :percent="80" class="circel" :size="50" trail-color="#68E5AB" :stroke-width="10" :trail-width="10" stroke-color="#ADBEF8">
              <span class="demo-Circle-inner" style="font-size:12px; padding: 0">80%</span>
          </i-circle>
        </div>
      </div>
      <div class="jd">
        <div class="l">
          <p>剩余施药任务</p>
          <span style="padding-top: 16px;">6</span>
        </div>
        <div class="r">
          <i-circle :percent="80" class="circel" :size="50" trail-color="#68E5AB" :stroke-width="10" :trail-width="10" stroke-color="#ADBEF8">
              <span class="demo-Circle-inner" style="font-size:12px; padding: 0">80%</span>
          </i-circle>
        </div>
      </div>
    </div>


    <!--中间数据显示区-->
    <div class="content_wrap">
      <div class="con">
        <div class="rn_1">
          <i-col span="8" v-for="item in 9">
            <div class="item" @click="showDone(item)">
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

    <div class="rn_right_wrap">
<!--      右侧过滤-->
      <Rnright></Rnright>
    </div>


    <!--采集任务-->
    <Rncon v-if="showCom == 'caiji'" @close="close" />
    <!--施药任务-->
    <Rnconsy v-if="showCom == 'shiyao'" @close="close" />
    <!--临时任务-->
    <Rnconxy v-if="showCom == 'linshi'" @close="close" />
    <!--确认完成任务-->
    <Rndone v-if="showCom == 'done'" @close="close" />


  </div>
</template>

<script>
import { mapState} from 'vuex';
import Rnright from '../dikuai/Rnright'
import Rncon from '../renwu/Rncon'
import Rnconsy from '../renwu/Rnconsy'
import Rnconxy from '../renwu/Rnconxy'
import Rndone from '../renwu/Rndone'


export default {
  name: '',
  components: {
    Rnright, // 右侧过滤
    Rncon,   // 采集任务
    Rnconsy, // 施药任务
    Rnconxy, // 临时任务
    Rndone,  // 确认
  },
  data () {
    return {
      /**
       * caiji 采集任务
       * shiyao 施药任务
       * linshi 临时任务
       * done  确认完成任务
       * */
      showCom: false,
      status: 0
    }
  },
  computed: {
    ...mapState({
        headerStatus: state => state.headerStatus
    })
  },
  methods: {
    close() {
      this.showCom = false;
    },
    showDone(index) {
      console.log(index)
      let num = index % 4;
      switch (num) {
        case 0:
          this.showCom = 'caiji';
          break;
        case 1:
          this.showCom = 'shiyao';
          break;
        case 2:
          this.showCom = 'linshi';
          break;
        case 3:
          this.showCom = 'done';
          break;
      }
    },
    changeDikuaiStatus(status) {
      this.$store.commit('changeDikuaiStatus', status);
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.renwu_container
  .rn_left
    position fixed
    top 84px
    width 200px
    height calc(100vh - 84px)
    background $minColor_b
    color #FFF
    .title
      padding 30px
      p
        display flex
        align-items flex-end
        padding-top 12px
        span
          font-size 26px
          font-weight 600
    .item
      display flex
      justify-content space-between
      align-items center
      padding 12px 20px
      cursor pointer
      img
        width 16px
        height 16px
      p
        flex 1
        padding-left 6px
    .active
      background $green_1_Color
    .jd
      display flex
      align-items center
      justify-content space-between
      padding 20px
      span
        font-weight 600
        font-size 16px
        padding-top 16px
        display block
      .r
        .circel
          width 40px
          height 40px
  .content_wrap
    height calc(100vh - 84px)
    padding-left 200px
    padding-right 200px
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

  .rn_right
    position fixed
    right 0
    top 84px
    width 200px
    height calc(100vh - 84px)
  .rn_right_wrap
    position fixed
    top 84px
    right 100px
    width 200px
    height calc(100vh - 84px)

</style>
