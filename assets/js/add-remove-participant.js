(function($) {
  'use strict';

  //Var declaration
    var participant_array = new Array();
    var official_array = new Array();
    var api_path = 'https://wafoceaniaregistration.azurewebsites.net/api';

  ////////////////////////////////
  //Authenticate
  ////////////////////////////////
    $('#login_btn').click(function () {
        $.ajax({
            method: 'POST',
            url: api_path + '/account/authenticate',
            crossDomain: true,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            data: { username: $('#login').val(), password: $('#pass').val() },
            success: function (data) {
                $('#pass').val('');

                if (data.authenticated) {
                  $('#login_form').hide();
                  $('#reg_form').show();
                  $('#register_btn').prop('disabled', false);
                  $('#assoc').val(data.country);
                  $('#modal_footer').show();

                  $.ajax({
                      method: 'GET',
                      url: api_path + '/registration/GetRegistrations',
                      crossDomain: true,
                      dataType: "json",
                      xhrFields: {
                          withCredentials: true
                      },
                      success: function (data) {
                        $('#num_offical').val(data.num_official);
                        participant_array = data.participant_array;
                        official_array = data.official_array;

                        if (typeof data.official_array == 'undefined' || data.official_array == null) {
                          official_array = new Array();
                        }

                        if (data.participant_array.length) {
                          $('#participants_container').removeClass('d-none');

                          var table_counter = 0;

                          participant_array.forEach(element => {
                            table_counter++;
                            $('#participant_table').append(
                              '<<tr id=' +
                              table_counter +
                              '><td>' +
                              table_counter +
                              '</td><td>' +
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
                        }

                        if (typeof official_array !== 'undefined' && official_array.length > 0) {
                          $('#officials_container').removeClass('d-none');

                          var official_counter = 0;

                          official_array.forEach(element => {
                            table_counter++;
                            $('#official_table').append(
                              '<<tr id=' +
                              official_counter +
                              '><td>' +
                              official_counter +
                              '</td><td>' +
                                element.fname +
                                '</td><td>' +
                                element.lname +
                                '</td><td>' +
                                element.dob +
                                '</td><td>' +
                                element.cat +
                                '</td><td class="text-center"><button type="button" class="btn btn-danger del_off_btn"><i class="fas fa-times"></i></button></td></tr>'
                            );
                          });
                        }
                      }
                  });
                }
            }
        });
    });

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

    if (fname && lname && dob && cat && bow) {
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
          '<<tr id=' +
          table_counter +
          '><td>' +
          table_counter +
          '</td><td>' +
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
      alert('All participant fields must be filled.');
    }

    $('#register_btn').prop('disabled', false);
  });

  $('#add_official_btn').click(function() {
    var fname,
      lname,
      dob,
      cat,
      table_counter = 0;
    fname = $('#ofname').val();
    lname = $('#olname').val();
    dob = $('#odob').val();
    cat = $('#off_cat').val();

    if (fname && lname && dob && cat && bow) {
      official_array.push({ fname, lname, dob, cat });

      $('#ofname').val('');
      $('#olname').val('');
      $('#odob').val('');
      $('#off_cat').val(0);

      $('#officials_container').removeClass('d-none');
      $('#officials_table').empty();
      official_array.forEach(element => {
        table_counter++;
        $('#officials_table').append(
          '<<tr id=' +
          table_counter +
          '><td>' +
          table_counter +
          '</td><td>' +
            element.fname +
            '</td><td>' +
            element.lname +
            '</td><td>' +
            element.dob +
            '</td><td>' +
            element.cat +
            '</td><td class="text-center"><button type="button" class="btn btn-danger del_off_btn"><i class="fas fa-times"></i></button></td></tr>'
        );
      });
    } else {
      alert('All official fields must be filled.');
    }

    $('#register_btn').prop('disabled', false);
  });

  ///////////////////////////////////
  //Clears data when modal is closed
  ///////////////////////////////////
  $('#onlineRegistrationModal').on('hidden.bs.modal', function() {
    participant_array = new Array();
    $('#participants_container').addClass('d-none');
    $('#participant_table').empty();

    official_array = new Array();
    $('#officials_container').addClass('d-none');
    $('#official_table').empty();

    $('#login_form').show();
    $('#reg_form').hide();
    $('#register_btn').prop('disabled', true);
    $('#assoc').val('');
    $('#modal_footer').hide();
    $('#modal_alert').hide();
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
            '</td><td>' +
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

    $('#register_btn').prop('disabled', false);
  });

  $('#officials_table').on('click', '.del_off_btn', function() {
    var $row = jQuery(this).closest('tr');
    var id = $row.attr('id');
    official_array.splice(id - 1, 1);
    $row.remove();
    var table_counter = 0;

    $('#officials_table').empty();
    if (official_array.length > 0) {
      official_array.forEach(element => {
        $('#officials_table').append(
          '<tr id=' +
            ++table_counter +
            '><td>' +
            table_counter +
            '</td><td>' +
            element.fname +
            '</td><td>' +
            element.lname +
            '</td><td>' +
            element.dob +
            '</td><td>' +
            element.cat +
            '</td><td class="text-center"><button type="button" class="btn btn-danger del_off_btn"><i class="fas fa-times"></i></button></td></tr>'
        );
      });
    } else {
      $('#officials_container').addClass('d-none');
    }

    $('#register_btn').prop('disabled', false);
  });

  ///////////////////////////////////
  //Registers team
  ///////////////////////////////////
  $('#register_btn').on('click', function() {
    if (participant_array.length === 0) {
      alert('Please add participants to your team.');
    } else {
      var conf = confirm('Are you sure with your entry?');
      if (conf) {
          var registrations =
              {
                  assoc: $('#assoc').val(),
                  num_official: $('#num_offical').val(),
                  participant_array: participant_array,
                  official_array: official_array
              };

          console.log(registrations);

          $.ajax({
              method: 'POST',
              url: api_path + '/registration/SaveRegistrations',
              crossDomain: true,
              dataType: "json",
              xhrFields: {
                  withCredentials: true
              },
              data: { registration: registrations },
              success: function (data) {
                  console.log('yay');
                  $('#modal_alert').show();
                  $('#register_btn').prop('disabled', true);
              }
          });
      }
    }
  });
})(jQuery); // End of use strict
