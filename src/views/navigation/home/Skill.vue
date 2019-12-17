<template>
  <div class="container">
    <ArticleItem
      v-for="item in articleList"
      @tagclick="handleTagClick"
      v-bind:key="item.ID"
      :row="item"
    ></ArticleItem>
    <div class="footer">
      <div class="alert loading" v-show="loading">
        <img
          src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/mantpl/img/base/loading_72b1da62.gif"
        />
        文章加载中......
      </div>
      <div class="alert" v-show="!hasMore">没有更多文章......</div>
    </div>
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
      this.loading = true;
      try {
        const res = await apiArticleList(
          {
            Page: ++this.page,
            Size: this.size,
            Personal: 0
          },
          null
        );
        if (res.Data.List.length === 0) {
          this.hasMore = false;
          this.page--;
        } else {
          this.articleList = this.articleList.concat(res.Data.List);
        }
        this.loading = false;
      } catch (e) {
        this.$message.error(e.Msg);
      }
    },
    async getArticleList() {
      try {
        const res = await apiArticleList(
          {
            Page: this.page,
            Size: this.size,
            Personal: 0
          },
          null
        );
        this.articleList = res.Data.List;
        localStorage.setItem("skillTotal", res.Data.Total);
        this.$bus.$emit("articleCount");
      } catch (e) {
        this.$message.error(e.Msg);
      }
    },
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const temp = clientHeight + Math.floor(scrollTop);
      if (this.hasMore) {
        if (
          temp === scrollHeight ||
          temp === scrollHeight + 1 ||
          temp === scrollHeight - 1
        ) {
          if (!this.loading) {
            this.fetchNewData();
          }
        }
      }
    }
  },
  created() {
    this.getArticleList();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
