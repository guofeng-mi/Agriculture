<!--
 * @Descripttion: 新增园区
 -->
<template>
  <div class="park_bg">
    <div class="close">
      <span class="iconfont" @click="changeHomeShow('false')">&#xe600;</span>
    </div>
    <div class="park__scro">
      <div class="park_con">
        <div class="hd">
          <p>园区信息</p>
        </div>
        <div class="line">
          <p>基本信息</p>
        </div>

        <div class="tab_con">
          <div class="item">
            <div class="k">
              <p>园区名称 <i>*</i></p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>

          <div class="item">
            <div class="k">
              <p>种植规模 <i>*</i></p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>

          <div class="item">
            <div class="k">
              <p>园区地址 <i>*</i></p>
            </div>
            <div class="v">
              <div class="location">
                <div class="select">
                  <Cascader :data="data" v-model="location"></Cascader>
                </div>
                <input type="text">
              </div>
            </div>
          </div>

          <div class="item">
            <div class="k">
              <p>联系人</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>

          <div class="item">
            <div class="k">
              <p>联系电话</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>

          <div class="item">
            <div class="k">
              <p>联系人邮箱</p>
            </div>
            <div class="v">
              <input type="text">
            </div>
          </div>

        </div>

        <div class="line">
          <p>园区平面图</p>
        </div>

        <div class="tab_con">
          <div class="item_map">
            <p>平面图类型</p>
            <Radio-group v-model="locationStatus">
              <Radio label="1">使用百度地图</Radio>
              <Radio label="2">使用我上传的平面图</Radio>
              <Radio label="3">使用无人机全景图</Radio>
            </Radio-group>
          </div>
        </div>

        <div class="map_box">
          <img v-if="locationStatus == 2" src="@/assets/img/map_1.jpg" alt="">
          <img v-else-if="locationStatus == 3" src="@/assets/img/map_2.jpg" alt="">
          <ParkConMap v-else-if="locationStatus == 1"></ParkConMap>
        </div>

        <div class="btn_wrap">
          <i-button>取消</i-button>
          <i-button type="success">提交</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ParkConMap from '../park/ParkConMap'
  import { mapState} from 'vuex';
  export default {
    name: '',
    components: {
      ParkConMap
    },
    data () {
      return {
        locationStatus: '1',
        location: [],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }]
      }
    },
    computed: {
      ...mapState({
        homeState: state => state.homeState
      })
    },
    methods: {
      changeHomeShow(status) {
        this.$store.commit('changeHomeShow', status);
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/css/global.styl'
  .park_bg
    position fixed
    left 0
    top 0
    z-index 9
    width 100%
    height 100vh
    background rgba(0,0,0,.5)
    .close
      position absolute
      right calc(5% + 24px)
      top calc(5vh + 16px)
      z-index 10
      cursor pointer
    .park__scro
      position absolute
      width 90%
      height 90vh
      left 50%
      top 5vh
      overflow-y scroll
      transform translateX(-50%)
      background #FFF
      .park_con
        border-radius 3px
        height 100%
        .hd
          position relative
          p
            padding 22px 40px
        .line
          background $btnColor
          padding 12px 40px
        .tab_con
          padding 22px 150px
          .item
            display flex
            align-items center
            padding-bottom 26px
            .k
              width 100px
              display flex
              align-items center
              i
                color $green_1_Color
            .v
              width 100%
              input
                width 100%
                outline none
                border none
                box-shadow $inp_shadow
                border-radius 3px
                padding 4px 12px
              .location
                display flex
                align-items center
                input
                  margin-left 12px
          .item_map
            display flex
            align-items center
            .ivu-radio-wrapper
              padding-left 50px
        .map_box
          margin-bottom 40px
          width 100%
          img
            width 100%
      .btn_wrap
        text-align center
        padding-bottom 40px
        button
          padding 3px 60px
          margin 0 12px
          border-radius 0




</style>
