<template>
  <div class="login-form-wrap">
      aaa
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogButton from '@/components/BlogButton.vue';
@Component({
  components: {
      BlogButton
  }
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
.login-form-wrap {
  position: absolute;
  top: 47px;
  right: 0px;
  height: 180px;
  width: 260px;
}
</style>