<template>
  <div class="container">
    <div class="header">
      <div class="title-input">
        <blog-input placeholder="请输入文章标题" width="100%" height="30" fontSize="18" v-model="msg"></blog-input>
      </div>
      <div class="push-article">
        <blog-button info="发布文章" @click="saveArticle" type="primary"></blog-button>
      </div>
    </div>
    <div class="body">
      <mavon-editor v-model="content" :toolbars="toolbars"></mavon-editor>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogButton from "@/components/BlogButton.vue";
import BlogInput from "@/components/BlogInput.vue";
import { apiSaveArticle } from "@/api/article";
@Component({
  components: {
    BlogButton,
    BlogInput
  }
})
export default class extends Vue {
  private msg = "";
  private content = "";
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
  private async saveArticle() {
    try {
      const res = await apiSaveArticle(
        {
          Content: this.content,
          ArticleTypeId: 2,
          Title: "123456",
          Personal: 0
        },
        null
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  .header {
    background-color: #ffffff;
    height: 10%;
    display: flex;
    align-items: center;
    .title-input {
      margin-left: 20px;
      height: 36px;
      width: 80%;
      display: inline-block;
    }
    .push-article {
      margin-left: 10px;
      height: 36px;
      width: 10%;
      display: inline-block;
    }
  }
  .body {
    width: 100%;
    height: 90%;
    .markdown-body {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
