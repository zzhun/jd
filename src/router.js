import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index/index'
import util from  './util/util'
import layout from  './views/layout/layout'
import zToast from './util/zToast'

Vue.use(zToast)
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '',
    routes: [
        {
            path: '/',
            redirect: 'layout',
        },
        {
            path:'/layout',
            name:'layout',
            component:layout,
            children:[
                {
                    path: '',
                    //name: 'index',
                    redirect:'index',
                    meta:{keepalive:true}
                },
                {
                    path: 'index',
                    name: 'index',
                    component: index,
                    meta:{keepalive:true}
                },
                {
                    path: 'types',
                    name: 'types',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/types/types.vue'),
                    meta:{keepalive:true}
                },
                {
                    path: 'shopCar',
                    name: 'shopCar',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/shopCar/shopCar.vue'),
                    meta:{keepalive:true}
                },
                {
                    path: 'my',
                    name: 'my',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/my/my.vue'),
                    meta:{requireAuth:true,keepalive:true}
                },
            ]
        },

        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/login/login.vue'),
        },
        {
            path:'/shopDetail/:id',
            name:'shopDetail',
            component:() => import('./components/shopDetail.vue'),
            meta:{keepalive:false}
        }
    ],
    //页面一进入时的滚动
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: to.meta.savedPosition ||0}
        }
    },
})
//全局前置守卫(不能在new的时候作为参数传入，否则会改写beforeEach函数，导致不生效)
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        console.log(router.app.$toast('ddd'))
        util.isLogin(next)
    }else{
        next()
    }
})
//全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
// router.afterEach((to, from) => {
//     util.overflowHide(to.fullPath)
// })
export default router

