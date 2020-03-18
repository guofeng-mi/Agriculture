<template>
  <div class="forecast_container">
    <div class="forecast__hd">
      <p>品种成熟度预测</p>
    </div>

    <div class="forecast_con_wrap">
      <Row>
        <i-col span="16">
          <!--左侧百分比-->
          <ul class="forecast_list_wrap">
            <Row>
              <i-col span="12">
                <li class="forecast_list">
                  <p>早熟</p>
                  <div class="list_poster">
                    <img src="@/assets/img/putao/1.png" alt="">
                    <div class="forecast_jd" style="width: 95%">
                      <span>95%</span>
                    </div>
                  </div>
                </li>
              </i-col>
              <i-col span="12">
                <li class="forecast_list">
                  <p>早熟</p>
                  <div class="list_poster">
                    <img src="@/assets/img/putao/2.png" alt="">
                    <div class="forecast_jd" style="width: 75%">
                      <span>75%</span>
                    </div>
                  </div>
                </li>
              </i-col>
            </Row>

            <Row style="padding-top: 12px;">
              <i-col span="12">
                <li class="forecast_list">
                  <p>早熟</p>
                  <div class="list_poster">
                    <img src="@/assets/img/putao/3.png" alt="">
                    <div class="forecast_jd" style="width: 33%">
                      <span>33%</span>
                    </div>
                  </div>
                </li>
              </i-col>
              <i-col span="12">
                <li class="forecast_list">
                  <p>早熟</p>
                  <div class="list_poster">
                    <img src="@/assets/img/putao/4.png" alt="">
                    <div class="forecast_jd" style="width: 52%">
                      <span>52%</span>
                    </div>
                  </div>
                </li>
              </i-col>
            </Row>
          </ul>
        </i-col>


        <i-col span="8">

          <!--右侧信息列表-->
          <div class="forecast_yuce">
            <h3>采收期预测：</h3>
            <p>葡萄1:09月10日</p>
            <p>葡萄1:09月10日</p>
            <p>葡萄1:09月10日</p>
            <p>葡萄1:09月10日</p>
            <p>葡萄1:09月10日</p>
            <p>葡萄1:09月10日</p>
          </div>
        </i-col>
      </Row>



    </div>




  </div>
</template>
<style lang="stylus" scoped>
.forecast_container
  padding 12px
  .forecast__hd
    p
      font-size 16px
      color #46c183

  .forecast_con_wrap
    display flex
    align-items flex-start

    .forecast_list_wrap
      /*flex 1*/
      /*display grid*/
      /*grid-template-columns 1fr 1fr*/
      /*grid-row-gap 6px*/
      /*grid-column-gap 6px*/
      padding-top 12px
      .forecast_list
        display flex
        align-items center
        P
          width 50px
        .list_poster
          position relative
          /*width 90px*/
          overflow hidden
          font-size 0
          img
            width 100%
          .forecast_jd
            position absolute
            top 0
            right 0
            height 100%
            background rgba(0,0,0,.5)
            text-align right
            span
              display block
              color #FFF
              font-size 13px
              padding 12px 12px 0 0

    .forecast_yuce
      flex 1
      padding 12px 0 0 22px
      h3
        white-space nowrap
        color #46c183
        padding-bottom 12px
      p
        white-space nowrap
        line-height 20px









</style>
