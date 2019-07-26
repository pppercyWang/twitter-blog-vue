<template>
  <div class="welcome-wrap" >
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
}
</script>
<style scoped lang="scss">
.welcome-wrap {
  width: 100%;
  height: 100%;
  background-image:url("./../../public/img/timg.jpg");
}
</style>