<template>
  <div class="search-bar-wrap" v-click-outside="closeSearchBar">
    <div class="search-wrap">
      <input :placeholder="placeholder" />
      <div class="search">
        <i class="iconfont percy-icon-fangdajing"></i>
      </div>
      <div class="underline"></div>
    </div>
    <div class="article-list">
      <SmallArticleItem></SmallArticleItem>
      <SmallArticleItem></SmallArticleItem>
      <SmallArticleItem></SmallArticleItem>
      <SmallArticleItem></SmallArticleItem>
      <SmallArticleItem></SmallArticleItem>
      <SmallArticleItem></SmallArticleItem>
      <SmallArticleItem></SmallArticleItem>
    </div>
  </div>
</template>
<script>
import SmallArticleItem from "@/components/personal/articleItem/SmallArticleItem.vue";
import clickOutside from "@/directives/vueClickOutSize";
export default {
  data() {
    return {
      flag: false
    };
  },
  components: {
    SmallArticleItem
  },
  directives: { clickOutside },
  props: ["placeholder"],
  methods: {
    closeSearchBar() {
      if (this.flag === false) {
        this.flag = true;
      } else {
        this.$emit("onClose");
      }
    },
    async getArticleList() {
      console.log("111111111");
    }
  },
  mounted() {
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