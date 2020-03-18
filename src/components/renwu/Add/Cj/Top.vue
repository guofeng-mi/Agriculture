<!--采集清单-->
<template>
  <div class="rw_cj_container">

    <div class="cj__title">
      <p>采集清单</p>
    </div>

    <div class="cj__wrap">
      <div class="cj__item">
        <div class="item__title">采集点</div>
        <div class="item__choose__wrap">
          <Checkbox-group :model.sync="test">
            <Checkbox :value="item" v-for="item in 22" :key="item">{{item}}</Checkbox>
          </Checkbox-group>
        </div>
      </div>


      <div class="cj__text">
        <p>采集类型</p>
        <p>采集指标</p>
      </div>

      <div class="cj__item__type2">
        <div class="item__title">
          <p>果</p>
        </div>
        <div class="item__choose__wrap">
          <Checkbox-group :model.sync="test">
            <Checkbox :value="item" v-for="item in 6" :key="item">{{item}}</Checkbox>
          </Checkbox-group>
        </div>
      </div>

      <div class="cj__item__type2">
        <div class="item__title">
          <p>叶</p>
        </div>
        <div class="item__choose__wrap">
          <Checkbox-group :model.sync="test">
            <Checkbox :value="item" v-for="item in 15" :key="item">{{item}}</Checkbox>
          </Checkbox-group>
        </div>
      </div>

      <div class="cj__item__type2">
        <div class="item__title">
          <p>茎</p>
        </div>
        <div class="item__choose__wrap">
          <Checkbox-group :model.sync="test">
            <Checkbox :value="item" v-for="item in 4" :key="item">{{item}}</Checkbox>
          </Checkbox-group>
        </div>
      </div>

      <div class="cj__item__type2">
        <div class="item__title">
          <p>其他</p>
        </div>
        <div class="item__choose__wrap">
          <Checkbox-group :model.sync="test">
            <Checkbox :value="item" v-for="item in 16" :key="item">{{item}}</Checkbox>
          </Checkbox-group>
        </div>
      </div>




    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        test: ''
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .rw_cj_container
    .cj__title
      background #eff3ff
      display flex
      align-items center
      justify-content space-between
      padding 0 40px
      height 40px

    .cj__wrap
      padding 12px 40px
      .cj__item
        display flex
        .item__title
          white-space nowrap
          width 100px
          text-align left


        .item__choose__wrap
          padding-top 22px
          flex 1
          .ivu-checkbox-group
            display flex
            flex-wrap wrap
            .ivu-checkbox-group-item
              padding 0 12px 12px 0

      .cj__text
        padding 12px 0
        text-align left
        display flex
        p
          width 100px
          text-align left
      .cj__item__type2
        display flex
        .item__title
          white-space nowrap
          width 100px
          text-align left
          padding-left 14px
          opacity 0.6

        .item__choose__wrap
          flex 1
          .ivu-checkbox-group
            display flex
            flex-wrap wrap
            .ivu-checkbox-group-item
              padding 0 12px 12px 0

</style>
