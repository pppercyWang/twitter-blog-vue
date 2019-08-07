<template>
  <div>
    <div class="container">
      <div class="menu-wrap">
        <div class="logo">
          <img src="@/../public/img/home.png" />
        </div>
        <menu-item class="menu-item" title="Home" to="/welcome"></menu-item>
        <menu-item class="menu-item" title="About" to="/about"></menu-item>
        <div class="right">
          <login-area @click="test"></login-area>
        </div>
        <login v-show="loginFormShow"></login>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import MenuItem from "@/components/header/MenuItem.vue";
import LoginArea from "@/components/header/LoginArea.vue";
import Login from "@/components/header/Login.vue";
@Component({
  components: {
    MenuItem,
    LoginArea,
    Login
  }
})
export default class extends Vue {
  private loginFormShow: boolean = false;
  private test() {
    this.loginFormShow = !this.loginFormShow;
  }
}
</script>
<style scoped lang="scss">
.container {
  background-color: #ffffff;
  width: 100%;
  height: $height-header;
  border-bottom: 1px solid #cccccc;
  box-shadow: 1px 1px 2px #cbcbcb;
  display: flex;
  justify-content: center;
  .menu-wrap {
    height: 100%;
    width: 1220px;
    position: relative;
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
    .right {
      position: absolute;
      width: 200px;
      height: 47px;
      right: 0px;
      top: 0px;
      .login-area-wrap {
        position: absolute;
        right: 15px;
        top: 15px;
      }
    }
  }
}
</style>