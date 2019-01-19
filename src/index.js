import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/app.vue';
import $ from 'jquery';
import { MessageBox, Message } from 'element-ui'//这里我们仅引用了Button, Select这两个组件
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;


import createRouter from '../vue-router/router.js'


Vue.use(VueRouter);
const router = createRouter();

new Vue({
    el:"#root",
    router,
    render: (h) => h(App)
});