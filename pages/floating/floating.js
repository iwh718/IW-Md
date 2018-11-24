// pages/floating/floating.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       
        ani_undo:{},//undo动画
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       this.iw_hi = this.selectComponent("#iw_hi");
       this.iw_hi.__setTips('悬浮按钮与提示')
    },
    toShow(){
         this.ani_undo = wx.createAnimation({
             duration:1000,
             timingFunction:'case'
         });
         this.ani_undo = this.ani_undo.translate(0,-100).step();
      
        this.setData({
            floatingFlag:false,
            ani_undo:this.ani_undo.export()
        });
        this.ani_undo = this.ani_undo.translate(0, 100).step();
        let _this = this;
        setTimeout(function(){
            _this.setData({
                ani_undo: _this.ani_undo.export()
            });
            console.log(_this.data.floatingFlag)
        },2000)
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

    }
})