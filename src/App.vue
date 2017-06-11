<template>
<div id="app">
    <p class='mydrive'>{{msg}}</p>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
</div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

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
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.mydrive {
    text-align: center;
    font-size: 24px;
}
</style>
