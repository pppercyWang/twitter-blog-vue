import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  routes: [{
      path: '/404',
      name: '找不到页面',
      component: () => import('@/views/NotFound.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/navigation/Layout.vue'),
      redirect: {
        path: "/welcome"
      },
      children: [{
          path: '/home',
          name: '首页',
          component: () => import('@/views/navigation/home/HomeLayout.vue'),
          children: [{
              path: '/welcome',
              name: '文章',
              component: () => import('@/views/navigation/home/Skill.vue'),
            },
            {
              path: '/life',
              name: '生活',
              component:  () => import('@/views/navigation/home/Life.vue'),
            },
          ]
        },
        {
          path: '/about',
          name: '关于',
          component: () => import('@/views/navigation/about/About.vue'),
        },
        {
          path: '/comment',
          name: '留言',
          component: () => import('@/views/navigation/comment/Comment.vue'),
        },
        {
          path: '/article/:id',
          name: '文章浏览',
          component:  () => import('@/views/ArticleBrowser.vue'),
        },
      ]
    },
    {
      path: '/article/edit/:articleID',
      component: () => import('@/views/ArticleEdit.vue'),
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