<template>
  <div class="emoji-item" :class="[text,isInput?'small':'large']" @click="emojiClick"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: ["text", "isInput"],
  methods: {
    emojiClick() {
      this.$emit("onClick", this.text);
    }
  }
};
</script>
<style lang="scss" scoped>
.emoji-item {
  background: url("../../../assets/img/emoji_sprite.png");
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
}
.large {
  zoom: 0.5;
}
.small {
  zoom: 0.3;
}
@import "../../../assets/css/emoji.css";
</style>