<template>
  <div class="index-page">
    <div class="body">ccccccc</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import IndexMenu from "@/components/indexMenu/IndexMenu.vue";
@Component({
  components: {
    IndexMenu
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
.index-page {
  .body {
    background-color: #ffffff;
 
  }
}
</style>
