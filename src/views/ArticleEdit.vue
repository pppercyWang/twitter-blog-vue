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
    <blog-dialog
      @close="closeDialog"
      @submit="handleSubmit"
      v-if="dialogVisible"
      cancel="关闭窗口"
      confirm="添加卡密"
      title="添加卡密"
    >
      <check-box info="Javascript"></check-box>
      <check-box info="Vue"></check-box>
      <check-box info="React"></check-box>
      <check-box info="Nodejs"></check-box>
      <check-box info="Golang"></check-box>
      <check-box info="Element-ui"></check-box>
      <check-box info="Vant"></check-box>
      <check-box info="Express"></check-box>
      <check-box info="Egg.js"></check-box>
    </blog-dialog>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogButton from "@/components/common/BlogButton.vue";
import BlogDialog from "@/components/common/BlogDialog.vue";
import BlogInput from "@/components/common/BlogInput.vue";
import CheckBox from "@/components/common/CheckBox.vue";
import { apiSaveArticle } from "@/api/article";
@Component({
  components: {
    BlogButton,
    BlogInput,
    BlogDialog,
    CheckBox
  }
})
export default class extends Vue {
  private msg: string = "";
  private content: string = "";
  private dialogVisible: boolean = false;
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
  private handleSubmit() {
    console.log("1111111111");
  }
  private closeDialog() {
    this.dialogVisible = false;
  }
  private checkAuthentication() {
    console.log(sessionStorage.getItem("token"));
    if (
      sessionStorage.getItem("token") === null ||
      sessionStorage.getItem("token") === ""
    ) {
      this.$message.error("未登录，不能发布文章");
      return false;
    }
    return true;
  }
  private async saveArticle() {
    this.dialogVisible = true;
    // if (this.checkAuthentication()) {
    //   try {
    //     const res = await apiSaveArticle(
    //       {
    //         Content: this.content,
    //         ArticleTypeId: 2,
    //         Title: "123456",
    //         Personal: 0
    //       },
    //       null
    //     );
    //     this.$message.success(res.Msg);
    //   } catch (e) {
    //     this.$message.error(e.Msg);
    //   }
    // }
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
