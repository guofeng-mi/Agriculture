<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-02-03 14:08:01
 * @LastEditTime : 2020-02-03 15:06:37
 -->
<template>
  <div class="xunyuan_container">
      <div class="left">
          <ul class="list">
              <li class="item" v-for="item in leftList" :key="item">
                  <div class="title">
                      <div class="time">
                          <img src="@/assets/img/time.png" alt="">
                          <span>2019-06-20</span>
                      </div>
                      <div class="next">
                          <img src="@/assets/img/right.png" alt="">
                      </div>
                  </div>
                  <div class="scro">
                      <ul class="poster_wrap">
                          <li class="poster" v-for="item in leftList" :key="item">
                              <img src="@/assets/img/map_2.jpg" alt="">
                          </li>
                      </ul>
                  </div>
              </li>
          </ul>
      </div>
      <div class="right">
          <div class="r_title">
            <div class="r_time">
                <img src="@/assets/img/time.png"/>
                <span>2019-02-02</span>
            </div>
            <div class="r_next">
                <img src="@/assets/img/right.png" />
            </div>
          </div>
          <div class="map">
              <img src="@/assets/img/map_2.jpg" alt="">
          </div>
          <ul class="r_list">
              <li class="r_item">
                  <img src="@/assets/img/map_2.jpg" alt="">
                  <p>河池市都安瑶族自治县</p>
              </li>
          </ul>



      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            leftList: [1,2,3,4,5]
        }
    }
}
</script>
<style lang="stylus" scoped>
.xunyuan_container
    width 100%
    display flex
    justify-content space-between
    background #FFF
    .left 
        width 100%
        .list
            width 100% 
            .item
                padding 20px 32px
                background #FFF
                width 100%
                .title 
                    display flex
                    justify-content space-between
                    align-items center
                    img 
                        width 12px
                        height 20px    
                    .time 
                        display flex
                        align-items center
                        img 
                            width 20px
                            margin-right 8px
                .scro 
                    padding-top 18px
                    li
                        display inline-block
                        img 
                            height 60px
                            margin-right 12px
    .right
        width 600px
        border-left 1px solid #EEE
        .r_title
            display flex
            justify-content space-between
            align-items center
            padding 12px
            .r_time
                display flex
                align-items center
                img 
                    margin-right 8px
        .map
            width 100%
            img 
                width 100%
        .r_list
            .r_item
                padding 12px
                display flex
                align-items flex-start
                img 
                    width 120px
                    margin-right 12px
                

</style>