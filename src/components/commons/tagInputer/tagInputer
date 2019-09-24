<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {
  @Prop()
  private max!: number; // 最多添加多少标签
  private tags: any = [];
  private inputValue: string = "";
  private mmax: number = 3;
  private pushTag() {
    const temp = JSON.parse(JSON.stringify(this.tags));
    temp.push("");
    this.tags = temp;
    this.$emit("change", this.tags);
  }
  private removeTag(index) {
    const temp = JSON.parse(JSON.stringify(this.tags));
    temp.splice(index, 1);
    this.tags = temp;
    this.$emit("change", this.tags);
  }
  private handleOnChange(e, index) {
    this.tags[index] = e.target.innerText;
    this.$emit("change", this.tags);
  }
  private mounted() {
    if (this.max) {
      this.mmax = this.max;
    } else {
      this.mmax = 3;
    }
  }
}
</script>