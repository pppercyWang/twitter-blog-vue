<template>
  <div class="menu-item-wrap" @click="push">
    <div class="top">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="number">
        <span :class="[active?'active':'']">{{number}}</span>
      </div>
    </div>
    <div class="bottom">
      <div :class="[blue?'blue':'', active?'active':'']"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blue: true,
      active: false
    };
  },
  props: ["defaultActive", "title", "number", "index"],
  methods: {
    push() {
      this.$router.push(this.index);
    }
  },
  mounted() {
    if (this.defaultActive) {
      this.active = true;
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
    color: $twitter-font;
    font-weight: bold;
    .title {
      height: 45%;
      top: 0px;
      position: relative;
      span {
        text-align: center;
        font-size: 12px;
        width: 100%;
        display: inline-block;
        position: absolute;
        bottom: 0px;
      }
    }
    .number {
      height: 55%;
      bottom: 0px;
      position: relative;
      span {
        text-align: center;
        width: 100%;
        font-size: 19px;
        display: inline-block;
        position: absolute;
        top: 0px;
      }
      .active {
        color: $twitter-blue;
      }
    }
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
    .active {
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
:hover > .top > .number {
  color: $twitter-blue;
}
</style>