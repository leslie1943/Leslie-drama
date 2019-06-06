<template>
  <d2-container>
    <template slot="header"></template>
    {{editorData}}
    <ckeditor
      id="ediotr"
      :editor="editor"
      v-model="editorData"
      @ready="onReady"
      :config="editorConfig"
    ></ckeditor>

    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import axios from 'axios'
import domain from '../../../../private/domain'
import { uuid as getUUId } from '@/utils'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

class MyUploadAdapter {
  constructor (loader) {
    this.loader = loader
  }
  async upload () {
    const data = new FormData()
    // data.append('typeOption', 'upload_image')
    data.append('file', await this.loader.file)

    return new Promise((resolve, reject) => {
      axios({
        // url: domain.upload,
        url: domain.upload,
        method: 'post',
        data,
        headers: {
          'Authorization': domain.auth,
          'X-Trace-ID': getUUId()
        }
        // withCredentials: true // 此处可删掉，没发现有什么用
      }).then((res) => {
        console.info(res)
        var resData = res.data
        resData.default = resData.url
        resolve(resData)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default {
  name: 'ck-ediotr',

  data () {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
      }
    }
  },
  methods: {
    onReady (editor) {
      ClassicEditor.create(document.querySelector('#editor'), {
        extraPlugins: [MyCustomUploadAdapterPlugin]
      }).catch(error => {
        console.log(error)
      })
      function MyCustomUploadAdapterPlugin () {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
          return new MyUploadAdapter(loader)
        }
      }
    }
  }
}
</script>
<style lang="scss">
</style>
