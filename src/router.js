import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/navigation/Layout.vue';
import About from '@/views/navigation/about/About.vue';
import Comment from '@/views/navigation/comment/Comment.vue';
import HomeLayout from '@/views/navigation/home/HomeLayout.vue';
import Life from '@/views/navigation/home/Life.vue';
import Skill from '@/views/navigation/home/Skill.vue';
import ArticleEdit from '@/views/ArticleEdit.vue';
import NotFound from '@/views/NotFound.vue';
import ArticleBrowser from '@/views/ArticleBrowser.vue';
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
              component: Skill,
            },
            {
              path: '/life',
              name: '生活',
              component: Life,
            },
          ]
        },
        {
          path: '/about',
          name: '关于',
          component: About,
        },
        {
          path: '/comment',
          name: '留言',
          component: Comment,
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