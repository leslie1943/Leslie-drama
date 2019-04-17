<template>
  <d2-container class="rich-text-editor">
    <template slot="header"></template>
    <div style="padding:20px;">
      <rich-text-editor @content-change="editorContentChange"/>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import RichTextEditor from '@/components/rich-text-editor'
export default {
  name: 'rich-text-demo',
  components: { RichTextEditor },
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
.rich-text-editor {
  padding: 30px;
}
</style>
