<template>
  <div class="dikuai_container">
    <Card style="width:180px">
      <p slot="title">
        <Icon type="ios-grid-outline"></Icon>
        地块1
      </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Icon type="ios-loop-strong"></Icon>
        详情
      </a>
      <ul>
        <li>
          <div class="row">
            <p>任务</p>
            <span>5</span>
          </div>
          <div class="row">
            <p>巡园记录</p>
            <span>5</span>
          </div>
          <div class="row">
            <p>工作汇报</p>
            <span>5</span>
          </div>
          <div class="row">
            <p>溯源管理</p>
            <span>5</span>
          </div>
        </li>
      </ul>
    </Card>
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
<style>
  .dikuai_container .ivu-card-extra {
    top: 18px !important;
  }
  .dikuai_container .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 26px;
  }
</style>
