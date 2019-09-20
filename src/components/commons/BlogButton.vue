<template>
  <div :class="['btn-msg','bounce',isPrimary?'primary':'']" ref="btn" @click="handleClick">{{info}}</div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private info!: string;
  @Prop()
  private type!: string;
  @Prop()
  private size!: string;
  @Prop()
  private height!: string;
  @Prop()
  private fontSize!: string;
  private isPrimary: boolean = false;
  private handleClick(evt) {
    this.$emit("click", evt);
  }
  private mounted() {
    const elBtn = this.$refs.btn as HTMLElement;
    if (this.size) {
      if (!isNaN(Number(this.size))) {
        elBtn.style.width = this.size + "px";
      }
    }
    if (this.fontSize) {
      if (!isNaN(Number(this.fontSize))) {
        elBtn.style.fontSize = this.fontSize + "px";
      }
    }
    if (this.height) {
      if (!isNaN(Number(this.height))) {
        elBtn.style.height = this.height + "px";
      }
    }
    if (this.type === "primary") {
      this.isPrimary = true;
    }
  }
}
</script>
<style scoped lang="scss">
.btn-msg {
  width: 105px;
  height: 35.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $twitter-blue;
  border-radius: 100px;
  box-sizing: border-box;
  color: $twitter-blue;
  font-weight: bold;
}
:hover {
  cursor: pointer;
}
.btn-msg:hover {
  background-color: $button-hover;
}
.bounce {
  position: relative;
}
.bounce:focus {
  outline: none;
}
.bounce:after {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 100px;
  border: 0px solid $twitter-blue;
  opacity: 0.7;
  transition: all 0.1s;
}
.bounce:active:after {
  //.bounce active时 伪元素:after的样式
  opacity: 1;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 100px;
  border: 2px solid $twitter-blue;
  transition: all 0.2s;
}
.primary {
  color: #ffffff;
  background-color: #4ab3f4;
}
.primary:hover {
  background-color: $twitter-blue;
}
</style>