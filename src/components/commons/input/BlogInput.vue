<template>
  <input
    :value="value"
    :placeholder="placeholder"
    @keyup.enter="keyup"
    @input="$emit('input',$event.target.value)"
    :class="{
    'input-size__small': size==='small',
    'input-size__normal': size==='normal'
  }"
  />
</template>
<script>
export default {
  data() {
    return {
      isChecked: true
    };
  },
  props: {
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  methods: {
    keyup() {
      this.$emit("keyupEnter");
    }
  }
};
</script>

<style scoped lang="scss">
input {
  height: 30px;
  font-size: 14px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #cccccc;
  text-indent: 5px;
  font-size: 18px;
  &:focus {
    border: 1px solid #cccccc;
    outline: none;
  }
}
.input-size__small {
  height: 20px;
  font-size: 12px;
}
.input-size__normal {
  height: 30px;
  font-size: 14px;
}
</style>