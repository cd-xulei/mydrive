<template>
    <div class="app">
        <mt-header title='驾考一点通'></mt-header>
        <div class='username'>
        </div>
        <div class='menu-one'>
            <h4 class='menu-one__title'>科目一</h4>
            <div class='menu-one__content'>
                <div class='exercise'>
                    <span>已完成练习</span>
                </div>
                <div class='mock'>

                </div>
            </div>
            <div class='menu-one__footer'></div>
        </div>
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
$menu-one: menu-one;
.app {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #F3F7FA;
    & > .mint-header{
        background-color: #00C355;
    }
    & > .username{
        height: 100px;
        background-color: #00C355;
    }
    & > .menu-one{
        // height: 320px;
        border-radius: 20px;
        background-color: #FFF;
        margin: -45px 20px 0 20px;
    }
}

.#{$menu-one}{
    &__title{
        margin: 0;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-bottom: 1px solid #F9F9F9;
    }
    &__content{
        display: flex;
        flex-direction: row;
        flex:1;
        & > .exercise, & > .mock{
            display: flex;
            flex:1;
            flex-direction: column;
        }
    }

}

</style>
