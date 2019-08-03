<template>
  <div ref="wrap">
    <slot name="at"></slot>
    <slot name="icon"></slot>
    <span class="text" ref="text" @click="handleClick">{{text}}</span>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private text!: string;
  @Prop()
  private color!: string;
  @Prop()
  private size!: string;
  @Prop()
  private isBold!: string;
  @Prop()
  private underlineHeight!: string;
  private mounted() {
    if (this.size) {
      if (!isNaN(Number(this.size))) {
        const obj = this.$refs.wrap as HTMLElement;
        obj.style.fontSize = this.size + "px";
      }
      if (!isNaN(Number(this.underlineHeight))) {
        const obj = this.$refs.text as HTMLElement;
        obj.style.borderWidth = this.underlineHeight + "px";
      }
      if (this.color) {
        const obj = this.$refs.text as HTMLElement;
        obj.style.borderColor = this.color;
        obj.style.color = this.color;
      }
      if (this.isBold && this.isBold === "true") {
        const obj = this.$refs.wrap as HTMLElement;
        obj.style.fontWeight = "bold";
      }
    }
  }
  private handleClick() {
    this.$emit("click");
  }
}
</script>
<style scoped lang="scss">
div {
  font-size: 20px;
  .text:hover {
    border-bottom: 2px solid black;
    padding-bottom: 1px;
    cursor: pointer;
  }
}
</style>