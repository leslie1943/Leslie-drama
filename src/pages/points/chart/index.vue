<template>
  <div class="viser-main-container">
    <!-- bar -->
    <div>
      <v-chart :forceFit="true" :height="height" :data="data_bar" :scale="scale_bar">
        <v-tooltip />
        <v-axis />
        <v-bar position="year*sales" />
      </v-chart>
    </div>
    <hr />
    <!-- pie -->
    <div>
      <v-chart :forceFit="true" :height="height" :data="dataPie" :scale="scalePie">
        <v-tooltip :showTitle="false" data-key="item*percent" />
        <v-axis />
        <v-legend data-key="item" />
        <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig" />
        <v-coord type="theta" />
      </v-chart>
    </div>

    <!-- line -->
    <div>
      <!--  -->
      <v-chart :forceFit="true" :height="height" :data="dataLine" :scale="scaleLine">
        <!-- part_1: v-chart -->
        <v-tooltip />
        <!-- part_2: v-tooltip -->
        <v-axis />
        <!-- part_3: v-axis -->
        <v-legend />
        <!-- part_4: v-legend-->
        <v-line position="month*value" shape="hv" color="key" />
        <!-- part_5: v-line -->
      </v-chart>
    </div>

    <!-- Back -->
  </div>
</template>

<script>
const DataSet = require('@antv/data-set')
// ----------------------------- pie
const sourceDataPie = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 }
]

const scalePie = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]

const dvPie = new DataSet.View().source(sourceDataPie)
dvPie.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const dataPie = dvPie.rows

// ----------------------------- pie
const sourceDataLine = [
  { month: 'Jan', series2: 51, series1: 125 },
  { month: 'Feb', series2: 91, series1: 132 },
  { month: 'Mar', series2: 141, series1: 34 },
  { month: 'Apr', series2: 47, series1: 158 },
  { month: 'May', series2: 63, series1: 133 },
  { month: 'June', series2: 58, series1: 143 },
  { month: 'July', series2: 56, series1: 176 },
  { month: 'Aug', series2: 194, series1: 77 },
  { month: 'Sep', series2: 99, series1: 115 },
  { month: 'Oct', series2: 106, series1: 134 },
  { month: 'Nov', series2: 88, series1: 110 },
  { month: 'Dec', series2: 56, series1: 91 }
]

const dvLine = new DataSet.View().source(sourceDataLine)
dvLine.transform({
  type: 'fold',
  fields: ['series1', 'series2'],
  key: 'key',
  value: 'value'
})
const dataLine = dvLine.rows

const scaleLine = [{
  dataKey: 'month',
  min: 0,
  max: 1
}]

export default {
  data() {
    return {
      // -------------------- bar
      data_bar: [
        { year: '1951 年', sales: 38 }, { year: '1952 年', sales: 52 },
        { year: '1956 年', sales: 61 }, { year: '1957 年', sales: 145 },
        { year: '1958 年', sales: 48 }, { year: '1959 年', sales: 38 },
        { year: '1960 年', sales: 38 }, { year: '1962 年', sales: 38 }
      ],
      scale_bar: [{ dataKey: 'sales', tickInterval: 20 }],
      height: 400,
      // -------------------- pie,
      dataPie,
      scalePie,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: ['percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + val
        }
      }],

      // -------------------- line
      dataLine,
      scaleLine

    }
  }
}
</script>

<style lang="scss">
.viser-main-container {
  text-align: center;
}
</style>
