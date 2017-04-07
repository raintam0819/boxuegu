define(['jquery','aside','nprogress','template'], function($,undefined,nprogress,template) {
    $.get('/v6/teacher',function(data){
      console.log(data)
      $('#body').append(template('teacher-list-tpl',data))
    })
    nprogress.done();
});
