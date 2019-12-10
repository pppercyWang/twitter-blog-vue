<template>
  <div class="home-container">
    <div class="header-wrap">
      <blog-header></blog-header>
    </div>
    <div class="body">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer">
      <div class="copyright">© 2019 wangwensheng</div>
    </div>
  </div>
</template>
<script>
import BlogHeader from "@/components/header/Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    BlogHeader
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.home-container {
  .header-wrap {
    top: 0;
    left: 0;
    z-index: 999;
    position: fixed;
    width: 100%;
  }
  .body {
    margin-top: 48px;
    min-height: 800px;
    .shake-control {
      display: inline;
    }
  }
  .footer {
    .copyright {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #888888;
    }
  }
}
</style>