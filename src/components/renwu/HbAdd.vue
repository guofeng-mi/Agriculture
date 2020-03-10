<!--任务汇报-->
<template>
  <div id="ElementWind" class="dragWrap"  >
    <div class="hd_drag" @mousedown="drag">
      <P>工作汇报</P>
      <span class="iconfont" @click="close()">&#xe600;</span>
    </div>
    <div class="dragBody">
      <div class="item">
        <p class="l">农事类型 <i>*</i> </p>
        <div class="r">
            <Select v-model="status" style="width: 900px">
                <Option v-for="item in statusList" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
        </div>
      </div>
      <div class="item">
        <p class="l">开始时间 <i>*</i> </p>
        <div class="r">
          <DatePicker type="date" placeholder="选择时间"  style="width: 900px"></DatePicker>
        </div>
      </div>
      <div class="item">
        <p class="l">结束时间 <i>*</i> </p>
        <div class="r">
          <DatePicker type="date" placeholder="选择时间" style="width: 900px"></DatePicker>
        </div>
      </div>
      <div class="item">
        <p class="l">用工量（人天） <i>*</i> </p>
        <div class="r">
          <InputNumber :max="10" :min="1" v-model="test" style="width: 900px;"></InputNumber>
        </div>
      </div>
      <div class="item">
        <p class="l">内容 <i>*</i> </p>
        <div class="r">
          <Input v-model="value17" maxlength="100" show-word-limit type="textarea" placeholder="" style="width: 900px" />
        </div>
      </div>
      <!-- 农事汇报 -->
      <div class="item" v-if="status == 1">
        <p class="l">拍摄图片<i>*</i> </p>
        <div class="r upload_img" style="width: 900px; text-align: left;">

          <div class="demo-upload-list" v-for="item in uploadList" :key="item">
            <template v-if="item.status === 'finished'">
              <img :src="item.url">
              <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
              </div>
            </template>
            <template v-else>
              <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
          </div>
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

      <!-- 喷药记录 -->
      <div class="item penyao" v-if="status == 2">
        <p class="l">喷药记录<i>*</i> </p>
        <div class="r">
          <div class="hd">
            <p>农药名称</p>
            <p>用量</p>
            <p>农药品牌</p>
            <p>供应商</p>
            <p>操作</p>
          </div>
          <div class="tb">
            <div class="th">
              <div class="tr">
                <Select v-model="test" style="width:160px">
                  <Option value="1">农药1</Option>
                </Select>
              </div>

              <div class="tr">
                <InputNumber :max="10" :min="1" size="small" style="width:160px" v-model="test"></InputNumber>
              </div>

              <div class="tr">
                <Input v-model="test" style="width: 160px" />
              </div>

              <div class="tr">
                <Input v-model="test" style="width: 160px" />
              </div>

              <div class="tr">
                <Button type="error" shape="circle" icon="ios-trash"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 采集记录 -->
      <div class="item penyao" v-if="status == 3">
        <p class="l">采集记录<i>*</i> </p>
        <div class="r">
          <div class="hd">
            <p>采集位置</p>
            <p>采集对象</p>
            <p>单位</p>
            <p>采集时间</p>
            <p>操作</p>
          </div>
          <div class="tb">
            <div class="th">
              <div class="tr">
                <Select v-model="test" style="width:160px">
                  <Option value="1">农药1</Option>
                </Select>
              </div>

              <div class="tr">
                <InputNumber :max="10" :min="1" size="small" style="width:160px" v-model="test"></InputNumber>
              </div>

              <div class="tr">
                <Input v-model="test" style="width: 160px" />
              </div>

              <div class="tr">
                <Input v-model="test" style="width: 160px" />
              </div>

              <div class="tr">
                <Button type="error" shape="circle" icon="ios-trash"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="btn_wrap">
        <i-button>取消</i-button>
        <i-button type="success" @click="submit">提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
export default {
   data(){
      return {
        isOpenWind :true,  //点击X关闭窗口
        test: '',
        status: 2,
        statusList: [
          {
            id: 1,
            name: '农事汇报'
          },{
            id: 2,
            name: '施肥施药汇报'
          },{
            id: 3,
            name: '采集汇报'
          },{
            id: 4,
            name: '问题汇报'
          },{
            id: 5,
            name: '病虫害汇报'
          }
        ],

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
    methods:{
      close() {
        this.$emit('close', 'close')
      },
      submit () {
        console.log(this.status)
      },
      changeTableStatus (status) {
        this.$store.commit('changeTableStatus', status);
      },
     //鼠标按下拖拽
     drag(e){
        // console.log(e)
        var oDiv = e.path[1];
        var disX = e.clientX - oDiv.offsetLeft;
        var disY = e.clientY - oDiv.offsetTop;
        document.onmousemove = function(e){
          e.preventDefault();
          var l = e.clientX - disX;
          var t = e.clientY - disY;
          oDiv.style.left = l + "px"
          oDiv.style.top = t + "px"
        }
        document.onmouseup = function(){
          document.onmousemove = null;
          document.onmouseup = null;
        }
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

<style lang="stylus" scoped>
@import '../../assets/css/global.styl'
.dragWrap
  text-align center
  width 1200px
  position fixed
  left 50%
  top 50%
  transform translate(-50%, -50%)
  z-index 999
  box-shadow 2px 2px 6px rgba(0,0,0,.1), -2px -2px 6px rgba(0,0,0,.1)
  background #EFF3FF
  .hd_drag
    background #5D7CF1
    cursor move
    display flex
    color #FFF
    justify-content space-between
    align-items center
    padding 12px
    font-size 14px
    .iconfont
      cursor pointer
    p
      cursor text
  .dragBody
    padding-top 32px
    width 1200px
    .item
      display flex
      align-items center
      justify-content center
      padding 8px 0
      .l
        display flex
        width 150px
        align-content center
        i
          color $minColor
          padding-left 2px
      .r
        .choose
          width 900px
          background #FFF
          display flex
          align-items center
          justify-content space-between
          padding 6px 12px
          color rgba(0,0,0,.6)
          border-radius 3px
          cursor pointer
          span
            font-size 8px
        input
          width 200px
          background #FFF
          border none
          line-height 16px
          outline none
          padding 4px
    .penyao
      .r
        padding 20px
        background #FFF
        width 900px
        border-radius 4px
        .hd
          display flex
          justify-content space-between
          p
            text-align left
            flex 3
            &:last-child
              flex 1
        .tb
          .th
            padding-top 22px
            display flex
            justify-content space-between
            .tr
              flex 3
              text-align left
              &:last-child
                flex 1



    .btn_wrap
      display flex
      justify-content space-between
      padding 60px 100px 60px 100px
      button
        padding 3px 0
        width 135px
        border-radius 2px
        border none
</style>

<style>
.demo-upload-list{
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
  margin-right: 4px;
}
.demo-upload-list img{
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover{
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
  display: block;
}
.demo-upload-list-cover i{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
