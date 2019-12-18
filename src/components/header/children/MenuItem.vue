<template>
  <div class="menu-item-wrap" :class="{'active':active}" @click="push">
    <div class="top">{{title}}</div>
    <div class="bottom">
      <div class="blue"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    };
  },
  props: ["title", "to"],
  watch: {
    $route(to, from) {
      if (this.to === "/welcome") {
        if (to.path === "/welcome" || to.path === "/life") {
          this.active = true;
        } else {
          this.active = false;
        }
      }
      if (this.to === "/about") {
        if (to.path === "/about") {
          this.active = true;
        } else {
          this.active = false;
        }
      }
      if (this.to === "/comment") {
        if (to.path === "/comment") {
          this.active = true;
        } else {
          this.active = false;
        }
      }
    }
  },
  methods: {
    push() {
      this.$router.push(this.to);
    }
  },
  created() {
    if (this.to === "/welcome") {
      if (this.$route.path === "/welcome" || this.$route.path === "/life") {
        this.active = true;
      } else {
        this.active = false;
      }
    }
    if (this.to === "/about") {
      if (this.$route.path === "/about") {
        this.active = true;
      } else {
        this.active = false;
      }
    }
    if (this.to === "/comment") {
      if (this.$route.path === "/comment") {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.menu-item-wrap {
  height: 100%;
  width: 80px;
  .top {
    height: 90%;
    text-align: center;
    line-height: 42px;
    color: $twitter-font;
    font-weight: bold;
  }
  .bottom {
    height: 10%;
    position: relative;
    .blue {
      background-color: $twitter-blue;
      height: 0px;
      width: 80px;
      transition: height 0.1s;
      bottom: 0px;
      position: absolute;
    }
  }
}
.active {
  .bottom {
    .blue {
      height: 2px;
    }
  }
}
:hover {
  cursor: pointer;
}
:hover > .bottom > .blue {
  height: 2px;
}
:hover > .top {
  color: $twitter-blue;
}
</style>