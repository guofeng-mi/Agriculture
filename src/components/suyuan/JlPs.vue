<!--
 * @Descripttion: 配送记录
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime : 2020-02-12 15:14:27
 -->
<template>
  <div class="jljc_bg">
    <div class="jljc">
        <div class="hd">
          <p>配送记录</p>
          <Icon type="md-close" @click="close()"/>
        </div>
      <div class="choose">
        <div class="item">
          <p>配送时间</p>
          <DatePicker type="date" placeholder="Select date" style="width: 100%"></DatePicker>
        </div>
      </div>
      <div class="choose">
        <div class="item">
          <p>配送地址</p>
            <Input v-model="test" type="textarea" placeholder="Enter something..." />
        </div>
      </div>

      <div class="choose">
        <div class="item">
          <p>配送员</p>
            <Input v-model="test" type="input" placeholder="Enter something..." />
        </div>
      </div>

      <div class="btn">
        <Button>取消</Button>
        <Button type="success">确定</Button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: '',
  components: {

  },
  data () {
    return {
      test: '',
      defaultList: [
        {
          'name': 'a42bdcc1178e62b4694c830f028db5c0',
          'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
        },
        {
          'name': 'bc7521e033abdd1e92222d733590f104',
          'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
        }
      ],
      imgName: '',
      visible: false,
      uploadList: []
    }
  },
  computed: {
    ...mapState({
        tableStatus: state => state.tableStatus
    })
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList;
  },
  methods: {
    close() {
      this.$emit('close', 'close')
    },
    handleView (name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      });
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: 'Up to five pictures can be uploaded.'
        });
      }
      return check;
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/global.styl'
.jljc_bg
  position fixed
  left 0
  top 0
  width 100%
  height 100vh
  padding 20px
  z-index 100
  .jljc
    width 100%
    height calc(100vh - 40px)
    background #FFF
    .hd
      padding 20px
      display flex
      justify-content space-between
    .choose
      display flex
      padding 20px 60px
      .item
        display flex
        align-items center
        flex 1
        p
          width 200px
    .line
      display flex
      justify-content space-between
      background $btnColor
      padding 12px 60px
      .add
        display flex
        cursor pointer
    .select_wrap
      padding 20px 60px
      .select_hd
        display flex
        p
          flex 1
      .item
        display flex
        align-items center
        .td
          flex 1
          padding 20px 20px 20px 0
          i
            font-size 22px
    .pic
      padding 20px 60px
    .btn
      text-align center
      padding-top 20px
      button
        padding 2px 0
        width 150px
        border-radius 0
        margin 0 20px







</style>
