import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/navigation/Layout.vue';
import About from '@/views/navigation/about/About.vue';
import HomeLayout from '@/views/navigation/home/HomeLayout.vue';
import Collection from '@/views/navigation/home/Collection.vue';
import Personal from '@/views/navigation/home/Personal.vue';
import ArticleEdit from '@/views/ArticleEdit.vue';
import NotFound from '@/views/NotFound.vue';
import ArticleBrowser from '@/views/ArticleBrowser.vue';
import {
  format
} from 'path';
Vue.use(Router);
export default new Router({
  routes: [{
      path: '/404',
      name: '找不到页面',
      component: NotFound,
    },
    {
      path: '/',
      component: Layout,
      redirect: {
        path: "/welcome"
      },
      children: [{
          path: '/home',
          name: '首页',
          component: HomeLayout,
          children: [{
              path: '/welcome',
              name: '文章',
              component: Personal,
              p:'home'
            },
            {
              path: '/collections',
              name: '收藏',
              component: Collection,
              p: 'home'
            },
          ]
        },
        {
          path: '/about',
          name: '关于',
          component: About,
        },
        {
          path: '/article/:id',
          name: '文章浏览',
          component: ArticleBrowser,
        },
      ]
    },
    {
      path: '/article/edit/:articleID',
      component: ArticleEdit,
    },
    {
      path: '/*',
      redirect: {
        path: '/404'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (from.name === '关于' && to.name == '文章') {
      return {
        x: 0,
        y: 0
      }
    }
    if (to.name === '关于') {
      return {
        x: 0,
        y: 0
      }
    }
  }
});