<template>
  <div>grand child page</div>
</template>

<script>
export default {
  name: 'grandChildPage',
  data() {
    return {
      grandChildData: 'grandChildData'
    }
  },
  methods: {

  },
  mounted() {
    setTimeout(() => {
      this.$parent.childData = 'change it in grand child page'
    }, 3000)

    console.info('child page', this.$parent.rootData)
  }
}
</script>
