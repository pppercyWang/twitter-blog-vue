<template>
  <div class="container">
    <div class="article-list-wrap">
      <ArticleItem
        v-for="item in articleList"
        @tagclick="handleTagClick"
        v-bind:key="item.ID"
        :row="item"
      ></ArticleItem>
    </div>
    <div class="footer">
      <div class="alert">没有更多文章......</div>
    </div>
  </div>
  </div>
</template>
<script>
import ArticleItem from "@/components/home/articleItem/ArticleItem.vue";
import { apiArticleList } from "@/api/article";
export default {
  data() {
    return {
      articleList: [],
      dataList: [1, 2, 3, 4, 5, 6, 7, 8],
      loading: false,
      page: 1,
      size: 10,
      hasMore: true
    };
  },
  components: {
    ArticleItem
  },
  methods: {
    handleTagClick(text) {
      this.$parent.showSearchBarFlag(text);
    },
    async getArticleList() {
      try {
        const res = await apiArticleList(
          {
            Page: this.page,
            Size: 200,
            Personal: 1
          },
          null
        );
        this.articleList = res.Data.List;
      } catch (e) {
        this.$message.error(e.Msg);
      }
    },
   
  },
  created() {
    this.getArticleList();
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  width: 920px;
  .footer {
    .alert {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }
    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
