<template>
  <div class="radio-group-wrap">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private value!: string;
  private dispatch(value) {
    // 调用所有子组件的checkIsActive方法
    this.$children.forEach(item => {
      const temp: any = item;
      temp.checkIsActive(value);
    });
  }
  private radioChange(value) {
    this.$emit("input", value);
    this.dispatch(value);
  }
  private mounted() {
    if (this.value) {
      this.dispatch(this.value);
    }
    this.$on("radioChange", this.radioChange);
  }
}
</script>
<style scoped lang="scss">
</style>