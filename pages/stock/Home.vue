<template>
  <view class="home">
    <view class="container">
      <!-- 标题和时间 -->
      <view class="k-title">
        <text>最新金价</text>
        <text>2018-08-01 11:40:25</text>
      </view>
      <!-- 价钱 -->
      <view class="radiu-box k-detail">
        <text class="font-green font-15">-2.2</text>
        <text class="font-green font-24">1243.45</text>
        <text class="font-green font-15">0.23%</text>
      </view>
      <!-- k 线图 -->
      <view class="radiu-box">
        <!-- <view id="my_charts" style="height:600upx"></view> -->
      </view>
      <!-- 轮播图 -->
      <view style="height:300upx">
        <!-- <slider class="slider" interval="3000" auto-play="true" show-indicators>
          <view class="frame" v-for="(img, index) in imageList" :key="index">
            <image class="image" resize="cover" :src="img"></image>
          </view>
        </slider> -->
        <swiper style="height:300upx" class="slider" interval="3000" :autoplay="true" :indicator-dots="true">
          <swiper-item style="height:300upx" v-for="(img, index) in imageList" :key="index">
            <image class="image" resize="cover" :src="img"></image>
          </swiper-item>
        </swiper>
      </view>

      
      <!-- 九宫格 -->
      <view class="grid">
        <view class="grid-item">
          <image src="/static/icons/information.png" style="width:80upx;height:80upx;margin-bottom:20upx;" resize="cover"/>
          <text>数据</text>
        </view>
        <view class="grid-item">
          <image src="/static/icons/information.png" style="width:80upx;height:80upx;margin-bottom:20upx;" resize="cover"/>
          <text>数据</text>
        </view>
        <view class="grid-item">
          <image src="/static/icons/information.png" style="width:80upx;height:80upx;margin-bottom:20upx;" resize="cover"/>
          <text>数据</text>
        </view>
        <view class="grid-item">
          <image src="/static/icons/information.png" style="width:80upx;height:80upx;margin-bottom:20upx;" resize="cover"/>
          <text>数据</text>
        </view>
      </view>
      <!-- 买盘 卖盘 -->
      <view class="radiu-box bid">
        <view class="bid-title">
          <text class="font-red font-16">买盘</text>
          <text class="font-green font-16">卖盘</text>
        </view>
        <view class="bid-ratio">
          <view class="bid-buy"></view>
          <view class="bid-ratio-font">
            <text class="font-black font-11">75%</text>
            <text class="font-black font-11">25%</text>
          </view>
        </view>
        <text>☆可根据买卖盘占比判断市场的多空趋势</text>
      </view>
      <!-- 开盘价 昨结价...  详细信息 -->
      <view class="radiu-box futures-detail">
        <view class="futures-item">
          <text class="futures-title">开盘价</text>
          <text class="futures-num font-15 font-white">1241.0</text>
        </view>
        <view class="futures-item">
          <text class="futures-title">开盘价</text>
          <text class="futures-num font-15 font-white">1241.0</text>
        </view>
        <view class="futures-item">
          <text class="futures-title">开盘价</text>
          <text class="futures-num font-15 font-red">1241.0</text>
        </view>
        <view class="futures-item">
          <text class="futures-title">开盘价</text>
          <text class="futures-num font-15 font-green">1241.0</text>
        </view>
        <view class="futures-item">
          <text class="futures-title">开盘价</text>
          <text class="futures-num font-15 font-red">1241.0</text>
        </view>
        <view class="futures-item">
          <text class="futures-title">开盘价</text>
          <text class="futures-num font-15 font-green">1241.0</text>
        </view>
      </view>
      <!-- <a href="ShowCase.js"> -->
        <view @click="jumpShowCase">
      <text class="font-white look-more">查看更多详细数据>></text>
      </view>
      <!-- </a> -->
      
    </view>
    <!-- 导航栏 -->
    <view class="bg-light-black flex-row-around flex-items-center nav">
      <text class="font-14">新闻</text>
      <text class="font-14">情绪</text>
      <text class="font-14">发言</text>
      <text class="font-14">十档</text>
      <text class="font-14">公告</text>
      <text class="font-14">简介</text>
    </view>

