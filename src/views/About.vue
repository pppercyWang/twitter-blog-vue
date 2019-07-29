<template>
  <div class="index-page">
    <div class="fake-area" id="fake-area"></div>
    <div class="body">bbbbbbbbbb</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import IndexMenu from "@/components/IndexMenu.vue";
@Component({
  components: {
    IndexMenu
  }
})
export default class extends Vue {
  // private fixedFlag: boolean = false;
  // private unFixedFlag: boolean = true;
  // private mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }
  // private handleScroll() {
  //   const scrollTop =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop;
  //   if (scrollTop > 300) {
  //     if (!this.fixedFlag) {
  //       const obj = document!.getElementById("profile-nav");
  //       const obj2 = document!.getElementById("fake-area");
  //       obj!.style.position = "fixed";
  //       obj!.style.top = "77px";
  //       obj2!.style.position = "fixed";
  //       obj2!.style.top = "47px";
  //       this.fixedFlag = true;
  //       this.unFixedFlag = false;
  //     }
  //   } else {
  //     if (!this.unFixedFlag) {
  //       const obj = document!.getElementById("profile-nav");
  //       const obj2 = document!.getElementById("fake-area");
  //       obj!.style.position = "";
  //       obj!.style.top = "";
  //       obj2!.style.position = "";
  //       obj2!.style.top = "";
  //       this.unFixedFlag = true;
  //       this.fixedFlag = false;
  //     }
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.index-page {
  .fake-area {
    width: 100%;
    height: $height-fake-area;
    background-color: #f3f6f8;
  }
  .body {
    background-color: #ffffff;
    height: $height-excepted-header - $height-welcome - $height-fake-area -
      $height-profile-nav-wrap;
  }
}
</style>
