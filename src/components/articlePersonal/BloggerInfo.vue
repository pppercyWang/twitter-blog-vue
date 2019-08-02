<template>
  <div class="blogger-info-wrap">
      <div class="name">pppercyWang</div>
      <div class="at">@pppercy_wang</div>
      <div class="about">Life is well</div>
      <div class="area"><i class="iconfont percy-icon-Positioning"></i>ChangSha</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class extends Vue {
}
</script>
<style scoped lang="scss">
  .blogger-info-wrap{
    .name{
      display: inline;
      font-size: 20px;
      font-weight: bold;
      color: black;
      border-bottom: 2px solid black;
      padding-bottom: 3px
    }
    .at{
      margin-top: 6px;
    }
    .about{
      margin-top: 20px;
    }
    .area{
      margin-top: 20px;
    }
  }
</style>