<template>
    <div class="inner queue-user">
        <x-header title="用户信息编辑"></x-header>
        <div class="content">
            <div class="check-box">
                <p>用户贵姓</p>
                <checker v-model="checkName" default-item-class="check-item" selected-item-class="check-item-selected">
                    <checker-item v-for="item in names" :key="item.id" :value="item.id">
                        {{item.name}}
                    </checker-item>
                </checker>
                <input type="text">
            </div>
            <div class="check-box check-sex">
                <p>用户性别</p>
                <checker v-model="checkSex" default-item-class="check-item" selected-item-class="check-item-selected">
                    <checker-item v-for="item in sexs" :key="item.id" :value="item.id">
                        {{item.name}}
                    </checker-item>
                </checker>
            </div>
            <div class="check-box check-hairstyle">
                <p>发型注意事项</p>
                <checker v-model="checkHairstyle" default-item-class="check-item" selected-item-class="check-item-selected">
                    <checker-item v-for="item in hairstyles" :key="item.id" :value="item.id">
                        {{item.name}}
                    </checker-item>
                </checker>
                <x-textarea autosize v-model="matter" placeholder="其他，如：刘海不能打薄，两边不能太短"></x-textarea>
            </div>
            <x-button class="confirm" type="primary">确 定</x-button>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../assets/less/modules/queue/index.less';
</style>
<script>
    import { Checker, CheckerItem, XTextarea } from 'vux'
    export default {
        name: "user",
        data() {
            return {
                matter:"",
                checkName: "",
                names: [
                    {
                        id: 1,
                        name: "李"
                    },
                    {
                        id: 2,
                        name: "王"
                    },
                    {
                        id: 3,
                        name: "张"
                    },
                    {
                        id: 4,
                        name: "刘"
                    },
                    {
                        id: 5,
                        name: "陈"
                    },
                    {
                        id: 6,
                        name: "杨"
                    },
                    {
                        id: 7,
                        name: "赵"
                    },
                    {
                        id: 8,
                        name: "黄"
                    },
                    {
                        id: 9,
                        name: "周"
                    },
                    {
                        id: 10,
                        name: "吴"
                    }
                ],
                checkSex:"",
                sexs:[
                    {
                        id:1,
                        name:"男"
                    },
                    {
                        id:2,
                        name:"女"
                    }
                ],
                checkHairstyle:"",
                hairstyles:[
                    {
                        id:1,
                        name:"刘海不过眉"
                    },
                    {
                        id:2,
                        name:"两边角不能太短"
                    },
                    {
                        id:3,
                        name:"头顶不能太薄"
                    },
                    {
                        id:4,
                        name:"不要用推剪"
                    }
                ]
            }
        },
        components: {
            Checker,
            CheckerItem,
            XTextarea
        }
    }
</script>