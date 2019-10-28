(function($) {
  'use strict';

  //Var declaration
  var participant_array = new Array();

  ////////////////////////////////
  //Add Participant to table
  ////////////////////////////////
  $('#add_btn').click(function() {
    var fname,
      lname,
      dob,
      cat,
      bow,
      table_counter = 0;
    fname = $('#fname').val();
    lname = $('#lname').val();
    dob = $('#dob').val();
    cat = $('#age_cat').val();
    bow = $('#bow').val();

    participant_array.push({ fname, lname, dob, cat, bow });

    $('#fname').val('');
    $('#lname').val('');
    $('#dob').val('');
    $('#age_cat').val(0);
    $('#bow').val(0);

    $('#participants_container').removeClass('d-none');
    $('#participant_table').empty();
    participant_array.forEach(element => {
      table_counter++;
      $('#participant_table').append(
        '<tr id=' +
          table_counter +
          '><td>' +
          table_counter +
          ')' +
          element.fname +
          '</td><td>' +
          element.lname +
          '</td><td>' +
          element.dob +
          '</td><td>' +
          element.cat +
          '</td><td>' +
          element.bow +
          '</td><td class="text-center"><button type="button" class="btn btn-danger del_btn"><i class="fas fa-times"></i></button></td></tr>'
      );
    });
  });

  ///////////////////////////////////
  //Clears data when modal is closed
  ///////////////////////////////////
  $('#onlineRegistrationModal').on('hidden.bs.modal', function() {
    participant_array = new Array();
    table_counter = 0;
    $('#participants_container').addClass('d-none');
    $('#participant_table').empty();
  });

  ////////////////////////////////////
  //Removes table row
  ///////////////////////////////////
  $('#participant_table').on('click', '.del_btn', function() {
    var $row = jQuery(this).closest('tr');
    var id = $row.attr('id');
    participant_array.splice(id - 1, 1);
    $row.remove();
    var table_counter = 0;

    $('#participant_table').empty();
    if (participant_array.length > 0) {
      participant_array.forEach(element => {
        $('#participant_table').append(
          '<tr id=' +
            ++table_counter +
            '><td>' +
            table_counter +
            ')' +
            element.fname +
            '</td><td>' +
            element.lname +
            '</td><td>' +
            element.dob +
            '</td><td>' +
            element.cat +
            '</td><td>' +
            element.bow +
            '</td><td class="text-center"><button type="button" class="btn btn-danger del_btn"><i class="fas fa-times"></i></button></td></tr>'
        );
      });
    } else {
      $('#participants_container').addClass('d-none');
    }
  });

  ///////////////////////////////////
  //Registers team
  ///////////////////////////////////
  $('#reg_form').on('submit', function() {
    if (participant_array.length === 0) {
      alert('Please add participants to your team.');
    } else {
      var conf = confirm('Are you sure with your entry?');
      if (conf) {
        console.log($('#assoc').val());
        console.log($('#num_offical').val());
        console.log(participant_array);
      }
    }
  });
})(jQuery); // End of use strict
