<!--
 * @Descripttion: 
 * @version: 
 * @Author: Logic
 * @Date: 2020-01-09 10:20:26
 * @LastEditors  : Logic
 * @LastEditTime : 2020-01-09 13:43:53
 -->
<template>
  <div class="map_wrap">
    <baidu-map class="bm-view" center="沈阳" :zoom="5" @ready="handler">
      <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_CIRCLE" color="red" size="BMAP_POINT_SIZE_BIGGER"></bm-point-collection>
      <bm-point-collection :points="points2" shape="BMAP_POINT_SHAPE_CIRCLE" color="yellow" size="BMAP_POINT_SIZE_SMALL"></bm-point-collection>
    </baidu-map>
  </div>
</template>
 
<script>
export default {
  name: '',
  data () {
    return {
      points: [
        {
          lat: 41.5477504900,
          lng: 122.7896471000
        },{
          lat: 42.8477504900,
          lng: 122.7896471000
        },{
          lat: 36.8477504900,
          lng: 104.7896471000
        }
      ],
      points2: [
        {
          lat: 39.5477504900,
          lng: 102.7896471000
        },{
          lat: 38.8477504900,
          lng: 122.7896471000
        },{
          lat: 41.8477504900,
          lng: 104.7896471000
        }
      ]
    }
  },
  methods: {
    handler({ BMap, map }) {
      // 设置颜色
      let mapStyle={style:"midnight"}
      map.setMapStyle(mapStyle);
    }
  }
}
</script>
 
<style scoped lang ="stylus">
 .bm-view {
  width: 100%;
  height: 400px;
}
</style>