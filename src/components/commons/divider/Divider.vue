<template>
  <div class="divider-wrap">
    <div class="divider--horizontal">
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.divider-wrap {
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  .divider--horizontal {
    height: 1px;
    width: 100%;
    background-color: #cccccc;
    .title {
      font-size: 15px;
      position: absolute;
      left: 50%;
      top: 10px;
      padding: 0px 20px;
      background-color: #ffffff;
    }
  }
}
</style>