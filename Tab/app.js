"use strict";

let links = document.querySelectorAll(".link-tab");
for(let link of links){
	link.addEventListener("click", linkTrigger);
}

function linkTrigger(e){
	
		// desactivate active links
		let list = e.currentTarget.closest("ul");
		let activeLinks = list.querySelectorAll(".link-tab--active");
		for(let activeLink of activeLinks){
			activeLink.classList.remove("link-tab--active");
		}

		// hide tabs content 
		let links = list.querySelectorAll(".link-tab");
		for(let linkTab of links){
			let tabId = linkTab.getAttribute("href");
			let tabElement = document.querySelector(tabId);
			tabElement.classList.add("hidden");
		}

		// active current button
		let clickedLink = e.currentTarget;
		clickedLink.classList.add("link-tab--active");	

		// show content of current tab
		let contentId = clickedLink.getAttribute("href");
		let content = document.querySelector(contentId);
		content.classList.remove("hidden");

}








