$(function(){

	$('.modal-reveal').on('click', function () {
	
	$('#bottom').show( 'slow' );
	
	$('#top').show( 'slow' );
	
	});

	$('.modal-hide').on('click', function () {
	
	$('#bottom').hide( 'slow' );
	
	$('#top').hide( 'slow' );
	
	});

	$(':checkbox').on('click', function(){

		var row = $(this).parents('tr'),
			task_id = $(this).attr('data-task-id');

		// $(row).hide( "slow" );

		$.ajax({

				url: "/tasks/" + task_id,
				type: 'PUT',
				data: {
					task: {
						"complete": true
					}
				}

		});				

	});

});