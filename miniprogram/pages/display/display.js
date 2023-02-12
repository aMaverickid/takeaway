//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 统计商品数量和价格
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
    // 提交的订单
    orders: true,
    items: []
  },
  // 点击对应菜单添加按钮
  onLoad: function() {
    let that = this;
    // 取出订单传过来的数据
    wx.getStorage({
      key: 'orders_now',
      success: function (res) {
        that.setData({
          items: res.data
        });
        // 价格统计汇总
        let money = 0;
        let num = 0
        res.data.forEach(item => {
          money += (item.price*item.num); // 总价格求和
          num +=item.num;
        });
        let orderCount = {
          num,
          money
        }
        // 设置显示对应的总数和全部价钱
        that.setData({
          orderCount
        });
      }
    })
  }
})