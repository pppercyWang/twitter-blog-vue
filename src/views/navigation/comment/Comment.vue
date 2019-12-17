<template>
  <div class="message-wrap">
    <div class="main">
      <Comment></Comment>
    </div>
  </div>
</template>
<script>
import Divider from "@/components/commons/divider/Divider.vue";
import TextUnderline from "@/components/commons/textUnderline/TextUnderline.vue";
import Comment from "@/components/commons/comment/Comment.vue";
export default {
  components: {
    Divider,
    TextUnderline,
    Comment
  },
  data() {
    return {};
  },
  methods: {
    openGithub() {
      window.open("https://github.com/pppercyWang");
    }
  }
};
</script>
<style lang="scss" scoped>
.message-wrap {
  display: flex;
  justify-content: center;
  .main {
    margin-top: 80px;
    width: 1180px;
  }
}
</style>
