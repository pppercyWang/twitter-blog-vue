<template>
  <div class="emoji-panel-wrap">
    <Emoji
      v-for="(item,index) in emojis"
      :text="item"
      v-bind:key="index"
      @onClick="handleEmojiClick"
    ></Emoji>
  </div>
</template>
<script>
import Emoji from "./Emoji";
export default {
  data() {
    return {
      emojis: [
        "angry",
        "anguished",
        "astonished",
        "blush",
        "cold_sweat",
        "confounded",
        "confused",
        "cry",
        "disappointed",
        "disappointed_relieved",
        "dizzy_face",
        "expressionless",
        "fearful",
        "flushed",
        "frowning",
        "grimacing",
        "grin",
        "grinning",
        "heart_eyes",
        "hushed",
        "innocent",
        "joy",
        "kissing_closed_eyes",
        "kissing_heart",
        "laughing",
        "neutral_face",
        "no_mouth",
        "open_mouth",
        "pensive",
        "persevere",
        "relaxed",
        "relieved",
        "sleepy",
        "smile",
        "smiley",
        "smirk",
        "sob",
        "stuck_out_tongue",
        "sunglasses",
        "sweat",
        "sweat_smile",
        "scream",
        "wink",
        "unamused",
        "satisfied",
        "worried",
        "stuck_out_tongue_closed_eyes",
        "weary",
        "yum",
        "tired_face",
        "triumph",
        "stuck_out_tongue_winking_eye"
      ]
    };
  },
  components: {
    Emoji
  },
  methods: {
    handleEmojiClick(a) {
      this.$emit("emojiClick", a);
    }
  }
};
</script>
<style scoped>
.emoji-panel-wrap {
  background-color: aquamarine;
  width: 416px;
  height: 148px;
}
</style>