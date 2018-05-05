<template>
  <div class="inner work-form">
    <x-header title="添加作品"></x-header>
    <div class="content">
      <group>
        <x-input title="标题" placeholder="一个好的标题，让您事半功倍" v-model="formModel.title"></x-input>
        <x-textarea title="描述" autosize :rows="1" placeholder="说说您剪这个发的专业思考" v-model="formModel.decs"></x-textarea>
      </group>
      <dl>
        <dd v-for="item in imgList">
          <img v-if="item.src" :src="item.src" alt="">
          <i v-else class="icon-camera"></i>
          <input @change="handleUpload($event,item)" type="file">
        </dd>
        <dt>最多只能传8张图哟！</dt>
      </dl>
      <group>
        <selector :value-map="valueMap" title="项目：" v-model="formModel.project" placeholder="请选择项目" :options="projects"></selector>
        <selector :value-map="valueMap" title="发质：" v-model="formModel.quality" placeholder="请选择发质" :options="qualitys"></selector>
        <selector :value-map="valueMap" title="发量：" v-model="formModel.quantity" placeholder="请选择发量" :options="quantitys"></selector>
        <selector :value-map="valueMap" title="脸型：" v-model="formModel.face" placeholder="请选择脸型" :options="faces"></selector>
      </group>
    </div>
    <x-button type="primary">保存</x-button>
  </div>
</template>
<style scoped lang="less">
  @import "../../../assets/less/modules/my/work.less";
</style>
<script>
  import getBase from '../../../assets/tools/getBase64';
  export default {
    name: "work-form",
    data(){
      return {
        valueMap:['id', 'name'],
        formModel:{
          title:"",
          decs:"",
          project:"",
          quality:"",
          quantity:"",
          face:"",
        },
        projects:[
          {
            id:1,
            name:"洗剪吹"
          }
        ],
        qualitys:[
          {
            id:1,
            name:"柔软"
          },
          {
            id:2,
            name:"普通"
          },
          {
            id:3,
            name:"硬"
          }
        ],
        quantitys:[
          {
            id:1,
            name:"少"
          },
          {
            id:2,
            name:"普通"
          },{
            id:3,
            name:"多"
          }
        ],
        faces:[
          {
            id:1,
            name:"圆形"
          },
          {
            id:2,
            name:"椭圆"
          },{
            id:3,
            name:"四角"
          },{
            id:4,
            name:"逆三角"
          },{
            id:5,
            name:"菱形"
          },{
            id:6,
            name:"正三角"
          }
        ],
        imgList:[
          {
            id:1,
            src:""
          },
          {
            id:2,
            src:""
          },
          {
            id:3,
            src:""
          },
          {
            id:4,
            src:""
          },
          {
            id:5,
            src:""
          },
          {
            id:6,
            src:""
          },
          {
            id:7,
            src:""
          },
          {
            id:8,
            src:""
          }
        ]
      }
    },
    methods:{
      handleUpload(e,item){
        getBase(e,url => {
          item.src = url;
        })

      }
    }
  }
</script>
