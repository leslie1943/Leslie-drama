<template>
  <div>
    <div>rootData:{{rootData}}</div>
    <child-page></child-page>
    <div>
      <canvas style="width:300px;height:300px" id="QRCode"></canvas>
      <div style="margin:30px;">
        <button @click="getQRCode()">生成二维码</button>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import childPage from './childPage'
export default {
  components: { childPage },
  data() {
    return {
      rootData: 'rootData',
      QRCodeMsg: '',
    }
  },
  methods: {
    getQRCode() {
      // this.QRCodeMsg = window.location.href
      this.QRCodeMsg = 'https://epro.test.viewchain.net/#/donationAnnDetail/JZC35522020020500002'
    }
  },
  watch: {
    // 通过监听获取数据
    QRCodeMsg(val) {
      // 获取页面的canvas
      var msg = document.getElementById("QRCode");
      QRCode.toCanvas(msg, val, function (error) {
        console.log(error);
      });
    }
  },
}
</script>
