// for hamburger menu
let hamburgerToggle1 = document.querySelector("#hamburger-toggle-open");
let hamburgerToggle2 = document.querySelector("#hamburger-toggle-close");
let hamburgerContent = document.querySelector("#hamburger-content");

hamburgerToggle1.addEventListener("click", hamburgerMenu);
hamburgerToggle2.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
	console.log("Sudah ke sini Bang");

	hamburgerToggle1.classList.toggle("menu_hamburger__toggle--active");
	hamburgerToggle2.classList.toggle("menu_hamburger__toggle--active");
	hamburgerContent.classList.toggle("menu_hamburger__content--active");

	document.querySelector("html").classList.toggle("overflow_hidden");
	document.querySelector("body").classList.toggle("overflow_hidden");
}
