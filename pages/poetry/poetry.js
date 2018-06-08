// pages/poetry/poetry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 0,
    allPages: 0,
    contentlist: [],
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
    this.fetch(this.data.currentPage, true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.fetch(this.data.currentPage+1);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  fetch: function (page, reset) {
    const _this = this;
    wx.showLoading({ title: 'loading' });
    wx.request({
      url: `https://route.showapi.com/341-1?page=${page||1}&maxResult=10&showapi_appid=51856&showapi_sign=3d9c0bd00fb84342b61dc8aaafa131c3`,
      success: function (res) {
        _this.setData({
          contentlist: [...(reset? []: _this.data.contentlist), ...res.data.showapi_res_body.contentlist],
          currentPage: res.data.showapi_res_body.currentPage,
          allPages: res.data.showapi_res_body.allPages,
        })
        if(reset){
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
          })
        }
      },
      complete: function () {
        wx.stopPullDownRefresh();
        wx.hideLoading();
      }
    })
  },

  sliderChange: function(e){
    this.fetch(e.detail.value, true);
  }
})