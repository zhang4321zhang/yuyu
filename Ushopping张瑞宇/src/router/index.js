import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入一级路由
import Index from '@/components/views/index'
import goodList from '@/components/views/goodList'
import goodDetail from '@/components/views/goodDetail'
import Login from '@/components/views/Login'
import Register from '@/components/views/register'


//引入二级路由
import Home from '@/components/pages/home'
import Cart from '@/components/pages/cart'
import Mine from '@/components/pages/mine'
import Sort from '@/components/pages/sort'
import orderConfirm from '@/components/pages/orderConfirm'
export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/orderConfirm',
          component: orderConfirm
        },
        {
          path: '/sort',
          component: Sort
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/mine',
          component: Mine
        },
        {
          path: '',
          redirect: '/home'
        },
      ]
    },
    {
      path: '/goodList',
      component: goodList
    },
    {
      path: '/goodDetail',
      component: goodDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
