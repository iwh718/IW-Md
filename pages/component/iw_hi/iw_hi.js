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
        tips:'iw小组件：iwh'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        __setTips(e){
            this.setData({
                tips:e
            })
        },
    },

})
