"use strict";
const progressBar = document.querySelector(".reading-progress__bar");

if(progressBar) {
	window.addEventListener("scroll", scrollListener);
}

function scrollListener(event) {
	let maxScroll = document.body.scrollHeight - window.innerHeight;
	let currentScroll = window.scrollY;
	let readPercentage = (currentScroll / maxScroll) * 100;
	progressBar.style.width = readPercentage + "%";
}







