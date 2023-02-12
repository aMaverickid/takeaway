// import ceshi from "../../data/ceshi.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xinyu:100,
    userInfo:{},
    hasUserInfo:false,
    canIUseGetUserProfile:false,
    select:false,
    kkk:true,
    begin:true,
    morebegin:true,
    grade_name:'位置',
    grades:[
      "位置",
      "大食堂",
      "麦斯威餐厅",
      "银泉餐厅",
      "留学生食堂",
    ],
    inputValue:"",
    zhong:[],
    ceshi:[],
  },
  comTime(){
    var kkk=this.data.kkk
    const ceshi=this.data.ceshi
    function sortDownDate(a,b){
      return Date.parse(a.date)-Date.parse(b.date);
    }
    function sortUpDate(a,b){
      return Date.parse(b.date)-Date.parse(a.date)
    }
    
    if(kkk==true){
    this.setData({
      ceshi:ceshi.sort(sortDownDate),
      kkk:false
    })
    console.log("kkk",kkk)
  }else{
      this.setData({
        ceshi:ceshi.sort(sortUpDate),
        kkk:true
      })
      console.log("kkk",kkk)
    }
  },
  comMoney:function(e){
   let ceshi1=this.data.ceshi
   var begin=this.data.begin
   if(begin){
   ceshi1.sort(function(a,b){
     return b.money-a.money
   }
   )
   console.log(ceshi1)
   this.setData({
     ceshi:ceshi1,
     begin:false,
   })
  }else{
    ceshi1.sort(function(a,b){
      return a.money-b.money
    }
    )
    console.log(ceshi1)
    this.setData({
      ceshi:ceshi1,
      begin:true,
    })
  }
 },
  bindShowMsg(){
     this.setData({
       select:!this.data.select
     })
  },
  mySelect(e){
    console.log(e)
    var name=e.currentTarget.dataset.name
    this.setData({
      grade_name:name,
      select:false
    })
    var grade_name=this.data.grade_name
    switch(grade_name){
      
      case "大食堂":
        var zhong=this.data.zhong
        this.setData({
          ceshi:zhong
        })
        var list3=this.data.ceshi
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         ceshi:list4
       })

      break;
      
      case "麦斯威餐厅":
        var zhong=this.data.zhong
        this.setData({
          ceshi:zhong
        })
        var list3=this.data.ceshi
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         ceshi:list4
       })

      break;
      
      case "银泉餐厅":
      
        var zhong=this.data.zhong
        this.setData({
          ceshi:zhong
        })
        var list3=this.data.ceshi
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         ceshi:list4
       })
      break;
      case "留学生食堂":
      
        var zhong=this.data.zhong
        this.setData({
          ceshi:zhong
        })
        var list3=this.data.ceshi
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         ceshi:list4
       })
      break;
      case "位置":
       var zhong=this.data.zhong
       this.setData({
         ceshi:zhong
       })
       console.log("zhong",zhong)
    
    }


  },
  inputCom:function(e){
   this.setData({
    inputValue:e.detail.value
   })
   console.log(this.data.inputValue)
  },
  query(e){
       var zhong=this.data.zhong
       this.setData({
         ceshi:zhong
       })
       var list=this.data.ceshi
       console.log(list)
       var list2=[];
       for(var i=0;i<list.length;i++){
         var string = list[i].name;
         if(string.indexOf(this.data.inputValue)>=0){
           list2.push(list[i]);
         }
       }
       console.log(list2)
      if(e.detail.value==""){
        this.setData({
          ceshi:list
        })
      }else{
        this.setData({
          ceshi:list2
        })
      }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this.setData({
     ceshi:wx.getStorageSync('history'),
     zhong:wx.getStorageSync('history')
   })
   if(wx.getUserProfile){
    if(this.data.userInfo.nickName) getApp().globalData.name=this.data.userInfo.nickName;
     console.log(this.data.userInfo.nickName);
     this.setData({
       canIUseGetUserProfile:true
     })
   }
   
  },
  getUserProfile(e){
    wx.getUserProfile({
      desc: '用于完善个人资料',
      success:(res)=>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
        if(this.data.userInfo.nickName) getApp().globalData.name=this.data.userInfo.nickName;
      }
    })
  },
  getUserInfo(e){
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
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
    this.setData({
      ceshi:wx.getStorageSync('history'),
      zhong:wx.getStorageSync('history')
    })
    if(wx.getUserProfile){
      if(this.data.userInfo.nickName) getApp().globalData.name=this.data.userInfo.nickName;
      console.log(this.data.userInfo.nickName);
      this.setData({
        canIUseGetUserProfile:true
      })
    }
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