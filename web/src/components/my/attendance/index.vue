<template>
  <div class="inner attendance">
    <x-header title="考勤"></x-header>
    <div class="tabs">
      <span @click="vm.isNot = true" :class="{'active':vm.isNot}">当前申请</span>
      <span @click="vm.isNot = false" :class="{'active':!vm.isNot}">申请历史</span>
    </div>
    <div class="content" :class="{'not':!vm.isNot && list.length < 1}">
      <section class="list" v-if="vm.isNot">
        <header>
          <img src="../../../assets/images/timg.jpg" alt="">
          <article>
            <h3>Haier</h3>
            <div class="dec">
              <span>武汉理工南湖工作室</span>
              <span>2018-04-12 20:48</span>
            </div>
          </article>
          <span class="status">批</span>
        </header>
        <div class="list-content">
          <h3>申请轮休1.0天</h3>
          <p>2018-04-13 00:00 周五 - 2018-04-13 23:30 周五</p>
        </div>
        <footer>
          <x-button type="default">撤销</x-button>
          <x-button type="warn">删除</x-button>
        </footer>
      </section>
      <div v-else class="atten">
        <div v-if="list.length > 0">
          <section>
            <i class="flag icon-past"></i>
            <header>
              <span>申请轮休1.0天</span>
              <span class="tag">通过</span>
            </header>
            <p class="date">2018-03-08 00:00 周四 - 2018-03-08 23:30 周四</p>
            <article class="type">
              <i class="icon-sup"></i> 轮休</article>
            <article class="status">
              <flow orientation="vertical" style="height:200px;">
                <flow-state state="1" is-done>
                  <div class="status-item" slot="title">
                    <span>填写请假单</span>
                    <span class="s-date">2018-06-09 10:43 周六</span>
                  </div>
                </flow-state>
                <flow-line is-done></flow-line>
                <flow-state state="2" is-done>
                  <div class="status-item" slot="title">
                    <span>区域经理审批</span>
                    <span class="s-past">审批通过</span>
                  </div>
                </flow-state>
                <flow-line tip-direction="right" is-done tip="进行中"></flow-line>
                <flow-state state="3" title="完成" is-done></flow-state>
              </flow>
            </article>
          </section>
          <section>
            <i class="flag icon-no-past"></i>
            <header>
              <span>申请轮休1.0天</span>
              <span class="tag">未通过</span>
            </header>
            <p class="date">2018-03-08 00:00 周四 - 2018-03-08 23:30 周四</p>
            <article class="type">
              <i class="icon-sup"></i> 轮休</article>
            <article class="status">
              <flow orientation="vertical" style="height:200px;">
                <flow-state state="1" is-done>
                  <div class="status-item" slot="title">
                    <span>填写请假单</span>
                    <span class="s-date">2018-06-09 10:43 周六</span>
                  </div>
                </flow-state>
                <flow-line is-done></flow-line>
                <flow-state state="2" is-done>
                  <div class="status-item" slot="title">
                    <span>区域经理审批</span>
                    <span class="s-past err">审批未通过</span>
                  </div>
                </flow-state>
                <flow-line tip-direction="right" is-done tip="进行中"></flow-line>
                <flow-state state="3" title="完成" is-done></flow-state>
              </flow>
            </article>
          </section>
        </div>
        <section v-else class="not-atten">
          <i class="icon-atten"></i>
          <p>暂无考勤记录</p>
          <router-link tag="button" to="/my/apply">考勤申请</router-link>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  @import "../../../assets/less/modules/my/attendance.less";

</style>
<script>
  import {
    Flow,
    FlowState,
    FlowLine
  } from "vux";
  export default {
    name: "attendance",
    data() {
      return {
        vm: {
          isNot: true
        },
        list: [{}]
      };
    },
    components: {
      Flow,
      FlowState,
      FlowLine
    }
  };

</script>
