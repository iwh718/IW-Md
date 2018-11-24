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
        ani_load: {}, //刷新动画
    },

    /**
     * 组件的方法列表
     */
    methods: {
        __initLoading() {
            this.ani_load = wx.createAnimation({
                duration: 2000,
                timingFunction: 'case'
            });
        },//初始化
        __startLoading() {
            console.log(2);
            this.ani_load.translate(0, 100).rotate(760).step(1000);
            this.ani_load.rotate(3600).step(2000);
            this.setData({
                ani_load: this.ani_load.export(),

            });
        },//开始刷新
        __stopLoading() {
            this.ani_load.translate(0, -100).rotate(360).step(1000);
            console.log(1);
            this.setData({
                ani_load: this.ani_load.export(),

            });
        },//停止刷新
    },

})