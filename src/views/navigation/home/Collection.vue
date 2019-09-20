<template>
  <div class="collection-wrap">
    aaaaaaaa
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import ArticleItem from "@/components/personal/articleItem/ArticleItem.vue";
import { apiArticleList } from "@/api/article";
@Component({
  components: {
    ArticleItem
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>

</style>
