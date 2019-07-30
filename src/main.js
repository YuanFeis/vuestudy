import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI);


// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
import hello from './components/HelloWorld.vue'
import news from  './components/News.vue'
import ei from './components/EI.vue'
import './plugins/element.js'
const routes = [
    { path: '/hello', component: hello },
    { path: '/news', component: news },
    { path: '/ei',component: ei},
    { path: "*" , redirect:'/hello'}
]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
