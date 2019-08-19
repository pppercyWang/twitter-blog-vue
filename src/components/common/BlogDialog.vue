<template>
  <transition name="fade">
    <div class="dialog-mask">
      <div class="dialog-wrapper animated fadeInUp" ref="dialogWrapper">
        <div class="dialog-container">
          <div class="dialog-header">
            <div class="left">
              <div class="title">发布文章</div>
            </div>
            <div class="right">
              <blog-button
                size="80"
                fontSize="12"
                height="30"
                info="立即发布"
                @click="submit"
                type="primary"
              ></blog-button>
            </div>
          </div>
          <div class="dialog-body">
            <slot></slot>
          </div>
          <div class="dialog-close">
            <div class="cross-wrap" @click="dialogClose">
              <div class="cross"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogButton from "@/components/common/BlogButton.vue";
@Component({
  components: {
    BlogButton
  }
})
export default class extends Vue {
  @Prop()
  private title!: string;
  @Prop()
  private cancel!: string;
  @Prop()
  private confirm!: string;
  private dialogClose() {
    this.$emit("close");
  }
  private submit() {
    this.$emit("submit");
  }
}
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.dialog-mask {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1500;
  animation-duration: 0.6s;
  .dialog-wrapper {
    animation-duration: 0.3s;
    .dialog-container {
      margin: auto;
      margin-top: 10%;
      background-color: #ffffff;
      width: 450px;
      height: 350px;
      border-radius: 20px;
      position: relative;
      .dialog-header {
        height: 50px;
        border-radius: 20px 20px 0 0;
        position: relative;
        .left {
          height: 50px;
          width: 200px;
          border-radius: 20px 0 0 0;
          position: absolute;
          left: 0;
          .title {
            height: 50px;
            margin-left: 20px;
            font-weight: bold;
            font-size: 16px;
            line-height: 50px;
          }
        }
        .right {
          display: flex;
          align-items: center;
          height: 50px;
          width: 100px;
          border-radius: 0 20px 0 0;
          position: absolute;
          right: 0;
        }
      }
      .dialog-body {
        height: 230px;
        margin: auto;
        margin-top: 20px;
        width: 400px;
      }
      .dialog-close {
        position: absolute;
        height: 40px;
        width: 450px;
        bottom: -40px;
        display: flex;
        justify-content: center;
        .cross-wrap {
          width: 30px;
          height: 30px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          .cross {
            width: 20px;
            height: 20px;
            margin: auto;
            margin-top: 3px;
            position: relative;
          }
          .cross::before,
          .cross::after {
            content: "";
            position: absolute; /*方便进行定位*/
            height: 20px;
            width: 2px;
            top: 2px;
            right: 9px; /*设置top和right使图像在20*20框中居中*/
            background: #ffffff;
          }
          .cross::before {
            transform: rotate(45deg); /*进行旋转*/
          }
          .cross::after {
            transform: rotate(-45deg);
          }
        }
        .cross-wrap:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>