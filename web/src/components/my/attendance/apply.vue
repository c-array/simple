<template>
  <div class="inner apply">
    <x-header title="考勤申请"></x-header>
    <ul class="step">
      <li :class="{active:vm.step == item.id}" v-for="(item,index) in steps">
        <i v-if="!item.status" :class="'icon ' + item.icon"></i>
        <i v-else class="icon icon-success"></i>
        <p>{{item.name}}</p>
        <i v-if="index < 2" class="arrow icon-arrow1"></i>
      </li>
    </ul>
    <group v-show="vm.step == 1">
      <cell @click.native="handleType(item)" v-for="item in list" :key="item.id" :title="item.name" is-link :value="item.desc"></cell>
    </group>
    <group v-show="vm.step == 2" title="最小休假天数为0.5天" title-color="#ff004d">
      <cell title="开始时间" @click.native="showPopup('startDate')" :value="formModel.startDate"></cell>
      <cell title="结束时间" @click.native="showPopup('endDate')" :value="formModel.endDate"></cell>
      <cell title="共计天数" value="0天"></cell>
    </group>
    <group v-show="vm.step == 3">
      <cell title="门店" value="武汉理工南湖工作室"></cell>
      <cell title="类型" value="轮休"></cell>
      <cell title="开始" value="2018-05-08 00:00 周四"></cell>
      <cell title="结束" value="2018-05-08 23:00 周四"></cell>
      <cell title="总计" value="1.0天"></cell>
      <x-textarea title="*填写备注" :max="20" placeholder="请详细说明您本次请假/异常申请的原因" v-model="remark"></x-textarea>
    </group>
    <div v-transfer-dom>
      <popup v-model="vm.isPopup">
        <popup-header
          left-text="取消"
          right-text="确定"
          title="开始时间"
          :show-bottom-border="false"
          @on-click-left="vm.isPopup = false"
          @on-click-right="setDate"></popup-header>
        <datetime-view format="YYYY-MM-DD HH:mm" v-model="vm.date"></datetime-view>
      </popup>
    </div>
  </div>
</template>
<style scoped lang="less">
  @import "../../../assets/less/modules/my/attendance.less";
</style>
<script>
  import {Step, StepItem,TransferDom} from 'vux';
  import moment from 'moment';
  let weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  console.log(moment('2018-05-08 00:00').add(moment('2018-05-09 23:00')).days());
  export default {
    name: "apply",
    data(){
      return {
        vm:{
          isPopup:false,
          dateKey:"",
          date:moment(new Date).format('YYYY-MM-DD HH:mm'),
          step:1,
        },
        steps:[
          {
            id:1,
            name:"选择类型",
            icon:"icon-type",
            status:false
          },
          {
            id:2,
            name:"选择时间",
            icon:"icon-hourglass",
            status:false
          },
          {
            id:3,
            name:"提交申请",
            icon:"icon-submit",
            status:false
          }
        ],
        list:[
          {
            id:1,
            name:"轮休",
            desc:"本月还剩2.0天"
          },
          {
            id:2,
            name:"事假",
            desc:"个人事情处理"
          },{
            id:3,
            name:"公事",
            desc:"公事相关、门店相关"
          },{
            id:4,
            name:"考勤异常",
            desc:"未上牌、忘打卡"
          },{
            id:5,
            name:"病假",
            desc:"需要病假条"
          }
        ],
        remark:"",
        formModel:{
          type:"",
          startDate:"请选择",
          endDate:"请选择",
        }
      }
    },
    components: {
      Step,
      StepItem
    },
    directives: {
      TransferDom
    },
    methods:{
      handleType(item){
        this.steps[0].status = true;
        this.formModel.type = item.id;
        this.vm.step = 2;
      },
      showPopup(key){
        this.vm.isPopup = true;
        this.vm.dateKey = key;
      },
      setDate(){
        this.formModel[this.vm.dateKey] = this.vm.date + " " + weeks[moment(this.vm.date).day()];
        this.vm.isPopup = false;
      }
    }
  }
</script>
