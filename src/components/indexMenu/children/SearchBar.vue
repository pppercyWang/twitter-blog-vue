<template>
  <div class="search-bar-wrap">
    <div class="back">
      <i class="iconfont percy-icon-fanhui" @click="closeSearchBar"></i>
    </div>
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
export default {
  data() {
    return {};
  },
  components: {
    SmallArticleItem
  },
  props: ["placeholder"],
  methods: {
    closeSearchBar() {
      this.$emit("onClose");
    }
  }
};
</script>
<style scoped lang="scss">
.search-bar-wrap {
  background-color: #ffffff;
  .back {
    height: 28px;
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
      transition: font-size 0.1s;
      &:hover {
        font-size: 22px;
        cursor: pointer;
      }
    }
  }
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
}
</style>