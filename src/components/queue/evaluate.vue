<template>
    <div class="inner queue-evaluate">
        <x-header title="用户评价"></x-header>
        <div class="content">
            <dl class="evaluate-box">
                <dt>
                   <div class="user-info">
                       <img src="../../assets/images/timg.jpg" alt="">
                       <article>
                           <p>Array</p>
                           <p>182****3456</p>
                       </article>
                   </div> 
                    <div class="eval-right">
                        <rater v-model="eval" font-size="23" :disabled="true" active-color="#E6A23C" :max="5"></rater>
                        <span>{{eval + '分'}}</span>
                    </div>                   
                </dt>
                <dd>
                    <p>剪的很好，发型师很帅</p>
                </dd>
                <dd>
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                </dd>
                <dd class="address">
                    <article>
                        <p>北京大兴荣京东街工作室</p>
                        <p>发型师：Bert</p>
                    </article>
                    <span>2018-04-07</span>
                </dd>
            </dl>
            <dl class="evaluate-box">
                <dt>
                   <div class="user-info">
                       <img src="../../assets/images/timg.jpg" alt="">
                       <article>
                           <p>Array</p>
                           <p>182****3456</p>
                       </article>
                   </div> 
                    <div class="eval-right">
                        <rater v-model="eval" font-size="23" :disabled="true" active-color="#E6A23C" :max="5"></rater>
                        <span>{{eval + '分'}}</span>
                    </div>                   
                </dt>
                <dd>
                    <p>剪的很好，发型师很帅</p>
                </dd>
                <dd>
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                </dd>
                <dd class="address">
                    <article>
                        <p>北京大兴荣京东街工作室</p>
                        <p>发型师：Bert</p>
                    </article>
                    <span>2018-04-07</span>
                </dd>
            </dl>
            <dl class="evaluate-box">
                <dt>
                   <div class="user-info">
                       <img src="../../assets/images/timg.jpg" alt="">
                       <article>
                           <p>Array</p>
                           <p>182****3456</p>
                       </article>
                   </div> 
                    <div class="eval-right">
                        <rater v-model="eval" font-size="23" :disabled="true" active-color="#E6A23C" :max="5"></rater>
                        <span>{{eval + '分'}}</span>
                    </div>                   
                </dt>
                <dd>
                    <p>剪的很好，发型师很帅</p>
                </dd>
                <dd>
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                </dd>
                <dd class="address">
                    <article>
                        <p>北京大兴荣京东街工作室</p>
                        <p>发型师：Bert</p>
                    </article>
                    <span>2018-04-07</span>
                </dd>
            </dl>
            <dl class="evaluate-box">
                <dt>
                   <div class="user-info">
                       <img src="../../assets/images/timg.jpg" alt="">
                       <article>
                           <p>Array</p>
                           <p>182****3456</p>
                       </article>
                   </div> 
                    <div class="eval-right">
                        <rater v-model="eval" font-size="23" :disabled="true" active-color="#E6A23C" :max="5"></rater>
                        <span>{{eval + '分'}}</span>
                    </div>                   
                </dt>
                <dd>
                    <p>剪的很好，发型师很帅</p>
                </dd>
                <dd>
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                    <img src="../../assets/images/timg.jpg" alt="">
                </dd>
                <dd class="address">
                    <article>
                        <p>北京大兴荣京东街工作室</p>
                        <p>发型师：Bert</p>
                    </article>
                    <span>2018-04-07</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/queue/index.less";
</style>
<script>
    import { Rater } from 'vux'
    export default {
        name:"evaluate",
        data () {
            return {
                eval:5      
            }
        },
        components:{
            Rater
        }
    }
</script>