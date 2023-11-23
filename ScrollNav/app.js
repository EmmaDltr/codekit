"use strict";

let oldScrollY = 0;
let offsetY = 250;
let navigation = document.querySelector(".nav");

window.addEventListener('scroll', function(e) {
  if(oldScrollY > window.scrollY || window.scrollY < offsetY){
    navigation.classList.remove("nav--hidden");
  }else{
    navigation.classList.add("nav--hidden");
  }
  oldScrollY = window.scrollY;
});





