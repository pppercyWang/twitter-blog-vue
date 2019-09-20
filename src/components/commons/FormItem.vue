<template>
  <div class="form-item-wrap">
    <div class="left">{{label}}：</div>
    <div class="right">
      <slot></slot>
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
  private label!: string;
}
</script>
<style scoped lang="scss">
.form-item-wrap {
  width: 100%;
  .left {
    width: 20%;
    display: inline-block;
    vertical-align: top;
  }
  .right {
    width: 80%;
    display: inline-block;
  }
  margin-bottom: 20px;
}
</style>