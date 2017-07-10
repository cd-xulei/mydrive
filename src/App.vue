<template>
    <div class='app'>
        <mt-header title='驾考一点通'></mt-header>
        <div class='username'>Hello</div>
        <my-card type='one'></my-card>
        <my-card type='four' marginTop='30'></my-card>
    </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
import MyCard from './component/my-card'
Vue.component(Header.name, Header)

export default {
    name: 'home',
    data () {
        return {
            msg: 'Welcome to mydrive'
        }
    },
    components:{
        MyCard
    }
}
</script>

<style lang="scss">
$menu-one: menu-one;
.app {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background-color: #F3F7FA;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    &>.mint-header {
        background-color: #00C355;
    }
    &>.username {
        height: 80px;
        background-color: #00C355;
        color:#FFF;
        padding-left: 20vw;
    }
}
</style>
