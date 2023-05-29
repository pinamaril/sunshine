/* play video youtube */
document
	.querySelector("#hero-video-poster")
	.addEventListener("click", function () {
		let poster = document.querySelector("#hero-video-poster");
		let iframe = document.querySelector("#hero-video-iframe");

		poster.style.display = "none";
		iframe.src += "?autoplay=1";
	});
