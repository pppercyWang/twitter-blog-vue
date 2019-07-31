<template>
  <div>
    <div class="profile-nav-wrap" id="profile-nav">
      <div class="profile-heading">
        <profile-heading></profile-heading>
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
        <blog-button @click="test" info="关注"></blog-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import MenuItem from "@/components/indexMenu/MenuItem.vue";
import ProfileHeading from "@/components/indexMenu/ProfileHeading.vue";
import BlogButton from "@/components/BlogButton.vue";
@Component({
  components: {
    MenuItem,
    ProfileHeading,
    BlogButton
  }
})
export default class extends Vue {
  private test() {
    console.log("111111111");
  }
}
</script>
<style scoped lang="scss">
.fake-area {
  width: 100%;
  height: $height-fake-area;
  background-color: #f3f6f8;
}
.profile-nav-wrap {
  background-color: #ffffff;
  width: 100%;
  height: $height-profile-nav-wrap;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
  box-shadow: 1px 1px 2px #cbcbcb;
  position: relative;
  .profile-heading {
    position: absolute;
    height: 62px;
    left: 15%;
    width: 20%;
  }
  .profile-nav-list {
    position: absolute;
    height: 62px;
    left: 35%;
    width: 65%;
    .menu-item {
      display: inline-block;
    }
  }
  .right-btn {
    position: absolute;
    right: 20%;
    top: 10px;
  }
}
</style>