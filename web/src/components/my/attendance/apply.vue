<script src="../../../main.js"></script>
<template>
  <div class="inner apply">
    <x-header title="考勤申请"></x-header>
    <ul class="step" v-show="vm.step != 4">
      <li :class="{active:vm.step == item.id}" v-for="(item,index) in steps">
        <i v-if="!item.status" :class="'icon ' + item.icon"></i>
        <i v-else class="icon icon-success"></i>
        <p>{{item.name}}</p>
        <i v-if="index < 2" class="arrow icon-arrow1"></i>
      </li>
    </ul>
    <div class="step-main" v-show="vm.step == 1">
      <group>
        <cell @click.native="handleType(item)" v-for="item in list" :key="item.id" :title="item.name" is-link
              :value="item.desc"></cell>
      </group>
    </div>
    <div v-show="vm.step == 2" class="step-main">
      <group title="最小休假天数为0.5天" title-color="#ff004d">
        <cell title="开始时间" @click.native="showPopup('startDate')" :value="formModel.startDate"></cell>
        <cell title="结束时间" @click.native="showPopup('endDate')" :value="formModel.endDate"></cell>
        <cell title="共计天数" :value="$dateDiff(this.formModel.startDate,this.formModel.endDate) + '天'"></cell>
      </group>
      <x-button @click.native="handleNext" :disabled="!vm.isNext" type="primary" class="next">下一步</x-button>
    </div>
    <div class="step-main" v-show="vm.step == 3">
      <group>
        <cell title="门店" value="武汉理工南湖工作室"></cell>
        <cell title="类型" value="轮休"></cell>
        <cell title="开始" value="2018-05-08 00:00 周四"></cell>
        <cell title="结束" value="2018-05-08 23:00 周四"></cell>
        <cell title="总计" value="1.0天"></cell>
        <x-textarea title="*填写备注" :max="20" placeholder="请详细说明您本次请假/异常申请的原因" v-model="remark"></x-textarea>
      </group>
      <x-button @click.native="handleSubmit" :disabled="!vm.isNext" type="warn" class="submit">提交</x-button>
    </div>
    <msg v-show="vm.step == 4" title="提交成功" description="当前考勤申请已提交，请等待审核结果！">
      <template slot="buttons">
        <x-button :link="{path:'/my/attendance'}" plain type="primary">查看申请</x-button>
      </template>
    </msg>
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
  import {Step, StepItem, TransferDom} from 'vux';

  let weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  export default {
    name: "apply",
    data() {
      return {
        vm: {
          isPopup: false,
          dateKey: "",
          date: this.$dateFormat(new Date(), 'YYYY-MM-DD HH:mm'),
          step: 1,
          isNext:false
        },
        steps: [
          {
            id: 1,
            name: "选择类型",
            icon: "icon-type",
            status: false
          },
          {
            id: 2,
            name: "选择时间",
            icon: "icon-hourglass",
            status: false
          },
          {
            id: 3,
            name: "提交申请",
            icon: "icon-submit",
            status: false
          }
        ],
        list: [
          {
            id: 1,
            name: "轮休",
            desc: "本月还剩2.0天"
          },
          {
            id: 2,
            name: "事假",
            desc: "个人事情处理"
          }, {
            id: 3,
            name: "公事",
            desc: "公事相关、门店相关"
          }, {
            id: 4,
            name: "考勤异常",
            desc: "未上牌、忘打卡"
          }, {
            id: 5,
            name: "病假",
            desc: "需要病假条"
          }
        ],
        remark: "",
        formModel: {
          type: "",
          startDate: "请选择",
          endDate: "请选择",
          day: ""
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
    methods: {
      handleType(item) {
        this.steps[0].status = true;
        this.formModel.type = item.id;
        this.vm.step = 2;
      },
      showPopup(key) {
        this.vm.isPopup = true;
        this.vm.dateKey = key;
      },
      setDate() {
        this.formModel[this.vm.dateKey] = this.vm.date;
        if(this.formModel.startDate.indexOf('-') > 0 && this.formModel.endDate.indexOf('-') > 0){ //判断是否选择了开始时间
          this.vm.isNext = true;
        }else{
          this.vm.isNext = false;
        }
        this.vm.isPopup = false;
      },
      handleNext(){
        this.vm.step = 3;
      },
      handleSubmit(){
        this.vm.step = 4;
      }
    }
  }
</script>
