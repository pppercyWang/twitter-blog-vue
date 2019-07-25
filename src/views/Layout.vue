<template>
  <div class="home">
    <blog-header></blog-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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