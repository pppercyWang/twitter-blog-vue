<template>
  <div :class="['tag-wrap', type?type:'']">
    <div class="arrow"></div>
    <div class="dot-wrap">
      <div class="dot"></div>
    </div>
    <div class="text-wrap">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private type!: string;
}
</script>
<style scoped lang="scss">
.tag-wrap {
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  display: inline-block;
  margin-right: 5px;
  .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 9px;
    border-style: solid;
    border-color: transparent #1da1f2 transparent transparent;
  }
  .text-wrap {
    display: inline-block;
    vertical-align: top;
    color: #ffffff;
    padding: 0 5px;
    height: 18px;
    line-height: 18px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #1da1f2;
  }
  .dot-wrap {
    display: inline-block;
    width: 6px;
    height: 18px;
    background-color: #1da1f2;
    .dot {
      background-color: #ffffff;
      margin-top: 7px;
      vertical-align: center;
      height: 4px;
      width: 4px;
      box-sizing: border-box;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
    }
  }
}
.orange {
  .arrow {
    border-color: transparent rgb(248, 154, 103) transparent transparent;
  }
  .text-wrap {
    background-color: rgb(248, 154, 103);
  }
  .dot-wrap {
    background-color: rgb(248, 154, 103);
  }
}
.brown {
  .arrow {
    border-color: transparent rgb(123, 93, 95) transparent transparent;
  }
  .text-wrap {
    background-color: rgb(123, 93, 95);
  }
  .dot-wrap {
    background-color: rgb(123, 93, 95);
  }
}
.blue {
  .arrow {
    border-color: transparent #1da1f2 transparent transparent;
  }
  .text-wrap {
    background-color: #1da1f2;
  }
  .dot-wrap {
    background-color: #1da1f2;
  }
}
</style>