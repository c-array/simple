<template>
    <div class="inner queue">
        <x-header :left-options="{showBack: false}">
            <span slot="left">排队</span> 
            <div slot="right" class="status">
                <div @click="vm.isShow = !vm.isShow" class="select-status">
                    <span>{{vm.status}}</span>
                    <i class="icon-status"></i>
                </div>
                <ul :class="{active:vm.isShow}">
                    <li @click="handleSelect(item.name)" v-for="(item,index) in vm.list">{{item.name}}</li>
                </ul>
            </div>
        </x-header>
        <tab>
            <tab-item @on-item-click="vm.tabId = item.id" :selected="vm.tabId == item.id" :key="item.id" v-for="item in vm.tabs">{{item.name}}</tab-item>
        </tab>
        <div class="list" v-show="vm.tabId == 1">
            <div class="list-item" v-for="item in 3">
                <div class="box">
                    <span>取号中</span>
                    <router-link to="/queue/detail">详情<i class="icon-right"></i></router-link>
                </div>
                <dl class="box-item">
                    <dd>
                        <span>NO</span>
                        <span class="no">D001</span>
                    </dd>
                    <dd>
                        <span>姓名</span>
                        <span>Array</span>
                    </dd>
                    <dd>
                        <span>性别</span>
                        <span>男</span>
                    </dd>
                    <dd>
                        <span>手机号</span>
                        <span>18201173456</span>
                    </dd>
                    <dd>
                        <span>时间</span>
                        <span>2018-04-03 20:22:30</span>
                    </dd>
                    <dd>
                        <img src="../../assets/images/timg.jpg" alt="">
                        <img src="../../assets/images/timg.jpg" alt="">
                        <img src="../../assets/images/timg.jpg" alt="">
                    </dd>
                    <dd>
                        <x-button text="过号"></x-button>
                        <x-button type="primary" text="开始剪发"></x-button>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/queue/index.less";
</style>
<script>
    import {mapState,mapMutations} from "vuex";
    import { Tab, TabItem } from 'vux'
    export default {
        name:"queue",
        computed: {
            ...mapState({
                vm: state => state.queue.vm,
                list: state => state.queue.list
            })
        },
        components: {
            Tab,
            TabItem
        },
        methods:{
            ...mapMutations({
                handleSelect:"queue/select"
            })
        }
    }
</script>