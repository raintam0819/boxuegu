define(['aside', 'nprogress', 'jquery', 'jqueryCookie', 'template', 'datepicker', 'datepickerCN', 'jqueryForm', 'header'], function (undefined, nprogress, $, undefined, template, undefined, undefined, undefined, undefined) {

	var search = location.search;
	var searchArr = search.slice(1).split('&');
	var searchObj = {}, temp;
	for (var i = 0; i < searchArr.length; i++) {
		temp = searchArr[i].split('=')
		searchObj[temp[0]] = temp[1]
	}
	if (searchObj.hasOwnProperty('tc_id')) {
		teacherEdit();
	} else {
		teacherAdd();
	}


	// 新增老师
	function teacherAdd() {
		$('.teacher').html(template('teacher-add-edit', {}));
		initDatepicker();
		$('#teacher-add-edit-form').ajaxForm(function (data) {
			console.log(data)
			location.href = '/html/teacher/teacher_list.html'
		})
	}


	//编辑老师
	function teacherEdit() {
		$.get('/v6/teacher/edit', { tc_id: searchObj.tc_id }, function (data) {
			$('.teacher').html(template('teacher-add-edit', data.result))
			initDatepicker();
		})
		$(document).on('submit', '#teacher-add-edit-form', function () {
			console.log(123)
			console.log($(this))
			$.post('/v6/teacher/update', $(this).serialize(), function (data) {
				//发送完请求之后跳转回教室列表
				location.href='/html/teacher/teacher_list.html'
			})
			return false;
		})
	}

	//初始化日期插件
	function initDatepicker() {
		$('#date').datepicker({
			endDate: new Date(),
			language: 'zh-CN',
			format:'yyyy-mm-dd'
		});
	}

	nprogress.done();

});
