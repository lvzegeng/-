// pages/quotation/quotation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetch();
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
    this.fetch();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.fetch();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  fetch: function(){
    const _this = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://route.showapi.com/1211-1?showapi_appid=51856&showapi_sign=3d9c0bd00fb84342b61dc8aaafa131c3&count=10',
      success: function (res) {
        _this.setData({
          list: [..._this.data.list, ...res.data.showapi_res_body.data],
        })
      },
      complete: function () {
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
      }
    })
  }
})