<template>
  <div class="checkbox-main">
    <div class="checkbox-check" :class="isChecked?'checkbox-check__active':''" ref="box" @click="handleClick">
      <transition name="fade">
        <div class="hook" v-show="isChecked"></div>
      </transition>
    </div>
    <div class="checkbox-label">{{label}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: true
    };
  },
  props: {
    "label" :{
      type: String
    },
    "value" : {
      type: [String,Number]
    }
  },
  methods: {
    handleClick() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.$parent.$emit("pushItem", this.value);
    } else {
      this.$parent.$emit("removeItem", this.value);
    }
    this.$emit("input", this.isChecked);
  }
  },
  mounted() {
    this.isChecked = false; // 在dialog中滚动条不生效。必须操作dom之后才生效。暂时未找到更好的解决办法
  }
};
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.checkbox-main {
  height: 24px;
  width: 50%;
  display: inline-block;
  vertical-align: center;
  margin-bottom: 5px;
  .checkbox-check {
    height: 24px;
    width: 24px;
    border-radius: 7px;
    background-color: #ffffff;
    display: inline-block;
    border: 1.2px solid #cccccc;
    box-sizing: border-box;
    .hook {
      margin-left: 8px;
      margin-top: 3px;
      width: 5px;
      height: 12px;
      border-right: 1.3px solid #ffffff;
      border-bottom: 1.3px solid #ffffff;
      transform: rotate(40deg);
    }
  }
  .checkbox-check:hover {
    cursor: pointer;
  }
  .checkbox-label {
    margin-left: 5px;
    padding-right: 10px;
    display: inline;
    vertical-align: top; // 内联元素默认的vertical-align为baseline。对象的内容与基线对齐。如果我们在right插入文字。则为出现left right不水平对齐的情况
    line-height: 24px;
    color: #66757f; // 在mounted
    font-size: 15px;
  }
  .checkbox-check__active {
    background-color: #1da1f2;
    border: 0.5px solid #cccccc;
  }
}
</style>