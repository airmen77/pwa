import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      icon: 'outline-store_mall_directory-24px.svg',
      component: Home
    },
    {
      path: '/about',
      // route level code-splitting
      name: 'about',
      // this generates a separate chunk (about.[hash].js) for this route
      icon: 'outline-info-24px.svg',
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/list',
      name: 'list',
      icon: 'outline-list-24px.svg',
      component: () => import('./views/List.vue')
    },
    {
      path: '*',
      component: Home
    }
  ]
})
