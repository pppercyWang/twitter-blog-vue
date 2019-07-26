<template>
  <div class="menu-item-wrap" @click="push">
    <div class="top">{{title}}</div>
    <div class="bottom">
      <div class="blue"></div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private title!: string;
  @Prop()
  private to!: string;
  private push() {
    this.$router.push(this.to);
  }
}
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