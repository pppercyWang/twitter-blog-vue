<template>
  <div class="article-item-wrap">
    <div class="row">
      <div class="left">
        <div class="title" @click="pushArticle">{{title}}</div>
      </div>
      <div class="right">
        <div class="date">
          <div class="icon calandar"></div>
          {{date}}
        </div>
      </div>
    </div>
    <div class="row footer">
      <div class="left"></div>
      <div class="right">
        <div class="inline-block">
          <div class="icon tag"></div>
          <tag
            v-for="(item,index1) in tags"
            v-on:tagclick="handleTagClick(item.text)"
            :type="item.color"
            v-bind:key="index1"
          >{{item.text}}</tag>
        </div>
        <div class="inline-block">
          <div class="icon book"></div>
          <tag
            v-on:tagclick="handleCateClick(item.text)"
            v-for="(item,index2) in categories"
            :type="item.color"
            v-bind:key="index2"
          >{{item.text}}</tag>
        </div>
      </div>
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
      title: "",
      date: ""
    };
  },
  props: ["row"],
  components: {
    Tag
  },
  methods: {
    handleCateClick(text) {
      console.log(text);
    },
    handleTagClick(text) {
      this.$emit("tagclick", text);
    },
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
    },
    getRandomColor() {
      const num = Math.floor(Math.random() * 3);
      switch (num) {
        case 0:
          return "orange";
          break;
        case 1:
          return "green";
          break;
        case 2:
          return "blue";
          break;
      }
    }
  },
  created() {
    this.title = this.row.Title;
    const tep1 = this.row.Categories.split(",");
    const arr = [];
    tep1.forEach((item, index, array) => {
      arr.push({
        color: this.getRandomColor(),
        text: item
      });
    });
    this.categories = arr;
    const tep2 = this.row.Tags.split(",");
    const arr2 = [];
    tep2.forEach((item, index, array) => {
      arr2.push({
        color: this.getRandomColor(),
        text: item
      });
    });
    this.tags = arr2;
    this.date = this.dateToStr(new Date(this.row.CreatedAt));
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
      .inline-block {
        display: inline-block;
      }
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