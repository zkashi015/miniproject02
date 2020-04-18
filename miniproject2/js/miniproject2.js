$(document).ready(function() {

 var audio = document.createElement('audio');
     audio.setAttribute('src', 'audio/seagulls.mp3');

$(".button").click(function() {
	$(this).fadeOut("fast");
	$(".background").fadeIn("fast");
	$("body").css("background-color");
      audio.play();
	$(".trees").fadeIn("fast");
	$(".birds").fadeIn("fast");

});
});