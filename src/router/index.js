import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SystemBulletin from '@/components/SystemBulletin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import Unavailable from '@/components/Unavailable'
import User from '@/components/User'
import Department from '@/components/Department'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sys'
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/sys',
          name: 'SystemBulletin',
          component: SystemBulletin
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: '/department',
          name: 'Department',
          component: Department
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/503',
      name: 'Unavailable',
      component: Unavailable
    }
  ]
})
