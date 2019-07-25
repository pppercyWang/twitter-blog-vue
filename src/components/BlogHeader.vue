<template>
  <div>
    <div class="container">
      <div class="menu-wrap">
        <div class="logo">
          <img src="@/../public/img/home.png" />
        </div>
        <menu-item class="menu-item" title="Home" to="/welcome"></menu-item>
        <menu-item class="menu-item" title="About" to="/about"></menu-item>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import MenuItem from "@/components/header/MenuItem.vue";
@Component({
  components: {
    MenuItem
  }
})
export default class extends Vue {
  private pushHome() {
    console.log("111111111111");
  }
  private pushAbout() {
    console.log("22222222222");
  }
}
</script>
<style scoped lang="scss">
.container {
  background-color: #ffffff;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #cccccc;
  box-shadow: 1px 1px 2px #cbcbcb;
  .menu-wrap {
    height: 100%;
    margin-left: 15%;
    .logo {
      img {
        margin-top: 7px;
        float: left;
        width: 30px;
        height: 30px;
      }
    }
    .menu-item {
      display: inline-block;
    }
  }
}
</style>