<template>
  <div class="blog-input-wrap">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input',$event.target.value)"
    />
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
  @Prop()
  private placeholder!: string;
  @Prop()
  private type!: string;
}
</script>
<style scoped lang="scss">
.blog-input-wrap {
  height: 100%;
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    height: 80%;
    width: 100%;
    text-indent: 3px;
  }
}
</style>