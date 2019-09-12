<template>
  <div class="index-page">
    <div class="fake-area" id="fake-area"></div>
    <index-menu class="header"></index-menu>
    <div class="body">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import IndexMenu from "@/components/indexMenu/IndexMenu.vue";
import { Action, Mutation, State, Getter } from "vuex-class";
@Component({
  components: {
    IndexMenu
  }
})
export default class extends Vue {
  @Action("bigHeadingShowTrue") private actionBigHeadingShowTrue;
  @Action("bigHeadingShowFalse") private actionBigHeadingShowFalse;
  private fixedFlag: boolean = false;
  private unFixedFlag: boolean = true;
  private mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
  private handleScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (scrollTop > 300) {
      if (!this.fixedFlag) {
        this.actionBigHeadingShowFalse();
        const obj = document!.getElementById("profile-nav");
        const obj2 = document!.getElementById("fake-area");
        obj!.style.position = "fixed";
        obj!.style.top = "77px";
        obj2!.style.position = "fixed";
        obj2!.style.top = "47px";
        this.fixedFlag = true;
        this.unFixedFlag = false;
      }
    } else {
      if (!this.unFixedFlag) {
        this.actionBigHeadingShowTrue();
        const obj = document!.getElementById("profile-nav");
        const obj2 = document!.getElementById("fake-area");
        obj!.style.position = "";
        obj!.style.top = "";
        obj2!.style.position = "";
        obj2!.style.top = "";
        this.unFixedFlag = true;
        this.fixedFlag = false;
      }
    }
  }
  private beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>
<style lang="scss" scoped>
.index-page {
  .fake-area {
    width: 100%;
    height: $height-fake-area;
    background-color: #f3f6f8;
    z-index: 998;
  }
  .header {
    z-index: 999;
  }
  .body {
    background-color: $backgroud-main;
    display: flex;
    justify-content: center;
    .fade-enter-active,
    .fade-leave-active {
      transition: all 0.2s ease;
    }
    .fade-enter,
    .fade-leave-active {
      opacity: 0;
    }
  }
}
</style>
