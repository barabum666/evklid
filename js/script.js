document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#burger").addEventListener("click", function () {
		document.querySelector("#burger").classList.toggle("burger-active");
		document.querySelector(".navigation__list").classList.toggle("navigation__list-active");
	});

	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: false,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},

		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	document.querySelectorAll(".how__steps-link").forEach(function (stepsLink) {
		stepsLink.addEventListener("click", function (event) {
			const path = event.currentTarget.dataset.path;

			document.querySelectorAll(".how__steps-link").forEach(function (el) {
				el.classList.remove("steps-link-active");
			});

			document.querySelectorAll(".how__card").forEach(function (howCard) {
				howCard.classList.remove("how__card-active");
			});

			stepsLink.classList.add("steps-link-active");

			document.querySelector(`[data-target="${path}"]`).classList.add("how__card-active");
		});
	});
});

$(function () {
	$("#accordion").accordion({
		collapsible: true,
		active: false,
		heightStyle: "content"
	});
});