<template>
  <d2-container class="table-bg-container">
    <template slot="header"></template>
    <div class="no-merge-table">
      <h1>不带合并单元格的</h1>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="with-merge-table">
      <h1>带合并单元格的</h1>
      <el-table :data="tableDataWithMerge" :span-method="mergeTableCell" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
        <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
        <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
      </el-table>
    </div>
    <div class="desc-section">
      <h2>
        查看css的时候,
        <br>
        <br>1:先选中目标元素,
        <br>
        <br>2:然后再勾选:hover/:active
        <br>
        <br>3:再点击其下的td查看
        <br>
        <br>4:有时候也可能动态出现
      </h2>
    </div>

    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'filters',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      tableDataWithMerge: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  methods: {
    mergeTableCell ({ row, column, rowIndex, columnIndex }) {
      // 第一行数据
      if (rowIndex === 0) {
        // 第一列: 合并第一行的第1个和第二个单元格
        if (columnIndex === 0) {
          return {
            rowspan: 1,
            colspan: 2
          }
        } else if (columnIndex === 1) {
          // 第二列: 隐藏，保证后续不串行
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      } else {
        // 其他行数据
        if (columnIndex === 0) {
          if (rowIndex === 1) {
            return {
              rowspan: 4,
              colspan: 1
            }
          }
        }
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.table-bg-container {
  // 不带合并单元格: 设置行选颜色
  .no-merge-table {
    padding: 10px;
    .el-table--enable-row-hover .el-table__body tr:hover > td {
      background-color: #409eff;
      color: whitesmoke;
    }
  }
  // 带合并单元格: 设置行选颜色
  .with-merge-table {
    padding: 10px;
    // 设置行选颜色 Epro works
    // Epro的table在鼠标划过时会有一个 hover-row 的class
    // .el-table__body tr.hover-row > td {
    //   background: #fff;
    // }
    .el-table--enable-row-hover .el-table__body tr:hover > td {
      background-color: #409eff;
      color: whitesmoke;
    }
  }
  .desc-section {
    text-align: center;
    padding: 10px;
  }
}
</style>
