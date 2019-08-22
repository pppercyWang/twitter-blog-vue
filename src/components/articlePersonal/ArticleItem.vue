<template>
  <div class="article-item-wrap">
    <div class="title">{{title}}</div>
    <div class="des">{{des+"..."}}</div>
    <div class="footer-wrap">
      <div class="like-wrap">
        <div class="like">
          <svg
            t="1566376248142"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4912"
            width="18"
            height="18"
          >
            <path
              class="path"
              d="M569.6 121.6a19.2 19.2 0 0 1 22.08-18.9824c16.384 2.048 51.5584 25.3056 68.8832 43.392 21.376 19.776 27.0464 52.3712 11.872 78.656l-35.1808 60.9408 0.192-0.0064C614.2784 334.1312 625.7984 358.4 672 358.4h150.0672c42.4128 0 76.8 34.3872 76.8 76.8a76.8 76.8 0 0 1-0.5696 9.2992l-45.2672 371.2A76.8 76.8 0 0 1 776.8 883.2H422.4c-42.4128 0-76.8-34.3872-76.8-76.8V435.2c0-40.2944 31.0336-73.344 70.5024-76.544L416 358.4c21.3632-4.9408 41.1072-20.6912 59.2384-47.2384l86.752-150.2528c0.352-0.608 0.704-1.2096 1.0752-1.792C569.6 144.8512 569.6 139.9488 569.6 121.6zM192 358.4h38.4c35.3472 0 64 28.6528 64 64v396.8c0 35.3472-28.6528 64-64 64h-38.4c-35.3472 0-64-28.6528-64-64V422.4c0-35.3472 28.6528-64 64-64z"
              fill="#1da1f2"
              p-id="4913"
            />
          </svg>
        </div>
        <div class="text">
          <text-underline text="赞" size="13" underlineHeight="1" color="#1da1f2"></text-underline>
        </div>
      </div>
      <div class="get-likes">
        <span class="label">收获喜欢：</span>
        <span class="num">123</span>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import TextUnderline from "@/components/common/TextUnderline.vue";
@Component({
  components: {
    TextUnderline
  }
})
export default class extends Vue {
  @Prop()
  private des!: string;
  @Prop()
  private title!: string;
}
</script>
<style scoped lang="scss">
.article-item-wrap {
  height: 120px;
  margin: 0px 10px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 10px;
  .title {
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    font-size: 18px;
    color: black;
  }
  .des {
    height: 50px;
    color: $twitter-font;
    font-size: 13px;
  }
  .footer-wrap {
    height: 30px;
    .like-wrap {
      height: 24px;
      width: 55px;
      display: inline-block;
      .like {
        display: inline-block;
        height: 24px;
        width: 24px;
        background-color: rgba(1, 126, 102, 0.08);
        border-radius: 50%;
        .icon {
          margin-left: 3px;
          margin-top: 3px;
        }
      }
      .text {
        margin-left: 5px;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        width: 24px;
        vertical-align: top;
      }
    }
    .like-wrap:hover {
      cursor: pointer;
      .like {
        background-color: #1da1f2;
        .path {
          fill: #ffffff;
        }
      }
    }
    .get-likes {
      margin-left: 5px;
      display: inline-block;
      height: 24px;
      line-height: 24px;
      vertical-align: top;
      .label {
        color: $twitter-font;
      }
      .num {
        color: $twitter-blue;
      }
    }
  }
}
</style>