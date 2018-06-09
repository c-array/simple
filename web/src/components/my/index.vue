<template>
  <div class="inner my">
    <header>
      <img src="../../assets/images/timg.jpg" alt="">
      <p><span>Array</span><i class="icon-pan"></i></p>
      <article>高级发型师</article>
    </header>
    <ul>
      <router-link tag="li" to="/my/achievement">
        <i class="icon-record"></i>
        <p>业绩</p>
      </router-link>
      <router-link tag="li" to="/my/evaluate">
        <i class="icon-evaluate1"></i>
        <p>评价</p>
      </router-link>
      <router-link tag="li" to="/my/work">
        <i class="icon-works"></i>
        <p>作品</p>
      </router-link>
      <router-link tag="li" to="/my/attendance">
        <i class="icon-attendance"></i>
        <p>考勤</p>
      </router-link>
    </ul>
    <dl>
      <dd @click="$router.push({path:item.url})" v-for="item in list" :key="item.id">
        <i :class="item.icon"></i>
        <section>
          <span>{{item.name}}</span>
          <i class="icon-right"></i>
        </section>
      </dd>
    </dl>
  </div>
</template>
<style scoped lang="less">
  @import "../../assets/less/modules/my/index.less";
</style>
<script>
  export default {
    name: "my",
    data () {
      return {
        list:[
          {
            id:1,
            name:"吃饭时间",
            url:"/my/eat",
            icon:"icon-rice"
          },
          {
            id:2,
            name:"优惠券",
            url:"/my/coupon",
            icon:"icon-bond"
          },
          /* {
            id:3,
            name:"组织",
            url:"/my/eat",
            icon:"icon-organize"
          }, */
          {
            id:4,
            name:"设置",
            url:"/my/set",
            icon:"icon-set"
          },
          {
            id:5,
            name:"档案建设",
            url:"/my/eat",
            icon:"icon-archives"
          },
          {
            id:6,
            name:"授权",
            url:"/my/eat",
            icon:"icon-warrant"
          },
          {
            id:7,
            name:"考勤审批",
            url:"/my/eat",
            icon:"icon-approval"
          }
        ]
      }
    }
  }
</script>
