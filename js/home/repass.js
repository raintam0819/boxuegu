define(['bootstrap', 'jquery', 'aside', 'nprogress', 'template', 'jqueryCookie','header','jqueryForm'], function(undefined, $, undefined, nprogress, template, undefined,undefined,undefined) {
    //检测form表单的提交事件,然后发送ajax请求
    $('#reset-pass').ajaxForm(function(data){
        if(data.code==200){
            // 点击修改时候,触发退出事件
            $('logOut').trigger('click')
        }
    })



    //上面的进度条
    nprogress.done();
});
