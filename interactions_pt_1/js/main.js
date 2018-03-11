
// dropdown hide
$('#dropdownMenu').hide();

//when openDropdown clicked
//slide toggale
$('#openDropdown'.on('click' function() {
  $('#dropdownMenu').slidetoggle();
});

$('#answer2').hide();

$('#question2').on('click', function(){
  $('#answer2').slidedown(300);
  $('#answer1').slideUp(300);

  $('li').removeClass('active');
  $('#question2').addclass('active')

});

$('#question1').on('click', function () {
	$('#answer1').slideDown();
	$('#answer2').slideUp();

	$('li').removeClass('active');
	$('#question1').addClass('active');
});

// button is Yellow click
$('#showYellowCircles').on('click', function () {
  $('.blue').hide();
  $('.yellow').fadeIn(200);
  });
	// hide circles blue
	// fade in circles yellow


// button Blue click circles blue
$('#showBlueCircles').on('click', function () {
	$('.yellow').hide();
  $('.blue').fadeIn(200);
  });
  // hide yellow
	// fade circles blue
