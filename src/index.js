import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/app.vue';
import $ from 'jquery';


// import './images/5.jpg' ;
// import './styles/test.css';
import createRouter from '../vue-router/router.js'

// const root = document.createElement('div');
// document.body.appendChild(root);

Vue.use(VueRouter);
const router = createRouter();

new Vue({
    el:"#root",
    router,
    render: (h) => h(App)
})