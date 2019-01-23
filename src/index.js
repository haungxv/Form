import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/app.vue';
import $ from 'jquery';
import { Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$message = Message;


import createRouter from '../vue-router/router.js'


Vue.use(VueRouter);
const router = createRouter();

new Vue({
    el:"#root",
    router,
    render: (h) => h(App)
});