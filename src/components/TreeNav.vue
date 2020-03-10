<template>
  <div class="TreeNav">
    <ul class="gongshi">
      <Tree :data="data4" @on-select-change="choose()" ref="tree4"></Tree>
<!--      <div class="g_title" :class="isOpen ? 'on' : 'off'" @click="isOpen = !isOpen">-->
<!--        <span class="iconfont">&#xe642;</span>-->
<!--        <p>公司名称</p>-->
<!--      </div>-->
<!--      <div v-if="isOpen">-->
<!--        <li class="park">-->
<!--          <p>园区名称</p>-->
<!--        </li>-->
<!--      </div>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      data4: [
        {
          title: 'XX 公司',
          expand: true,
          id: '1',
          children: [
            {
              title: '园区 1',
              expand: true,
              id: '1-1',
              children: [
                {
                  title: '地块 1-1',
                  id: '1-1-1'
                },
                {
                  title: '地块 1-2'
                }
              ]
            },
            {
              title: '园区 2',
              expand: true,
              children: [
                {
                  title: '园区 2-1'
                },
                {
                  title: '园区 2-2'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
@import '../assets/css/global.styl'
.TreeNav
  .gongshi
    padding 0 20px
    color #FFF
    .g_title
      display flex
      align-items center
      padding 12px
      cursor pointer
      p
        padding-left 6px
      span
        animation tr_on 0.2s
        animation-fill-mode forwards
    .off
      span
        animation tr_off 0.2s
        animation-fill-mode forwards
    .park
      display flex
      align-items center
      padding 12px
      cursor pointer
      p
        padding-left 24px
    .active
      background $green_1_Color
      color #FFF



</style>
<style>
.gongshi .ivu-tree-children span {
  color: #FFF;
}
.gongshi .ivu-tree-title:hover {
  background: rgba(0,0,0,.1) !important;
}
.gongshi .ivu-tree-title-selected, .gongshi .ivu-tree-title-selected:hover {
  background: rgba(0,0,0,.1) !important;
}
</style>
