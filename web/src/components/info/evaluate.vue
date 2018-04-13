<template>
    <div class="inner info-evaluate">
        <x-header :title="param.name"></x-header>
        <ul>
            <li v-for="item in 4">
                <img src="../../assets/images/timg.jpg" alt="">
                <section>
                    <p>刘君涛</p>
                    <article>17分钟前</article>
                    <rater :disabled="true" :font-size="24" :value="5" :max="5" active-color="#fead01"></rater>
                </section>
                <div class="conten">剪的很好，发型师很帅</div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/info/index.less";
</style>
<script>
    import { Rater } from 'vux'
    export default {
        name: "detail",
        data() {
            return {
                param: {
                    id: this.$route.params.id,
                    name: this.$route.params.name
                }
            }
        },
        components: {
            Rater
        }
    }    
</script>