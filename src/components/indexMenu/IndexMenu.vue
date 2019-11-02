<template>
  <div class="cantainer" id="profile-nav">
    <div class="profile-nav-wrap">
      <div class="profile-heading">
        <!-- <profile-heading></profile-heading> -->
      </div>
      <div class="blogger-about">
        <BloggerInfo
          v-if="!isShowSearchBar"
          @fileclick="showSearchBar"
          class="animated fadeInUp"
        ></BloggerInfo>
        <SearchBar
          v-else
          :propText="searchBarText"
          @onClose="closeSearchBar"
          class="animated bounceInLeft"
        ></SearchBar>
      </div>
      <div class="profile-nav-list">
        <menu-item
          class="menu-item"
          title="文章"
          number="1,276"
          index="/welcome"
          :default-active="true"
        ></menu-item>
        <menu-item class="menu-item" title="收藏" number="5" index="/collections"></menu-item>
      </div>
      <div class="right-btn">
        <div class="right">
          <blog-button @click="pushArticleEdit" info="写文章"></blog-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/indexMenu/children/MenuItem.vue";
import ProfileHeading from "@/components/indexMenu/children/ProfileHeading.vue";
import BlogButton from "@/components/commons/button/BlogButton.vue";
import BloggerInfo from "@/components/indexMenu/children/BloggerInfo.vue";
import SearchBar from "@/components/indexMenu/children/SearchBar.vue";
export default {
  data() {
    return {};
  },
  props: ["isShowSearchBar", "searchBarText"],
  components: {
    MenuItem,
    BloggerInfo,
    ProfileHeading,
    BlogButton,
    SearchBar
  },
  methods: {
    closeSearchBar() {
      this.$emit("closeSearchBar");
    },
    pushArticleEdit() {
      this.$router.push({
        path: "/article/edit/0"
      });
    },
    showSearchBar() {
      this.$emit("showSearchBar");
    }
  }
};
</script>
<style scoped lang="scss">
.fake-area {
  width: 100%;
  height: $height-fake-area;
  background-color: #f3f6f8;
}
.cantainer {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  height: $height-profile-nav-wrap;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
  box-shadow: 1px 1px 2px #cbcbcb;
  .profile-nav-wrap {
    width: 1220px;
    position: relative;
    .blogger-about {
      position: absolute;
      top: 100px;
    }
    .profile-heading {
      position: absolute;
      height: 62px;
      left: 0px;
      width: 310px;
    }
    .profile-nav-list {
      position: absolute;
      height: 62px;
      left: 310px;
      width: 610px;
      .menu-item {
        display: inline-block;
      }
    }
    .right-btn {
      position: absolute;
      right: 0px;
      width: 300px;
      top: 10px;
      .right {
        position: absolute;
        right: 0px;
      }
    }
  }
}
</style>