<template>
  <div class="container">
    <div class="header">
      <div class="title-input">
        <blog-input placeholder="请输入文章标题" width="100%" height="30" fontSize="18" v-model="title"></blog-input>
      </div>
      <div class="push-article">
        <blog-button info="发布文章" @click="saveArticle" type="primary"></blog-button>
      </div>
    </div>
    <div class="body">
      <mavon-editor v-model="content" @change="updateDoc" :toolbars="toolbars"></mavon-editor>
    </div>
    <blog-dialog
      @close="closeDialog"
      @submit="handleSubmit"
      v-if="dialogVisible"
      cancel="关闭窗口"
      confirm="添加卡密"
      title="添加卡密"
    >
      <form-item label="个人分类">
        <div class="scroller">
          <checkbox-group v-model="checkList">
            <checkbox
              v-for="(item,index) in checkboxData"
              v-bind:key="index"
              :label="item.Name"
              :value="item.ID"
            ></checkbox>
          </checkbox-group>
        </div>
      </form-item>
      <form-item label="文章类型">
        <radio-group v-model="radioIschecked">
          <radio label="个人" value="0"></radio>
          <radio label="收藏" value="1"></radio>
        </radio-group>
      </form-item>
    </blog-dialog>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogButton from "@/components/common/BlogButton.vue";
import BlogDialog from "@/components/common/BlogDialog.vue";
import BlogInput from "@/components/common/BlogInput.vue";
import Checkbox from "@/components/common/checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/common/checkbox/CheckboxGroup.vue";
import FormItem from "@/components/common/FormItem.vue";
import { apiArticleSave } from "@/api/article";
import { apiGetCategoryList } from "@/api/category";
import Radio from "@/components/common/radio/Radio.vue";
import RadioGroup from "@/components/common/radio/RadioGroup.vue";
@Component({
  components: {
    BlogButton,
    BlogInput,
    BlogDialog,
    Checkbox,
    CheckboxGroup,
    FormItem,
    Radio,
    RadioGroup
  }
})
export default class extends Vue {
  private radioIschecked = "0";
  private checkboxData = [];
  private checkList = [];
  private title: string = "";
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
  private async handleSubmit() {
    if (this.title.trim() === "") {
      this.$message.error("文章标题不能为空");
      return;
    }
    if (this.content.trim() === "") {
      this.$message.error("文章内容不能为空");
      return;
    }
    if (this.checkList.length === 0) {
      this.$message.error("请至少选择一个分类");
      return;
    }
    if (this.checkAuthentication()) {
      try {
        const res = await apiArticleSave(
          {
            Content: this.content,
            IDs: this.checkList.join(","),
            Title: this.title,
            Personal: this.radioIschecked
          },
          null
        );
        this.$message.success(res.Msg);
      } catch (e) {
        this.$message.error(e.Msg);
      }
    }
  }
  private updateDoc(markdown, html) {
    // 此时会自动将 markdown 和 html 传递到这个方法中
    console.log("markdown内容: " + markdown);
    console.log("html内容:" + markdown);
  }
  private closeDialog() {
    this.dialogVisible = false;
  }
  private checkAuthentication() {
    if (
      sessionStorage.getItem("token") === null ||
      sessionStorage.getItem("token") === ""
    ) {
      this.$message.error("未登录，不能发布文章");
      return false;
    }
    return true;
  }
  private async getCategoryList() {
    try {
      const res = await apiGetCategoryList({}, null);
      this.checkboxData = res.Data.List;
    } catch (e) {
      this.$message.error(e.Msg);
    }
  }
  private saveArticle() {
    this.dialogVisible = true;
  }
  private mounted() {
    this.getCategoryList();
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  div::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  div::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  div::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 10px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
  div::-webkit-scrollbar-corner {
    background: #179a16;
  }
  .scroller {
    overflow-y: auto;
    height: 140px;
  }
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
