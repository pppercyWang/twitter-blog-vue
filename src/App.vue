<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "../public/css/icon.css";
import "@/../public/css/animate.min.css";
@Component({
  components: {}
})
export default class extends Vue {
  private visible: boolean = true;
  private close() {
    this.visible = false;
  }
}
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  /*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
  // background: #1F2D3D;
  font-family: "Segoe UI",Arial,sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}
#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  
}
.el-submenu [class^="fa"] {
  vertical-align: baseline;
  margin-right: 10px;
}
.el-menu-item [class^="fa"] {
  vertical-align: baseline;
  margin-right: 10px;
}
.toolbar {
  background: #fffbfb;
  padding: 10px;
  // border:1px solid #dfe6ec;
  margin: 10px 0px;
  .el-form-item {
    margin-bottom: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
