<template>
  <div>
    <!-- <blog-button @click="test"></blog-button> -->
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogButton from "@/components/BlogButton.vue";
@Component({
  components: {
    BlogButton
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
