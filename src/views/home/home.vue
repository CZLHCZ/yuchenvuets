<template>
  <div class="home-wrpa">
    <h2>首页</h2>
    <input v-model="name" @click='handleInputChange'>
    <router-view />
    <div id="myEcharts" style="height: 400px;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
declare let echarts: any;
@Component({
  components: {}
})
export default class Home extends Vue {
  // data
  private yuchenName = "雨辰";
  private firstName: string = '雨';
  private lastName: string = '辰'
  private options: object = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
  };
  // lifecycle hook
  created() {
  }
  private mounted() {
    const ele = document.getElementById("myEcharts");
    const chart: any = echarts.init(ele);
    chart.setOption(this.options);
  }
  // computed
  get name() { // 取值
    return this.firstName + ' ' + this.lastName
  }
  set name(value) { // 存值
    console.log(value)
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
   // method
  private handleInputChange(val):void {
    console.log(val)
  }
  private changeName():void {
    this.yuchenName = "广州"
  }
}
</script>

<style scoped lang="less"></style>
