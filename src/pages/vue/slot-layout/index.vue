<template>
  <div class="slot-base-layout">
    <base-layout>
      <!-- 方式: #name 可渲染 -->
      <template #header>
        <h1>I am custom header by #header</h1>
      </template>
      <!-- 方式: v-slot:name 可渲染 -->
      <template v-slot:default>
        <h2>I am custom main content.</h2>
        <h2>I am custom another main content.</h2>
      </template>
      <template>
        <!-- 方式: slot="footer" 可渲染 -->
        <div slot="footer">
          <h3>I am custom footer by slot="footer"</h3>
        </div>
      </template>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from './base-layout'
export default {
  components: { BaseLayout }
}
</script>

<style lang="scss" >
.slot-base-layout {
  margin: 0 auto;
  width: calc(50vw - 220px);
  height: calc(50vh - 100px);
  background: rgb(126, 149, 185);
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: black;
  }
  h2 {
    color: yellow;
  }
  h3 {
    color: wheat;
  }
}
</style>>
