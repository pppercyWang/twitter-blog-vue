import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout.vue';
import NotFound from '@/views/NotFound.vue';
import Index from '@/views/indexPage/Index.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/404',
      name: '找不到页面',
      component: NotFound,
    },
    {
      path: '/',
      component: Layout,
      redirect: {path: "/welcome"},
      children: [
        {
          path: '/welcome',
          name: '首页',
          component: Index,
        },
      ]
    },
    {
      path: '/*',
      redirect: {path: '/404'}
    }
  ],
});
