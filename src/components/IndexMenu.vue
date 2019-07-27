<template>
  <div>
    <div class="index-menu" id="index-menu">
      <div class="menu-wrap">
        <!-- <menu-item class="menu-item" title="Home" to="/welcome"></menu-item>
        <menu-item class="menu-item" title="About me" to="/about"></menu-item> -->
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
export default class extends Vue {
}
</script>
<style scoped lang="scss">
.fake-area {
  width: 100%;
  height: $height-fake-area;
  background-color: #f3f6f8;
}
.index-menu {
  background-color: #ffffff;
  width: 100%;
  height: $height-index-menu;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
  box-shadow: 1px 1px 2px #cbcbcb;
  .menu-wrap {
    height: 100%;
    margin-left: 15%;
    .menu-item {
      display: inline-block;
    }
  }
}
</style>