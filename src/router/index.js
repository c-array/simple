import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login/index'],resolve)
    },
    {
      path: '/main',
      name: 'main',
      component: resolve => require(['@/components/main/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      },
      children:[
        {
          path: 'queue/:id',
          name: 'queue',
          component: resolve => require(['@/components/queue/index'],resolve),
          meta: { // 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true,
          }
        },
        {
          path: 'analyze/:id',
          name: 'analyze',
          component: resolve => require(['@/components/analyze/index'],resolve),
          meta: { // 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true,
          }
        },
        {
          path: 'share/:id',
          name: 'share',
          component: resolve => require(['@/components/share/index'],resolve),
          meta: { // 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true,
          }
        },
        {
          path: 'info/:id',
          name: 'info',
          component: resolve => require(['@/components/info/index'],resolve),
          meta: { // 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true,
          }
        },
        {
          path: 'my/:id',
          name: 'my',
          component: resolve => require(['@/components/my/index'],resolve),
          meta: { // 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true,
          }
        }
      ]
    },
    {
      path: '/queue/detail',
      name: 'detail',
      component: resolve => require(['@/components/queue/detail'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/queue/user',
      name: 'user',
      component: resolve => require(['@/components/queue/user'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/queue/evaluate',
      name: 'evaluate',
      component: resolve => require(['@/components/queue/evaluate'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/queue/reference',
      name: 'reference',
      component: resolve => require(['@/components/queue/reference'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    }
  ]
})
