<template>
  <div class="menu-item-wrap">
    <div class="top">
      Home
    </div>
    <div class="bottom">
      
    </div>
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
.menu-item-wrap {
  height: 100%;
  width: 80px;
  .top {
    height: 90%;
    text-align: center;
    line-height:42px;
    color: #66757f;
    font-weight: bold;
  }
  .bottom {
    height: 10%;
    background-color: #1da1f2;
  }
}
</style>