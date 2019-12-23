<template>
  <div class="comment-page-wrap" id="commentPage">
    <div class="main">
      <comment :full="true" class="comment-comp"></comment>
      <div class="anchor">
        <blog-button @click="pushBottom" size="small">我也要留言</blog-button>
      </div>
    </div>
  </div>
</template>
<script>
import Divider from "@/components/commons/divider/Divider.vue";
import TextUnderline from "@/components/commons/textUnderline/TextUnderline.vue";
import Comment from "@/components/commons/comment/Comment.vue";
import BlogButton from "@/components/commons/button/BlogButton.vue";
export default {
  components: {
    Divider,
    TextUnderline,
    Comment,
    BlogButton
  },
  data() {
    return {};
  },
  methods: {
    pushBottom() {
    window.scrollTo(100,10000);
    }
  }
};
</script>
<style lang="scss" scoped>
.comment-page-wrap {
  display: flex;
  justify-content: center;
  .main {
    margin-top: 20px;
    width: 1180px;
    position: relative;
    .comment-comp {
      margin-top: 40px;
    }
    .anchor {
      position: absolute;
      top: 0;
      left: 440px;
    }
  }
}
</style>
