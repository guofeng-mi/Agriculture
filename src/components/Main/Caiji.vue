<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-11 16:10:46
 -->
<template>
  <div class="caiji_container">
    <div class="title">
      <p>采集数据统计</p>
      <span>56564765</span>
    </div>

    <div class="table-hd">
      <p>地区</p>
      <p>数据量</p>
      <p>数据条</p>
    </div>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <p>{{item.city}}</p>
        <p>{{item.num}}</p>
        <p>条</p>
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            city: '北京市',
            num: '541545'
          },{
            city: '天津市',
            num: '52454'
          },{
            city: '石家庄市',
            num: '415454'
          },{
            city: '保定市',
            num: '54589452415'
          },{
            city: '太原市',
            num: '54545454'
          },{
            city: '赤峰市',
            num: '458531545'
          },{
            city: '沈阳市',
            num: '166354786'
          },{
            city: '朝阳市',
            num: '5471464845'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
.caiji_container
  padding 24px 20px


  .title 
    text-align center
    padding 18px 0
    border-bottom 1px solid transparent
    border-image:linear-gradient(to right,rgba(66,98,231,0.05), rgba(1,198,246, 0.6), rgba(66,98,231,0.05)) 1 10;
    p 
      font-size 16px
      padding-bottom 12px
    span 
      font-size 14px


  .table-hd
    display flex
    justify-content space-between
    padding 22px 0
    p 
      font-size 14px


  ul 
    li 
      display flex
      justify-content space-between
      align-items center
      color rgba(255,255,255,.8)
      box-shadow 0 0 6px rgba(255,255,255,.1)
      margin-bottom 12px
      border-radius 20px
      padding 3px 12px
      cursor pointer
      background linear-gradient(to right,rgba(0, 45, 100, 1), rgba(0, 92, 206, 1))
      &:hover
        background linear-gradient(to right, rgba(65, 99,231, 1), rgba(0, 197, 245, 1))

</style>
