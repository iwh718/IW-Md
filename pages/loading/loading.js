// pages/loading/loading.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
        ani_load:{},//刷新动画
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.iw_hi = this.selectComponent("#iw_hi");
        this.iw_load = this.selectComponent("#iw_load");
        this.iw_hi.__setTips('下拉刷新组件');
        this.ani_load = wx.createAnimation({
            duration:2000,
            timingFunction:'case'
        });

    },


    onPullDownRefresh(e){
          wx.stopPullDownRefresh();
          this.ani_load.translate(0,100).rotate(760).step(1000);
          this.ani_load.rotate(3600).step(2000);
          this.setData({
              ani_load:this.ani_load.export(),
          
          });
         

    },
    stopLoading(){
       // this.iw_load.__initLoading();
        //this.iw_load.__startLoading();
        this.ani_load.translate(0,-100).rotate(360).step(1000);
        this.setData({
            ani_load: this.ani_load.export(),

        });
    },


})