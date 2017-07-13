<template>
    <div class='exercise'>
        <mt-header title='驾考一点通'></mt-header>
    </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

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
.exercise {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background-color: #F3F7FA;
    -webkit-overflow-scrolling: touch;
}
</style>
