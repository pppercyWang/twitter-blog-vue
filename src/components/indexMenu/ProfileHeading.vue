<template>
  <div>
    <img src="@/assets/heading.jpg" />
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
div {
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-top: -70px;
    border: 6px solid #ffffff;
  }
  display: flex;
  justify-content: center;
  height: 62px;
}
</style>