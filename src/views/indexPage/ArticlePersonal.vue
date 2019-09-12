<template>
  <div class="container">
    <div class="left">
      <!-- <blogger-info></blogger-info> -->
    </div>
    <div class="center">
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
    </div>
    <div class="right"></div>
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
  display: flex;
  margin: 10px;
}
.left,
.right {
  width: 300px;
  margin: 10px;
  background-color: #999;
}
.center {
  flex: 1;
  margin: 10px; /*左右margin不会叠加*/
  background-color: #f00;
  .test {
    height: 150px;
  }
}
</style>
