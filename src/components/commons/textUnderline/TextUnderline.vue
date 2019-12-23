<template>
  <div ref="wrap">
    <slot name="at"></slot>
    <slot name="icon"></slot>
    <span class="text" ref="text" @click="handleClick">{{text}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
    },
    color: {
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  },
  mounted() {
      if (this.color) {
        const obj = this.$refs.text;
        obj.style.borderColor = this.color;
        obj.style.color = this.color;
      }
  }
};
</script>
<style scoped lang="scss">
div {
  font-size: 12px;
  .text:hover {
    border-bottom: 1px solid black;
    padding-bottom: 1px;
    cursor: pointer;
  }
}
</style>