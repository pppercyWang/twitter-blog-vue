<template>
  <div @click="handleClick" class="btn-msg" id="my-btn">{{msg}}</div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  private msg: string = "关注";
  private handleClick(evt) {
    this.$emit("click", evt);
  }
}
</script>
<style scoped lang="scss">
.btn-msg {
  width: 105px;
  height: 35.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $twitter-blue;
  border-radius: 100px;
  transition: border-width 0.05s;
  color: $twitter-blue;
  font-weight: bold;
}
.btn-msg:hover {
  cursor: pointer;
  background-color: $button-hover;
}
</style>