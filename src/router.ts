import Vue from 'vue';
import Router from 'vue-router';
import Produce from './pages/produce.vue';
import Support from './pages/support.vue';

Vue.use(Router);

const routes = [
    {
        path: '*',
        component: Produce
    },
    {
        path: '/support',
        component: Support
    }
];

export default new Router({
    routes: routes
});