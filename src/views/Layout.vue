<template>
  <div class="home">
    <div class="header">
      <blog-header></blog-header>
    </div>
    <div class="body">
      <div class="router-view-area">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogHeader from "@/components/BlogHeader.vue";
@Component({
  components: {
    BlogHeader
  }
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
.header {
  z-index: 999;
  position: fixed;
  width: 100%;
}
.body {
  top: 47px;
  background: url(./../../public/img/welcome.jpg) no-repeat fixed top;
  background-size: 100% 600px;
  height: 1200px;
  position: relative;
  .router-view-area {
    background-color: $twitter-blue;
    position: absolute;
    height: 900px;
    width: 100%;
    bottom: 0;
  }
}
</style>