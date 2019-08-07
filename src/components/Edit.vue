<template>
  <div class="article-wrap">
    <mavon-editor
      class="md"
      :value="context"
      :subfield="subfield"
      :defaultOpen="defaultOpen"
      :toolbarsFlag="toolbarsFlag"
      :editable="editable"
      :scrollStyle="scrollStyle"
    ></mavon-editor>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  private context =
    "\r\n``` bash\r\n# install dependencies\r\nnpm install\r\n\r\n\r\n# serve with hot reload at localhost:8081\r\nnpm run dev\r\n\r\n# build for production with minification\r\nnpm run build\r\n\r\n```\r\n# Folder structure\r\n* build - webpack config files\r\n* config - webpack config files\r\n* dist - build\r\n* src -your app\r\n    * api\r\n    * assets\r\n    * lib 封装了axios 和 工具类\r\n    * components - \r\n    * styles\r\n    * views - 视图\r\n    * vuex\r\n    * App.vue\r\n    * main.js - main file\r\n    * routes.js\r\n* static - static assets\r\n\r\n# JWT说明：\r\n``` bash\r\n1. 登录成功后获得userId，将userId存在sessionStorage\r\n2. 在http.js设置了拦截器，每次访问接口都会进入拦截器设置头部信息等\r\n3. token在这里的getToken方法生成。每次访问接口因为时间戳的不同，token也不同\r\n```\r\n";
  private subfield = false; // 单双栏模式
  private defaultOpen = "preview"; // edit： 默认展示编辑区域 ， preview： 默认展示预览区域
  private editable = false;
  private toolbarsFlag = false;
  private scrollStyle = true;
  private toolbars = {
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    mark: true, // 标记
    superscript: true, // 上角标
    quote: true, // 引用
    ol: true, // 有序列表
    link: true, // 链接
    imagelink: true, // 图片链接
    help: true, // 帮助
    code: true, // code
    subfield: true, // 是否需要分栏
    fullscreen: true, // 全屏编辑
    readmodel: true, // 沉浸式阅读
    /* 1.3.5 */
    undo: true, // 上一步
    trash: true, // 清空
    save: true, // 保存（触发events中的save事件）
    /* 1.4.2 */
    navigation: true // 导航目录
  };
}
</script>
<style scoped lang="scss">
</style>