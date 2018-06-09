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
      name: 'queue-detail',
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
    },
    {
      path: '/analyze/detail/:type',
      name: 'analyze-detail',
      component: resolve => require(['@/components/analyze/detail'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/info/pay/:id/:name',
      name: 'pay',
      component: resolve => require(['@/components/info/pay'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/info/evaluate/:id/:name',
      name: 'info-evaluate',
      component: resolve => require(['@/components/info/evaluate'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/info/stores/:id/:name',
      name: 'stores',
      component: resolve => require(['@/components/info/stores'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/info/detail/:id/:name',
      name: 'info-detail',
      component: resolve => require(['@/components/info/detail'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/evaluate',
      name: 'my-evaluate',
      component: resolve => require(['@/components/my/evaluate/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/achievement',
      name: 'my-achievement',
      component: resolve => require(['@/components/my/achievement/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/work',
      name: 'my-work',
      component: resolve => require(['@/components/my/work/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/work-form',
      name: 'my-work-form',
      component: resolve => require(['@/components/my/work/form'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/attendance',
      name: 'my-attendance',
      component: resolve => require(['@/components/my/attendance/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/apply',
      name: 'my-apply',
      component: resolve => require(['@/components/my/attendance/apply'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/eat',
      name: 'my-eat',
      component: resolve => require(['@/components/my/eat/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/coupon',
      name: 'my-coupon',
      component: resolve => require(['@/components/my/coupon/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/set',
      name: 'my-set',
      component: resolve => require(['@/components/my/set/index'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    },
    {
      path: '/my/modifyPwd',
      name: 'my-modifyPwd',
      component: resolve => require(['@/components/my/set/modify-pwd'],resolve),
      meta: { // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
      }
    }
  ]
})
