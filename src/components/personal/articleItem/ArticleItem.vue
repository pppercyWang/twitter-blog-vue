<template>
  <div class="article-item-wrap">
    <div class="row">
      <div class="left">
        <div class="title">{{title}}</div>
      </div>
      <div class="right">
        <div class="date">
          <div class="icon calandar"></div>2019-12-16
        </div>
      </div>
    </div>
    <div class="row footer">
      <div class="left"></div>
      <div class="right">
        <div class="icon tag"></div>
        <tag>vue</tag>
        <tag type="brown">javascript</tag>
        <div class="icon book"></div>
        <tag type="orange">react</tag>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import TextUnderline from "@/components/commons/textUnderline/TextUnderline.vue";
import Tag from "@/components/commons/tag/Tag.vue";
@Component({
  components: {
    TextUnderline,
    Tag
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
  .footer {
    margin-top: 20px;
  }
  .icon {
    display: inline-block;
    background-image: url("../../../assets/img/article_item_sprite.png");
  }
  .tag {
    width: 18px;
    height: 18px;
    background-position: -16px -0px;
  }
  .book {
    width: 16px;
    height: 18px;
    background-position: -0px -0px;
  }
  .calandar {
    width: 18px;
    height: 18px;
    background-position: -34px -0px;
    vertical-align: top;
    margin-right: 4px;
  }
}
</style>