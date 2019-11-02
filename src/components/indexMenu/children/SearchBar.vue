<template>
  <div class="search-bar-wrap" v-click-outside="closeSearchBar">
    <div class="search-wrap">
      <input :placeholder="placeholder" v-model="searchText"/>
      <div class="search" @click="clear()">
        <i
          :class="errorFlag==true?'iconfont percy-icon-cross-fill':'iconfont percy-icon-fangdajing'"
        ></i>
      </div>
      <div class="underline"></div>
    </div>
    <div class="article-list">
      <SmallArticleItem
        v-for="(item) in matchArticles"
        v-bind:key="item.ID"
        :row="item"
        @onTagClick="changeText"
      ></SmallArticleItem>
    </div>
  </div>
</template> 
<script>
import SmallArticleItem from "@/components/personal/articleItem/SmallArticleItem.vue";
import clickOutside from "@/directives/vueClickOutSize";
import { apiArticleList } from "@/api/article";
export default {
  data() {
    return {
      flag: false,
      searchText: "",
      articleList: [],
      matchArticles: [],
      placeholder: "find something...",
      errorFlag: true
    };
  },
  components: {
    SmallArticleItem
  },
  directives: { clickOutside },
  props: ["propText"],
  watch: {
    searchText(val) {
      if (val === "") {
        this.errorFlag = false;
      } else {
        this.errorFlag = true;
      }
      this.getMatchArticle();
    }
  },
  methods: {
    clear() {
      if (this.errorFlag === true) {
        this.searchText = "";
      }
    },
    closeSearchBar() {
      if (this.flag === false) {
        this.flag = true;
      } else {
        this.$emit("onClose");
      }
    },
    changeText(text) {
      this.searchText = text;
    },
    getMatchArticle() {
      if (this.articleList.length !== 0) {
        const newArr = this.articleList.filter(item => {
          return (
            item.Tags.indexOf(this.searchText) !== -1 ||
            item.Title.indexOf(this.searchText) !== -1
          );
        });
        this.matchArticles = newArr;
        console.log(this.matchArticles);
      }
    },
    async getArticleList() {
      try {
        const res = await apiArticleList(
          {
            Page: 1,
            Size: 200
          },
          null
        );
        this.articleList = res.Data.List;
        if (this.searchText === "") {
          this.matchArticles = this.articleList;
        } else {
          this.getMatchArticle();
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    if (this.propText) {
      this.searchText = this.propText;
    }
    this.getArticleList();
  }
};
</script>
<style scoped lang="scss">
.search-bar-wrap {
  background-color: #ffffff;
  width: 280px;
  .search-wrap {
    input {
      height: 28px;
      font-size: 14px;
      width: 230px;
      border: 0px;
      padding: 0px;
    }
    input:focus {
      outline: none;
    }
    .search {
      display: inline-block;
      vertical-align: top;
      width: 28px;
      height: 28px;
      position: relative;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        transition: font-size 0.1s;
      }
      &:hover {
        cursor: pointer;
        i {
          font-size: 22px;
        }
      }
    }
    .underline {
      width: 100%;
      border-bottom: 2px solid black;
    }
  }
  .article-list {
    height: 600px;
    overflow-y: scroll;
  }
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
}
</style>