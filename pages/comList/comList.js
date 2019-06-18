// pages/comLIst/comList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        comList:[
            'SwipeRefreshButton',
            'FloatingButton',
            'BottomBar',
            'ViewPage',
            'StackView'
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
                url = 'bottomBar';
                nav(url); break;
               break;
          
            case 3:
                url = 'viewPage';
                nav(url); break;
            case 4:
                url = 'StackView';
                nav(url); break;
            default :
                break;
                
        }
    }

})