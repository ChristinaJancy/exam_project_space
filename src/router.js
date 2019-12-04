import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'
import VueMouseParallax from 'vue-mouse-parallax'
import Home from './views/Home.vue'

Vue.use(Router, VueMouseParallax)

export default new Router({
  base: process.env.BASE_URL, scrollBehavior(){
      document.getElementById('app').scrollIntoView();
  },
  routes: [
    {
        path: '/games',
        name: 'games',
        component: Games
    },  
    {
      path: '/',
      name: 'home',
      component: Home
  },  
  ]
})

