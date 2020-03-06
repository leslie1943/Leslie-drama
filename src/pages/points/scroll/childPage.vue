<template>
  <div>
    <div>childData:{{childData}}</div>
    <grandChildPage></grandChildPage>
  </div>
</template>

<script>
import grandChildPage from './grandChildPage'
export default {
  name: 'childPage',
  components: { grandChildPage },
  data() {
    return {
      childData: 'childData'
    }
  },
  methods: {
  },
  mounted() {
    setTimeout(() => {
      this.$parent.rootData = 'change it in child page'
    }, 3000)

    console.info('child page', this.$parent.rootData)
  }
}
</script>
