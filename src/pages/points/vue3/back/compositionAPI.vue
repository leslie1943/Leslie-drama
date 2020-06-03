<template>
  <el-button @click="increament">Count is: {{count}}, double is {{double}}, click to increament</el-button>
</template>

<script>

// 定义API
/**
 * 🚀🚀🚀🚀 导入所需的函数. 🚀🚀🚀🚀
 * ref: 创建响应性引用. (定义函数的变量.)
 * computed: 创建计算属性.
 * onMounted: 访问挂载的生命周期的hook.
 */
import { ref, computed, onMounted } from 'vue'
// const { commit, dispatch } = userStore()
// 定义Composition API
function userCounter () {
  const count = ref(0)
  function increament () {
    count.value++
  }
  return {
    count,
    increament
  }
}
export default {
  /**
   * setup:将属性和函数返回到模板的函数.
   * 在这里声明所有响应属性,计算属性,观察者和生命周期hooks,然后返回它们,以便在模板里使用
   */
  setup () {
    // 引入API,不受模板和组件作用域的限制,并且确切的知道可以从counter访问哪些属性
    const { count, increament } = userCounter()
    const double = computed(() => count.value * 2)

    // 使用 onMounted hook在组件挂载时记录了一些消息.
    onMounted(() => console.info('component mounted.'))

    // 返回供模板使用.
    return {
      count,
      double,
      increament
    }
  }
}
/**
 * Fragments
 * <Fragments>
 *    <td>hello</td>
 *    <td>world</td>
 * </Fragments>
*/

/**
 * Suspense 组件
 * <Fragments>
 *    <td>hello</td>
 *    <td>world</td>
 * </Fragments>
*/
</script>
