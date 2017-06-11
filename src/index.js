import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import 'normalize.css'
import 'mint-ui/lib/style.css'

import './main.scss'

new Vue({
  el: '#root',
  render: h => h(App)
})
