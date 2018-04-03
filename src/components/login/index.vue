<template>
    <div class="inner login">
        <div class="head">
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <ul>
            <li>
                <i class="icon-user"></i>
                <input placeholder="用户名" type="text">
            </li>
            <li>
                <i class="icon-lock"></i>
                <input placeholder="密码" type="password">
            </li>
            <li>
                <group>
                    <x-switch title="记住密码" v-model="value"></x-switch>
                </group>
            </li>
            <li>
                <x-button @click.native="handleLogin" type="warn" text="登 录"></x-button>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/login.less";
</style>
<script>
    export default {
        name:"login",
        data () {
            return {
                value:false
            }
        },
        methods:{
            handleLogin(){
                this.$router.push("/main/queue/1");
            }
        }
    }
</script>