<template>
  <div class="inner info-detail">
    <x-header :title="param.name"></x-header>
    <div class="content">
      <h3>关于【支付后，单还在】问题处理办法</h3>
      <p>“大幅度放宽市场准入”“加强知识产权保护”“降低汽车进口关税”……4月10日，习近平在博鳌亚洲论坛2018年年会开幕式上宣布了中国扩大开放的一系列新举措，并再次明确宣示：中国开放的大门不会关闭，只会越开越大！
        实打实的举措和表态，收获了现场的掌声和舆论的赞誉。然而，在中美贸易摩擦激烈的背景下，也有人疑虑：中国扩大开放的新举措是不得已而为之。</p>
    </div>
  </div>
</template>
<style scoped lang="less">
  @import "../../assets/less/modules/info/index.less";
</style>
<script>
  export default {
    name: "detail",
    data() {
      return {
        param: {
          id: this.$route.params.id,
          name: this.$route.params.name,

        }
      }
    }
  }
</script>
