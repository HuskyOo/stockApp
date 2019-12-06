<template>
  <view class="more container">
    <!-- 账号 -->
    <text class="font-bold font-16 mb-10">账号</text>
    <!-- 已登录 -->
    <view class="radiu-box flex-row-between">
      <view class="flex-col-end">
        <text class="font-white font-bold font-16 mb-15">186****0920</text>
        <text class="font-orange">天行健, 君子以自强不息</text>
      </view>
      <image src="/static/icons/touxiang.png" resize="cover" class="avatar" />
    </view>
    <!-- 未登录 -->
    <view class="radiu-box flex-row-center p-25">
      <view class="mr-30" @click="jumpLog">
        <text class="font-black font-bold font-14 btn-40 bg-blue" style="width:200upx">快登陆</text>
      </view>
      <view @click="jumpRegister">
        <text class="font-black font-bold font-14 btn-40 bg-light-green" style="width:200upx">快注册</text>
      </view>
    </view>

    <!-- 小工具 -->
    <text class="font-bold font-16 mb-10">小工具</text>
    <view class="radiu-box flex-row flex-wrap pl-0 pr-0">
      <view class="flex-items-center icons-item"  v-for="(item, index) of tool" :key="index" @click="jumpPage(item.path)">
        <image resize="cover" :src="item.image" class="icon-image" />
        <text class="font-white">{{item.title}}</text>
      </view>
      
    </view>
    <!-- 持仓数据 -->
    <text class="font-bold font-16 mb-10">持仓数据</text>
    <view class="radiu-box flex-row flex-wrap pl-0 pr-0">
      <view class="flex-items-center icons-item" v-for="(item, index) of amount" :key="index">
        <image resize="cover" :src="item.image" class="icon-image" />
        <text class="font-white">{{item.title}}</text>
      </view>
    </view>
    <!-- 更多贵金属数据 -->
    <view class="flex-row-between flex-items-center">
      <text class="font-bold font-16 mb-10">更多贵金属行情</text>
      <view class="flex-row flex-items-center">
        <image src="/static/icons/change.png" class="mr-5" style="width:30upx;height:30upx" />
        <text class="font-11">换一换</text>
      </view>
    </view>
    <view class="radiu-box"></view>
  </view>
</template>
<script>
// import HText from '@/common/text.vue'
export default {
  // components: {HText},
  data () {
    return {
      tool:[
        {image: '/static/icons/service.png', title: '客服', path: '/'},
        {image: '/static/icons/about.png', title: '关于猎豹', path: 'aboutus'},
        {image: '/static/icons/recommend.png', title: '推荐应用', path: '/'},
        {image: '/static/icons/alter.png', title: '修改密码', path: 'changepwd'},
        {image: '/static/icons/account.png', title: '切换账号', path: '/'},
      ],
      amount: [
        {image: '/static/icons/ETF.png', title: 'ETF持仓', path: ''},
        {image: '/static/icons/CFTC.png', title: 'CFTC持仓', path: ''}
      ]
    }
  },
  methods: {
    jumpLog () {
      this.$router.push('log')
    },
    jumpRegister () {
      this.$router.push('register')
    },
    jumpPage (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style src="./base.css"></style>
<style scoped>
.avatar{
  width: 120upx;
  height: 120upx;
  border-color: #4C5059;
  border-style: solid;
  border-width: 10upx;
  /* border-top-left-radius: 60upx;
  border-top-right-radius: 60upx;
  border-bottom-left-radius: 60upx;
  border-bottom-right-radius: 60upx; */
  border-radius: 50%
}
.icons-item{
  width: 229upx;
  display: flex;
  flex-direction: column;
}
.icon-image{
  width: 80upx;
  height: 80upx;
  margin-bottom: 14upx;
}
</style>
