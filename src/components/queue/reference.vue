<template>
    <div class="inner queue-reference">
        <x-header title="参考发型"></x-header>
        <div class="content">
            <ul class="reference-box">
                <li v-for="(item,index) in list">
                    <img @click="show(index)" class="hairstyle" :src="item.src">
                    <p><span>{{item.date}}</span></p>
                </li>
            </ul>
            <div v-transfer-dom>
                <previewer 
                    :list="list" 
                    ref="previewer" 
                    :options="options" 
                    @on-index-change="logIndexChange">
                </previewer>
            </div>
            <!-- <previewer ref="previewer" :list="previewerList" :options="options">
                <template slot="button-after">
                    <span class="previewer-delete-icon-box">
                        <img src="../assets/previewer_delete_icon.png" width="22" height="22" class="previewer-delete-icon" @click.prevent.stop="removeImg">
                    </span>
                </template>
            </previewer> -->
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../../assets/less/modules/queue/index.less';
</style>
<script>
    import { Previewer,TransferDom } from 'vux'
    export default {
        name: "reference",
        directives: {
            TransferDom
        },
        components: {
            Previewer
        },
        data () {
            return {
                list:[
                    {
                        id:1,
                        date:"2018-04-07",
                        src:"http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
                    },
                    {
                        id:2,
                        date:"2018-04-15",
                        src:"http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
                    },
                    {
                        id:3,
                        date:"2018-04-20",
                        src:"http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
                    },
                    {
                        id:4,
                        date:"2018-05-20",
                        src:"http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
                    }
                ],
                options: {
                    getThumbBoundsFn (index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.hairstyle')[index]
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    // w = width
                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                    }
                }
            }
        },
        methods:{
            logIndexChange (arg) {
                console.log(arg)
            },
            show (index) {
                this.$refs.previewer.show(index)
            }
        }
    }
</script>