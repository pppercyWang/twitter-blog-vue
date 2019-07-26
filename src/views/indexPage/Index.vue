<template>
  <div>
    <div class="fake-area"></div>
    <index-menu></index-menu>
    <div>aaa</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import IndexMenu from "@/components/IndexMenu.vue";
@Component({
  components: {
    IndexMenu
  }
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.fake-area{
  width: 100%;
  height:30px;
  background-color: #f3f6f8;
}
.index-menu{
  top: 20px;
  position: fixed;
}
</style>