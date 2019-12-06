<template>
  <div class="log">
    <my-head title="登录"></my-head>
    <div class="pr-15 pl-15">
      <my-input title="手机号:" type="tel" v-model="mobile"></my-input>
      <my-input title="密码:" type="password" v-model="password"></my-input>
      <div class="submit-btn" @click="handleSubmit">
        <text class="font-black font-bold font-15" >登录</text>
      </div>
    </div>
    <div class="flex-items-center">
      <text class="font-16 font-light-green">注册账号</text>
    </div>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')

// import HText from '@/common/text.vue'
import MyInput from '@/common/h-input.vue'
// import MyHead from '@/common/navigationbar.vue'

import { mobileReg, passwordReg, Log } from '@/query/index.js'
export default {
  components:{ HText, MyHead, MyInput },
  data () {
    return {
      mobile: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      // console.log(this.tel)
      if(mobileReg(this.mobile) && passwordReg(this.password)){
        Log({mobile: this.mobile, password: this.password})
      }
    }
  }
}
</script>

<style src="./base.css"></style>
<style scoped>

</style>
