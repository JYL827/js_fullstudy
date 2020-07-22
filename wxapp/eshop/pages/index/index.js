//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 去请求一个接口数据
    // 小程序是本地的，数据是远程的
    wx.request({
      url: 'http://localhost:1314/articles', 
      data: {
         x: '' ,
         y: ''
      },
      header:{
          "Content-Type":"application/json"
      },
      success: (res) => {
         console.log(res.data)
         this.setData({
           articles: res.data.articles
         })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
