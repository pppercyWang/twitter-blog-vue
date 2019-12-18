<template>
  <div class="about-wrap">
    <div class="main">
      <div class="who-am-i">
        <divider title="关于我"></divider>
        <div class="self-wrap">
          <div class="left">
            <img src="../../../assets/img/self.jpg" class="self-pic sunglass" />
            <img src="../../../assets/img/moto.jpg" class="self-pic moto" />
          </div>
          <div class="right">
            <p>
              95后小青年 爱好摩托车 吉他 篮球 旅行 美剧 狼人杀
              <br />工作主要是使用 vue.js 和 react
              <br />究极无敌爱折腾 nodejs golang咱也搞过
              <br />嗜好太多 能力太小
              <br />路还很长 好好学习 好好生活
              <br />未完待续......
            </p>
          </div>
        </div>
      </div>
      <div class="contact">
        <divider title="联系我"></divider>
        <div class="content-wrap">
          <div class="left">
            <text-underline @click="openGithub" text=" 使劲儿戳" size="15" color="rgb(64,158,255)" underlineHeight="1">
              <template slot="icon">Github:</template>
            </text-underline>
            <br />邮箱地址：845082868@qq.com
          </div>
          <div class="right">
            <div class="qrcode">
              <img src="../../../assets/img/qrcode.png" class="self-pic" />
              <div class="text">交个盆友~</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Divider from "@/components/commons/divider/Divider.vue";
import TextUnderline from "@/components/commons/textUnderline/TextUnderline.vue";
export default {
  components: {
    Divider,
    TextUnderline,
  },
  data() {
    return {};
  },
  methods: {
    openGithub() {
      window.open("https://github.com/pppercyWang");
    }
  }
};
</script>
<style lang="scss" scoped>
.about-wrap {
  display: flex;
  justify-content: center;
  .main {
    width: 1180px;
    .self-pic {
      width: 150px;
      height: 150px;
      border-radius: 5px;
    }
    .who-am-i {
      margin-top: 80px;
      height: 400px;
      .self-wrap {
        .left {
          width: 40%;
          height: 360px;
          display: inline-block;
          vertical-align: top;
          position: relative;
          .sunglass {
            position: absolute;
            left: 20px;
            top: 20px;
          }
          .moto {
            position: absolute;
            left: 200px;
            top: 160px;
          }
        }
        .right {
          width: 60%;
          height: 360px;
          display: inline-block;
          font-size: 15px;
          line-height: 30px;
          color: #66757f;
        }
      }
    }
    .contact {
      height: 240px;
      .content-wrap {
        .left {
          width: 40%;
          height: 200px;
          line-height: 30px;
          display: inline-block;
          vertical-align: top;
          position: relative;
          font-size: 15px;
        }
        .right {
          position: relative;
          width: 60%;
          height: 200px;
          display: inline-block;
          font-size: 15px;
          line-height: 30px;
          color: #66757f;
          .qrcode {
            position: absolute;
            left: 50%;
            .text {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
