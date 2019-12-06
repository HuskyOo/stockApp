<template>
  <div class="chat container">
    <!-- 本期主题视频标题 -->
    <div class="flex-row-between flex-items-end mb-10 mt-15">
      <text class="font-14 font-white">本期主题视频</text>
      <text class="font-11">当前时间: 2018-08-01 11:40:25</text>
    </div>
    <!-- 图片 -->
    <div class="mb-10">
      <image src="/src/assets/images/banner1.png" resize="cover" style="width:690upx;height:400upx"/>
    </div>
    <text class="mb-20">☆在人多的时候雀环一下频道可获得更好的使用体验</text>
    <!-- 在线人数 -->
    <div class="flex-row-between mb-20">
      <div class="flex-row flex-items-center">
        <image class="mr-5" src="/static/icons/people.png" style="width:40upx;height:30upx"/>
        <text>当前人数: </text>
        <text class="font-white">2132 </text>
        <text>人</text>
      </div>
      <div class="flex-row flex-items-center">
        <image class="mr-5" src="/static/icons/flower.png" style="width:40upx;height:30upx"/>
        <text>频道鲜花: </text>
        <text class="font-white">2132 </text>
        <text>朵</text>
      </div>
    </div>
    <!-- 聊天信息列表 -->
    <div class="radiu-box flex-row-between">
      <image resize="cover" src="/static/icons/touxiang.png" class="avatar"></image>
      <div class="flex">
        <text class="font-white font-16 font-bold mb-10">长者</text>
        <text class="font-white font-14 mb-10">我和大佬谈笑风声</text>
        <text>2018-07-16 18:18:06</text>
      </div>
    </div>
    <!-- 发送消息框 -->
    <div class="flex-row-between flex-items-center bg-gray message-box" v-if="false">
      <image src="/static/icons/send_flower.png" class="mr-15" style="width:50upx;height:50upx"/>
      <input type="text" class="flex message-input">
      <image src="/static/icons/send.png" class="ml-15" style="width:50upx;height:50upx"/>
    </div>
  </div>
</template>

<script>
// import HText from '@/common/text.vue'
export default {
  // components: {HText}
}
</script>

<style src="./base.css"></style>

<style scoped>
.message-box{
  position: fixed;
  width: 750upx;
  left: 0;
  bottom: 100upx;
  box-sizing: border-box;
  padding: 14upx 30upx;
}
.message-input{
  height:70upx;
  background-color:#303238;
  border-top-left-radius: 35upx;
  border-top-right-radius: 35upx;
  border-bottom-left-radius: 35upx;
  border-bottom-right-radius: 35upx;
  padding-left: 20upx; 
}
</style>
