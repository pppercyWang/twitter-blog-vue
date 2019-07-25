<template>
  <div>
    <div class="container">

    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
@Component({
  components: {}
})
export default class extends Vue {
}
</script>
<style scoped lang="scss">
.container{
  background-color: #ffffff;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #CCCCCC;
  box-shadow: 1px 1px 2px #CBCBCB
}
</style>