import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Off-Topic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Lost_Found',
      name: 'Lost_Found',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Lost_Found.vue')
    }
    ,
    {
      path: '/Part-time',
      name: 'Part-time',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Part-time.vue')
    },
    {
      path: '/Club',
      name: 'Club',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Club.vue')
    },
    {
      path: '/Idles_items_transfer',
      name: 'Idles_items_transfer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Idles_items_transfer.vue')
    },
    {
      path: '/Campus_notification',
      name: 'Campus_notification',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Campus_notification.vue')
    }
  ]
})
