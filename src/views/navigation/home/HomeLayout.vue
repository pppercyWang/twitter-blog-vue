<template>
  <div class="home-layout-container">
    <div class="welcome">
      <div class="welcome_msg">
        Welcome To
        <span class="shake">Percy</span>'s Blog
      </div>
    </div>
    <div class="fake-area" id="fake-area"></div>
    <index-menu class="index-menu"></index-menu>
    <div class="content-wrap">
      <div class="transition-wrap">
        <transition name="fade" mode="out-in">
          <router-view ref="rv"></router-view>
        </transition>
      </div>
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
    const scrollHeight = document.body.scrollHeight;
    const clientHeight = document.body.clientHeight;
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
    if (clientHeight + scrollTop === scrollHeight + 48) {
      const ref: any = this.$refs.rv; // ts对vue的支持不是很友好
      if (ref.fetchNewData) {
        ref.fetchNewData(); // 下拉加载
      }
    }
  }
  private beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>
<style lang="scss" scoped>
.home-layout-container {
  .welcome {
    height: $height-welcome;
    width: 100%;
    background-color: #f3f6f8;
    position: relative;
    .welcome_msg {
      position: absolute;
      font-weight: bold;
      top: 160px;
      left: 60%;
    }
  }
  .welcome:hover > .welcome_msg > .shake {
    display: inline-block;
    padding: 1px;
    font-size: 14px;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-name: shaky-slow;
    -ms-animation-name: shaky-slow;
    animation-name: shaky-slow;
    -webkit-animation-duration: 4s;
    -ms-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-delay: 0s;
    -ms-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-play-state: running;
    -ms-animation-play-state: running;
    animation-play-state: running;
  }
  .fake-area {
    width: 100%;
    height: $height-fake-area;
    background-color: #f3f6f8;
    z-index: 998;
  }
  .index-menu {
    z-index: 999;
  }
  .content-wrap {
    display: flex;
    justify-content: center;
    .transition-wrap {
      margin-left: 300px;
      display: inline-block;
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
}
</style>
