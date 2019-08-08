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
  private context = "";
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