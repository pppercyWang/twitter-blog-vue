<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkBoxGroup: []
    };
  },
  methods: {
    pushItem(value) {
      this.checkBoxGroup.push(value);
      this.$emit("input", this.checkBoxGroup);
    },
    removeItem(value) {
      const index = this.checkBoxGroup.indexOf(value);
      this.checkBoxGroup.splice(index, 1);
      this.$emit("input", this.checkBoxGroup);
    }
  },
  mounted() {
    this.$on("pushItem", this.pushItem);
    this.$on("removeItem", this.removeItem);
  }
};
</script>