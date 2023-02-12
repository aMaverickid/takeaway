// pages/home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:"",
    destination:"",
    markers: [
      {
        id:0,
        iconPath:"../../images/3.1定位.png",
        latitude:30.308016,
        longitude:120.084033,
        width:30,
        height:30,
        title:'东区大食堂'
      },
      {
        id:1,
        iconPath:"../../images/3.1定位.png",
        latitude:30.303804,
        longitude:120.085548,
        width:30,
        height:30,
        title:'临湖餐厅'
      },
      {
        id:2,
        iconPath:"../../images/3.1定位.png",
        latitude:30.301727,
        longitude:120.08928,
        width:30,
        height:30,
        title:'麦斯威餐厅',
      },
      {
        id:3,
        iconPath:"../../images/3.1定位.png",
        latitude:30.300139,
        longitude:120.07244,
        width:30,
        height:30,
        title:'玉湖食堂'
      },
      {
        id:4,
        iconPath:"../../images/3.1定位.png",
        latitude:30.306311,
        longitude:120.075402,
        width:30,
        height:30,
        title:'银泉食堂'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('loading...');
    var that = this
    wx.getLocation({
      type:'wgs84',
      success: function (res) {
        console.log("当前纬度" + res.latitude);
        console.log("当前经度" + res.longitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
  select:function(e){
    wx.reLaunch({
      url: '../list/list',
    })
  },
  handle_menu: function(e) {
    wx.showActionSheet({
      itemList: ['东区大食堂','临湖餐厅','麦斯威餐厅','玉湖食堂','银泉食堂'],
      success: function (res) {
        if(!res.cancel) {
          let pos= ['东区大食堂','临湖餐厅','麦斯威餐厅','玉湖食堂','银泉食堂'];
          app.globalData.destination = pos[res.tapIndex];
          console.log(app.globalData.destination)
          wx.navigateTo({
            url: '../index/index',
          })
        }
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }

})