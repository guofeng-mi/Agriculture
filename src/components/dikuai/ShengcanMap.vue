<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-09 13:20:14
 * @LastEditTime : 2020-01-21 17:51:54
 -->
<template>
  <div class="dikuai">
    <!-- map-type="BMAP_HYBRID_MAP" -->
    <baidu-map class="map" map-type="BMAP_HYBRID_MAP" :center="{lng: 105.000, lat: 40.000}" :zoom="4" :scroll-wheel-zoom="true" @click="clickHandler">
        <bm-polyline :path="polylinePath"  stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath" ></bm-polyline>
    </baidu-map>
    <div class="big" @click="changeDikuaiActionMap()">
      <span class="iconfont">&#xec88;</span>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  name: '',
  components: {

  },
  data () {
    return {
      polylinePath: [
        // {lng: 116.404, lat: 39.915},
        // {lng: 116.405, lat: 39.920},
        // {lng: 116.423493, lat: 39.907445}
      ],
      lng: '116.404',
      lat: '39.915'
    }
  },
  computed: {
    ...mapState({
      dikuaiAction: state => state.dikuaiAction
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
    changeDikuaiActionMap() {
      this.$store.commit('changeDikuaiActionMap', this.dikuaiAction);
    }
  }
}
</script>
<style lang="stylus">
.dikuai
  position relative
  width 100%
  height 400px
  .map
    height 400px
    width 100%
  .big
    position absolute
    right 12px
    bottom 12px
    color #EEE
    cursor pointer
    span
      font-size 32px

</style>
