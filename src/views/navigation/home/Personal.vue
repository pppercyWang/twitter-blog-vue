<template>
  <div class="container">
    <ArticleItem
      v-for="(item,index) in articleList"
      v-bind:key="index"
      :title="item.Title"
      :des="item.Description"
    ></ArticleItem> 
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

import ArticleItem from "@/components/personal/ArticleItem.vue";
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
      console.log(this.articleList);
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
  margin-top: 20px;
  width: 920px;
  .test {
    height: 50px;
  }
}
</style>
