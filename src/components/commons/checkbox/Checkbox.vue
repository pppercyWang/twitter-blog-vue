<template>
  <div class="checkbox-wrap">
    <div class="left" :class="isChecked?'box-click':''" ref="box" @click="handleClick">
      <transition name="fade">
        <div class="hook" v-show="isChecked"></div>
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
  private isChecked: boolean = true;
  @Prop()
  private label!: string;
  @Prop()
  private value!: string;
  private handleClick() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.$parent.$emit("pushItem", this.value);
    } else {
      this.$parent.$emit("removeItem", this.value);
    }
    this.$emit("input", this.isChecked);
  }
  private mounted() {
    this.isChecked = false; // 在dialog中滚动条不生效。必须操作dom之后才生效。暂时未找到更好的解决办法
  }
}
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.checkbox-wrap {
  height: 24px;
  width: 50%;
  display: inline-block;
  vertical-align: center;
  margin-bottom: 5px;
  .left {
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