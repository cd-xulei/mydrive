<template>
    <div class='menu' v-bind:style='style'>
        <h4 class='menu__title'>{{title}}</h4>
        <div class='menu__content'>
            <div class='exercise'>
                <router-link to="/exercise"><span class='remark'>已完成题库</span></router-link>
                <span class='amount'>未练习</span>
                <a class='btn'>考题练习</a>
            </div>
            <div class='mock'>
                <span class='remark'>最高得分</span>
                <span class='amount'>0分</span>
                <a class='btn'>模拟考试</a>
            </div>
        </div>
        <ul class='menu__footer'>
            <li>错题本</li>
            <li>收藏&排除</li>
            <li>未做题</li>
            <li>我的成绩</li>
        </ul>
    </div>
</template>

<script>

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

$base-color: #00C35D;

.card-top {
    margin-top: -45px;
}

.#{$menu} {
    border-radius: 20px;
    background-color: #FFF;
    margin: -45px 3.5vw 0 3.5vw;
    display: flex;
    flex-direction: column;
    &__title {
        margin: 0;
        height: 45px;
        line-height: 45px;
        text-align: center;
        color: $base-color;
        border-bottom: 1px solid #F9F9F9;
    }
    &__content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10px 0;
        border: {
            width: thin 0 thin 0;
            style: solid;
            color: #FAFAFA;
        }
        &>.exercise,
        &>.mock {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            flex: 1;
        }

    }
    &__footer {
        display: flex;
        list-style-type: none;
        @extend .remark;
        flex: 1;
        flex-direction: row;
        // 覆盖webkit
        padding-left: 0;
        justify-content: space-around;
        & > .li{
            display: flex;
            flex-direction: column;
            flex:1;
        }
    }
    .remark {
        color: #BDBDBD;
        font-size: 4vw;
    }
    .amount {
        color: $base-color;
        font-size: 5.8vw;
        margin: 2vw 0;
    }
    .btn {
        background-color: $base-color;
        color: #FFF;
        border-radius: 1vh;
        font-size: 4.5vw;
        padding: 1.6vw 5.5vw;
    }
}
</style>
