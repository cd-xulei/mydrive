import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

import 'normalize.css'
import 'mint-ui/lib/style.css'

// coustom style
import './main.scss'

Vue.use(VueRouter)
// NOTE: 严格遵守该写法
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#root')
