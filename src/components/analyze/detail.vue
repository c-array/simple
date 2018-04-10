<template>
    <div class="inner analyze-detail">
        <x-header :title="title"></x-header>
        <ul>
            <li>
                <div class="lt">
                    <span>1.</span>
                    <img src="../../assets/images/timg.jpg" alt="">
                </div>
                <section>
                    <span>张三</span>
                    <article>
                        <countup :end-val="104" :duration="2" :decimals="2" class="countup"></countup>
                        <i class="icon-arrow"></i>
                    </article>
                </section>
            </li>
            <li>
                <div class="lt">
                    <span>2.</span>
                    <img src="../../assets/images/timg.jpg" alt="">
                </div>
                <section>
                    <span>李四</span>
                    <article>
                        <countup :end-val="73" :duration="2" :decimals="2" class="countup"></countup>
                        <i class="icon-arrow"></i>
                    </article>
                </section>
            </li>
            <li>
                <div class="lt">
                    <span>3.</span>
                    <img src="../../assets/images/timg.jpg" alt="">
                </div>
                <section>
                    <span>王五</span>
                    <article>
                        <countup :end-val="33" :duration="2" :decimals="2" class="countup"></countup>
                        <i class="icon-arrow"></i>
                    </article>
                </section>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/analyze/index.less";
</style>
<script>
    import { Countup } from 'vux';
    export default {
        name: "detail",
        data() {
            return {
                title:""
            }
        },
        components: {
            Countup
        },
        created(){
            if(this.$route.params.type == 1){
                this.title = "单量排名";
            }else if(this.$route.params.type == 2){
                this.title = "营业额排名";
            }else if(this.$route.params.type == 3){
                this.title = "好评率排名";
            }else if(this.$route.params.type == 4){
                this.title = "粉丝数排名";
            }
        },
        methods: {
            onImgError (item, $event) {
                console.log(item, $event)
            }
        }
    }
</script>