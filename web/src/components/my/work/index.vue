<template>
  <div class="inner work">
    <x-header title="作品">
      <router-link tag="div" to="/my/work-form" slot="right" class="work-icon">
        <i class="icon-plus"></i>
        <span>添加</span>
      </router-link>
    </x-header>
    <div class="tabs">
      <span class="active">全部</span>
      <span>剪发</span>
      <span>染发</span>
      <span>烫发</span>
      <span>造型</span>
      <span>洗发</span>
      <span>养护</span>
    </div>
    <ul>
      <li>
        <img src="../../../assets/images/timg.jpg" alt="">
        <article>
          <span>￥48.00</span>
          <i class="icon-share"></i>
        </article>
      </li>
      <li>
        <img src="../../../assets/images/timg.jpg" alt="">
        <article>
          <span>￥48.00</span>
          <i class="icon-share"></i>
        </article>
      </li>
      <li>
        <img src="../../../assets/images/timg.jpg" alt="">
        <article>
          <span>￥48.00</span>
          <i class="icon-share"></i>
        </article>
      </li>
      <li>
        <img src="../../../assets/images/timg.jpg" alt="">
        <article>
          <span>￥48.00</span>
          <i class="icon-share"></i>
        </article>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
  @import "../../../assets/less/modules/my/work.less";
</style>
