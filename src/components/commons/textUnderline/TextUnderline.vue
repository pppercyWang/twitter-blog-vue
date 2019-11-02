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
  props: ["text", "color", "size", "isBold", "underlineHeight"],
  methods: {
    handleClick() {
      this.$emit("click");
    }
  },
  mounted() {
    if (this.size) {
      if (!isNaN(Number(this.size))) {
        const obj = this.$refs.wrap;
        obj.style.fontSize = this.size + "px";
      }
      if (!isNaN(Number(this.underlineHeight))) {
        const obj = this.$refs.text;
        obj.style.borderWidth = this.underlineHeight + "px";
      }
      if (this.color) {
        const obj = this.$refs.text;
        obj.style.borderColor = this.color;
        obj.style.color = this.color;
      }
      if (this.isBold && this.isBold === "true") {
        const obj = this.$refs.wrap;
        obj.style.fontWeight = "bold";
      }
    }
  }
};
</script>
<style scoped lang="scss">
div {
  font-size: 20px;
  .text:hover {
    border-bottom: 2px solid black;
    padding-bottom: 1px;
    cursor: pointer;
  }
}
</style>