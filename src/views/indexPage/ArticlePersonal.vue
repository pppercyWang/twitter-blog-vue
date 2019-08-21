<template>
  <div class="container">
    <div class="left">
      <div class="left-wrap">
        <blogger-info></blogger-info>
      </div>
    </div>
    <div class="center">
      <article-item v-for="(item,index) in articleList" v-bind:key="index" :title="item.Title" :des="item.Description"></article-item>
    </div>
    <div class="right">Right</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BloggerInfo from "@/components/articlePersonal/BloggerInfo.vue";
import ArticleItem from "@/components/articlePersonal/ArticleItem.vue";
import { apiArticleList } from "@/api/article";
@Component({
  components: {
    BloggerInfo,
    ArticleItem
  }
})
export default class extends Vue {
  private articleList = [];
  private async getArticleList() {
    try {
      const res = await apiArticleList(
        {
          Page: 1,
          Size: 10
        },
        null
      );
      this.articleList = res.Data.List;
    } catch (e) {
      this.$message.error(e.Msg);
    }
  }
  private mounted() {
    this.getArticleList();
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 1220px;
  height: $height-excepted-header - $height-welcome;
  position: relative;
  margin-top: 10px;
  .left {
    width: 300px;
    height: 100%;
    background-color: $backgroud-main;
    position: absolute;
    left: 0;
    top: 0;
    .left-wrap {
      margin-top: 40px;
    }
  }
  .center {
    width: 500px;
    height: 100%;
    background-color: #ffffff;
    margin: 0px 310px 0 310px;
    border-radius: 3px; 
  }
  .right {
    width: 300px;
    height: 100%;
    background-color: $backgroud-main;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
