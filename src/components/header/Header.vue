<template>
  <div>
    <div class="container">
      <div class="menu-wrap">
        <div class="logo">
          <!-- <img src="../../assets/img/home.png" /> -->
        </div>
        <menu-item class="menu-item" title="Home" to="/welcome"></menu-item>
        <menu-item class="menu-item" title="About" to="/about"></menu-item>
        <div class="right">
          <div class="login-area-wrap" @click="showLogin" v-if="loginAreaShow">
            <div class="login">登录</div>
            <div class="arrow"></div>
          </div>
          <div class="logout-wrap" @click="logout" v-if="!loginAreaShow">
            <div class="username">{{username}}</div>
            <text-underline
              class="logout"
              text="注销"
              size="13"
              underlineHeight="1"
              color="#66757f"
              isBold="true"
            ></text-underline>
          </div>
        </div>
        <login v-if="loginFormShow" @loginsuc="handleLoginSuccessfully" @close="closeLoginForm"></login>
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/header/children/MenuItem.vue";
import Login from "@/components/header/children/Login.vue";
import TextUnderline from "@/components/commons/textUnderline/TextUnderline.vue";
export default {
  data() {
    return {
      loginFormShow: false,
      loginAreaShow: true,
      username: ""
    };
  },
  components: {
    MenuItem,
    Login,
    TextUnderline
  },
  methods: {
    closeLoginForm() {
      this.loginFormShow = false;
    },
    logout() {
      sessionStorage.removeItem("user");
      this.loginAreaShow = true;
      this.loginFormShow = false;
      this.$message.success("注销成功");
    },
    showLogin() {
      this.loginFormShow = !this.loginFormShow;
    },
    handleLoginSuccessfully() {
      const user = sessionStorage.getItem("user");
      this.username = JSON.parse(user).login;
      this.loginFormShow = false;
      this.loginAreaShow = false;
    },
    checkAuthentication() {
      const user = sessionStorage.getItem("user");
      if (user) {
        this.username = JSON.parse(user).login;
        this.loginAreaShow = false;
      }
    }
  },
  mounted() {
    this.checkAuthentication();
  }
};
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
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 200px;
      height: 47px;
      right: 0px;
      top: 0px;
      .login-area-wrap {
        width: 40px;
        .login {
          display: inline-block;
          color: $twitter-font;
          font-weight: bold;
        }
        .arrow {
          display: inline-block;
          width: 0;
          height: 0;
          border-width: 4px;
          border-style: solid;
          border-color: $twitter-font transparent transparent transparent;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .logout-wrap {
        .username {
          display: inline-block;
          font-weight: bold;
          margin-right: 10px;
        }
        .logout {
          display: inline-block;
        }
      }
    }
  }
}
</style>