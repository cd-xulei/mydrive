<template>
<div id="app">
    <p class='mydrive'>{{msg}}</p>
</div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to mydrive'
        }
    }
}
</script>

<style lang="scss">

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.mydrive{
    text-align: center;
    font-size: 24px;
}

</style>
