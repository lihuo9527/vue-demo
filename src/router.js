import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const About = () => import(/* webpackChunkName: "about" */ "./views/About.vue");
// const About = r => require.ensure([], () => r(require('@/views/About')), 'About')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '',
      redirect: '/home'
    }
  ]
})
