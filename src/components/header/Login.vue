<template>
  <div class="login-form-wrap">
    <div class="arrow"></div>
    <div class="input-area">
      <div class="input-item">
        <blog-input v-model="username" placeholder="username"></blog-input>
      </div>
      <div class="input-item">
        <blog-input v-model="password" placeholder="password"></blog-input>
      </div>
    </div>
    <div class="btn-area">
      <div class="btn-item">
        <blog-button @click="test1" size="200" info="info" type="primary"></blog-button>
        <blog-button @click="test2" size="200" info="success" type="primary"></blog-button>
        <blog-button @click="test3" size="200" info="error" type="primary"></blog-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import BlogButton from "@/components/common/BlogButton.vue";
import BlogInput from "@/components/common/BlogInput.vue";
import { apiLogin } from "@/api/auth.ts";
@Component({
  components: {
    BlogButton,
    BlogInput
  }
})
export default class extends Vue {
  private username: string = "";
  private password: string = "";
  private async login() {
    try {
      const res = await apiLogin(
        {
          Username: this.username,
          Password: this.password
        },
        null
      );
      sessionStorage.setItem("token", res.Data.Token);
    } catch (e) {
      this.$message(e.Msg);
    }
  }
  private test1() {
    this.$message("这是一条普通消息");
  }
  private test2() {
    this.$message.success("这是一条成功消息");
    // this.$message("这是一条成功消息", "success");
  }
  private test3() {
    this.$message.error("这是一条失败消息");
    // this.$message("这是一条失败消息", "error");
  }
}
</script>
<style scoped lang="scss">
.login-form-wrap {
  position: absolute;
  top: 50px;
  right: 0px;
  height: 180px;
  width: 260px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 3px;
  box-shadow: 0 0 5px #cbcbcb;
  .arrow {
    position: absolute;
    right: 20px;
    top: -20px;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
  .input-area {
    height: 100px;
    margin-top: 20px;
    .input-item {
      margin-left: 15px;
      margin-bottom: 20px;
    }
  }
  .btn-area {
    height: 60px;
    .btn-item {
      display: flex;
      justify-content: center;
    }
  }
}
</style>