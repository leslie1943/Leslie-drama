<template>
  <div class="container">
    <header>
      <slot name="header">header default content</slot>
    </header>
    <main>
      <!-- main标签 可省略 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。-->
      <slot></slot>
    </main>
    <!-- main标签 可省略 -->
    <footer>
      <slot name="footer">footer default content</slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>