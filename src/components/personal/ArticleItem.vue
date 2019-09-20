<template>
  <div class="article-item-wrap">
    <div class="row">
      <div class="left">
        <div class="title">{{title}}</div>
      </div>
      <div class="right">
        <div class="date">2019-12-16</div>
      </div> 
    </div>
    <div class="row footer">
      <div class="left"></div>
      <div class="right">标签一</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import TextUnderline from "@/components/commons/TextUnderline.vue";
@Component({
  components: {
    TextUnderline
  }
})
export default class extends Vue {
  @Prop()
  private title!: string;
}
</script>
<style scoped lang="scss">
.article-item-wrap {
  height: 120px;
  margin: 10px;
  border-bottom: 1px solid rgb(238, 238, 238);
  .row {
    display: flex;
    justify-content: space-between;
    .left {
      display: inline-block;
      .title {
        height: 40px;
        line-height: 40px;
        font-weight: 520;
        font-size: 16px;
        color: #333;
        transition: color 0.3s;
        &:hover {
          color: rgb(101, 123, 131);
          cursor: pointer; 
        }
      }
    }
    .right {
      display: inline-block;
      .date {
        color: $twitter-font-shallow;
      }
    }
  }
  .footer{
    margin-top: 20px;
  }
}
</style>