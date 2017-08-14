import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './route-config'

// install router
Vue.use(VueRouter);

// install resource
Vue.use(VueResource);
// Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// create router
const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

// configure router
configRouter(router);

// main view
const App = Vue.extend();

router.start(App, 'body');