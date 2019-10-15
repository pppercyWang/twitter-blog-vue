<template>
  <div class="home-container">
    <div class="header-wrap">
      <blog-header></blog-header>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="copyright">© 2019 wangwensheng</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogHeader from "@/components/header/Header.vue";
@Component({
  components: {
    BlogHeader
  }
})
export default class extends Vue {}
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
    min-height: 100%;
    .shake-control {
      display: inline;
    }
  }
  .footer{
    .copyright{
      height: 60px;
      line-height: 60px;
      text-align: center;
      color:#888888;
    }
  }
}
</style>