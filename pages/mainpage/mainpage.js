// pages/主界面/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:15071023,
    password1:2222,
    password2:3333
  },
  
  clicklogin: function (e) {
    wx.navigateTo({
      url: "../../pages/login/login"
    })
  },

  clickgrade: function (e) {
    wx.navigateTo({
      url: "../../pages/grade/grade"
    })
  },
  clickschedule: function (e) {
    wx.navigateTo({
      url: "../../pages/schedule/schedule"
    })
  },
  clickclass: function (e) {
    wx.navigateTo({
      url: "../../pages/classcheck/classcheck"
    })
  },
  clicklibrary: function (e) {
    wx.navigateTo({
      url: "../../pages/library/library"
    })
  },
  clickcalendar: function (e) {
    wx.navigateTo({
      url: "../../pages/calendar/calendar"
    })
  },
  clicknotifi: function (e) {
    wx.navigateTo({
      url: "../../pages/notification/notification"

    })
  },
  clicksubscr: function (e) {
    wx.navigateTo({
      url: "../../pages/subscription/subscription"
    })
  },
  clickaccount: function (e) {
    wx.navigateTo({
      url: "../../pages/account/account"
    })
  },
  clickaboutus: function (e) {
    wx.navigateTo({
      url: "../../pages/aboutus/aboutus"
    })
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