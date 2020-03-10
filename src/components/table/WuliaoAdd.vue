<template>
  <div id="ElementWind" class="dragWrap"  >
    <div class="hd_drag" @mousedown="drag">
      <P>物料信息</P>
      <span class="iconfont" @click="changeTableStatus('wlgl')">&#xe600;</span>
    </div>
    <div class="dragBody">
      <div class="item">
        <p class="l">名称<i>*</i></p>
        <div class="r">
          <input type="text">
        </div>
      </div>

      <div class="item">
        <p class="l">类型<i>*</i></p>
        <div class="r">
          <div class="sel">
            <Radio-group v-model="typeVal">
                <i-col span="6" v-for="item in typeData" :key="item.id">
                  <Radio :label="item.id">
                    <span>{{item.name}}</span>
                  </Radio>
                </i-col>
            </Radio-group>
          </div>
        </div>
      </div>

      <div class="item">
        <p class="l">剂型</p>
        <div class="r">
          <div class="sel">
            <Radio-group v-model="typeVal">
                <i-col span="6" v-for="item in typeData" :key="item.id">
                  <Radio :label="item.id">
                    <span>{{item.name}}</span>
                  </Radio>
                </i-col>
            </Radio-group>
          </div>
        </div>
      </div>

      <div class="item">
        <p class="l">数量单位 <i>*</i></p>
        <div class="r">
          <div class="sel">
            <Radio-group v-model="dwVal">
                <i-col span="6" v-for="item in dwData" :key="item.id">
                  <Radio :label="item.id">
                    <span>{{item.name}}</span>
                  </Radio>
                </i-col>
            </Radio-group>
          </div>
        </div>
      </div>

      <div class="item">
        <p class="l">所属园区 <i>*</i> </p>
        <div class="r">
          <Dropdown>
            <div class="choose">
                <i class="left">请选择园区</i>
                <span class="iconfont">&#xe642;</span>
            </div>
            <Dropdown-menu slot="list">
                <Dropdown-item>1</Dropdown-item>
            </Dropdown-menu>
        </Dropdown>
        </div>
      </div>

      <div class="item">
        <p class="l">备注</p>
        <div class="r">
          <input type="text" placeholder="物料备注">
        </div>
      </div>

      <div class="item">
        <p class="l">有效成分表</p>
        <div class="r">
          <div class="tabl">
            <div class="tb_hd">
              <i-col span="8">
                <span>有效成分</span>
              </i-col>
              <i-col span="7">
                <span>含量</span>
              </i-col>
              <i-col span="6">
                <span>单位</span>
              </i-col>
              <i-col span="3">
                <span>操作</span>
              </i-col>
            </div>
            <div class="tb_bd">
              <div class="item_row">
                    <i-col span="8">
                      <Dropdown>
                        <div class="sel_i sel_i_1">
                            <i class="left">请选择成分</i>
                            <span class="iconfont">&#xe642;</span>
                        </div>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>1</Dropdown-item>
                        </Dropdown-menu>
                      </Dropdown>
                    </i-col>
                    <i-col span="7">
                      <Dropdown>
                        <div class="sel_i sel_i_2">
                            <i class="left">含量</i>
                            <span class="iconfont">&#xe642;</span>
                        </div>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>1</Dropdown-item>
                        </Dropdown-menu>
                      </Dropdown>
                    </i-col>
                    <i-col span="6">
                      <Dropdown>
                        <div class="sel_i sel_i_3">
                            <i class="left">%</i>
                            <span class="iconfont">&#xe642;</span>
                        </div>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>1</Dropdown-item>
                        </Dropdown-menu>
                      </Dropdown>
                    </i-col>
                    <i-col span="3">
                      <img src="@/assets/img/del.png" alt="">
                    </i-col>
              </div>
            </div>
          </div>
          <div class="add">
            <img src="@/assets/img/add_2.png" alt="">
            <p>添加有效成分</p>
          </div>
        </div>
      </div>
      
      <div class="btn_wrap">
        <i-button  @click="changeTableStatus('wlgl')">取消</i-button>
        <i-button type="success" @click="changeTableStatus('wlgl')">提交</i-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
export default {
   data(){
      return {
        typeVal: '',
        typeData: [
          {
            id: '1',
            name: '农药'
          },{
            id: '2',
            name: '肥料'
          },{
            id: '3',
            name: '叶面肥'
          },{
            id: '4',
            name: '种子'
          },{
            id: '5',
            name: '饲料'
          },{
            id: '6',
            name: '疫苗'
          },{
            id: '7',
            name: '其他'
          }
        ],
        dwVal: '',
        dwData: [
          {
            id: 1,
            name: '毫克'
          },{
            id: 2,
            name: '克'
          },{
            id: 3,
            name: '千克'
          },{
            id: 4,
            name: '吨'
          }
        ]
      }
   },
    computed: {
        ...mapState({
            tableStatus: state => state.tableStatus
        })
    },
   methods:{
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
     }
   }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/global.styl'
.dragWrap
  text-align center
  width 800px
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  background #fff
  box-shadow 2px 2px 6px rgba(0,0,0,.1), -2px -2px 6px rgba(0,0,0,.1)
  background #EFF3FF
  padding-bottom 40px
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
    width 800px
    .item 
      display flex
      align-items center
      justify-content center
      padding 8px 0
      .l 
        display flex
        width 100px
        align-content center
        i 
          color $minColor
          padding-left 2px
      .r 
        .choose
          width 500px
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
          width 500px
          background #FFF
          border none
          line-height 16px
          outline none
          padding 4px
        .sel
          width 500px
          .ivu-radio-group
            width 100%
            .ivu-col-span-6
              display flex
              padding 3px 0
        .tabl
          width 500px
          background #FFF
          padding 12px
          border-radius 3px
          .tb_hd
            height 10px
            opacity .6
            .ivu-col
              text-align left
          .tb_bd
            .item_row
              height 28px
              padding-top 12px
              .ivu-col
                display flex
                img 
                  cursor pointer
              .sel_i
                font-size 12px
                background $bgColor_1
                display flex
                justify-content space-between
                padding 4px 6px
                span 
                  font-size 10px
              .sel_i_1
                width 140px
              .sel_i_2
                width 100px
              .sel_i_3
                width 100px
        .add
          display flex
          align-items center
          padding-top 12px
          cursor pointer
          width 120px
          img 
            margin-right 6px
            width 16px
                

    .btn_wrap
      display flex
      justify-content space-between
      padding 60px 100px 0 100px
      button 
        padding 3px 0
        width 135px
        border-radius 2px
        border none
</style>
 