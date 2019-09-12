<template>
  <div class="home">
    <div class="header">
      <blog-header></blog-header>
    </div>
    <div class="body">
      <div class="welcome">
        <div class="welcome_msg">
          Welcome To
          <span class="shake">Percy</span>'s Blog
        </div>
      </div>
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
import BlogHeader from "@/components/header/Header.vue";
@Component({
  components: {
    BlogHeader
  }
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
.header {
  z-index: 1000;
  position: fixed;
  width: 100%;
}
.body {
  top: $height-header;
  position: relative;
  .welcome {
    height: $height-welcome;
    width: 100%;
    background-color: #f3f6f8;
    .welcome_msg {
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
  .router-view-area {
    width: 100%;
    bottom: 0;
  }
  .shake-control {
    display: inline;
  }
}
</style>