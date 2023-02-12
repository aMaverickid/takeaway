// components/dingdan1/dingdan1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   item:{
     type:Object,
     value:{}
   }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toss:function(item){
      const db=wx.cloud.database();
      db.collection('tasklist').where({
        'task.member':item.member,
        'task.money':item.money,
        'task.name':item.name,
        'task.location':item.location,
        'task.date':item.date
      }).remove();
    },
    add:function(e){
      let item=e.currentTarget.dataset.item
      this.toss(item);
      item.member++;
      const db=wx.cloud.database();
      db.collection('tasklist').add({
        data:{
          task:item
        }
      });
      var tmp=wx.getStorageSync('history')||[]
      tmp.unshift(item);
      console.log(tmp);
      wx.setStorageSync('history', tmp);
    },
    get:function(e){
      let item=e.currentTarget.dataset.item;
      var tmp=wx.getStorageSync('history')||[]
      tmp.unshift(item);
      console.log(tmp);
      wx.setStorageSync('history', tmp);
      this.toss(item);
    },
    display:function(e){
      console.log(e);
      wx.setStorage({
        key:"orders_now",
        data:e.currentTarget.dataset.item,
      });
      wx.navigateTo({
        url: '../display/display',
      });
    }
  }
})
