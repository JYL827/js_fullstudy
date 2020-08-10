// pages/discover/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot: [
      { name: '坏小孩'},
      { name: '雪中悍刀行'},
      { name: '云边有个小卖部'},
      { name: '阿耐职场四部曲'},
      { name: '黎巴嫩首都发生爆炸' }
    ],
    book: [
      {
        url:'https://wfqqreader-1252317822.image.myqcloud.com/cover/995/822995/t6_822995.jpg',
        name: '明朝那些事',
        writer: '当年明月',
        score: 9.0,
        reader: 1800,
        friendReader: 3
      },
      {
        url:'https://wfqqreader-1252317822.image.myqcloud.com/cover/457/22946457/t6_22946457.jpg',
        name: '围城',
        writer: '钱钟书',
        score: 9.0,
        reader: 1870,
        friendReader: 1
      },
      {
        url:'https://wfqqreader-1252317822.image.myqcloud.com/cover/865/172865/t6_172865.jpg',
        name: '明朝那些事',
        writer: '当年明月',
        score: 8.9,
        reader: 18741,
        friendReader: 10
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})