<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-09 13:20:14
 * @LastEditTime : 2020-01-21 17:53:28
 -->
<template>
  <div class="ShengcanMapBig">
    <!-- map-type="BMAP_HYBRID_MAP" -->
    <!-- <baidu-map class="map" map-type="BMAP_HYBRID_MAP" :center="center" :zoom="14" :scroll-wheel-zoom="true" @click="clickHandler">
        <bm-polyline :path="polylinePath"  stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath" ></bm-polyline>
        <bml-marker-clusterer averageCenter="true">
          <bm-marker :position="{lng: lng, lat: lat}"></bm-marker>
        </bml-marker-clusterer>
    </baidu-map> -->

    <div class="left">
      <p style="padding: 23px 0 0 20px">选择城市</p>
      <div class="item" style="padding-top: 30px;">
        当前经度: {{lng}}
      </div>
      <div class="item">
        当前纬度: {{lat}}
      </div>
      <div class="add" @click="submit">
        <span class="iconfont">&#xeb66;</span>
        <p>添加当前点</p>
      </div>

      <div class="btn_wrap">
        <i-button @click="changeDikuaiActionMap('false')">取消</i-button>
        <i-button @click="changeDikuaiActionMap('false')" type="success"> 确定 </i-button>
      </div>
    </div>

  <baidu-map map-type="BMAP_HYBRID_MAP" class="map" :scroll-wheel-zoom="true" center="北京" @click="clickHandler">
    <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
    <bm-polyline :path="polylinePath"  stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath" ></bm-polyline>
    <bml-marker-clusterer averageCenter="true">
      <bm-marker :position="{lng: lng, lat: lat}"></bm-marker>
    </bml-marker-clusterer>
  </baidu-map>

    <!-- <template>
        <i-input :value.sync="lng" placeholder="请输入..." style="width: 300px"></i-input>
        <i-input :value.sync="lat" placeholder="请输入..." style="width: 300px"></i-input>
        <i-button @click="submit">添加</i-button>
        <i-button @click="see">查看</i-button>
    </template> -->

  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  name: '',
  data () {
    return {
      polylinePath: [],
      lng: '116.404',
      lat: '39.915'
    }
  },
  computed: {
    ...mapState({
        headerStatus: state => state.headerStatus,
        dikuaiStatus: state => state.dikuaiStatus
    })
  },
  methods: {
    clickHandler(e) {
      console.log(e.point)
      this.lng = e.point.lng;
      this.lat = e.point.lat;
    },
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    },
    submit() {
      this.$set(this.polylinePath, this.polylinePath.length, {lng: this.lng, lat: this.lat})
      console.log(this.polylinePath)
    },
    see() {
      console.log(this.polylinePath)
    },
    changeDikuaiActionMap(status) {
      this.$store.commit('changeDikuaiActionMap', status);
    }
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/global.styl'
.ShengcanMapBig
  width 100%
  height 100vh
  position fixed
  left 0
  top 0
  z-index 99
  background rgba(0,0,0,.5)
  .left
    width 200px
    height 90vh
    background #FFF
    position fixed
    left 5%
    top 5vh
    .add
      background #FFF
      cursor pointer
      display flex
      align-item center
      margin 20px
      padding 12px
      border-radius 4px
      border 1px solid #CCC
      span
        font-size 16px
        line-height 16px
      p
        padding-left 6px
    .item
      padding 6px 20px
    .btn_wrap
      position absolute
      bottom 0
      left 0
      padding 20px
      button
        display block
        width 160px
        border-radius 0
        margin-top 12px
  .map
    width calc(90% - 200px)
    height 90vh
    position absolute
    left calc(5% + 200px)
    top 5vh
    .BMap_noprint
      position fixed !important
      left calc(5% + 82px) !important
      top calc(5vh + 16px) !important
  .search
    position absolute
    left calc(5% + 12px)
    top calc(5vh + 12px)
    background #FFF
    display flex
    align-items center
    padding 8px
    border-radius 4px
    span
      font-size 22px
      font-weight 600
      opacity .6
      padding 0 6px


</style>
