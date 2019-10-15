<template>
  <div class="browser-wrap">
    <mavon-editor :boxShadow="false" defaultOpen="preview" v-model="content" :toolbarsFlag="false" :subfield="false" :editable="false"></mavon-editor>
  </div>
</template>
<script>
import { apiArticleGet } from "@/api/article";
export default {
  data() {
    return {
      content: ""
    };
  },
  props: [],
  components: {},
  methods: {
    async getArticle() {
      try {
        const res = await apiArticleGet({
          ID: this.$route.params.id
        });
        this.content = res.Data.Content;
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    window.scroll(0, 0);
    this.getArticle();
  }
};
</script>
<style lang="scss" scoped>
.browser-wrap {
  width: 1220px;
  margin:auto;
  margin-top: 68px;
  .v-note-wrapper{
    z-index: 200 !important;
  }
}
</style>
