<template>
    <div class='menu' v-bind:style='style'>
        <h4 class='menu__title'>{{title}}</h4>
        <div class='menu__content'>
            <div class='exercise'>
                <span>已完成题库</span>
                <span>未练习</span>
                <button>考题练习</button>
            </div>
            <div class='mock'>
                <span>最高得分</span>
                <span>0分</span>
                <button>模拟考试</button>
            </div>
        </div>
        <div class='menu__footer'>
            <ul>
                <li>错题本</li>
                <li>收藏&排除</li>
                <li>未做题</li>
                <li>我的成绩</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'my-card',
    props: {
        type: String,
        marginTop: String
    },
    data () {
        return {
            title: this.type === 'one' ? '科目一' : '科目二',
            style: {
                marginTop: this.marginTop + 'px'
            }
        }
    }
}
</script>

<style lang="scss">
$menu: menu;

.card-top {
    margin-top: -45px;
}

.#{$menu} {
    border-radius: 20px;
    background-color: #FFF;
    margin: -45px 20px 0 20px;
    &__title {
        margin: 0;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-bottom: 1px solid #F9F9F9;
    }
    &__content {
        display: flex;
        flex-direction: row;
        flex: 1;
        &>.exercise,
        &>.mock {
            display: flex;
            flex: 1;
            flex-direction: column;
        }
    }
}
</style>
