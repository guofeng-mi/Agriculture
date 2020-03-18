<template>
  <div class="wuhouqi_container">
    <div class="wuhouqi__hd">
      <p>葡萄当前物候期</p>
      <span>2020-03-13</span>
    </div>

    <ul class="wuhouqi__list__wrap">
      <li class="wuhouqi__list">
        <p>白葡萄</p>
        <img src="@/assets/img/wuhouqi/_0000_1-1.png" alt="">
        <img src="@/assets/img/wuhouqi/_0001_1-2.png" alt="">
        <img src="@/assets/img/wuhouqi/_0002_1-3.png" alt="">
        <img src="@/assets/img/wuhouqi/_0003_1-4.png" alt="">
        <img src="@/assets/img/wuhouqi/_0004_1-5.png" alt="">
        <img src="@/assets/img/wuhouqi/_0005_1-6.png" alt="">
        <img src="@/assets/img/wuhouqi/_0006_1-7.png" alt="">
        <img src="@/assets/img/wuhouqi/_0007_1-8.png" alt="">
        <span>休眠期</span>
      </li>
      <li class="wuhouqi__list">
        <p>红葡萄</p>
        <img src="@/assets/img/wuhouqi/_0008_2-1.png" alt="">
        <img src="@/assets/img/wuhouqi/_0009_2-2.png" alt="">
        <img src="@/assets/img/wuhouqi/_0010_2-3.png" alt="">
        <img src="@/assets/img/wuhouqi/_0011_2-4.png" alt="">
        <img src="@/assets/img/wuhouqi/_0012_2-5.png" alt="">
        <img src="@/assets/img/wuhouqi/_0013_2-6.png" alt="">
        <img src="@/assets/img/wuhouqi/_0014_2-7.png" alt="">
        <img src="@/assets/img/wuhouqi/_0015_2-8.png" alt="">
        <span>休眠期</span>
      </li>
    </ul>

  </div>
</template>
<style lang="stylus" scoped>
.wuhouqi_container
  padding 12px
  .wuhouqi__hd
    display flex
    justify-content space-between
    align-items center
    p
      font-size 16px
      color #46c183
    span
      font-size 12px
  .wuhouqi__list__wrap
    .wuhouqi__list
      display flex
      align-items center
      justify-content space-between
      height 100px
      p
        color #46c183


</style>
