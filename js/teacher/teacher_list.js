define(['bootstrap', 'jquery', 'aside', 'nprogress', 'template', 'jqueryCookie','header'], function (undefined, $, undefined, nprogress, template, undefined,undefined) {

  //页面请求发送ajax,渲染页面
  (function () {
    $.get('/v6/teacher', function (data) {
      $('#body').append(template('teacher-list-tpl', data))
    })
  })();

  //点击查看按钮,弹出模态框
  (function(){
    $(document).on('click','.teacher-view',function(){
      console.log($(this).data('teacher-id'))
      // 通过id发送ajax请求并渲染到页面中
      $.get('/v6/teacher/view',$(this).data('teacher-id'),function(data){
          $('#teacherModal').html(template('teacher-view-modal',data.result));
      })
    })
  })();

  //点击注销启用按钮
  (function(){
    $(document).on('click','.teacher-handle',function(){
        var self = this;
        $.post('/v6/teacher/handle',{
          tc_id:$(self).data('teacher-id'),
          tc_status:$(self).data('teacher-status')
        },function(data){
            if(data.result.tc_status==0){
              $(self).data('teacher-status',0)
              $(self).html('注销')
            }else{
              $(self).data('teacher-status',1)            
               $(self).html('启用')              
            }
        })
    })
  })()
  nprogress.done();
});
