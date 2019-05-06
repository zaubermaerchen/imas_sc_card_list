import Vue from 'vue';
import VueThinModal from 'vue-thin-modal'
import App from './app.vue';
import router from './router';
import 'vue-select/dist/vue-select.css';
import 'vue-thin-modal/dist/vue-thin-modal.css'

Vue.use(VueThinModal);

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});