// pages/bottomBar/bottomBar.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        floatText:"+",
        floatAnimationData:{},
        currentPos:"center"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.iw_hi = this.selectComponent("#iw_hi");
        this.iw_hi.__setTips('底部栏')
        this.ani_fab = wx.createAnimation({
            duration: 300,
            timingFunction: 'ease'
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
       

        
    },
    changePos(){

        if(this.data.currentPos === "center"){
            this.ani_fab.scale(.6, .6).translate(100, 0).step();
           this.ani_fab.scale(1,1).step();
            this.setData({
                floatText:"<",
                currentPos:"right",
                floatAnimationData: this.ani_fab.export()
            });
        }else if(this.data.currentPos === "right"){
            this.ani_fab.scale(.6, .6).translate(0, 0).step();
            this.ani_fab.scale(1, 1).step();
            this.setData({
                floatText:"+",
                currentPos:"center",
                floatAnimationData: this.ani_fab.export()
            });
        }
       
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