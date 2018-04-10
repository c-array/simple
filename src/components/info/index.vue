<template>
    <div class="inner info">
        <x-header :left-options="{showBack: false}" title="消息"></x-header>
        <ul>
            <li v-for="item in list">
                <i :class="item.icon"></i>
                <section>
                    <p>{{item.name}}</p>
                    <span>{{item.info ? item.info : "没有新的消息"}}</span>
                    <router-link tag="i" class="icon-right" :to="item.url + '/' +  item.id + '/' + item.name"></router-link>
                </section>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/info/index.less";
</style>
<script>
    export default {
        name:"info",
        data () {
            return {
                list:[
                    {
                        id:1,
                        name:"支付消息",
                        message:"支付金额：￥43.00",
                        icon:"icon-pay",
                        url:"/info/pay"
                    },
                    {
                        id:2,
                        name:"顾客评价",
                        message:"",
                        icon:"icon-evaluate",
                        url:"/info/evaluate"
                    },
                    {
                        id:3,
                        name:"店铺消息",
                        message:"",
                        icon:"icon-stores",
                        url:"/info/stores"
                    }
                ]
            }
        }
    }
</script>