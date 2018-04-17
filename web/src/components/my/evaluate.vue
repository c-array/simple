<template>
    <div class="inner evaluate">
        <x-header title="我的评价"></x-header>
        <ul class="tab">
            <li :class="{active:vm.isTab == item.id}" @click="vm.isTab = item.id" v-for="item in list">
                <p>{{item.value}}</p>
                <rater :disabled="true" :font-size="12" :value="item.id" active-color="#fead00"></rater>
            </li>
        </ul>
        <ol class="list">
            <li v-for="item in vm.isTab">
                <section>
                    <img src="../../assets/images/timg.jpg" alt="">
                    <article>
                        <p>浩浩先生</p>
                        <span>183****3456</span>
                    </article>
                    <div class="rater">
                        <rater :font-size="12" :value="5" active-color="#fead00"></rater>5.0分
                    </div>
                </section>
                <div class="content">理发师很细心，态度特别好，给赞</div>
                <p class="date">2018-04-10</p>
            </li>
        </ol>
    </div>
</template>
<style scoped lang="less">
    @import '../../assets/less/modules/my/evaluate.less';
</style>
<script>
    import {mapState} from "vuex";
    import { Rater } from 'vux';
    export default {
        name:"evaluate",
        components: {
            Rater
        },
        computed:{
            ...mapState('myEvaluate',[
                'list',
                'vm',
            ])
        }
    }
</script>