<template>
    <div class="inner queue-detail">
        <x-header title="Array 的排队">
            <div class="switch" slot="right">
                <button>切换发型师</button>
            </div>
        </x-header>
        <div class="content">
            <section>
                <article>
                    <img src="../../assets/images/timg.jpg" alt="">
                    <p>Array</p>
                </article>
                <ul>
                    <li class="space-between">
                        <div class="d-lt">用户信息</div>
                        <div class="action">
                            <!-- <router-link to="/">历史记录</router-link> -->
                            <router-link class="active" to="/queue/user">
                                <i class="icon-edit"></i>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="d-lt">发型注意项</div>
                        <div class="describe">
                            暂无描述，点击右侧红色图标，添加用户信息吧
                        </div>
                    </li>
                    <li>
                        <div class="d-lt">服务注意项</div>
                        <div class="describe">
                            暂无描述，点击右侧红色图标，添加用户信息吧
                        </div>
                    </li>
                    <li class="praise">
                        <div class="d-lt">
                            <span>0 好评</span>
                            <span>0 差评</span>
                        </div>
                        <router-link to="/queue/evaluate" tag="div" class="link">
                            <i class="icon-right"></i>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section>
                <ul class="history">
                    <li>
                        <div>上次理发时间 暂无记录</div>
                        <div class="d-rt">上次发型师 暂无记录</div>
                    </li>
                    <li>
                        <div>上次理发耗时 0分钟</div>
                        <div class="d-rt">累计消费 0次</div>
                    </li>
                </ul>
            </section>
            <section>
                <ul class="reference">
                    <li>
                        <span>参考发型</span>
                        <router-link tag="div" class="link" to="/queue/reference">
                            <i class="icon-right"></i>
                        </router-link>
                    </li>
                    <li class="history-img">
                        <img src="../../assets/images/timg.jpg" alt="">
                        <img src="../../assets/images/timg.jpg" alt="">
                        <img src="../../assets/images/timg.jpg" alt="">
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../assets/less/modules/queue/index.less';
</style>
<script>
    export default {
        name: "detail",
        data() {
            return {

            }
        }
    }
</script>