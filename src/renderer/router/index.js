import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zoomeye',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path:'/',
      name:'zoomeye',
      component:require('@/components/Login').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
