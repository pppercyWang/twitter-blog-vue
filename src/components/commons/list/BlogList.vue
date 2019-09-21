<template>
  <div class="list-wrap">
    <div class="content" ref="list" @scroll="onScroll">
      <slot></slot>
    </div>
    <div class="loading" v-show="loading">正在加载数据......</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private loading!: boolean;
  private onScroll() {
    console.log("111111111");
    const obj: any = this.$refs.list;
    // clientHeight 视口高度 scrollTop 滚动条离顶部的高度 scrollHeight 列表内容的高度
    if (obj.clientHeight + obj.scrollTop === obj.scrollHeight) {
      this.$emit("toBottom");
    }
  }
}
</script>
<style scoped lang="scss">
.list-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .loading {
    position: absolute;
    bottom: -20px;
    width: 100%;
    height: 20px;
    color: #ffffff;
  }
}
::-webkit-scrollbar {
  // 去除滚动条边框
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>