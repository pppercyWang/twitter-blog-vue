<template>
  <div class="checkbox-group-wrap">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  private checkBoxGroup: string[] = [];
  private pushItem(value) {
    this.checkBoxGroup.push(value);
    this.$emit("input", this.checkBoxGroup);
  }
  private removeItem(value) {
    const index = this.checkBoxGroup.indexOf(value);
    this.checkBoxGroup.splice(index, 1);
    this.$emit("input", this.checkBoxGroup);
  }
  private mounted() {
    this.$on("pushItem", this.pushItem);
    this.$on("removeItem", this.removeItem);
  }
}
</script>
<style scoped lang="scss">
</style>