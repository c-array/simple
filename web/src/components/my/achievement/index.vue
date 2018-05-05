<template>
    <div class="inner achievement">
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" :title="title">
        </x-header>
        <ul class="tab">
            <li>
                <span>47</span>
                <p>总单数</p>
            </li>
            <li>
                <span>0</span>
                <p>团购单数</p>
            </li>
            <li>
                <span>47</span>
                <p>非团购单数</p>
            </li>
            <li>
                <span>2119</span>
                <p>总金额</p>
            </li>
        </ul>
        <dl>
            <dd v-for="item in 5">
                <img src="../../../assets/images/timg.jpg" alt="">
                <section>
                    <h3>上群武汉武昌府店督导朱</h3>
                    <article>
                        <span>洗剪吹</span>
                        <div class="tag">武汉理工南湖工作室</div>
                    </article>
                    <article><span>2018-04-21 18:13</span><span>￥45.00</span></article>
                </section>
            </dd>
        </dl>
        <div v-transfer-dom>
            <actionsheet :menus="menus" @on-click-menu="getClassify" v-model="showMenus" show-cancel></actionsheet>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../../assets/less/modules/my/achievement.less';
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
