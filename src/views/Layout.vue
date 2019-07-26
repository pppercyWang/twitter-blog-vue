<template>
  <div class="home">
    <div class="header">
      <blog-header></blog-header>
    </div>
    <div class="welcome" id="welcome">
      <welcome></welcome>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogHeader from "@/components/BlogHeader.vue";
import Welcome from "@/components/Welcome.vue";
@Component({
  components: {
    BlogHeader,
    Welcome
  }
})
export default class extends Vue {
  private mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
  private handleScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (scrollTop <= 400) {
      document.getElementById("welcome")!.style.height = `${400 - scrollTop}px`;
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
}
.welcome {
  padding-top: 47px;
  width: 100%;
  height: 400px;
}
.blog-body {
  background-color: deepskyblue;
}
</style>