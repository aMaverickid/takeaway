// pages/41/41.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tp:[],
    Loadingtime1:'',
    Loadingtime:"",
    select:false,
    kkk:true,
    begin:true,
    morebegin:true,
    pingdan:[],
    grade_name:'位置',
    grades:[
      '位置',
      '东区大食堂',
      '临湖餐厅',
      '麦斯威餐厅',
      '玉湖食堂',
      '银泉食堂'
    ],
    inputValue:"",
    zhong:[]
  },
  comTime(){
    
    var kkk=this.data.kkk
    var pingdan=this.data.pingdan
    function sortDownDate(a,b){
      return Date.parse(a.date)-Date.parse(b.date);
    }
    function sortUpDate(a,b){
      return Date.parse(b.date)-Date.parse(a.date)
    }
    console.log(pingdan.sort(sortDownDate))
    if(kkk==true){
    this.setData({
      pingdan:pingdan.sort(sortDownDate),
      kkk:false
    })
    console.log("kkk",kkk)
  }else{
      this.setData({
       pingdan:pingdan.sort(sortUpDate),
        kkk:true
      })
      console.log("kkk",kkk)
    }
  },
  comMoney:function(e){
    
    let pingdan1=this.data.pingdan
    var begin=this.data.begin
    if(begin){
    pingdan1.sort(function(a,b){
      return b.money-a.money
    }
    )
    console.log(pingdan1)
    this.setData({
      pingdan:pingdan1,
      begin:false,
    })
   }else{
     pingdan1.sort(function(a,b){
       return a.money-b.money
     }
     )
     console.log(pingdan1)
     this.setData({
       pingdan:pingdan1,
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
   
   this.setData({})
    switch(grade_name){
      
      case "东区大食堂":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })
       var that=this
       
       clearInterval(that.data.Loadingtime);
        that.setData({
          Loadingtime:null
        })
       /* var tip=[]
        
        
        that.setData({
          Loadingtime1:setInterval(() => {
           
            wx.cloud.database().collection('tasklist').get(res=>{
              console.log(res.data)
              res.data.map(item => {
                return{
                  tip:item.task
                }
              });
        var list5=[];
        for(var i=0;i<tip.length;i++){
          var string = tip[i].location;
          if(string.indexOf(grade_name)>=0){
            list5.push(tip[i]);
          }
        }
      
       this.setData({
         pingdan:list5
       })
          }, 8000)
        })
      })*/
      break;
      case "临湖餐厅":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })
       var that=this
       clearInterval(that.data.Loadingtime);
        that.setData({
          Loadingtime:null
        })
      break;
      case "玉湖食堂":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })
       var that=this
       clearInterval(that.data.Loadingtime);
        that.setData({
          Loadingtime:null
        })
      break;
      case "麦斯威餐厅":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
        
       this.setData({
         pingdan:list4
       })
       var that=this
       clearInterval(that.data.Loadingtime);
        that.setData({
          Loadingtime:null
        })
      break;
      
      case "银泉食堂":
      
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })
       var that=this
    clearInterval(that.data.Loadingtime);
     that.setData({
       Loadingtime:null
     })
      break;
      case "留学生食堂":
        var zhong=this.data.zhong
        this.setData({
          pingdan:zhong
        })
        var list3=this.data.pingdan
        console.log(list3)
        var list4=[];
        for(var i=0;i<list3.length;i++){
          var string = list3[i].location;
          if(string.indexOf(grade_name)>=0){
            list4.push(list3[i]);
          }
        }
      
       this.setData({
         pingdan:list4
       })
       var that=this
       clearInterval(that.data.Loadingtime);
        that.setData({
          Loadingtime:null
        })
      break;
      case "位置":
       var zhong=this.data.zhong
       this.setData({
         pingdan:zhong
       })
       var that=this;
    var db=wx.cloud.database();
    var tp=[];
    that.setData({
      Loadingtime:setInterval(() => {
        tp=[];
        db.collection('tasklist').get().then(res=>{
          console.log(res.data)
          res.data.forEach(item=>{
            tp.unshift(item.task);
          })
          console.log(tp)
        });
         this.setData({
           pingdan:tp,
           zhong:tp
         })
        
      }, 5000)

  })
    db.collection('tasklist').get().then(res=>{
      res.data.forEach(item => {
        tp.unshift(item.task);
      });
    });
     this.setData({
       pingdan:tp,
       zhong:tp
     })
     console.log(this.data.pingdan)
      
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
          pingdan:zhong
        })
        var list=this.data.pingdan
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
           pingdan:list
         })
       }else{
         this.setData({
           pingdan:list2
         })
       }
     
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this;
    const db=wx.cloud.database();
    var tp=this.data.tp;
  
    
    db.collection('tasklist').get().then(res=>{
      res.data.forEach(item => {
        tp.unshift(item.task);
      });
    });
     this.setData({
       pingdan:tp,
       zhong:tp
     })
     console.log(this.data.pingdan)
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that=this;
    const db=wx.cloud.database();
    var tp=[];
    db.collection('tasklist').get().then(res=>{
      res.data.forEach(item => {
        tp.unshift(item.task);
      });
    });
    this.setData({
       pingdan:tp,
       zhong:tp
     });
    that.setData({
      Loadingtime:setInterval(() => {
        db.collection('tasklist').get().then(res=>{
          tp=[];
          res.data.forEach(item => {
            tp.unshift(item.task);
          });
          console.log(tp)
        });
         this.setData({
           pingdan:tp,
           zhong:tp
         })
      }, 5000)
  })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    var that=this
    clearInterval(that.data.Loadingtime);
     that.setData({
       Loadingtime:null
     })
     console.log(that.data.Loadingtime)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload:function() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    var db=wx.cloud.database();
    var tp=[];
    db.collection('tasklist').get().then(res=>{
      console.log(res)
      res.data.forEach(item => {
        tp.unshift(item.task);
      }); 
      console.log("刷新成功")
      this.setData({
        pingdan:tp,
        zhong:tp
      })
     
    });
     
     
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