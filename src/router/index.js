import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "group-foo" */ '../view/home')
const Cinema = () => import(/* webpackChunkName: "group-foo" */ '../view/cinema')
const Mine  = () => import(/* webpackChunkName: "group-foo" */ '../view/mine')
const Error = () => import(/* webpackChunkName: "group-foo" */ '../view/error')
const City = () => import(/* webpackChunkName: "group-foo" */ '../view/city')
const Search = () => import(/* webpackChunkName: "group-foo" */ '../view/search')
const HomeHot = () => import(/* webpackChunkName: "group-foo" */ '../view/home/HomeHot.vue')
const HomeComing = () => import(/* webpackChunkName: "group-foo" */ '../view/home/HomeComing.vue')

Vue.use( VueRouter )

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            redirect:'/home/hot',
            children:[
                {
                    path:'hot',
                    component:HomeHot,
                    name:'hot'
                },{
                    path:'coming',
                    component:HomeComing,
                    name:'coming'
                }
            ]
        },
        {
            path:'/cinema',
            component:Cinema
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'*',
            component:Error
        }
    ]
})

export default router