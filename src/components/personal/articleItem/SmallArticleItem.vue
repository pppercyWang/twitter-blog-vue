<template>
  <div class="article-item-wrap">
    <div class="row">
      <div class="left">
        <div
          class="title"
          @click="pushArticle"
        >{{title.length>20?(title.substring(0,20)+"..."):title}}</div>
      </div>
    </div>
    <div class="row date">
      <div class="icon calandar"></div>2019-09-20
    </div>
    <div class="row tags">
      <div class="icon tag"></div>#react #es6 #javascript
    </div>
  </div>
</template>
<script>
import Tag from "@/components/commons/tag/Tag.vue";
export default {
  data() {
    return {
      tags: [],
      categories: [],
      title: "vue写一个全局Message组件",
      date: ""
    };
  },
  props: ["row"],
  components: {
    Tag
  },
  methods: {
    pushArticle() {
      this.$router.push(`/article/${this.row.ID}`);
    },
    dateToStr(a) {
      const date = a;
      const seperator1 = "-";
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      const currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
  },
  created() {
    // this.title = this.row.Title;
    // const tep1 = this.row.Categories.split(",");
    // const arr = [];
    // tep1.forEach((item, index, array) => {
    //   arr.push({
    //     color: this.getRandomColor(),
    //     text: item
    //   });
    // });
    // this.categories = arr;
    // const tep2 = this.row.Tags.split(",");
    // const arr2 = [];
    // tep2.forEach((item, index, array) => {
    //   arr2.push({
    //     color: this.getRandomColor(),
    //     text: item
    //   });
    // });
    // this.tags = arr2;
    // this.date = this.dateToStr(new Date(this.row.CreatedAt));
  }
};
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
        font-size: 14px;
        color: #333;
        transition: color 0.3s;
        &:hover {
          color: rgb(101, 123, 131);
          cursor: pointer;
        }
      }
    }
  }
  .date {
    font-size: 12px;
    color: $twitter-font-shallow;
    justify-content: flex-start;
  }
  .tags {
    margin-top: 10px;
    justify-content: flex-start;
    font-size: 13px;
    color: $twitter-font-shallow;
    .tag {
      width: 18px;
      height: 18px;
      background-position: -16px -0px;
    }
  }
  .icon {
    display: inline-block;
    background-image: url("../../../assets/img/article_item_sprite.png");
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