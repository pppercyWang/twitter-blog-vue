<template>
  <div class="collection-wrap">
      <mavon-editor v-model="content" :toolbarsFlag="false" :subfield="false" :editable="false"></mavon-editor>
  </div>
</template>
<script>
import Tag from "@/components/commons/tag/Tag.vue";
export default {
  data() {
    return {
      content: "111111111"
    };
  },
  props: [],
  components: {},
  methods: {
    getArticle() {
      console.log("1111111111111");
    }
  },
  created() {
    this.getArticle();
  }
};
</script>
<style lang="scss" scoped>
.collection-wrap{
  width: 900px;

}
</style>
