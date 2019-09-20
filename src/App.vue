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
  // font-family: Arial,Helvetica,sans-serif;
   font-family: lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}
#app {
  top: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
}
</style>
