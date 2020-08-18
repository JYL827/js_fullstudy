// pages/bookshelf/bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot: [
      { name: '雷军十年演讲' },
      { name: '一念永恒' },
      { name: '史上最狂老祖' },
      { name: '大奉打更人' },
    ],
    book: [
      {
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/764/907764/t6_907764.jpg',
        name: '图解HTTP',
        isOpen: true
      },
      {
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/906/23826906/t6_23826906.jpg',
        name: '区块链超入门',
        isOpen: false
      },
      {
        url: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/457/22946457/t6_22946457.jpg',
        name: '围城',
        isOpen: true
      }
    ],
    count: 0
  },
  openRead() {
    let count = this.data.count;
    let book = this.data.book;
    for (let i = 0; i < book.length; i++) {
      if (book[i].isOpen == true) {
        count++
      }
    }
    this.setData({
      count: count
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.openRead()
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