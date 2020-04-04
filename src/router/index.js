import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchOrder from "../views/SearchOrder";
import AddOrder from "../views/AddOrder";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        redirect: "/home/search",
        component: Home,
        children: [
            {
                path: "/home/search",
                component: SearchOrder
            },{
                path: "/home/add",
                component: AddOrder
            },
            {
                path: "/home/users",
                component: AddOrder
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
