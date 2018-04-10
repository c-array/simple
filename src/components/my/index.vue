<template>
    <div class="inner my">
        <header>
            <img src="../../assets/images/timg.jpg" alt="">
            <p><span>Array</span><i class="icon-pan"></i></p>
            <article>高级发型师</article>
        </header>
        <ul>
            <li>
                <i class="icon-record"></i>
                <p>业绩</p>
            </li>
            <router-link tag="li" to="/my/evaluate">
                <i class="icon-evaluate1"></i>
                <p>评价</p>
            </router-link>
            <li>
                <i class="icon-works"></i>
                <p>作品</p>
            </li>
            <li>
                <i class="icon-attendance"></i>
                <p>考勤</p>
            </li>
        </ul>
        <dl>
            <dd>
                <i class="icon-rice"></i>
                <section>
                    <span>吃饭时间</span>
                    <i class="icon-right"></i>
                </section>
            </dd>
            <dd>
                <i class="icon-bond"></i>
                <section>
                    <span>优惠券</span>
                    <i class="icon-right"></i>
                </section>
            </dd>
            <dd>
                <i class="icon-organize"></i>
                <section>
                    <span>组织</span>
                    <i class="icon-right"></i>
                </section>
            </dd>
            <dd>
                <i class="icon-set"></i>
                <section>
                    <span>设置</span>
                    <i class="icon-right"></i>
                </section>
            </dd>
            <dd>
                <i class="icon-archives"></i>
                <section>
                    <span>档案建设</span>
                    <i class="icon-right"></i>
                </section>
            </dd>
            <dd>
                <i class="icon-warrant"></i>
                <section>
                    <span>授权</span>
                    <i class="icon-right"></i>
                </section>
            </dd>
            <dd>
                <i class="icon-approval"></i>
                <section>
                    <span>考勤审批</span>
                    <i class="icon-right"></i>
                </section>
            </dd>
        </dl>
    </div>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/my/index.less";
</style>
<script>
    export default {
        name:"my"
    }
</script>