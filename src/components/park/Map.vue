<!--
 * @Descripttion: 园区 map
 * @version: 
 * @Date: 2020-01-09 13:20:14
 * @LastEditTime : 2020-01-17 17:42:59
 -->
<template>
  <div class="dikuai">
    <!-- map-type="BMAP_HYBRID_MAP" -->
    <baidu-map class="map" map-type="BMAP_HYBRID_MAP" :center="{lng: 116.040204, lat: 39.951761}" :zoom="18" :scroll-wheel-zoom="true">
        <bm-polyline :path="polylinePath"  stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true"></bm-polyline>
    </baidu-map>
    
  </div>
</template>
 
<script>
export default {
  name: '',
  data () {
    return {
      polylinePath: [
        {lng: 116.038668, lat: 39.950973},
        {lng: 116.038353, lat: 39.951906},
        {lng: 116.039225, lat: 39.952729},
        {lng: 116.039961, lat: 39.951948},
        {lng: 116.039548, lat: 39.95109},
        {lng: 116.038668, lat: 39.950973}
      ],
      lng: '116.305',
      lat: '39.900'
    }
  },
  methods: {
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    }
  }
}
</script>
<style lang ="stylus">
 .map {
  width: 100%;
  height: 250px;
}

</style>