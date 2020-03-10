<!--
 * @Descripttion: 加工管理 修改/添加
 * @version:
 * @Date: 2020-02-11 16:03:32
 * @LastEditTime: 2020-02-17 15:12:11
 -->
<template>
  <div class="rz_edit_container">
    <div class="rz_title">
      <p>编辑加工记录</p>
      <Icon type="md-close" @click="close()"/>
    </div>

    <div class="item">
      <p class="title">所属地块 <i>*</i></p>
      <Input v-model="test" placeholder="Enter something..."  />
    </div>

    <div class="item">
      <p class="title">产品名称 <i>*</i></p>
      <Input v-model="test" placeholder="Enter something..."  />
    </div>

    <div class="item">
      <p class="title">产品批次 <i>*</i></p>
      <Input v-model="test" placeholder="Enter something..."  />
    </div>


    <div class="item">
      <p class="title">加工时间 <i>*</i></p>
      <DatePicker type="date" placeholder="Select date"></DatePicker>
    </div>

    <div class="item">
      <p class="title">加工内容<i>*</i></p>
      <Input v-model="test" placeholder="Enter something..."  />
    </div>

    <div class="item">
      <p class="title">操作员<i>*</i></p>
      <Input v-model="test" placeholder="Enter something..."  />
    </div>


    <div class="uoLoad_wrap">
      <div class="title">证书图片</div>
      <div class="pic_wrap">
        <Upload
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :before-upload="handleBeforeUpload"
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
        <Modal title="View Image" v-model="visible">
          <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
        </Modal>
      </div>
    </div>

    <div class="btn_wrapper">
      <Button type="dashed">取消</Button>
      <Button type="success">确定</Button>
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
      }
    },
    computed: {
      ...mapState({
        tableStatus: state => state.tableStatus
      })
    },
    methods: {
      close() {
        this.$emit('close', 'close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/css/global.styl'
  .rz_edit_container
    width 900px
    height 70vh
    box-shadow $inp_shadow
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background #FFF
    z-index 10
    padding 20px
    .rz_title
      display flex
      align-items center
      justify-content space-between
      i
        font-size 22px
        cursor pointer
    .item
      padding 12px 0
      display flex
      align-items center
      .title
        width 120px
      .ivu-input-wrapper
        flex 1
      .ivu-select
        flex 1
      .ivu-date-picker
        flex 1
    .uoLoad_wrap
      display flex
      align-items flex-start
      .title
        width 120px
    .btn_wrapper
      padding-top 40px
      display flex
      justify-content center
      button
        width 120px
        margin 0 40px
</style>
