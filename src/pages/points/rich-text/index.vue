<template>
  <d2-container class="rich-text-editor">
    <template slot="header"></template>
    <rich-editor @content-change="editorContentChange"></rich-editor>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import RichEditor from '@/components/rich-editor'
export default {
  name: 'rich-text',
  components: { RichEditor },
  data () {
    return {
    }
  },
  methods: {
    editorContentChange (val) {
      console.info(val)
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
// .rich-text-editor {
// }
</style>
