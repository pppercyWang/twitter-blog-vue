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
      <form-item label="标签">
        <tag-inputer :max="3" @change="handleOnchange"></tag-inputer>
      </form-item>
      <form-item label="文章类型">
        <radio-group v-model="radioIschecked">
          <radio label="skill" value="0"></radio>
          <radio label="life" value="1"></radio>
        </radio-group>
      </form-item>
      <form-item label="isHostKey">
        <blog-input height="20" v-model="hostKey"></blog-input>
      </form-item>
    </blog-dialog>
  </div>
</template>
<script>
import BlogButton from "@/components/commons/button/BlogButton.vue";
import BlogDialog from "@/components/commons/dialog/BlogDialog.vue";
import BlogInput from "@/components/commons/input/BlogInput.vue";
import Checkbox from "@/components/commons/checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/commons/checkbox/CheckboxGroup.vue";
import FormItem from "@/components/commons/formItem/FormItem.vue";
import Radio from "@/components/commons/radio/Radio.vue";
import RadioGroup from "@/components/commons/radio/RadioGroup.vue";
import TagInputer from "@/components/commons/tagInputer/TagInputer.vue";
import { apiArticleSave } from "@/api/article";
import { apiGetCategoryList } from "@/api/category";

export default {
  data() {
    return {
      radioIschecked: "0",
      checkboxData: [],
      checkList: [],
      title: "",
      content: "",
      dialogVisible: false,
      tags: [],
      hostKey: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true // 保存（触发events中的save事件）
        /* 1.4.2 */
      }
    };
  },
  components: {
    BlogDialog,
    BlogButton,
    BlogInput,
    Checkbox,
    CheckboxGroup,
    FormItem,
    Radio,
    RadioGroup,
    TagInputer
  },
  props: ["label", "value"],
  methods: {
    handleOnchange(tags) {
      this.tags = tags;
    },
    async handleSubmit() {
      if (this.title.trim() === "") {
        this.$message.error("文章标题不能为空");
        return;
      }
      if (this.content.trim() === "") {
        this.$message.error("文章内容不能为空");
        return;
      }

      if (this.checkList.length === 0) {
        this.$message.error("请至少选择一个文章分类");
        return;
      }
      if (this.checkList.length > 3) {
        this.$message.error("最多选择三个文章分类");
        return;
      }
      if (this.hostKey === "") {
        this.$message.error("请输入hostKey");
        return;
      }
      try {
        const res = await apiArticleSave(
          {
            Content: this.content,
            CategoryIDs: this.checkList.join(","),
            Title: this.title,
            Personal: this.radioIschecked,   // personal 0 技能文章 1 生活文章
            Tags: this.tags.join(","),
            HostKey: this.hostKey
          },
          null
        );
        this.$message.success(res.Msg);
        this.dialogVisible = false;
      } catch (e) {
        this.$message.error(e.Msg);
      }
    },
    updateDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容: " + markdown);
      console.log("html内容:" + markdown);
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    async getCategoryList() {
      try {
        const res = await apiGetCategoryList({}, null);
        this.checkboxData = res.Data.List;
      } catch (e) {
        this.$message.error(e.Msg);
      }
    },
    saveArticle() {
      this.dialogVisible = true;
    }
  },
  created() {
    this.getCategoryList();
  }
};
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
    height: 120px;
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
