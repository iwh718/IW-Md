// pages/comLIst/comList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        comList:[
            '下拉刷新组件',
            '悬浮按钮组件',
          
            '表格组件',
            '轻提示组件',
            'tabBar组件',
            '波浪背景组件'
        ]
    },  
    toShow(e){
        
        console.log(e)
        let nav = (e)=>{
            wx.navigateTo({
                url: '../' +e + '/' + e,
            })
        };
        let url = '';
        switch(e.currentTarget.dataset.id){
            case 0:
                url = 'loading';
                nav(url);break;
            case 1:
                url = 'floating';
                nav(url);break;
            case 2:
                url = 'table';
                nav(url);break;
            case  3:
                url = 'tips'
                nav(url);break;
            case 4:
                let tabBar = this.selectComponent("#tabBar");
                tabBar.__toggle();
               break;
            case 5:
                url = 'about';
                nav(url);break;
            default :
                break;
                
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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