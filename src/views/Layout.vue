<template>
  <div class="home">
    <blog-header></blog-header>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogHeader from "@/components/BlogHeader.vue";
@Component({
  components: {
    BlogHeader
  }
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
</style>