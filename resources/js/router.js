import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from './components/Home';
import Product from './components/Product';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/product/:id', component: Product, name: 'product', props: true },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
  })

export default router
