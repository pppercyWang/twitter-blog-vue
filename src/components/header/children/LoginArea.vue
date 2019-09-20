<template>
  <div class="login-area-wrap" @click="handleClick">
    <div class="left">登录</div>
    <div class="right"></div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  private handleClick() {
    this.$emit("click");
  }
}
</script>
<style scoped lang="scss">
.login-area-wrap {
  width: 40px;
  position: relative;
  .left {
    display: inline-block;
    color: $twitter-font;
    font-weight: bold;
  }
  .right {
    position: absolute;
    right: 2px;
    top: 8px;
    width: 0;
    height: 0;
    border-width: 4px;
    border-style: solid;
    border-color: $twitter-font transparent transparent transparent;
  }
}
.login-area-wrap:hover {
  cursor: pointer;
}
</style>