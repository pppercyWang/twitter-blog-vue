<template>
  <div>
    <div class="fake-area"></div>
    <div>aaas</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.fake-area{
  width: 100%;
  height:30px;
  background-color: #f3f6f8;
}
</style>