<template>
    <div class="inner main">
        <div class="main-body">
            <router-view></router-view>
        </div>
        <tabbar>
            <tabbar-item :selected="item.id == currentRouterId" v-for="(item,index) in list" :key="item.id" :link="item.url + '/' + item.id">
                <i slot="icon" :class="item.icon"></i>
                <span slot="label">{{item.name}}</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<style scoped lang="less">
    @import '../../assets/less/modules/main/index.less';
</style>
<script>
    import { Tabbar, TabbarItem } from 'vux'
    export default {
        name:"home",
        data () {
            return {
                currentRouterId:this.$route.params.id,
                list:[
                    {
                        id:1,
                        name:'排队',
                        icon:'icon-time',
                        url:'/main/queue'
                    },
                    {
                        id:2,
                        name:'分析',
                        icon:'icon-analysis',
                        url:'/main/analyze'
                    },
                    {
                        id:3,
                        name:"分享",
                        icon:'icon-share',
                        url:'/main/share'
                    },
                    {
                        id:4,
                        name:'消息',
                        icon:'icon-info',
                        url:'/main/info'
                    },
                    {
                        id:5,
                        name:'我的',
                        icon:'icon-my',
                        url:'/main/my'
                    }
                ]      
            }
        },
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>