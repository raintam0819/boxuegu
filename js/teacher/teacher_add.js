define(['aside', 'nprogress', 'jquery', 'jqueryCookie'], function (undefined, nprogress, $, undefined) {
	(function () {
		console.log($.cookie('teacherInfo').split(','));
		var teacherInfo=$.cookie('teacherInfo').split(',');
		console.log(teacherInfo)

		//将cookie里获取的资料渲染到页面上面
		$('#input-name').val(teacherInfo[1]);
		$('#date').val(teacherInfo[3]);

		//添加添加时间,点击时发送ajax请求去后台保存资料
		$('.pull-right').on('click',function(){
			$.ajax({
				type:'post',
				url:'/v6/teacher/add',
				data:{
					tc_name:'谭泽栋',
					tc_pass:'123456',
					tc_join_date:'2017-01-01',
					tc_type:1,
					tc_gender:0
				},
				success:function(data){
					console.log(data)
				}
			})
		})
			nprogress.done();
	})()
});
