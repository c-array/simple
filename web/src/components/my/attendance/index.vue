<template>
  <div class="inner attendance">
    <x-header title="考勤"></x-header>
    <div class="tabs">
      <span class="active">当前申请</span>
      <span>申请历史</span>
    </div>
    <div class="content" :class="{'not':!vm.isNot}">
      <section class="list" v-if="vm.isNot">
        <header>
          <img src="../../../assets/images/timg.jpg" alt="">
          <article>
            <h3>Haier</h3>
            <div class="dec"><span>武汉理工南湖工作室</span><span>2018-04-12 20:48</span></div>
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
      <section v-else class="not-atten">
        <i class="icon-atten"></i>
        <p>暂无考勤记录</p>
        <router-link tag="button" to="/my/apply">考勤申请</router-link>
      </section>
    </div>
  </div>
</template>
<style scoped lang="less">
  @import "../../../assets/less/modules/my/attendance.less";
</style>
<script>
  export default {
    name: "attendance",
    data(){
      return {
        vm:{
          isNot:true
        }
      }
    }
  }
</script>
