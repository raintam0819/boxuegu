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
})