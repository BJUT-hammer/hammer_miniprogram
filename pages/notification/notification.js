Page({
  data: {
    array1: ['（空）','教学通告','院部处通知','公示公告','院部处工作信息','科技动态'],
    objectArray1: [
      {
        id: 0,
        name: '（空）'
      },
      {
        id: 1,
        name: '教学通告'
      },
      {
        id: 2,
        name: '院部处通知'
      },
      {
        id: 3,
        name: '公示公告'
      },
      {
        id: 4,
        name: '院部处工作信息'
      },
      {
        id: 5,
        name: '科技动态'
      }
    ],
    index1: 0,
    index2: 0,
    // array2: ['一教','二教','三教','四教','信息楼','经管楼','材料楼','数理楼','软件楼',
    //   '交通楼'],
    // objectArray2: [
    //     {
    //       id: 0,
    //       name: '一教'
    //     },
    //     {
    //       id: 1,
    //       name: '二教'
    //     },
    //     {
    //       id: 3,
    //       name: '三教'
    //     },
    //     {
    //       id: 4,
    //       name: '四教'
    //     },
    //     {
    //       id: 5,
    //       name: '信息楼'
    //     },
    //     {
    //       id: 6,
    //       name: '经管楼'
    //     },
    //     {
    //       id: 7,
    //       name: '材料楼'
    //     },
    //     {
    //       id: 8,
    //       name: '数理楼'
    //     },
    //     {
    //       id: 9,
    //       name: '软件楼'
    //     }
    // ],
    array2: ['（空）','教务处','研究生院','国际交流合作处'],
    objectArray3: [
      {
        id: 0,
        name: '（空）'
      },
      {
        id: 1,
        name: '教务处'
      },
      {
        id: 2,
        name: '研究生院'
      },
      {
        id: 3,
        name: '国际交流合作处'
      }
      // {
      //   id: 4,
      //   name: '第7,8节'
      // },
      // {
      //   id: 5,
      //   name: '第9,10节'
      // },
      // {
      //   id: 6,
      //   name: '第11,12节'
      // },
      // {
      //   id: 7,
      //   name: '上午'
      // },
      // {
      //   id: 8,
      //   name: '下午'
      // },
      // {
      //   id: 9,
      //   name: '晚上'
      // },
      // {
      //   id: 9,
      //   name: '白天'
      // },
      // {
      //   id: 9,
      //   name: '全天'
      // }
    ]
  },

  clickcheck: function(){
    wx.navigateTo({
      url: "../../pages/nitificationscd/nitificationscd"
    })
  },

  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    this.setData(data);
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})