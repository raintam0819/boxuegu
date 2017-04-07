define(['jquery','jqueryCookie','nprogress','loading'], function ($,undefined,nprogress,undefined) {
    //验证cookie是否已经登录
    (function(){     
         
        if($.cookie('PHPSESSID')){

            location.href='/'
        }
    })();

    //验证登录信息
    (function () {
        $('#login').on('submit', function () {
            var data1 = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: '/v6/login',
                data: data1,
                success: function (data) {
        
                    if (data.code == 200) {
                        $.cookie('userInfo',JSON.stringify(data.result),{ path:'/'});
                        location.href = '/';
                    }
                },
                error: function (data) {
                    alert(data.msg)
                }
            })

            //阻止默认的表单提交刷新
            return false;
        })
    })()

    nprogress.done();
});
