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
import ArticleItem from "@/components/personal/articleItem/ArticleItem.vue";
import { apiArticleList } from "@/api/article";
@Component({
  components: {
    ArticleItem,
  }
})
export default class extends Vue {
  private articleList = [];
  private dataList: any[] = [1, 2, 3, 4, 5, 6, 7, 8];
  private loading: boolean = false;
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
  margin-top: 20px;
  width: 920px;
  .test {
    height: 50px;
  }
}
</style>
