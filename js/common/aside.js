define(['jquery', 'jqueryCookie', 'template'], function ($, undefined, template) {
    //获取登录信息后加载用户图片和名字
    (function () {
        var userInfoObj = JSON.parse($.cookie('userInfo'));
        var prifileTpl = '<div class="profile">' +
            '<div class="avatar img-circle">' +
            '<img src={{ tc_avatar? tc_avatar : "/img/default.png"}}>' +
            '</div>' +
            '<h4>{{ tc_name }}</h4>' +
            '</div>';

        var userInfoRender = template.compile(prifileTpl);
        var userInfoHTML = userInfoRender(userInfoObj);

        $('.aside').prepend(userInfoHTML)
    })();

    //打开课程管理的隐藏分支
    (function () {
        $('.slide').on('click', function () {
            $(this).next().slideToggle();
        })
    })();

    //为选定的a标签添加高亮效果
    (function () {
        var pathName = location.pathname;
        var pathHref = {
            '/html/teacher/teacher_add.html': '/html/teacher/teacher_list.html',
        };
       var aHref=pathHref[pathName] ? pathHref[pathName] : pathName;
       $('.navs a').removeClass('active').filter('[href="' + aHref + '"]').addClass('active');
       var courseManageList = ['/html/course/course_topic.html','/html/course/course_category.html','/html/course/course_add.html','/html/course/course_list.html'];
       for(var i =0;i<courseManageList.length;i++){
        //    遍历数组查看是否是课程管理里面的分支,如果是的话,就将课程隐藏分支显示
        if(pathName==courseManageList[i]){
           $('.slide').next().show();
            return;            
        }
       }
    })()
})