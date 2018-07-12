Page({
  data: {
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" },
      { "code": "08", "text": "text8", "type": "type8" }
    ]
  },

  clickbutton: function(){
    wx.navigateTo({
      url: "../../pages/subscription/subscription"
    })
  },

  clickdelete: function(){
    let that = this;
    console.log(e);
    let deldeid = e.currentTarget.dataset.id;
    let allDatas = that.data.allData;
    let newallData = [];
    for (var i in allDatas) {
      var item = allDatas[i];
      if (item.id != deldeid) {
        newallData.push(item);
      }
    }

    /*
    删除筛选条件部分，未完成
    */ 
    console.log(newallData)
    wx.showModal({
      'content': '确认删除该信息吗？',
      'cancelColor': '#0076FF',
      'confirmColor': '#0076FF',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          let url = getApp().Api_url + '/receiver/delete';
          requestd._post(url, { receiverId: e.currentTarget.dataset.id }, function (res2) {
            console.log(res2);
            if (res2.data.status == 1) {
              that.setData({
                allData: newallData
              });
            } else {
              wx.showModal({
                'showCancel': false,
                'content': res2.data.message,
                'confirmColor': '#0076FF'
              })
            }
          }, function (res2) { })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  
  onLoad: function () {
    console.log('onLoad')

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