<template>
  <div class="container">
    <div class="info-wrap">aaa</div>
    <div class="article-wrap">bbb</div>
    <div class="pigeonhole-wrap">ccc</div>
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
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  width: 1220px;
  height: 100%;
  padding-top: 20px;
  .info-wrap {
    width: 300px;
    height: 100%;
    display: inline-block;
  }
  .article-wrap {
    background-color: aquamarine;
    border-radius:2px; 
    width: 600px;
    height: 100%;
    margin: 0px 10px;
    display: inline-block;
  }
  .pigeonhole-wrap {
    background-color:saddlebrown;
    border-radius:2px; 
    width: 300px;
    height: 100%;
    display: inline-block;
  }
}
</style>
