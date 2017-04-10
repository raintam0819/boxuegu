define(['jquery', 'jqueryCookie', 'common', 'aside', 'header', 'nprogress', 'template', 'jqueryForm'], function ($, undefined, common, undefined, undefined, nprogress, template, undefined) {

    console.log(common.parseSearch())
    if (common.parseSearch().cg_id != null) {
        //通过id发送ajax请求,获取内容之后通过模板引擎渲染到页面上
        $.get('/v6/category/edit', { cg_id: common.parseSearch().cg_id }, function (data) {
            if (data.code == 200) {
                render(data.result)
            }
        })
    }
    //当页面没有id传入的时候,传入一个空对象并渲染在页面上
    // data.result.top
    else {
        $.get('/v6/category/top', function (data) {
            if (data.code == 200) {
                render({top:data.result})
            }
        })

    }

    // 渲染的方法
    function render(data) {
        $('.category-add').html(template('course-category-edit-form', data));
        $('#category-form').ajaxForm({
            url: '/v6/category/modify',
            type: 'post',
            success: function (data) {
                console.log(data)
                if (data.code == 200) {
                    location.href = '/html/course/course_category.html'
                }
            }
        })
    }
    nprogress.done();
});
