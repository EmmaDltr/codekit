"use strict";

//const = type de variable spécial qui ne change jamais
const  menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', menuOpen);
function menuOpen() {
	document.body.classList.toggle('menu--open');

}

