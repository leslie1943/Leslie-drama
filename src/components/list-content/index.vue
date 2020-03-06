<template>
  <div class="list-content-container">
    <el-row>
      <!-- List -->
      <el-col :xs="6" :sm="8" :md="8" :lg="8" :xl="8" class="list-section">
        <slot name="list"></slot>
      </el-col>
      <!-- Content -->
      <el-col :xs="18" :sm="16" :md="16" :lg="16" :xl="16" class="content-section">
        <slot name="content"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
.list-content-container {
  padding: 20px;

  .list-section {
    min-height: calc(100vh - 152px);
    background: white;
    max-height: calc(100vh - 152px);
    overflow-x: hidden;
  }
  .content-section {
    padding: 20px;
    min-height: calc(100vh - 152px);
    background: #ecf5ff;
    max-height: calc(100vh - 152px);
    overflow-x: hidden;
  }
  .el-table {
    cursor: pointer;
    border-right: 1px solid #ecf5ff;
  }
}
</style>
