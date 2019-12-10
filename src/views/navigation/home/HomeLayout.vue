<template>
  <div class="home-layout-container">
    <div class="welcome">
      <div class="welcome_msg">
        Welcome To
        <span class="shake">Percy</span>'s Blog
      </div>
    </div>
    <div class="fake-area" id="fake-area"></div>
    <index-menu
      class="index-menu"
      :isShowSearchBar="searchBarFlag"
      @showSearchBar="showSearchBarFlag"
      @closeSearchBar="closeSearchBar"
      :searchBarText="searchBarText"
      ref="indexMenu"
    ></index-menu>
    <div class="content-wrap">
      <div class="transition-wrap">
        <transition name="fade" mode="out-in">
          <router-view ref="rv"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import IndexMenu from "@/components/indexMenu/IndexMenu.vue";
export default {
  components: {
    IndexMenu
  },
  data() {
    return {
      fetchFlag: true,
      searchBarFlag: false,
      searchBarText: "find someting...",
      bigHeadShow: true
    };
  },
  methods: {
    closeSearchBar(flag) {
      if (flag !== 0) {
        this.$refs.indexMenu.$refs.searchBar.searchText = flag;
      } else {
        this.searchBarFlag = false;
        this.searchBarText = "find something...";
      }
    },
    showSearchBarFlag(text) {
      this.searchBarFlag = true;
      if (text) {
        this.searchBarText = text;
      } else {
        this.searchBarText = "";
      }
    },
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const temp = clientHeight + Math.floor(scrollTop);
      if (this.fetchFlag) {
        if (
          temp === scrollHeight ||
          temp === scrollHeight + 1 ||
          temp === scrollHeight - 1
        ) {
          const ref = this.$refs.rv;
          if (ref.fetchNewData) {
            const $this = this;
            const res = ref.fetchNewData();
            if (!res) {
              $this.fetchFlag = false;
            }
          }
        }
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
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
    z-index: 998;
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
