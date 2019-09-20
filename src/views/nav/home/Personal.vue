<template>
  <div class="container">
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
    <div class="test"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test"></div>
    <div class="test"></div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

import ArticleItem from "@/components/articlePersonal/ArticleItem.vue";
import { apiArticleList } from "@/api/article";
@Component({
  components: {
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
  width: 900px;
  margin: 10px;
  .test {
    height: 50px;
  }
}
</style>
