define(['jquery','jqueryCookie','common','aside','header','nprogress','template'], function($,undefined,undefined,undefined,undefined,nprogress,template) {
    // 为template添加helper方法,相当于过滤器
    template.helper('random',function(source,param){
        var params = param.split(', ');
        return Math.ceil(Math.random()*(params[1]-params[0])+params[0]);
    })

    // 渲染模板并加载到页面中
    $.get('/v6/course',function(data){
        $('.courses').append(template('course-list-tpl',data));
    })


	nprogress.done();
});
