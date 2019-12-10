import Vue from 'vue';
import App from '@/App.vue';
import router from './router.js';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import Message from '@/components/commons/message';
Vue.use(Message);
Vue.use(mavonEditor);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
router.beforeEach((to, from, next) => {
  next();
});

