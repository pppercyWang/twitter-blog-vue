import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout.vue';
import NotFound from '@/views/NotFound.vue';
import About from '@/views/About.vue';
import IndexLayout from '@/views/indexPage/IndexLayout.vue';
import ArticleCollection from '@/views/indexPage/ArticleCollection.vue';
import ArticlePersonal from '@/views/indexPage/ArticlePersonal.vue';
import ArticleEdit from '@/views/ArticleEdit.vue';
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
      redirect: { path: "/welcome" },
      children: [
        {
          path: '/index',
          name: '首页',
          component: IndexLayout,
          children: [
            {
              path: '/welcome',
              name: '文章',
              component: ArticlePersonal,
            },
            {
              path: '/collections',
              name: '收藏',
              component: ArticleCollection,
            },
          ]
        },
        {
          path: '/about',
          name: '关于',
          component: About,
        },
      ]
    },
    {
      path: '/article/edit/:articleID',
      component: ArticleEdit,
    },
    {
      path: '/*',
      redirect: { path: '/404' }
    }
  ],
});
