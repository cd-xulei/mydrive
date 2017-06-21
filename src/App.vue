<template>
    <div id="app">
        <mt-navbar>
            <mt-tab-item id="1">返回</mt-tab-item>
            <mt-tab-item id="2">首页</mt-tab-item>
            <mt-tab-item id="3">添加</mt-tab-item>
        </mt-navbar>
        <p class='mydrive'>{{msg}}</p>
    </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

export default {
    name: 'home',
    data () {
        return {
            msg: 'Welcome to mydrive'
        }
    }
}
</script>

<style lang="scss">
#app {
    display: flex;
    flex: 1;
    flex-direction: column;
}
</style>
