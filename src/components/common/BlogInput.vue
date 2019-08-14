<template>
  <input
    :type="type"
    :value="value"
    ref="blogInput"
    :placeholder="placeholder"
    @keyup.enter="keyup"
    @input="$emit('input',$event.target.value)"
  />
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private value!: string;
  @Prop()
  private placeholder!: string;
  @Prop()
  private type!: string;
  @Prop()
  private height!: string;
  @Prop()
  private width!: string;
  @Prop()
  private fontSize!: string;
  private keyup() {
    this.$emit("keyupEnter");
  }
  private mounted() {
    if (this.height) {
      if (!isNaN(Number(this.height))) {
        const obj = this.$refs.blogInput as HTMLElement;
        obj.style.height = this.height + "px";
      }
    }
    if (this.fontSize) {
      if (!isNaN(Number(this.fontSize))) {
        const obj = this.$refs.blogInput as HTMLElement;
        obj.style.fontSize = this.fontSize + "px";
      }
    }
    if (this.width) {
      if (this.width.endsWith("%")) {
        const temp = this.width.substring(0, this.width.length - 1);
        if (!isNaN(Number(temp))) {
          const obj = this.$refs.blogInput as HTMLElement;
          obj.style.width = temp + "%";
        }
      }
      if (!isNaN(Number(this.width))) {
        const obj = this.$refs.blogInput as HTMLElement;
        obj.style.width = this.width + "px";
      }
    }
  }
}
</script>
<style scoped lang="scss">
input {
  height: 27px;
  font-size: 14px;
  width: 230px;
  border-radius: 2px;
  border: 1px solid #cccccc;
  text-indent: 5px;
}
input:focus {
  border: 1.3px solid $boder-color;
  outline: none;
}
</style>