<template>
  <div class="menu-item-wrap" :class="active === title?'active':''" @click="push">
    <div class="top">{{title}}</div>
    <div class="bottom">
      <div class="blue"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "to", "active"],
  methods: {
    push() {
      this.$emit("itemclick", this.title);
      this.$router.push(this.to);
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