import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        component: () =>
            import ('../views/Shop.vue')
    },
    {
        path: '/shop/item/:id',
        name: 'item',
        component: () =>
            import ('../views/Shop-single.vue')
    },
    {
        path: '/shop/category/:category',
        name: 'category',
        component: () =>
            import ('../views/Category')
    },
    {
        path: '/cart/item',
        name: 'cart',
        component: () =>
            import ('../views/Cart.vue')
    },
    {
        path: '/cart/checkout',
        name: 'checkout',
        component: () =>
            import ('../views/Checkout.vue')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router