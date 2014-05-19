$(function(){

	$('.modal-reveal').on('click', function () {
	$('#bottom').show();
	$('#top').show();
	});

	$('.modal-hide').on('click', function () {
	$('#bottom').hide();
	$('#top').hide();
	});

	$('#task_check').on('click', function() {
  alert('clicked');
	});
});