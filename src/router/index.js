import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/info/:id/:name',
    name: 'Info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/name',
    name: 'Name',
    redirect:'/name/b',  //嵌套路由重定向地址
    component: () => import('../views/Name.vue'),
    children:[
      {
        path: 'a',
        component:()=>import ('../views/a/index.vue')
      },
      {
        path: 'b',
        component:()=>import ('../views/b/index.vue')
      },
      {
        path: 'c',
        component:()=>import ('../views/c/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
