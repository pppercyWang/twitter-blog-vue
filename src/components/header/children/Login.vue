<template>
  <div class="login-form-wrap" v-click-outside="closeLoginForm">
    <div class="all">
      <div class="logo-wrap" @click="login">
        <img src="../../../assets/img/github.png" />
      </div>
      <div class="text">Github</div>
    </div>
  </div>
</template>
<script>
import BlogButton from "@/components/commons/button/BlogButton.vue";
import BlogInput from "@/components/commons/input/BlogInput.vue";
import { apiLogin, apiGetUserInfo } from "@/api/auth";
import { apiArticleList } from "@/api/article";
import clickOutside from "@/directives/vueClickOutSize";
export default {
  data() {
    return {
      username: "",
      password: "",
      flag: false
    };
  },
  components: {
    BlogButton,
    BlogInput
  },
  directives: { clickOutside },
  methods: {
    closeLoginForm() {
      if (this.flag === false) {
        this.flag = true;
      } else {
        this.$emit("close");
      }
    },
    login() {
      window.location.href =
        "https://github.com/login/oauth/authorize?client_id=63ef2362d2082fac3874";
    },
    getQueryVariable(variable) {
      const query = window.location.search.substring(1);
      const vars = query.split("&");
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] === variable) {
          return pair[1];
        }
      }
      return false;
    },
    async getUserInfo(code) {
      try {
        const res = await apiGetUserInfo({
          client_id: "63ef2362d2082fac3874",
          client_secret: "8b0f9b590564697fd1cfa24258a9daaf5c1ea8ec",
          code
        });
        sessionStorage.setItem("user", res.Data);
        this.$emit("loginsuc");
      } catch (e) {
        this.$message.error(e.Msg);
      }
    }
  },
  mounted() {
    const code = this.getQueryVariable("code");
    if (code !== false) {
      // if (!sessionStorage.getItem("user")) {
      this.getUserInfo(code);
      // }
    }
  }
};
</script>
<style scoped lang="scss">
.login-form-wrap {
  position: absolute;
  top: 50px;
  right: 0px;
  height: 120px;
  width: 240px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 3px;
  box-shadow: 0 0 5px #cbcbcb;
  .all {
    margin-top: 10px;
    .logo-wrap {
      display: flex;
      justify-content: center;
      img {
        opacity: 0.6;
        &:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
    .text {
      text-align: center;
      opacity: 0.6;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
}
</style>