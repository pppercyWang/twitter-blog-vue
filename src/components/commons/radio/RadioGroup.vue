<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    value: {
      type: [String, Number]
    }
  },
  methods: {
    dispatch(value) {
      // 调用所有子组件的checkIsActive方法
      this.$children.forEach(item => {
        const temp = item;
        temp.checkIsActive(value);
      });
    },
    radioChange(value) {
      this.$emit("input", value);
      this.dispatch(value);
    }
  },
  mounted() {
    if (this.value) {
      this.dispatch(this.value);
    }
    this.$on("radioChange", this.radioChange);
  }
};
</script>