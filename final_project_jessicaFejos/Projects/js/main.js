// Hide the text #dropdown
$('#dropdownMenu').hide();

// id #openDropdown is clicked, slide toggle #dropdown
$('#openDropdown').on('click', function () {
	$('#dropdown').slideToggle();
});
