// utils/wave/waves.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
       urlItems:[],
       hideFlag:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        __toggle(){
            if(this.data.hideFlag){
                this.setData({
                    hideFlag:false
                })
            }else{
                this.setData({
                    hideFlag:true
                })
            }
        },
        __hide(){
            this.setData({
                hideFlag:true
            })
        },
        toUrl:function(e){
            wx.navigateTo({
                url: '../about/about',
            })
        },//
        toIndex:function(e){
            wx.navigateTo({
                url: '../comList/comList',
            })
        },//
    },

})
