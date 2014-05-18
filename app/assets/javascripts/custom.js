$(function(){

	$('.modal-reveal').on('click', function () {
	$('#bottom').show();
	$('#top').show();
	});

	$('.modal-hide').on('click', function () {
	$('#bottom').hide();
	$('#top').hide();
	});

	// $("#task-check").bind('change', function(){
	// 	if (this.checked){
	// 		$.ajax({
	// 			url: '/tasks/'+this.value+'/toggle',
	// 			type: 'POST',
	// 			data: '{"complete": this.check}
	// 		});
	// 	}
	// });
});