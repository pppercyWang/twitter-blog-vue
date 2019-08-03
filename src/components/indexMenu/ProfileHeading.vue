<template>
  <div class="heading-wrap">
    <div class="big-heading">
      <transition name="slide-fade">
        <img src="@/assets/heading.jpg" v-if="getterBigHeadingShow" />
      </transition>
    </div>
    <div class="small-heading">
      <transition name="slide-fade">
        <div v-if="!getterBigHeadingShow">
          <div class="left">
            <img src="@/assets/heading.jpg" />
          </div>
          <div class="right">
            <div class="top">Percy Wang</div>
            <div class="bottom" @click="pushGithub()">@pppercy_wang</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
@Component({
  components: {}
})
export default class extends Vue {
  @Action("bigHeadingShowTrue") private actionBigHeadingShowTrue;
  @Action("bigHeadingShowFalse") private actionBigHeadingShowFalse;
  @Getter("bigHeadingShow") private getterBigHeadingShow;
  private pushGithub() {
    window.open("https://github.com/pppercyWang");
  }
}
</script>
<style scoped lang="scss">
.heading-wrap {
  display: flex;
  justify-content: center;
  position: relative;
  height: 62px;
  .big-heading {
    z-index: 999;
    position: absolute;
    left: 0px;
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      margin-top: -70px;
      border: 6px solid #ffffff;
    }
    .slide-fade-enter-active {
      transition: all 0.4s ease;
    }
    .slide-fade-leave-active {
      transition: all 0.1s ease;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
  .small-heading {
    position: absolute;
    left: 0px;
    .slide-fade-enter-active {
      transition: all 0.4s ease;
    }
    .slide-fade-leave-active {
      transition: all 0.1s ease;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateY(20px);
      opacity: 0;
    }
    .left {
      display: inline-block;
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-bottom: 5px;
      }
    }
    .right {
      display: inline-block;
      margin-left: 10px;
      height: 62px;
      position: relative;
      .top {
        color: #000000;
        font-size: 17px;
        font-weight: bold;
        position: absolute;
        width: 200px;
        top: 10px;
      }
      .bottom {
        color: $twitter-blue;
        font-size: 15px;
        width: 110px;
        position: absolute;
        bottom: 10px;
      }
      .bottom:hover {
        cursor: pointer;
      }
    }
  }
}
</style>