<template>
  <view class="showcase">
    <!-- <my-head title="详细数据"></my-head> -->
    <!-- <waterfall column-count="3" column-gap="30" column-width="auto" left-gap="30" right-gap="30" class="mt-15">
      <cell v-for="item in dataList" :key="item.id">
        <view class="radiu-box">
          <text class="mb-10 font-14">{{item.title}}</text>
          <text class="font-16 font-white font-bold">{{item.detail}}</text>
        </view>
      </cell>
      <cell>
        <view class="radiu-box flex-col-around flex-items-center" style="height:150upx">
          <text class="font-orange">更多数据</text>
          <text class="font-orange">正在计算</text>
        </view>
      </cell>
    </waterfall> -->
    <view class="mt-15 content-box">
      <view class="content-item" v-for="item in dataList" :key="item.id">
        <view class="radiu-box flex-col-around flex-items-center" style="height:150upx">
          <text class="mb-10 font-14">{{item.title}}</text>
          <text class="font-16 font-white font-bold">{{item.detail}}</text>
        </view>
      </view>
      <view class="content-item">
        <view class="radiu-box flex-col-around flex-items-center" style="height:150upx">
          <text class="font-orange">更多数据</text>
          <text class="font-orange">正在计算</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
// var modal = weex.requireModule('modal')

// import HText from '@/components/text.vue'
// import MyHead from '@/common/navigationbar.vue'
export default {
  // components: { HText },
  data () {
    return {
      dataList: [
        {id:1, title:'合约', detail: '美黄金'},
        {id:2, title:'期数', detail: '美黄金'},
        {id:3, title:'最新价', detail: '1241.05'},
        {id:4, title:'涨跌额', detail: '3.2'},
        {id:5, title:'涨跌幅', detail: '0.26%'},
        {id:6, title:'当前手数', detail: '10'},
        {id:7, title:'买价', detail: '1233.2'},
        {id:8, title:'卖价', detail: '1233.2'},
        {id:9, title:'买量', detail: '23'},
        {id:10, title:'卖量', detail: '35'},
        {id:11, title:'成交量', detail: '3223'},
        {id:12, title:'持仓量', detail: '3223'},
        {id:13, title:'开盘价', detail: '1233.2'},
        {id:14, title:'昨结价', detail: '1233.2'},
        {id:15, title:'最高价', detail: '1233.2'},
        {id:16, title:'最低价', detail: '1233.2'},
        {id:17, title:'平均价', detail: '1233.2'}
      ]
    }
  },
  mouted () {
    var str = weex.config.bundleUrl
    modal.toast({ message: str })
  }
}
</script>
<style src="./base.css"></style>
<style scoped>
.content-box{
  box-sizing: border-box;
  padding: 30upx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
}
.content-item{
  width: 210upx;
}
</style>
