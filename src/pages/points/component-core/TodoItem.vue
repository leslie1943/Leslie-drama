<template>
  <div>
    <li class="item">
      <el-checkbox v-model="checked">
        <!-- 将checked的值传递给父组件 -->
        <slot name="item" v-bind:checked="checked"></slot>
      </el-checkbox>
    </li>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: false
    }
  }
}
</script>
