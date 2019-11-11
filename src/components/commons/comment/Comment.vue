<template>
  <div>
    <EmojiPanel @emojiClick="show"></EmojiPanel>
    <textarea id="textpanel" v-model="content"></textarea>
    <button @click="flag = true">show</button>
    <div v-if="flag">{{content}}</div>
  </div>
</template>
<script>
import EmojiPanel from "./EmojiPanel.vue";
import Emoji from "./Emoji.vue";
export default {
  data() {
    return {
      content: "",
      flag: false
    };
  },
  components: {
    EmojiPanel,
    Emoji
  },
  props: ["title", "cancel", "confirm"],
  methods: {
    show(text) {
      const el = document.getElementById("textpanel");
      this.content = el.value + ":" + text + ":";
    }
  }
};
</script>
<style scoped lang="scss">
.reply-table {
  height: 200px;
}
</style>