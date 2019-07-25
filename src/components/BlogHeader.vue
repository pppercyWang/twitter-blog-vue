<template>
  <div>
    <div class="container">
      <div class="menu-wrap">
        <menu-item></menu-item>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import MenuItem from "@/components/header/MenuItem.vue";
@Component({
  components: {
    MenuItem
  }
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
.container {
  background-color: #ffffff;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #cccccc;
  box-shadow: 1px 1px 2px #cbcbcb;
  .menu-wrap {
    height: 100%;
    margin-left: 15%;
  }
}
</style>