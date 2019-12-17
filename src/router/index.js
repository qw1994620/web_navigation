import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Updatelog from '@/components/Updatelog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/updatelog',
      name: 'Updatelog',
      component: Updatelog
    },
  ]
})
