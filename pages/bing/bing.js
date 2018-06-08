// pages/bing/bing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  fetch(){
    const _this = this;
    wx.showLoading({ title: 'loading' });
    wx.request({
      url: 'https://route.showapi.com/1377-1?showapi_appid=51856&showapi_sign=3d9c0bd00fb84342b61dc8aaafa131c3',
      success: function (res) {
        _this.setData({
          list: res.data.showapi_res_body.list
        })
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        })
      },
      complete: function(){
        wx.stopPullDownRefresh();
        wx.hideLoading();
      }
    })
  },
  tapPic(e){
    wx.previewImage({
      current: e.target.dataset.src, // 当前显示图片的http链接
      urls: [e.target.dataset.src] // 需要预览的图片http链接列表
    })
  }
})