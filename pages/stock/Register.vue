<template>
  <div class="register">
    <my-head title="注册"></my-head>
    <div class="pl-15 pr-15">
      <!-- 手机号输入框 -->
      <my-input title="手机号:" type="tel" v-model="mobile"></my-input>
      <!-- 图形验证码 -->
      <div class="flex-row-between flex-items-start">
        <my-input title="验证码:" type="number" :del="false" v-model="imageCode"></my-input>
        <div class="ml-20 flex-row-center flex-items-center verification" v-if="!ImgCode" @click="changeImgCode">
          <text class="font-14 font-white">点击获取图片</text>
        </div>
        <div class="ml-20" v-else @click="changeImgCode">
          <image style="width:200upx;height:80upx" :src="ImgCode"/>
        </div>
      </div>
      <!-- 手机验证码 -->
      <div class="flex-row-between flex-items-start">
        <my-input title="验证码:" type="number" :del="false" v-model="code"></my-input>
        <div class="ml-20 flex-row-center flex-items-center verification" @click="getMobileCode">
          <text class="font-14 font-white">获取验证码</text>
        </div>
      </div>
      <!-- 密码框 -->
      <my-input title="设置密码:" type="password" v-model="password"></my-input>
      <!-- 提交按钮 -->
      <div class="submit-btn" @click="submit">
        <text class="font-16 font-bold font-black">提交修改</text>
      </div>
      <!-- 登陆跳转 -->
      <div class="flex-items-center">
        <text class="font-light-green font-15">登录账号</text>
      </div>
    </div>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')

// import HText from '@/common/text.vue'
import MyHead from '@/common/navigationbar.vue'
import MyInput from '@/common/h-input.vue'
import { mobileReg, passwordReg, MobileCode, Register } from '@/query/index.js'

export default {
  data () {
    return {
      ImgCode: '',
      mobile: '',
      code: '',
      password: '',
      imageCode: ''
    }
  },
  methods: {
    // 更换图形验证码
    changeImgCode () {
      if(mobileReg(this.mobile)){
        this.ImgCode = `http://platform-trade.dktai.cn/loginAndRegister/getImgCode.html?mobile=${this.mobile}&t=${Math.random()}`
      }
    },
    // 获取手机验证码
    getMobileCode () {
      mobileReg(this.mobile)
      if(!this.imageCode){
        modal.toast({message: '请先输入图片验证码'})
        return
      }
      MobileCode({mobile: this.mobile, type:1, imageCode: this.imageCode})
    },
    // 提交注册
    submit () {
      
      if(!mobileReg(this.mobile)){
        return
      }
      
      if(!this.imageCode){
        modal.toast({message: '请输入图形验证码'})
        return
      }
      // modal.toast({message: 111})
      if(!this.code){
        modal.toast({message: '请输入短信验证码'})
        return
      }
      if(!passwordReg(this.password)){
        return
      }
      Register({mobile: this.mobile, password: this.password, code: this.code})
    }
  },
  components:{ HText, MyHead, MyInput }
}
</script>

<style src="./base.css"></style>
<style scoped>
.verification{
  height: 80upx;
  width: 200upx;
  background-color: #3180FF;
  border-top-left-radius: 20upx;
  border-top-right-radius: 20upx;
  border-bottom-left-radius: 20upx;
  border-bottom-right-radius: 20upx;
}
</style>
