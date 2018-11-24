//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  //事件处理函数
  comList:function(){
      wx.navigateTo({
          url: '../comList/comList',
      })
  },//
  onLoad: function () {
    
    }
  ,
  onPullDownRefresh(e){
    
  }
 
  
})
