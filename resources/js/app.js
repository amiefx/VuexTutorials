
require('./bootstrap');
window.Vue = require('vue');
import vuetify from './vuetify';
import router from './router';
import store from "./store";


import App from './components/App';



const app = new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    components: {
        'App': App
    }
});
