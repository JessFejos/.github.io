// Event for when the form is submitted
$('form').on('submit', function (event) {
  event.preventDefault();
  var userName = $('#name').val();
  var email = $('#email').val();

  if (userName.length === 0) {
    $('#FirstName').addClass('error');
    $('#name-error-message').fadeIn(300);
  } else {
    $('#name').removeClass('error');
    $('#name-error-message').fadeOut(300);
  }

  if (email.length === 0) {
    $('#email').addClass('error');
    $('#email-error-message').fadeIn(300);
  } else {
    $('#email').removeClass('error');
    $('#email-error-message').fadeOut(300);
  }

});
