var weeksArray = [];
Page({
    data: {
        sch_listData: [],
        dateArray: [
            { weekName: "周一", weekNum: 0 },
            { weekName: "周二", weekNum: 1 },
            { weekName: "周三", weekNum: 2 },
            { weekName: "周四", weekNum: 3 },
            { weekName: "周五", weekNum: 4 },
            { weekName: "周六", weekNum: 5 },
            { weekName: "周日", weekNum: 6 }
        ],
        classArray: [
            { time_title: "1" },
            { time_title: "2" },
            { time_title: "3" },
            { time_title: "4" },
            { time_title: "5" },
            { time_title: "6" },
            { time_title: "7" },
            { time_title: "8" },
            { time_title: "9" },
            { time_title: "10" },
            { time_title: "11" },
            { time_title: "12" }
        ],
        scheduleArray: [
            {
                "classId": 1,
                "className": "语文",
                "dayOfWeek": "1",
                "timePeriod": "1",
                "teacherName": "李老师"
            },
            {
                "classId": 1,
                "className": "语文",
                "dayOfWeek": "1",
                "timePeriod": "2",
                "teacherName": "李老师"
            },
            {
                "classId": 2,
                "className": "数学",
                "dayOfWeek": "5",
                "timePeriod": "3",
                "teacherName": "王老师"
            },
            {
                "classId": 2,
                "className": "数学",
                "dayOfWeek": "5",
                "timePeriod": "4",
                "teacherName": "王老师"
            }
        ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        for (var j = 0; j < scheduleList.length; j++) {
            console.log('----' + scheduleList[j].docName);
        }

        var daysArray = getSevenDays();
        var sch_listData = dealData(scheduleList);

        this.setData({
            dateArray: daysArray,
            sch_listData: sch_listData,
        });
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
        // var that = this;
        // GetDepartment_info(that);
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

    },
})




var getSevenDays = function () {
    var daysArray = [{ weekName: "周一", weekNum: 0 }, { weekName: "周二", weekNum: 1 }, { weekName: "周三", weekNum: 2 }, { weekName: "周四", weekNum: 3 }, { weekName: "周五", weekNum: 4 }, { weekName: "周六", weekNum: 5 }, { weekName: "周日", weekNum: 6 }];
    var dayDict = {};
    var weekStr = '';
    var weekNum = '';

    weeksArray = daysArray;
    return daysArray;
}

var getWeekByDay = function (dayValue) {
    var day = new Date(Date.parse(dayValue.replace(/-/g, '/'))); //将日期值格式化  
    var today = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六"); //创建星期数组  
    return today[day.getDay()];  //返一个星期中的某一天，其中0为星期日  
}


var dealData = function (scheduleInfoList) {
    var tag = weeksArray[0].weekNum;
    console.log('tag:' + tag);
    var ar = [1, 2, 3, 4, 5, 6, 7];
    var weekClass = [];

    for (var i = 0; i < scheduleInfoList.length; i++) {
        // console.log(scheduleInfoList[i].scheduleId + "222222");
        for (var h = 0; h < 7; h++) {
            if (scheduleInfoList[i].dayOfWeek == h) {
                for (var j = 0; j < 12; j++) {
                    if (scheduleInfoList[i].timePeriod == j) {
                        weekClass = weekClass.concat(scheduleInfoList[i]);
                    }
                    else {
                        weekClass = weekClass.concat([{
                            "classId": 0,
                            "className": "",
                            "dayOfWeek": "h",
                            "timePeriod": "j",
                            "teacherName": ""
                        }]);
                    }
                    i++;
                }
            }
        }
    }
    var sch_listData = [{ time_title: "1" }, { time_title: "2" }, { time_title: "3" }, { time_title: "4" }, { time_title: "5" }, { time_title: "6" }, { time_title: "7" }, { time_title: "8" }, { time_title: "9" }, { time_title: "10" }, { time_title: "11" }, { time_title: "12" }]
    return sch_listData;
}