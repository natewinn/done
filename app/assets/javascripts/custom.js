$(function(){

  // Show New Modal //
  $('.reveal-new').on('click', function () {
  
    $('#bottom-new').show( 'slow' );
  
    $('#top').show( 'slow' );
  });

  // Hide New Modal //
  $('.hide-new').on('click', function () {
  
    $('#bottom-new').hide( 'slow' );
  
    $('#top').hide( 'slow' );
  });

  // // Show Update Modal //
  // $('.reveal-update').on('click', function () {
  
  //   $('#bottom-update').show( 'slow' );
  
  //   $('#top').show( 'slow' );
  // });

  // // Hide Update Modal //
  // $('.hide-upate').on('click', function () {
  
  //   $('#bottom-update').hide( 'slow' );
  
  //   $('#top').hide( 'slow' );
  // });

  // Add New Task //
  $('#new_task').on('ajax:complete', function(event, data, status, xhr) {
      var item = $.parseJSON(data.responseText),
          name = item.name;
       task_id = item.id;
  $('#task-body').append('<tr><td><a class="btn btn-danger" data-method="delete" href="/tasks/' + task_id + ' " rel="nofollow">Delete</a></td><td>' + name + '</td><td><input id="complete" type="checkbox" value="0"></td></tr>');
  });

  // // Update Existing Task //
  // $('#new_task').on('ajax:complete', function(event, data, status, xhr) {
  //   var item = $.parseJSON(data.responseText),
  //    item_li = document.getElementById(task.id);
  //    task_id = item.id;
  // $(item_li).update('<tr><td><a class="btn btn-danger" data-method="delete" href="/tasks/' + task_id + ' " rel="nofollow">Delete</a></td><td>' + name + '</td><td><input id="complete" type="checkbox" value="0"></td></tr>');
  // });

  // Delete Existing Task //
  $(document).ready(function() {
  $('#load').hide();
});


  $('#deletion').click(function() {
      
    var row = $(this).parents('tr');
    task_id = $(this).attr('data-task-id');
    
    $.ajax({
      url: '/tasks/' + task_id,
      type: 'post',
      dataType: 'json',
      data: {'_method':'delete'},
       success: function(){
        commentContainer.slideUp('slow', function() {$(this).remove();});
      }
    });
  });

  // Mark Complete Task //
  $(':checkbox').on('click', function() {

    var row = $(this).parents('tr');
    task_id = $(this).attr('data-task-id');

    $.ajax({
      url: "/tasks/" + task_id,
      type: 'PUT',
      data: {
        task: {
          'complete': true
        }
      }
    });
  });
});