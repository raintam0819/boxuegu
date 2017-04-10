define(['jquery'],function($){
    var cookies = document.cookie;
    var cookie = cookies.split('; ');
    var isLogin = false;
    // debugger;
    for(var i = 0;i<cookie.length;i++){
        if(cookie[i].indexOf('PHPSESSID=') === 0) {
            isLogin = true;
            break;
        }
    }
    !isLogin && (location.href='/html/home/login.html');


    // 对外暴露一个对象
    return {

        parseSearch:function(searchName){
            var searchArr=location.search.slice(1).split('&');
            var searchObj={},temp;
            for(var i=0;i<searchArr.length;i++){
                temp=searchArr[i].split('=');
                searchObj[temp[0]]=temp[1];
            }
            return searchName == null? searchObj :searchObj[searchName]
        }
    }
})