<!-- <text>{{scrolltext}}</text> -->
    <!-- 新闻 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 新闻 -->
      <view>
        <view class="radiu-box flex-row-between">
          <view class="news-info flex-col-between">
            <text class="font-bold font-white font-18">中国智慧</text>
            <text>2018-07-16 16:52:38</text>
          </view>
          <image src="/static/icons/touxiang.png" resize="cover" style="width:100upx;height:100upx;"/>
        </view>
      </view>
    </scroller>
    <!-- 情绪 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 情绪 -->
      <view class="radiu-box">
        <view class="flex-row-between" style="margin-bottom:36upx">
          <view class="flex-col-between">
            <text class="font-16 font-red">多头</text>
            <view>
              <text style="margin-bottom:20upx">看多</text>
              <text class="font-15 font-red">68%</text>
            </view>
          </view>
          <view></view>
          <view class="flex-col-between">
            <text class="font-16 font-green">空头</text>
            <view class="flex-items-end">
              <text style="margin-bottom:20upx">看空</text>
              <text class="font-15 font-green">32%</text>
            </view>
          </view>
        </view>
        <text>☆可根据多空头判断市场走势趋势</text>
      </view>
    </scroller>
    <!-- 发言 -->
    <scroller class="container nav-box mt-15" @scroll="scrollHandler">
      <!-- 发言 -->
      <view>
        <!-- 最新金价 -->
        <view class="radiu-box flex-row-between">
          <text class="font-white font-14">最新金价</text>
          <text class="font-green font-15">1243.45</text>
        </view>
        <!-- 发言框 -->
        <view class="radiu-box bg-gray flex-row-between flex-items-center">
          <input type="text" class="say-input bg-black"/>
          <image resize="cover" src="/static/icons/send.png" style="width:50upx;height:50upx" />
        </view>
        <!-- 发言列表 -->
        <view class="radiu-box flex-row-between">
          <image resize="cover" src="/static/icons/touxiang.png" class="avatar"></image>
          <view class="say-info">
            <text class="font-white font-16 font-bold say-uname">长者</text>
            <text class="font-white font-14 say-message">我和大佬谈笑风声</text>
            <text>2018-07-16 18:18:06</text>
          </view>
        </view>
        <view class="radiu-box flex-row-between">
          <image resize="cover" src="/static/icons/touxiang.png" class="avatar"></image>
          <view class="say-info">
            <text class="font-white font-16 font-bold say-uname">长者</text>
            <text class="font-white font-14 say-message">我和大佬谈笑风声</text>
            <text>2018-07-16 18:18:06</text>
          </view>
        </view>
        <view class="radiu-box flex-row-between">
          <image resize="cover" src="/static/icons/touxiang.png" class="avatar"></image>
          <view class="say-info">
            <text class="font-white font-16 font-bold say-uname">长者</text>
            <text class="font-white font-14 say-message">我和大佬谈笑风声</text>
            <text>2018-07-16 18:18:06</text>
          </view>
        </view>
      </view>
    </scroller>
    <!-- 十档 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 十档 -->
      <view>
        <view class="flex-row-between" style="margin-bottom:30upx">
          <text class="font-16">买五档</text>
          <text class="font-16">卖五档</text>
        </view>
        <view class="flex-row-between">
          <view class="radiu-box flex" style="margin-right:30upx">
            <view class="flex-row-between">
              <text class="font-green">卖一</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-green">卖二</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-green">卖三</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-green">卖四</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-green">卖五</text>
              <text>31201</text>
              <text>16</text>
            </view>
          </view>
          <view class="radiu-box flex">
            <view class="flex-row-between">
              <text class="font-red">买一</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-red">买二</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-red">买三</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-red">买四</text>
              <text>31201</text>
              <text>16</text>
            </view>
            <view class="flex-row-between">
              <text class="font-red">买五</text>
              <text>31201</text>
              <text>16</text>
            </view>
          </view>
        </view>
      </view>
    </scroller>
    <!-- 公告 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 公告 -->
      <view class="radiu-box">
        <text class="font-bold font-white font-18" style="margin-bottom: 30upx">中国智慧</text>
        <text>2018-07-16 16:52:38</text>
      </view>
    </scroller>
    <!-- 简介 -->
    <scroller class="nav-box" v-if="false">
      <!-- 简介 -->
      <view class="table-row">
        <view class="table-item border row-center col-center">
          <text class="font-center">交易品种</text>
        </view>
        <view class="table-item border row-center col-center">
          <text class="font-center font-15 font-white">CMX黄金</text>
        </view>
        <view class="table-item border row-center col-center">
          <text class="font-center">交易代码</text>
        </view>
        <view class="table-item border row-center col-center">
          <text class="font-center font-15 font-white">纽约商品交易所</text>
        </view>
      </view>
    </scroller>
    
  </view>
