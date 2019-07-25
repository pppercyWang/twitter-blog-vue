import Vue from 'vue'
import VueRouter from 'vue-router'
import { Route } from 'vue-router'
declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}
// 扩充 this.$router
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route
  }
}