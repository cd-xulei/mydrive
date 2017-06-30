import VueRouter from 'vue-router'

const Foo = {template: '<div>哈哈哈嘻嘻嘻</div>'}
const Bar = {template: '<div>啧啧啧啧呱刮骨</div>'}

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
]

export default new VueRouter({routes})
