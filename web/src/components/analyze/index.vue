<template>
    <section class="inner analyze">
        <x-header :left-options="{showBack: false}" title="分析"></x-header>
        <dl>
            <dd class="order">
                <p class="title">单量</p>
                <section>
                    <article>
                        <countup :end-val="0" :duration="3" :decimals="2" class="countup"></countup>
                        <p>今日</p>
                    </article>
                    <article>
                        <countup :end-val="55" :duration="3" :decimals="2" class="countup"></countup>
                        <p>本月</p>
                    </article>
                </section>
                <div class="footer">
                    <span>今日第4名</span>
                    <router-link tag="span" to="/analyze/detail/1">查看排名 <i class="icon-right"></i></router-link>
                </div>                
            </dd>
            <dd>
                <p class="title">营业额</p>
                <section>
                    <article>
                        <countup :end-val="0" :duration="3" :decimals="2" class="countup"></countup>
                        <p>今日</p>
                    </article>
                    <article>
                        <countup :end-val="2474" :duration="3" :decimals="2" class="countup"></countup>
                        <p>本月</p>
                    </article>
                </section>
                <div class="footer">
                    <span>今日第4名</span>
                    <router-link tag="span" to="/analyze/detail/2">查看排名 <i class="icon-right"></i></router-link>
                </div>                
            </dd>
            <dd class="praise">
                <p class="title">好评率</p>
                <section>
                    <article>
                        <span><countup :end-val="100" :duration="3" :decimals="2" class="countup"></countup>%</span>
                        <p>今日</p>
                    </article>
                    <article>
                        <span><countup :end-val="100" :duration="3" :decimals="2" class="countup"></countup>%</span>
                        <p>本月</p>
                    </article>
                </section>
                <div class="footer">
                    <span>今日第1名</span>
                    <router-link tag="span" to="/analyze/detail/3">查看排名 <i class="icon-right"></i></router-link>
                </div>                
            </dd>
            <dd>
                <p class="title">粉丝数</p>
                <section>
                    <article>
                        <countup :end-val="10" :duration="3" :decimals="2" class="countup"></countup>
                        <p>今日</p>
                    </article>
                    <article>
                        <countup :end-val="100" :duration="3" :decimals="2" class="countup"></countup>
                        <p>本月</p>
                    </article>
                </section>
                <div class="footer">
                    <span>今日第2名</span>
                    <router-link tag="span" to="/analyze/detail/4">查看排名 <i class="icon-right"></i></router-link>
                </div>                
            </dd>
        </dl>        
    </section>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/analyze/index.less";
</style>
<script>
    import { Countup,Panel } from 'vux';
    export default {
        name:"analyze",
        components: {
            Countup,
            Panel
        }
    }
</script>