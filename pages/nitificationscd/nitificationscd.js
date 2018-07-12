// pages/library/library.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    color: 'primary'
  },

  BookRemind: function () {
    this.setData({
      color: "defalut"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [{
        "id": 1,
        "Title": "Java从入门到放弃",
        "Author": "ABC",
        "Borrow": "2018-07-01",
        "Limit": "2018-07-30",
        "Remind": true,
        "color": 'primary'
      },
      {
        "id": 2,
        "Title": "Java从入门到放弃2",
        "Author": "ABC2",
        "Borrow": "2018-07-012",
        "Limit": "2018-07-302",
        "Remind": false,
        "color": 'primary'
      },
      {
        "id": 3,
        "Title": "Java从入门到放弃2",
        "Author": "ABC2",
        "Borrow": "2018-07-012",
        "Limit": "2018-07-302",
        "Remind": false,
        "color": 'primary'
      }
      ],
    };

    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
    })
  },

  switchchange: function (e) {
    console.log(e.detail.value);
    console.log(e.target.id);
  }
})