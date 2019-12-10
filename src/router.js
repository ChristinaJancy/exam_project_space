import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'
import VueMouseParallax from 'vue-mouse-parallax'
import Home from './views/Home.vue'
import Planet from './views/Planet.vue'
import Star from './views/Star.vue'
import Sun from './views/Sun.vue'
import Rocket from './views/Rocket.vue'
import Astronaut from './views/Astronaut.vue'
import Event from './views/Event.vue'
import Drawing from './views/Drawing.vue'
import Register from './components/Register.vue'

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
    {
      path: '/planet',
      name: 'planet',
      component: Planet
    }, 
    {
      path: '/star',
      name: 'star',
      component: Star
    },  
    {
      path: '/sun',
      name: 'sun',
      component: Sun
    },  
    {
      path: '/rocket',
      name: 'rocket',
      component: Rocket
    },  
    {
      path: '/astronaut',
      name: 'astronaut',
      component: Astronaut
    },  
    {
      path: '/event',
      name: 'event',
      component: Event
    },  
    {
      path: '/drawing',
      name: 'drawing',
      component: Drawing
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },    
  ]
})



