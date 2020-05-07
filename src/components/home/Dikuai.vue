<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-16 11:20:34
 -->
<template>
  <div class="dikuai_container">
    <div class="title">
      <img src="@/assets/img/home/dikuai.png" >
      <p>地块1</p>
      <a href="javascript:" @click="changeLimit">详情</a>
    </div>

    <ul class="list">
      <li>
        <p>地块</p>
        <span>1</span>
      </li>
      <li>
        <p>设备</p>
        <span>4</span>
      </li>
      <li>
        <p>产品</p>
        <span>5</span>
      </li>
      <li>
        <p>农资</p>
        <span>5</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        movieList: [
          {
            name: 'The Shawshank Redemption',
            url: 'https://movie.douban.com/subject/1292052/',
            rate: 9.6
          }
        ],
        randomMovieList: []
      }
    },
    methods: {
      changeLimit () {
        this.$Modal.confirm({
          title: '提示',
          content: '<p>是否跳转到地块XXX</p>',
          onOk: () => {
            this.$router.push({path: '/dikuai/1'})
          },
          onCancel: () => {
            console.log("取消跳转")
          }
        });
      }
    }
  }
</script>
<style lang="stylus" scoped>
.dikuai_container
  width 180px
  display inline-block
  padding 12px
  box-shadow 0 0 6px 2px rgba(0,0,0,.05)
  border-radius 6px

  .title 
    display flex
    justify-content space-between
    align-items center
    white-space nowrap
    border-bottom 1px solid #EEE
    padding-bottom 12px
    img 
      height 16px
    p 
      flex 1
      padding-left 4px
  
  ul 
    padding-top 6px
    li
      display flex
      justify-content space-between
      align-items center
      padding 6px 0
    

</style>