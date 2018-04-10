<template>
    <div class="inner info-stores">
        <x-header :title="param.name"></x-header>
        <ul>
            <li v-for="item in list">
               <p>{{item.name}}</p> 
               <span>{{item.name}}</span>
               <article>
                   <span>{{item.date}}</span>
                   <router-link tag="span" :to="'/info/detail/' + item.id + '/' + param.name ">查看详细 <i class="icon-right"></i></router-link>
               </article>
            </li>
        </ul>
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
                    name: this.$route.params.name
                },
                list:[
                    {
                        id:1,
                        name:"关于【支付后，单还在】问题处理办法",
                        date:"2018-04-10 17:57"
                    },
                    {
                        id:2,
                        name:"【口碑活动】抵扣10元活动",
                        date:"2018-04-10 18:35"
                    }
                ]
            }
        }
    }    
</script>