<template>
  <div id="home">
    <input type="password" placeholder="Password" v-model="password">
    <textarea v-model="contents"></textarea>
    {{ decryptContents }}
    {{ encryptContents }}
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import hashData from "../assets/hashData.json"
export default {
  name: 'Home',
  data() {
    return {
      password: '',
      contents: '',
    }
  },
  computed: {
    encryptContents() {
      return CryptoJS.AES.encrypt(this.contents, this.password).toString()
    },
    decryptContents() {
      return CryptoJS.AES.decrypt(hashData, this.password).toString(CryptoJS.enc.Utf8) || 'Not Matched Password'
    }
  }
}
</script>

