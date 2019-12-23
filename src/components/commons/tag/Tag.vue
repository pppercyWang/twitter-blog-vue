<template>
  <div :class="['tag-wrap', type?type:'']">
    <div class="arrow"></div>
    <div class="dot-wrap">
      <div class="dot"></div>
    </div>
    <div :class="{'tag-text-wrap':true,'isNotCateFlag': !isCate}" @click="handleTagClick">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { type } from "os";
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String
    },
    isCate: {
      type: Boolean
    }
  },
  methods: {
    handleTagClick(e) {
      this.$emit("tagclick");
    }
  }
};
</script>
<style scoped lang="scss">
.tag-wrap {
  display: inline-block;
  margin-right: 5px;
  &:hover {
    opacity: 0.8;
  }
  .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 9px;
    border-style: solid;
    border-color: transparent #1da1f2 transparent transparent;
  }
  .tag-text-wrap {
    display: inline-block;
    vertical-align: top;
    color: #ffffff;
    padding: 0 5px;
    height: 18px;
    line-height: 18px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #1da1f2;
    &:hover {
      cursor: pointer;
    }
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
    border-color: transparent rgb(255, 151, 106) transparent transparent;
  }
  .tag-text-wrap {
    background-color: rgb(255, 151, 106);
  }
  .dot-wrap {
    background-color: rgb(255, 151, 106);
  }
}
.green {
  .arrow {
    border-color: transparent rgb(7, 193, 69) transparent transparent;
  }
  .tag-text-wrap {
    background-color: rgb(7, 193, 69);
  }
  .dot-wrap {
    background-color: rgb(7, 193, 69);
  }
}
.blue {
  .arrow {
    border-color: transparent #1da1f2 transparent transparent;
  }
  .tag-text-wrap {
    background-color: #1da1f2;
  }
  .dot-wrap {
    background-color: #1da1f2;
  }
}
</style>