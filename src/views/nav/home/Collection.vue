<template>
  <div class="collection-wrap">
    aaaaaaaa
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BloggerInfo from "@/components/articlePersonal/BloggerInfo.vue";
import ArticleItem from "@/components/articlePersonal/ArticleItem.vue";
import { apiArticleList } from "@/api/article";
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

</style>
