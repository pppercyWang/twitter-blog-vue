<template>
  <div class="home">
    <div class="header">
      <blog-header></blog-header>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
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
.home {
  .header {
    z-index: 1000;
    position: fixed;
    width: 100%;
  }
  .body {
    padding-top: $height-header;

    .shake-control {
      display: inline;
    }
  }
}
</style>