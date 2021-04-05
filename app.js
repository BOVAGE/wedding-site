const DAYS = document.getElementById("days");
const HOURS = document.getElementById("hours");
const MINS = document.getElementById("mins");
const SECS = document.getElementById("secs");

let date = "10 Apr 2021";

function formatTime(time) {
	return time < 10? `0${time}`: time;
}

function countdown() {
	countdownDate = new Date(date);
	if (new Date() >= countdownDate)	{
		return;
	}
	let totalSeconds = (countdownDate - new Date()) / 1000;
	let days = Math.floor(totalSeconds / 3600 / 24);
	let hours = Math.floor(totalSeconds / 3600) % 24;
	let minutes = Math.floor(totalSeconds / 60) % 60;
	let seconds = Math.floor(totalSeconds) % 60;
	
	console.log(days, hours, minutes, seconds);
	DAYS.innerHTML = days;
	HOURS.innerHTML = formatTime(hours);
	MINS.innerHTML = formatTime(minutes);
	SECS.innerHTML = formatTime(seconds);
}

setInterval(countdown, 1000);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}