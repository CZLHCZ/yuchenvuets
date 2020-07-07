<template>
  <div class="headerNav-wrap">
    <h1>{{ msg }}导航</h1>
    <h2>{{ name }}</h2>
    <div @click="_clickyuchen">点击雨辰</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class HeaderNav extends Vue {
  @Prop({ default: "雨辰" })
  private msg!: string;
  // 全局data部分
  name = "一寸灰";
  percentageNow = 1;
  // method部分
  private _clickyuchen() {
    console.log("雨辰");
    this.percentageNow = 2;
  }
  private mounted() {
    this.name = "yuchen";
  }
  @Watch("percentageNow")
  onPercentageNow(val,oldval ) {
    console.log(val);
    console.log(oldval);
    this.percentageNow = val;
  }
}
</script>

<style scoped lang="less">
.headerNav-wrap {
  h1 {
    color: red;
  }
}
</style>
