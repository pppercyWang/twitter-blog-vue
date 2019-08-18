<template>
  <div class="container">
    <div class="left">
      <div class="left-wrap">
        <blogger-info></blogger-info>
      </div>
    </div>
    <div class="center">
      <article-item></article-item>
    </div>
    <div class="right">Right</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BloggerInfo from "@/components/articlePersonal/BloggerInfo.vue";
import ArticleItem from "@/components/articlePersonal/ArticleItem.vue";
@Component({
  components: {
    BloggerInfo,
    ArticleItem
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
.container {
  width: 1220px;
  height: $height-excepted-header - $height-welcome - 92px;
  position: relative;
  margin-top: 10px;
  .left {
    width: 300px;
    height: 100%;
    background-color: $backgroud-main;
    position: absolute;
    left: 0;
    top: 0;
    .left-wrap{
      margin-top: 40px;
    }
  }
  .center {
    height: 500px;
    height: 100%;
    background-color: #ffffff;
    margin: 0px 310px 0 310px;
  }
  .right {
    width: 300px;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
