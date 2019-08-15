<template>
  <div class="checkbox-wrap" @click="handleClick">
    <div class="left" :class="isClick?'box-click':''" ref="box">
      <transition name="fade">
        <div class="hook" v-show="isClick"></div>
      </transition>
    </div>
    <div class="right">{{info}}</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  private isClick: boolean = false;
  @Prop()
  private info!: string;
  private handleClick() {
    this.isClick = !this.isClick;
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
  }
  .right {
    margin-left: 5px;
    padding-right: 10px;
    display: inline;
    vertical-align: top; // 内联元素默认的vertical-align为baseline。对象的内容与基线对齐。如果我们在right插入文字。则为出现left right不水平对齐的情况
    line-height: 24px;
    color: #66757f;
    font-size: 15px;
  }
  .box-click {
    background-color: #1da1f2;
    border: 0.5px solid #cccccc;
  }
  .hook {
    margin-left: 8px;
    margin-top: 2px;
    width: 5px;
    height: 12px;
    border-right: 1.3px solid #ffffff;
    border-bottom: 1.3px solid #ffffff;
    transform: rotate(40deg);
  }
}
.checkbox-wrap:hover {
  cursor: pointer;
}
</style>