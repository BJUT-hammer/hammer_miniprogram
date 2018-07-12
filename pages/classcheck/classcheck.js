Page({
  data: {
    array1: ['本部', '通州'],
    objectArray1: [
      {
        id: 0,
        name: '本部'
      },
      {
        id: 1,
        name: '通州'
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
    array2: ['第1,2节', '第3,4节', '第5,6节', '第7,8节', '第9,10节', '第11,12节', '上午', '下午', '晚上', '白天', '全天',],
    objectArray3: [
      {
        id: 0,
        name: '第1,2节'
      },
      {
        id: 1,
        name: '第3,4节'
      },
      {
        id: 2,
        name: '第5,6节'
      },
      {
        id: 3,
        name: '第7,8节'
      },
      {
        id: 4,
        name: '第9,10节'
      },
      {
        id: 5,
        name: '第11,12节'
      },
      {
        id: 6,
        name: '上午'
      },
      {
        id: 7,
        name: '下午'
      },
      {
        id: 8,
        name: '晚上'
      },
      {
        id: 9,
        name: '白天'
      },
      {
        id: 10,
        name: '全天'
      }
    ]
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