define(['jquery','jqueryCookie','common','aside','header','nprogress','template'], function($,undefined,common,undefined,undefined,nprogress,template) {
	// 获取数据渲染模板在页面上
    $.get('/v6/category',function(data){
        if(data.code==200){
           $('#course-category-list').append(template('course-category-list-tpl',data));
        }
    })

    



    nprogress.done();
});
