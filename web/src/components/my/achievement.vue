<template>
    <div class="inner achievement">
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" :title="title">
            <!-- <div class="title" slot="overwrite-title">
                <span>{{title}}</span> <i class="icon-up"></i>
            </div>
            <div @click="showDate" class="date" slot="right">
                <i class="icon-date"></i>
            </div> -->
        </x-header>
        <div v-transfer-dom>
            <actionsheet :menus="menus" @on-click-menu="getClassify" v-model="showMenus" show-cancel></actionsheet>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../assets/less/modules/my/achievement.less';
</style>
<script>
    import {Actionsheet,TransferDom} from "vux";
    export default {
        name:"achievement",
        data () {
            return {
                title:"全部订单",
                menus: {
                    menu1: '全部订单',
                    menu2: '一个月内',
                    menu3: '三个月内',
                    menu4: '日期范围查询'
                },
                showMenus: false
            }
        },
        directives: {
            TransferDom
        },
        components: {
            Actionsheet
        },
        methods:{
            getClassify(menuKey, menuItem){
                console.log(menuKey);
                if(menuKey != "menu4"){
                    this.title = menuItem;
                }else{
                    this.showMenus = false;
                    this.showDate();
                }
            },
            showDate(){
                this.$vux.datetime.show({
                    value: '', // 其他参数同 props
                    confirmText:"确认",
                    cancelText:"关闭",
                    clearText:"日期查询",
                    onHide () {
                        const _this = this
                    },
                    onShow () {
                        const _this = this
                    }
                })
            }
        }
    }
</script>