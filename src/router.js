import VueRouter from 'vue-router'

const Bar = {template: '<div>啧啧啧啧呱刮骨</div>'}

const Exercise = require('./pages/Exercise')

const routes = [
    {path: '/exercise', component: Exercise},
    {path: '/bar', component: Bar}
]

export default new VueRouter({routes})
