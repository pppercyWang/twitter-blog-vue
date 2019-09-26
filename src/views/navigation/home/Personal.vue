<template>
  <div class="container">
    <ArticleItem
      v-for="(item,index) in articleList"
      v-bind:key="index"
      :row="item"
    ></ArticleItem>
    <div class="footer">
      <div class="alert">{{this.hasMore?"正在加载...":"暂无更多文章..."}}</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import ArticleItem from "@/components/personal/articleItem/ArticleItem.vue";
import { apiArticleList } from "@/api/article";
@Component({
  components: {
    ArticleItem
  }
})
export default class extends Vue {
  private articleList = [];
  private dataList: any[] = [1, 2, 3, 4, 5, 6, 7, 8];
  private loading: boolean = false;
  private page: number = 1;
  private size: number = 10;
  private hasMore: boolean = true;
  public async fetchNewData() {
    try {
      const res = await apiArticleList(
        {
          Page: ++this.page,
          Size: this.size
        },
        null
      );
      if (res.Data.List.length === 0) {
        this.hasMore = false;
        this.page--;
      } else {
        this.articleList = this.articleList.concat(res.Data.List);
      }
    } catch (e) {
      this.$message.error(e.Msg);
    }
  }
  private async getArticleList() {
    try {
      const res = await apiArticleList(
        {
          Page: this.page,
          Size: this.size
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
  .footer {
    .alert {
      height: 80px;
      line-height: 80px;
      text-align: center;
    }
  }
}
</style>
