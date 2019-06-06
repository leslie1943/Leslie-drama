<template>
  <vue-editor
    :disabled="readOnly"
    useCustomImageHandler
    @imageAdded="handleImageAdded"
    v-model="editorContent"
  />
</template>

<script>

import { VueEditor } from 'vue2-editor'
import axios from 'axios'
import { uuid as getUUId } from '@/utils'

import domain from '../../../private/domain'

export default {
  name: 'rich-text-editor',
  components: { VueEditor },
  props: {
    // readOnly 是否可编辑: false => 可编辑 | true => 不可编辑
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData()
      /**
       * 原: formData.append('image', file)
       * 后台接口指定'file'
       */
      formData.append('file', file)
      axios({
        // url: 'http://192.168.96.231' + '/epro' + '/api/base/uploadImg',
        url: domain.upload,
        // url: getBaseUrl() + '/api/base/uploadImg',
        method: 'post',
        headers: {
          'Authorization': domain.auth,
          'X-Trace-ID': getUUId()
        },
        data: formData
      }).then((response) => {
        let { result } = response.data
        // let url = domain.prefix + result[0].url
        let url = result[0].url
        Editor.insertEmbed(cursorLocation, 'image', url)
        resetUploader()
      }).catch((err) => {
        this.$message.error(err)
      })
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  watch: {
    editorContent: function (val, oldVal) {
      if (val !== oldVal) {
        this.$emit('content-change', val)
      }
    }
  }
}
</script>

<style lang="scss">
// .rich-text-editor {
// }
</style>
