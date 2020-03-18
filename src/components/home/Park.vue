<template>
  <div class="park_container">
    <Card style="width:180px">
      <p slot="title">
        <Icon type="ios-grid-outline"></Icon>
        园区1
      </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Icon type="ios-loop-strong"></Icon>
        详情
      </a>
      <ul>
        <li>
          <div class="row">
            <p>地块</p>
            <span>5</span>
          </div>
          <div class="row">
            <p>设备</p>
            <span>5</span>
          </div>
          <div class="row">
            <p>产品</p>
            <span>5</span>
          </div>
          <div class="row">
            <p>农资</p>
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
          content: '<p>是否跳转到园区XXX</p>',
          onOk: () => {
            this.$router.push({path: '/park/1'})
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
.park_container .ivu-card-extra {
  top: 18px !important;
}
.park_container .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
}
</style>
