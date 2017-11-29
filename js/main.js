var current_image = 1;

function next_image() {
	console.log('entering next_image');
	current_image = current_image + 1;
	if (current_image > 6) {
		current_image = 1;
	}
	set_image();
}

function previous_image() {
	console.log('entering previous_image');
	current_image = current_image - 1;
	if (current_image < 1) {
		current_image = 6;
	}
	set_image();
}



function change_image() {
	current_image = parseInt($(this).attr('id'));
	set_image();
}

function set_image() {
	$('.carousel').fadeOut( "fast", function() {
		$('.carousel').html('<img class="slide" src="images/image-' + current_image + '.jpg">');	
	});
	$('.carousel').fadeIn("fast");
	set_current();
}

function set_current() {
	$('#1').removeClass('current');
	$('#2').removeClass('current');
	$('#3').removeClass('current');
	$('#4').removeClass('current');
	$('#5').removeClass('current');
	$('#6').removeClass('current');
	$('#' + current_image).addClass('current');
}

function image_loop() {
	setTimeout(function() {
		next_image();
		image_loop();
		}, 5000);
}

function image_carousel() {
	console.log('entering image_carousel')
	$('#next').on('click', next_image);
	$('#previous').on('click', previous_image);
	$('.bottom-button').on('click', change_image)
	image_loop();
}


$(document).ready(function() {

	image_carousel();

});