// pages/StackView/StackView.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        menuFlag: true, //菜单
        //view数据
        stacks: [{
                "class": "red",
                "url": "../res/stack1.jpg",
                "title": "哆啦A梦，童年的记忆"
            },
            {
                "class": "blue",
                "url": "../res/stack2.jpg",
                "title": "也许时光，真的不去反"
            },
            {
                "class": "pink",
                "url": "../res/stack3.jpg",
                "title": "为了，那个梦，努力吧"
            }
        ]
    },
    goBack() {
        wx.navigateBack()
    },
    //调出菜单
    showSlide(e) {
        if (this.data.menuFlag == true) {
            this.setData({
                menuFlag: false
            })
        } else {
            this.setData({
                menuFlag: true
            })
        }
    }


})