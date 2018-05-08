<template>
  <div class="inner attendance">
    <x-header title="考勤"></x-header>
    <div class="tabs">
      <span class="active">当前申请</span>
      <span>申请历史</span>
    </div>
    <div class="content not">
      <section class="not-atten">
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
    name: "attendance"
  }
</script>
