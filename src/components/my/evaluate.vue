<template>
    <div class="inner evaluate">
        <x-header title="我的评价"></x-header>
        <ul class="tab">
            <li>
                <p>946</p>
                <rater :max="5" active-color="#04BE02"></rater>
            </li>
            <li>
                <p>946</p>
                <rater :max="4" active-color="#04BE02"></rater>
            </li>
            <li>
                <p>946</p>
                <rater :max="3" active-color="#04BE02"></rater>
            </li>
            <li>
                <p>946</p>
                <rater :max="2" active-color="#04BE02"></rater>
            </li>
            <li>
                <p>946</p>
                <rater :max="1" active-color="#04BE02"></rater>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import '../../assets/less/modules/my/evaluate.less';
</style>
<script>
    import { Rater } from 'vux'
    export default {
        name:"evaluate",
        components: {
            Rater
        }
    }
</script>