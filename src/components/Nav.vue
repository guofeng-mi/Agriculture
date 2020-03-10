<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-01-04 22:26:31
 * @LastEditTime : 2020-01-04 22:30:25
 -->
<template>
  <div class="nav_wrap">
    <Tree :data="data4" @on-select-change="choose()" ref="tree4"></Tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data4: [
        {
          title: 'XX 公司',
          expand: true,
          action: 1,
          id: '1',
          children: [
            {
              title: '园区 1',
              action: 2,
              expand: true,
              id: '1-1',
              children: [
                {
                  title: '地块 1-1',
                  action: 3,
                  id: '1-1-1'
                },
                {
                  action: 3,
                  id: '1-1-2',
                  title: '地块 1-2'
                }
              ]
            },
            {
              title: '园区 2',
              expand: true,
              action: 2,
              children: [
                {
                  action: 3,
                  id: '1-2-1',
                  title: '园区 2-1'
                },
                {
                  action: 3,
                  id: '1-2-2',
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
    choose(){
      let val = this.$refs.tree4.getSelectedNodes();
      console.log('选择了',val[0].action)
      switch (val[0].action) {
        case 1:
          console.log('跳转到公司界面');
          this.$router.push({name: 'home'})
          break;
        case 2:
          this.$router.push({name: 'park'})
          console.log('跳转到园区界面');
          break;
        case 3:
          this.$router.push({path: '/dikuai/1'});
          this.$store.commit('changeDikuaiShow', 'false');
          this.$store.commit('changeHdShow', 'Search_1');
          console.log('跳转到地块界面');
          break;
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.nav_wrap
  width 300px
  height calc(100vh - 70px)
  background #FFF
  padding 20px
  box-sizing border-box
</style>
<style>
.ivu-tree-title {
  width: 100%;
}
.ivu-tree-children span {
  line-height: 2em;
}



</style>
