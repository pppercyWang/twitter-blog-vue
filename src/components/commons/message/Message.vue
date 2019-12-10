<template>
  <transition name="slide">
    <div class="message-wrap" :class="type" v-if="visible">
      <div class="content">{{content}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      visible: false,
      type: "info"
    };
  },
  props: ["label", "value"],
  methods: {
    startTimer() {
    window.setTimeout(() => {
      this.visible = false;
    }, 3000);
    }
  },
  created() {
    this.startTimer();
  }
};
</script>
<style scoped lang="scss">
.message-wrap {
  position: fixed;
  background-color: #44b0f3;
  color: #ffffff;
  left: 40%;
  width: 20%;
  top: 25px;
  height: 40px;
  z-index: 1600;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #ebeef5;
  .content {
    line-height: 40px;
  }
}
.error {
  background-color: #fef0f0;
  color: #f56c6c;
}
.success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>