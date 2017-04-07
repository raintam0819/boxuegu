define(['jquery','aside','nprogress','template','jqueryCookie'], function($,undefined,nprogress,template,undefined) {
    $.get('/v6/teacher',function(data){
      $('#body').append(template('teacher-list-tpl',data))
      $('.edit').on('click',function(){
            console.log($(this).parent().siblings());
            var trArr = $(this).parent().siblings();
            var textArr=[];
          //  var textArr= trArr.map(function(i,v){
          //     return  v.innerText;
          //   });
            // console.log(trArr)
            for(var i=0;i<trArr.length;i++){
                   textArr[i]=trArr[i].innerText;
            }
            console.log(textArr)
            // var result =JSON.stringify(textArr)
            var result =textArr.join();
            console.log(result)
            // console.log(JSON.parse(textArr))

            //把结果放进cookie
            $.cookie('teacherInfo',result,{
              expires:7,
              path:'/'              
            })
      })
    })
    nprogress.done();
});
