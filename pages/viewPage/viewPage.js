// pages/viewPage/viewPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nowTab:0,//默认tab页
        selected:0,//默认选中页
        //tab页标题
        tabs:[
            "PHP",
            "JavaScript",
            "Kotlin"
        ],
        //viewpage页数据
        vpgs:[
            "PHP是世界上最吼的语言",
            "JS,永不言弃",
            "kt,加油"
        ]
    },


    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    
    },
    switchPagetch(e){
        this.syncIndex(e.currentTarget.dataset.index)  
       
    },
    switchTab(e){
        this.syncIndex(e.detail.current)   
    },
    syncIndex(index){
        this.setData({
            nowTab: index,
            selected: index
        })
    }
})