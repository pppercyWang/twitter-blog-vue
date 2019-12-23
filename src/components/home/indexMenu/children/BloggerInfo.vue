<template>
  <div class="blogger-info-wrap">
    <div class="at">
      <text-underline text="pppercy_Wang" @click="openGithub" color="#657786">
        <template slot="at">
          <span style="font-weight:bold">@</span>
        </template>
      </text-underline>
    </div>
    <div class="about">路还尚远 不负年少</div>
    <div class="area">
      <text-underline @click="openChangsha" text="Changsha">
        <template slot="icon">
          <i class="iconfont percy-icon-Positioning"></i>
        </template>
      </text-underline>
    </div>
    <div class="area">
      <text-underline @click="showSearchBar" text=" 归档~">
        <template slot="icon">
          <i class="iconfont percy-icon-guidangxiangmu"></i>
        </template>
      </text-underline>
    </div>
  </div>
</template>
<script>
import TextUnderline from "@/components/commons/textUnderline/TextUnderline.vue";
export default {
  data() {
    return {
      content: "",
      title: ""
    };
  },
  props: [],
  components: {
    TextUnderline
  },
  methods: {
    openGithub() {
      window.open("https://github.com/pppercyWang");
    },
    openChangsha() {
      window.open(
        "https://baike.baidu.com/item/%E9%95%BF%E6%B2%99/204237?fr=aladdin"
      );
    },
    showSearchBar() {
      this.$emit("fileclick");
    }
  }
};
</script>
<style scoped lang="scss">
.blogger-info-wrap {
  .at {
    margin-top: 6px;
    span {
      color: $twitter-font-shallow;
      font-weight: normal;
    }
  }
  .about {
    margin-top: 20px;
  }
  .area {
    margin-top: 20px;
  }
}
</style>