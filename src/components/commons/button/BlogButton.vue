<template>
  <div
    :class="{
    'button-main': true,
    'button__bounce': true,
    'button-type__primary': type==='primary',
    'button-type__info': type==='info',
    'button-size__normal': size==='normal',
    'button-size__small': size==='small',
  }"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPrimary: false
    };
  },
  props: {
    type: {
      type: String,
      default: "info"
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
};
</script>
<style scoped lang="scss">
.button-main {
  display: inline-block;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  box-sizing: border-box;
  font-weight: bold;
  height: 34px;
  line-height: 34px;
  padding: 0 24px;
  font-size: 15px;
  color: #1da1f2;
  &:hover {
    cursor: pointer;
    background-color: #e8f5fd;
  }
}
.button-size__normal {
  height: 34px;
  line-height: 34px;
  padding: 0 24px;
  font-size: 15px;
}
.button-size__small {
  height: 28px;
  line-height: 28px;
  padding: 0 14px;
  font-size: 12px;
}
.button__bounce {
  position: relative;
}
.button__bounce:focus {
  outline: none;
}
.button__bounce:after {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 100px;
  border: 0px solid #1da1f2;
  opacity: 0.7;
  transition: all 0.1s;
}
.button__bounce:active:after {
  //.button__bounce active时 伪元素:after的样式
  opacity: 1;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 100px;
  border: 2px solid #1da1f2;
  transition: all 0.2s;
}
.button-type__info {
  color: #1da1f2;
}
.button-type__info:hover {
  background-color: #e8f5fd;
}
.button-type__primary {
  color: #ffffff;
  background-color: #4ab3f4;
}
.button-type__primary:hover {
  background-color: #1da1f2;
}
</style>