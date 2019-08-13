import Vue from 'vue';
import App from '@/App.vue';
import router from './router';
import store from './store';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import Message from '@/components/common/message';
Vue.prototype.$message = Message.install;
Vue.use(mavonEditor);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
router.beforeEach((to, from, next) => {
  next();
});

