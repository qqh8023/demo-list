import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import one from '../views/one'
import two from '../views/two'
import three from '../views/three'
// const index = resolve => require(['@/views/index.vue'], resolve)
// const index = r => require.ensure([], () => r(require('@/views/ruleManage/rule')), 'group1')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        { path: '/one', name: '首页', component: one },
        { path: '/two', name: '订单', component: two },
        { path: '/three', name: '其他', component: three }
      ]
    }
  ]
})
