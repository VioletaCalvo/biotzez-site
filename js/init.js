(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    Materialize.updateTextFields();
    // $('#textarea').val('New Text');
    $('#textarea').trigger('autoresize');

  }); // end of document ready
})(jQuery); // end of jQuery name space

// $(document).ready(function() {
//
//
// });