</template>
<script>
// var modal = weex.requireModule('modal')
// var navigator = weex.requireModule('navigator')
// var websocket = weex.requireModule('webSocket')

// import HText from '@/components/text.vue'
// import echarts from 'echarts'
// import Socket from '@/query/socket.js'
export default {
  // components: {HText},
  data () {
    return {
      imageList: [
        '/static/images/banner1.png',
        '/static/images/banner2.png',
        '/static/images/banner3.png'
      ],
      scrolltext: ''
    }
  },
  mounted () {
    // Socket()
    // websocket.WebSocket('ws://echo.websocket.org','');
  },
  methods: {
    jumpShowCase (event) {
      // navigator.push({
      //     url: '/showcase',
      //     animated: "true"
      //   })
      // var arr = weex.config.bundleUrl.split('/')
      // arr.pop()
      // arr.push('showcase.js')
      // var url = arr.join('/')
      // modal.toast({ message: url })
      // navigator.push({
      //   url,
      //   animated: 'true'
      // })
      // modal.toast({ message: 'callback: ' + event })
      // modal.toast({ message: str })
      // router.push({path:'showcase'})
      // this.$router.push('showcase')
      uni.navigateTo({
        url: '/pages/stock/ShowCase'
      })
    },
    scrollHandler (e) {
      var nowCnt = this.eventCnt + 1;
        this.eventCnt = nowCnt;
        this.offsetX = e.contentOffset.x;
        this.offsetY = e.contentOffset.y;
        this.hint = "scroll event count:" + this.eventCnt + " offsetX:" + this.offsetX + " offsetY:" +this.offsetY;
    },
    // draw (id) {
    //   var myChart = echarts.init(document.getElementById(id))
    //   var option = {
    //         tooltip: {
    //             show: true
    //         },
    //         legend: {
    //             data:['销量']
    //         },
    //         xAxis : [
    //             {
    //                 type : 'category',
    //                 data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","男装"]
    //             }
    //         ],
    //         yAxis : [
    //             {
    //                 type : 'value'
    //             }
    //         ],
    //         series : [
    //             {
    //                 "name":"销量",
    //                 "type":"bar",
    //                 "data":[5, 20, 40, 10, 10, 20, 100]
    //             }
    //         ]
    //     };
    //   myChart.setOption(option)
    // }
  }
}
</script>

<style src="./base.css">
</style>

<style scoped>
  /* .home{
    padding: 0 30upx;
  } */
  .k-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20upx;
  }
  .k-detail{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-bottom: 20upx; */
    align-items: center;
  }
  .image {
    width: 690upx;
    height: 300upx;
  }
  .grid{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 30upx 0;
  }
  .grid-item{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bid-title{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24upx;
  }
  .bid-ratio{
    height: 30upx;
    border-top-left-radius: 15upx;
    border-top-right-radius: 15upx;
    border-bottom-left-radius: 15upx;
    border-bottom-right-radius: 15upx;
    background-color:#64FF68;
    overflow: hidden;
    position: relative;
    margin-bottom: 30upx;
  }
  .bid-buy{
    background-color: #FF4A80;
    height: 30upx;
    width: 472upx;
  }
  .bid-ratio-font{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top:0;
    left: 0;
    padding: 0 10upx;
    width: 630upx;
    /* width: 200upx; */
    height: 30upx;
  }
  .futures-detail{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .futures-item{
    align-items:center;
    width: 170upx;
    margin-bottom: 30upx;
  }
  .futures-title{
    margin-bottom:10upx;
  }
  .look-more{
    text-align: right;
    margin-bottom: 20upx;
  }
  .say-input{
    width: 550upx;
    height: 70upx;
    border-top-left-radius: 35upx;
    border-top-right-radius: 35upx;
    border-bottom-left-radius: 35upx;
    border-bottom-right-radius: 35upx;
    padding: 0 20upx;
    color: #fff;
  }

  /* 新闻 */
  /* .news-info{

  } */
  /* 发言 */
  .say-info{
    /* margin-bottom: 20upx; */
    width: 750upx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .say-uname{
    margin-bottom: 20upx;
  }
  .say-message{
    margin-bottom: 20upx;
  }
  .nav{
    height:80upx;
  }
  .nav-box{
    height:620upx
  }
  .avatar{
    flex-shrink: 0;
    width: 80upx;
    height: 80upx;
  }
</style>