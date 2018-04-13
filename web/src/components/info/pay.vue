<template>
    <div class="inner info-pay">
        <x-header :title="param.name"></x-header>
        <ul>
            <li v-for="item in 5">
                <img src="../../assets/images/timg.jpg" alt="">
                <section>
                    <p>刘君涛</p>
                    <span>已支付订单,金额:￥45.00</span>
                    <article>17分钟前</article>
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
        name:"detail",
        data () {
            return {
                param:{
                    id:this.$route.params.id,
                    name:this.$route.params.name
                }
            }
        }
    }    
</script>