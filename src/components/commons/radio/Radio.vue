<template>
  <div class="radio-wrap">
    <div class="left" :class="isChecked?'box-click':''" ref="box" @click="handleClick">
      <transition name="fade">
        <div class="circle" v-show="isChecked"></div>
      </transition>
    </div>
    <div class="right">{{label}}</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  private isChecked: boolean = false;
  @Prop()
  private label!: string;
  @Prop()
  private value!: string;
  private handleClick() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.$parent.$emit("radioChange", this.value);
    }
  }
  private checkIsActive(value) {
    if (this.value === value) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }
}
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.radio-wrap {
  height: 24px;
  display: inline-block;
  vertical-align: center;
  margin-bottom: 5px;
  .left {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background-color: #ffffff;
    display: inline-block;
    border: 1.2px solid #cccccc;
    box-sizing: border-box;
    .circle {
      margin-left: 9px;
      margin-top: 9px;
      border-radius: 50%;
      width: 6px;
      height: 6px;
      background-color: #ffffff;
    }
  }
  .left:hover {
    cursor: pointer;
  }
  .right {
    margin-left: 5px;
    padding-right: 10px;
    display: inline;
    vertical-align: top; // 内联元素默认的vertical-align为baseline。对象的内容与基线对齐。如果我们在right插入文字。则为出现left right不水平对齐的情况
    line-height: 24px;
    color: #66757f; // 在mounted
    font-size: 15px;
  }
  .box-click {
    background-color: #1da1f2;
    border: 0.5px solid #cccccc;
  }
}
</style>