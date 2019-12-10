<template>
  <div class="container">
    <!-- <ArticleItem
      v-for="item in articleList"
      @tagclick="handleTagClick"
      v-bind:key="item.ID"
      :row="item"
    ></ArticleItem>
    <div class="footer">
      <div class="alert">{{this.hasMore?"正在加载...":"暂无更多文章..."}}</div>
    </div> -->
    aaaaaaaaaaaa
  </div>
</template>
<script>
import ArticleItem from "@/components/personal/articleItem/ArticleItem.vue";
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
    async fetchNewData() {
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
          return false;
        } else {
          this.articleList = this.articleList.concat(res.Data.List);
          return true;
        }
      } catch (e) {
        this.$message.error(e.Msg);
      }
      return true;
    },
    async getArticleList() {
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
