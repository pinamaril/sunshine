/* update text year */
window.addEventListener("load", function () {
	const dateNow = new Date();
	const yearNow = dateNow.getFullYear();
	let yearText = document.querySelector("#footer-copyright-year");

	yearText.innerHTML = yearNow;
});
